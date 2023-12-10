import React, { useState } from "react";

import Form from "react-bootstrap/Form";

import styles from "../../styles/LocationsCreateEditForm.module.css";
import { axiosRes } from "../../api/axiosDefaults";
import useAlert from "../../hooks/useAlert";

function LocationCreateForm(props) {
  const { post, setLocations } = props;
  const [addresses, setAddresses] = useState("");
  const [country, setCountry] = useState("");
  const { setAlert } = useAlert();

  const handleAddresses = (event) => {
    setAddresses(event.target.value);
  };

  const handleCountry = (event) => {
    setCountry(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axiosRes.post("/locations/", {
        addresses,
        country,
        post,
      });
      setLocations((prevLocations) => ({
        ...prevLocations,
        results: [data, ...prevLocations.results],
      }));
      setLocations((prevLocations) => ({
        results: [
          {
            ...prevLocations.results[0],
            locations_count: prevLocations.results[0].locations_count + 1,
          },
        ],
      }));
      setAlert("Location created successfully!", "success");
    } catch (err) {
      // console.log(err);
      setAlert(err.message, "error");
    }
  };

  return (
    <Form className="mt-2" onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          className={styles.Form}
          placeholder="Addresses"
          as="textarea"
          name="addresses"
          value={addresses}
          onChange={handleAddresses}
          rows={4}
        />
        <Form.Control
          className={styles.Form}
          placeholder="Country"
          name="country"
          as="textarea"
          value={country}
          onChange={handleCountry}
          rows={4}
        />
      </Form.Group>
      <button
        className={`${styles.Button} btn d-block ml-auto`}
        disabled={!addresses.trim()}
        type="submit"
      >
        Add Location
      </button>
    </Form>
  );
}

export default LocationCreateForm;