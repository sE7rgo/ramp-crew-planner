import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import "./Main.css";
import { Button, TextField, Typography } from "@mui/material";

function Main() {
  return (
    <div className="main">
      <div className="button-group">
        <div className="create-button">
          <Button variant="outlined">Primary</Button>
        </div>
        <div className="separator-text">
          <Typography>OR</Typography>
        </div>
        <div className="code-text-area">
          <TextField label="type code here" variant="standard" />
          <Button variant="outlined">Primary</Button>
        </div>
      </div>
    </div>
  );
}

export default Main;
