import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormHelperText,
} from "@mui/material";

function MuiRadioButton() {
  const [expDetails, setExpDetails] = useState("");
  console.log(expDetails);
  return (
    <Box>
      <FormControl error={true}>
        <FormLabel id="job-experience-group-label">
          Years of expereienced
        </FormLabel>
        <RadioGroup
          name="job-experience-group"
          aria-labelledby="job-experience-group-label"
          row
          onChange={(e) => setExpDetails(e.target.value)}
        >
          <FormControlLabel value="0-2" label="0-2" control={<Radio />} />
          <FormControlLabel value="2-4" label="2-4" control={<Radio />} />
          <FormControlLabel value="4-6" label="4-6" control={<Radio />} />
          <FormControlLabel value="6-8" label="6-8" control={<Radio />} />
        </RadioGroup>
        <FormHelperText>Invalid selection!</FormHelperText>
      </FormControl>
    </Box>
  );
}

export default MuiRadioButton;
