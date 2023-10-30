import React, { useState } from "react";
import {
  Box,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormLabel,
  FormGroup,
  FormHelperText,
} from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
function MuiCheckbox() {
  const [checked, setChecked] = useState(false);
  const [skills, setSkills] = useState([]);
  const handleSkillChange = (e) => {
    const index = skills.indexOf(e.target.value);
    if (index === -1) setSkills([...skills, e.target.value]);
    else setSkills(skills.filter((skill) => skill !== e.target.value));
  };
  console.log({ checked, skills });
  return (
    <Box>
      <Box>
        <FormControlLabel
          label="I accept term and conditions"
          control={
            <Checkbox
              checked={checked}
              onChange={() => setChecked((prev) => !prev)}
            />
          }
        />
      </Box>

      <Box>
        <Checkbox
          checked={checked}
          onChange={() => setChecked((prev) => !prev)}
          icon={<BookmarkBorderIcon />}
          checkedIcon={<BookmarkIcon />}
        />
      </Box>

      <Box>
        <FormControl error={true}>
          <FormLabel>Skills</FormLabel>
          <FormGroup row>
            <FormControlLabel
              label="HTML"
              value="html"
              control={
                <Checkbox
                  checked={skills.includes("html")}
                  onChange={handleSkillChange}
                />
              }
            />
            <FormControlLabel
              label="CSS"
              value="css"
              control={
                <Checkbox
                  checked={skills.includes("css")}
                  onChange={handleSkillChange}
                />
              }
            />
            <FormControlLabel
              label="JavaScript"
              value="javascript"
              control={
                <Checkbox
                  checked={skills.includes("javascript")}
                  onChange={handleSkillChange}
                />
              }
            />
          </FormGroup>
          <FormHelperText>Invalid selection!</FormHelperText>
        </FormControl>
      </Box>
    </Box>
  );
}

export default MuiCheckbox;
