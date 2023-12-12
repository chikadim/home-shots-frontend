import { useState, useEffect } from "react";
import styles from "../../styles/Post.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";
import { MoreDropdown } from "../../components/MoreDropdown";
import Tooltip from "@mui/material/Tooltip";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { red } from "@mui/material/colors";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import RestaurantMenuOutlinedIcon from "@mui/icons-material/RestaurantMenuOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import LocationCreateForm from "../locations/LocationsCreateForm";
import Locations from "../locations/Locations";
import { axiosReq } from "../../api/axiosDefaults";
import appStyles from "../../App.module.css";
import useAlert from "../../hooks/useAlert";

const Post = (props) => {
  const {
    id,
    owner,
    profile_id,
    profile_image,
    comments_count,
    likes_count,
    like_id,
    title,
    content,
    image,
    updated_at,
    postPage,
    setPosts,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const history = useHistory();
  const [locations, setLocations] = useState({ results: [] });
  const [locationOpen, setLocationOpen] = useState(false);

  const { setAlert } = useAlert();

  const handleEdit = () => {
    history.push(`/posts/${id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/posts/${id}/`);
      history.push("/");
      setAlert("homeShot deleted successfully!", "success");
    } catch (err) {
      setAlert(err.message, "error");
    }
  };

  const handleLike = async () => {
    try {
      const { data } = await axiosRes.post("/likes/", { post: id });
      setAlert("Thanks you liked this homeShot!", "success");
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          return post.id === id
            ? {
                ...post,
                likes_count: post.likes_count + 1,
                like_id: data.id,
              }
            : post;
        }),
      }));
    } catch (err) {
      setAlert(err.message, "error");
    }
  };

  const handleUnlike = async () => {
    try {
      await axiosRes.delete(`/likes/${like_id}/`);
      setAlert("What a shame you have unliked this homeShot", "success");
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          return post.id === id
            ? {
                ...post,
                likes_count: post.likes_count - 1,
                like_id: null,
              }
            : post;
        }),
      }));
    } catch (err) {
      setAlert(err.message, "error");
    }
  };

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const { data } = await axiosReq.get(`/locations/?post=${id}`);
        setLocations(data);
      } catch (err) {
        // console.log(err);
      }
    };

    const timer = setTimeout(() => {
      fetchLocations();
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [id, currentUser]);

  return (
    <Card className={`${styles.Post} ${appStyles.BoxShadow}`}>
      <Card.Body>
        <Media className="d-flex align-items-center justify-content-between">
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profile_image} height={40} />
            {owner}
          </Link>
          <div className="d-flex align-items-center">
            <span className={styles.Date}>{updated_at}</span>
            {is_owner && postPage && (
              <MoreDropdown
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            )}
          </div>
        </Media>
      </Card.Body>
      <Link to={`/posts/${id}`}>
        <Card.Img src={image} alt={title} className="w-100 h-100"/>
      </Link>
      <Card.Body>
        {title && (
          <Card.Title className={`${styles.CardTitle} "text-center"`}>
            {title}
          </Card.Title>
        )}
        {content && (
          <Card.Text className={styles.CardDescription}>{content}</Card.Text>
        )}
        <div className={`${styles.PostBar} ${appStyles.BoxShadow}`}>
          <div className={styles.Heart}>
            {is_owner ? (
              <Tooltip
                title="You can't like your own homeShot!"
                placement="top"
                arrow
              >
                <FavoriteBorderOutlinedIcon />
              </Tooltip>
            ) : like_id ? (
              <span onClick={handleUnlike}>
                <FavoriteIcon sx={{ color: red[500] }} />
              </span>
            ) : currentUser ? (
              <span onClick={handleLike}>
                <FavoriteBorderOutlinedIcon />
              </span>
            ) : (
              <Tooltip
                title="Please login to like posts!"
                placement="top"
                arrow
              >
                <Link to={"/signin"}>
                  <FavoriteIcon />
                </Link>
              </Tooltip>
            )}
            {likes_count}
          </div>
          <div className={styles.Comments}>
            <Link to={`/posts/${id}`} aria-label={title}>
              <ChatBubbleOutlineOutlinedIcon />
            </Link>
            {comments_count}
          </div>
          {locations.results.length && currentUser ? (
            <Tooltip title="Click to view the location" placement="bottom" arrow>
              <div
                className={styles.Locations}
                onClick={() => setLocationOpen(!locationOpen)}
              >
                {!locationOpen ? (
                  <RestaurantMenuOutlinedIcon className={styles.Locations} />
                ) : (
                  <CloseOutlinedIcon />
                )}
                Location
              </div>
            </Tooltip>
          ) : locations.results.length && !currentUser ? (
            <Tooltip title="Login to view the location" placement="bottom" arrow>
              <Link to={"/signin"} aria-label="Click to sign in">
                <div className={styles.Locations}>
                  <RestaurantMenuOutlinedIcon className={styles.Locations} />
                  Login for Location
                </div>
              </Link>
            </Tooltip>
          ) : is_owner && locations.results.length === 0 ? (
            <Tooltip title="Click to add a location" placement="bottom" arrow>
              <div
                className={styles.Locations}
                onClick={() => setLocationOpen(!locationOpen)}
              >
                {!locationOpen ? (
                  <AddCircleOutlineOutlinedIcon />
                ) : (
                  <CloseOutlinedIcon />
                )}
                Add Location
              </div>
            </Tooltip>
          ) : (
            <div></div>
          )}
        </div>
      </Card.Body>
      {locationOpen && (
        <Card.Body>
          {is_owner && currentUser && locations.results.length === 0 ? (
            <LocationCreateForm
              profile_id={currentUser.profile_id}
              post={id}
              setLocations={setLocations}
            />
          ) : locations.results.length ? (
            <Locations {...locations.results[0]} setLocations={setLocations} />
          ) : currentUser ? (
            <span className={styles.NoLocation}>
              No Location has been added yet!
            </span>
          ) : (
            <span className={styles.NoLocation}>
              Sorry no location has been added yet!
            </span>
          )}
        </Card.Body>
      )}
    </Card>
  );
};

export default Post;