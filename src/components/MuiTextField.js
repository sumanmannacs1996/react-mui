import React, { useState } from "react";
import { Stack, TextField, InputAdornment, IconButton } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

function MuiTextField() {
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow((prev) => !prev);
  };
  return (
    <Stack spacing={4} marginTop="20px">
      <Stack spacing={2} direction="row">
        {/* Default is outlined*/}
        <TextField id="name-default" label="Name default" />
        <TextField
          id="name-outlined"
          label="Name outlined"
          variant="outlined"
        />
        <TextField id="name-filled" label="Name filled" variant="filled" />
        <TextField
          id="name-standard"
          label="Name standard"
          variant="standard"
        />
      </Stack>

      <Stack spacing={2} direction="row">
        <TextField
          id="outlined-small-secondary"
          label="Outlined Small Secondary"
          variant="outlined"
          size="small"
          color="secondary"
        />
        <TextField
          id="require"
          required
          label="Required"
          variant="outlined"
          size="small"
          color="secondary"
        />
        <TextField
          id="password"
          type="password"
          helperText="Do not share password with anyone."
          label="Required"
          variant="outlined"
          size="small"
          color="secondary"
        />
        <TextField label="Disabled" size="small" disabled />
        <TextField
          id="read-only"
          label="Read only"
          size="small"
          value="This is read only!"
          InputProps={{ readOnly: true }}
          InputLabelProps={
            { shrink: true } /*To prevent label overlap with input value*/
          }
        />
      </Stack>

      <Stack spacing={2} direction="row">
        <TextField
          id="amount"
          label="Amount"
          type="number"
          size="small"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          id="weight"
          label="Weight"
          type="number"
          size="small"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        />
        <TextField
          id="password-show-hide"
          label="password show and hide"
          size="small"
          type={show ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <IconButton onClick={toggleShow}>
                {show ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </IconButton>
            ),
          }}
        />
        <TextField
          id="show-error"
          size="small"
          type="number"
          required
          label="Age with error message"
          value="100"
          error={true}
          helperText="Age must be less than 100"
        />
      </Stack>
    </Stack>
  );
}

export default MuiTextField;
