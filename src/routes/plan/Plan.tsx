import React, { ChangeEvent, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  useParams,
} from "react-router-dom";
import "./Plan.css";
import { Box, Button, Grow, TextField, Typography } from "@mui/material";
import AddFlightForm from "../../components/addFlightForm";

function Plan() {
  const { planId } = useParams();

  const [newFlightFormOpen, setNewFlightFormOpen] = useState(false);

  const handleAddNewFlightClick = () => {
    setNewFlightFormOpen(true);
  };
  const handleAddNewFlightFormClose = () => {
    setNewFlightFormOpen(false);
  };

  return (
    <div className="plan-page">
      <div className="add-new-flight-field">
        <Button
          className="button-main-page"
          size="large"
          fullWidth
          variant="text"
          onClick={handleAddNewFlightClick}
        >
          add new flight
        </Button>
        <AddFlightForm
          open={newFlightFormOpen}
          onClose={handleAddNewFlightFormClose}
        />
      </div>
    </div>
  );
}

export default Plan;
