import React, { ChangeEvent, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  useParams,
} from "react-router-dom";
import "./AddFlightForm.css";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Grow,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Radio,
  TextField,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import { AddFlightFormProps, NeccessaryEquipment } from "../../common/types";

const initialEquipment = {
  beltloader: 0,
  loader: 0,
  pushback: false,
  ld3: 0,
  ld9: 0,
  carts: 0,
};

function AddFlightForm({ open, onClose }: AddFlightFormProps) {
  const [equipment, setEquipment] =
    useState<NeccessaryEquipment>(initialEquipment);

  const handleAddEquipment = (type: string) => {
    if (type === "pushback")
      setEquipment((prevEquipment) => ({
        ...prevEquipment,
        type: true,
      }));
    else setEquipment((prevEquipment) => ({ ...prevEquipment, type: +1 }));
  };

  useEffect(() => {
    console.log("equipment", equipment);
  }, [equipment]);
  return (
    <Dialog onClose={onClose} open={open}>
      <DialogTitle>flight properties</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Email Address"
          type="email"
          fullWidth
          variant="standard"
        />
        <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
          <FormLabel component="legend">
            select equipment for a flight
          </FormLabel>

          <FormGroup>
            <div className="form-row">
              <FormControlLabel
                control={<Checkbox checked={!!equipment.carts} name="carts" />}
                label="carts"
                onChange={() =>
                  setEquipment((prevEquipment) => ({
                    ...prevEquipment,
                    carts: +1,
                  }))
                }
              />
              {equipment.carts && (
                <div className="add-buttons">
                  <IconButton color="error">
                    <RemoveIcon />
                  </IconButton>
                  <Typography>{equipment.carts}</Typography>
                  <IconButton color="primary">
                    <AddIcon />
                  </IconButton>
                </div>
              )}
            </div>
            <FormControlLabel
              control={<Checkbox checked={false} name="LD3" />}
              label="LD3"
            />
            <FormControlLabel
              control={<Checkbox checked={false} name="LD9" />}
              label="LD9"
            />
            <FormControlLabel
              control={<Checkbox checked={false} name="beltloader" />}
              label="beltloader"
            />
            <FormControlLabel
              control={<Checkbox checked={false} name="loader" />}
              label="loader"
            />
            <FormControlLabel
              control={<Checkbox checked={false} name="pushback" />}
              label="pushback"
            />
          </FormGroup>
          <FormHelperText>some helper text</FormHelperText>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button color="error" onClick={onClose}>
          Cancel
        </Button>
        <Button color="success">add flight</Button>
      </DialogActions>
    </Dialog>
  );
}

export default AddFlightForm;
