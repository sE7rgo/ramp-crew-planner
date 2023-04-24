import React, { ChangeEvent, useEffect, useState } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import "./Main.css";
import { Button, TextField, Typography } from "@mui/material";

function Main() {
  const [planId, setPlanId] = useState<string | null>(null);
  const [inputErrorMessage, setInputErrorMessage] = useState<string | null>(
    null
  );

  const getRandomInt = () => {
    const min = Math.ceil(10000);
    const max = Math.floor(99000);
    const randomNumber = Math.floor(Math.random() * (max - min) + min);
    return randomNumber.toString();
  };

  const checkValidId = (id: string | undefined) => {
    if (typeof id !== "string") return setInputErrorMessage("incorrect entry");
    if (Number.isNaN(Number(id))) return setInputErrorMessage("numbers only");
    if (id.length !== 5) return setInputErrorMessage("has to be 5 digits");
    /* TODO: Check from db if id exists */
    setInputErrorMessage(null);
    setPlanId(id);
    return true;
  };

  const hamdleNewPlanIdClick = () => {
    const newId = getRandomInt();
    setPlanId(newId);
  };

  const handlePlanIdInuput = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | undefined
  ) => {
    const value = event?.target?.value;
    checkValidId(value) ? setInputErrorMessage(null) : setPlanId(null);
  };

  // useEffect(() => {
  //   if (!planId?.length) setInputErrorMessage(null);
  // }, [planId]);

  return (
    <div className="main">
      <div className="button-group">
        <div className="create-button">
          <Button
            onClick={hamdleNewPlanIdClick}
            className="button-main-page"
            size="large"
            fullWidth
            variant="text"
          >
            start a new plan
          </Button>
        </div>

        <div className="code-text-area">
          <TextField
            error={!!inputErrorMessage}
            helperText={inputErrorMessage}
            className="button-main-page"
            label={
              <Typography variant="body1">or type your code here</Typography>
            }
            variant="standard"
            onChange={handlePlanIdInuput}
          />
          {planId && (
            <Button
              className="button-main-page"
              size="large"
              fullWidth
              variant="text"
              color="success"
            >
              proceed to {planId}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Main;
