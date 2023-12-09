import React from "react";
import { Container } from "react-bootstrap";
import appStyles from "../../App.module.css";
import styles from "../../styles/PopularProfiles.module.css";
import Asset from "../Asset";
import { useProfileData } from "../../contexts/ProfileDataContext";
import Profile from "./Profile";
import HomeShoters from "../../assets/homeshoters.webp";

const PopularProfiles = ({ mobile }) => {
  const { popularProfiles } = useProfileData();

  return (
    <Container
      className={`${appStyles.Content} ${
        mobile && "d-lg-none text-center mb-3"
      }`}
    >
      {popularProfiles.results.length ? (
        <>
          <p className={styles.Title}>
            Popular{" "}
            <img
              className={styles.HomeShoters}
              src={HomeShoters}
              alt="Popular HomeShoters"
              height="20"
            />
          </p>
          {mobile ? (
            <div className="d-flex justify-content-around">
              {popularProfiles.results
                .slice(0, 5)
                .filter((profile) => profile.followers_count >= 2)
                .map((profile) => (
                  <Profile key={profile.id} profile={profile} mobile />
                ))}
            </div>
          ) : (
            popularProfiles.results
              .slice(0, 6)
              .filter((profile) => profile.followers_count >= 1)
              .map((profile) => <Profile key={profile.id} profile={profile} />)
          )}
        </>
      ) : (
        <Asset spinner />
      )}
    </Container>
  );
};

export default PopularProfiles;