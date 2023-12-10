import React, { useEffect, useState } from "react";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import Post from "./Post";
import Asset from "../../components/Asset";

import appStyles from "../../App.module.css";
import styles from "../../styles/PostsPage.module.css";
import { useLocation } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";

import NoResults from "../../assets/no-results.webp";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";
import PopularProfiles from "../../components/profiles/PopularProfiles";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import PopularPosts from "../../components/posts/PopularPosts";
import HomeShotMessage from "../../components/HomeShotMessage";
import FollowedHomeShoters from "../../components/FollowedHomeShoters";

function PostsPage({ message, filter = "" }) {
  const [posts, setPosts] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();
  const currentUser = useCurrentUser();

  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await axiosReq.get(`/posts/?${filter}search=${query}`);
        setPosts(data);
        setHasLoaded(true);
      } catch (err) {
        // console.log(err);
      }
    };

    setHasLoaded(false);
    const timer = setTimeout(() => {
      fetchPosts();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [filter, query, pathname, currentUser]);

  return (
    <Row className="h-100 mt-4">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <PopularProfiles mobile />
        <i className={`fas fa-search ${styles.SearchIcon}`} />
        {!query ? (
          <i className={styles.CloseIcon} onClick={() => setQuery("")} />
        ) : (
          <i
            className={`fa-solid fa-xmark ${styles.CloseIcon}`}
            onClick={() => setQuery("")}
          />
        )}

        <Form
          className={styles.SearchBar}
          onSubmit={(event) => event.preventDefault()}
        >
          <Form.Control
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            type="text"
            className="mr-sm-2"
            placeholder="Search homeShots"
          />
        </Form>

        {hasLoaded ? (
          <>
            {window.location.pathname === "/liked" ? (
              <HomeShotMessage message="You Liked" />
            ) : window.location.pathname === "/feed" ? (
              <FollowedHomeShoters />
            ) : (
              " "
            )}
            {posts.results.length ? (
              <InfiniteScroll
                // eslint-disable-next-line react/no-children-prop
                children={posts.results.map((post) => (
                  <Post key={post.id} {...post} setPosts={setPosts} />
                ))}
                dataLength={posts.results.length}
                loader={<Asset spinner />}
                hasMore={!!posts.next}
                next={() => fetchMoreData(posts, setPosts)}
              />
            ) : (
              <Container className={appStyles.Content}>
                <Asset src={NoResults} message={message} />
              </Container>
            )}
          </>
        ) : (
          <Container className={appStyles.Content}>
            <Asset spinner />
          </Container>
        )}
      </Col>
      <Col md={4} className={`${styles.Sidebar} d-none d-lg-block p-0 p-lg-2`}>
        <PopularProfiles />
        <PopularPosts />
      </Col>
    </Row>
  );
}

export default PostsPage;