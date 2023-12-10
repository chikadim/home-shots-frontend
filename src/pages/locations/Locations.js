import { useState } from "react";
import { Media } from "react-bootstrap";
import { MoreDropdown } from "../../components/MoreDropdown";
import styles from "../../styles/Locations.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosRes } from "../../api/axiosDefaults";
import LocationEditForm from "./LocationEditForm";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import useAlert from "../../hooks/useAlert";

const Locations = (props) => {
  const { profile_id, owner, addresses, country, id, setLocations } = props;

  const [showEditForm, setShowEditForm] = useState(false);

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const { setAlert } = useAlert();

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/locations/${id}/`);
      setLocations((prevLocations) => ({
        ...prevLocations,
        results: prevLocations.results.filter((location) => location.id !== id),
      }));
      setAlert("Location deleted!", "success");
    } catch (err) {
      setAlert(err.message, "error");
    }
  };

  return (
    <>
      <hr />
      <Media>
        <Media.Body className="align-self-center ml-2">
          {is_owner && showEditForm ? (
            <LocationEditForm
              id={id}
              profile_id={profile_id}
              addresses={addresses}
              country={country}
              setLocations={setLocations}
              setShowEditForm={setShowEditForm}
            />
          ) : (
            <>
              <div className={styles.LocationDiv}>
                <h5 className={styles.LocationTitle}>
                  <FormatListBulletedOutlinedIcon /> Addresses
                </h5>
                <p className={styles.CssFix}>{addresses}</p>
              </div>
              <div className={styles.LocationDiv}>
                <h5 className={styles.LocationTitle}>
                  <MenuBookOutlinedIcon /> Country
                </h5>
                <p className={styles.CssFix}>{country}</p>
              </div>
            </>
          )}
        </Media.Body>
        {is_owner && !showEditForm && (
          <MoreDropdown
            handleEdit={() => setShowEditForm(true)}
            handleDelete={handleDelete}
          />
        )}
      </Media>
    </>
  );
};

export default Locations;