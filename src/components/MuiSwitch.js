import React, { useState } from "react";
import { FormControlLabel, Switch, Box } from "@mui/material";

function MuiSwitch() {
  const [darkMode, setDarkMode] = useState(false);
  console.log(darkMode);
  return (
    <Box>
      <FormControlLabel
        label="Dark mode"
        control={
          <Switch
            checked={darkMode}
            onChange={() => setDarkMode((prev) => !prev)}
          />
        }
      />
    </Box>
  );
}

export default MuiSwitch;
