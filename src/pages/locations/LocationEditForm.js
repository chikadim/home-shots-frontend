import { FormGroup } from "@mui/material";
import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import { axiosRes } from "../../api/axiosDefaults";

import styles from "../../styles/LocationsCreateEditForm.module.css";
import useAlert from "../../hooks/useAlert";

function LocationEditForm(props) {
  const { id, addresses, country, setShowEditForm, setLocations } = props;

  const [formAddresses, setFormAddresses] = useState(addresses);
  const [formCountry, setFormCountry] = useState(country);
  const { setAlert } = useAlert();

  const handleAddresses = (event) => {
    setFormAddresses(event.target.value);
  };

  const handleCountry = (event) => {
    setFormCountry(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axiosRes.put(`/locations/${id}/`, {
        addresses: formAddresses.trim(),
        country: formCountry.trim(),
      });
      setLocations((prevLocations) => ({
        ...prevLocations,
        results: prevLocations.results.map((location) => {
          return location.id === id
            ? {
                ...location,
                addresses: formAddresses.trim(),
                country: formCountry.trim(),
                updated_at: "now",
              }
            : location;
        }),
      }));
      setShowEditForm(false);
      setAlert("Location edited successfully!", "success");
    } catch (err) {
      // console.log(err);
      setAlert(err.message, "error");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          className={styles.Form}
          as="textarea"
          name="addresses"
          value={formAddresses}
          onChange={handleAddresses}
          rows={4}
        />
      </Form.Group>
      <FormGroup>
        <Form.Control
          className={styles.Form}
          as="textarea"
          name="country"
          value={formCountry}
          onChange={handleCountry}
          rows={4}
        />
      </FormGroup>
      <div className="text-right">
        <button
          className={styles.Button}
          onClick={() => setShowEditForm(false)}
          type="button"
        >
          cancel
        </button>
        <button
          className={styles.Button}
          disabled={!formAddresses.trim()}
          type="submit"
        >
          save
        </button>
      </div>
    </Form>
  );
}

export default LocationEditForm;