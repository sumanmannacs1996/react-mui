import React, { useState } from "react";
import { Stack, TextField } from "@mui/material";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";

const filter = createFilterOptions();

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Angular",
  "Vue",
  "TypeScript",
];

function MuiAutoComplete() {
  const [value, setValue] = useState(null);
  const [values, setValues] = useState([]);
  console.log({ value, values });
  return (
    <Stack spacing={2} marginTop="20px" width="1050px">
      <Stack spacing={2} direction="row" width="1050px">
        <Autocomplete
          fullWidth
          options={skills}
          renderInput={(params) => <TextField {...params} label="Skill" />}
          value={value}
          onChange={(e, newValue) => setValue(newValue)}
        />

        <Autocomplete
          fullWidth
          options={skills}
          renderInput={(params) => (
            <TextField {...params} label="Skill new create" />
          )}
          value={value}
          onChange={(e, newValue) => setValue(newValue)}
          freeSolo
        />

        <Autocomplete
          fullWidth
          options={skills}
          freeSolo
          filterOptions={(options, params) => {
            const filtered = filter(options, params);
            const { inputValue } = params;
            // Suggest the creation of a new value
            const isExisting = options.some((option) => inputValue === option);
            if (inputValue !== "" && !isExisting) {
              filtered.push(`Add "${inputValue}"`);
            }
            return filtered;
          }}
          renderInput={(params) => (
            <TextField {...params} label="Add new enhances" />
          )}
          value={value}
          onChange={(e, newValue) => setValue(newValue)}
        />

        <Autocomplete
          fullWidth
          multiple
          disableCloseOnSelect
          limitTags={1}
          id="tags-standard"
          options={skills}
          getOptionLabel={(option) => option}
          renderInput={(params) => (
            <TextField {...params} label="Multiple values" />
          )}
          onChange={(e, newValue) => setValues(newValue)}
        />

        <Autocomplete
          fullWidth
          multiple
          disableCloseOnSelect
          limitTags={1}
          id="tags-standard"
          options={skills}
          getOptionLabel={(option) => option}
          renderInput={(params) => (
            <TextField {...params} label="Multiple values with create new" />
          )}
          onChange={(e, newValue) => setValues(newValue)}
          freeSolo
          filterOptions={(options, params) => {
            const filtered = filter(options, params);
            const { inputValue } = params;
            // Suggest the creation of a new value
            const isExisting = options.some((option) => inputValue === option);
            if (inputValue !== "" && !isExisting) {
              filtered.push(`Add "${inputValue}"`);
            }
            return filtered;
          }}
        />
      </Stack>
    </Stack>
  );
}

export default MuiAutoComplete;
