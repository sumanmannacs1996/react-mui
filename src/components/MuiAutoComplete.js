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

const skillsObject = skills.map((skill) => ({ title: skill, value: skill }));

function MuiAutoComplete() {
  const [value, setValue] = useState(null);
  const [values, setValues] = useState([]);
  const [valuesObj, setValuesObj] = useState([]);
  console.log({ value, values, valuesObj });
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
          value={values}
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
            <TextField
              {...params}
              label="Most suitable Multiple values with create new"
            />
          )}
          onChange={(e, newValue) =>
            setValues(newValue.map((val) => val.replace("Add ", "")))
          }
          value={values}
          freeSolo
          filterOptions={(options, params) => {
            const filtered = filter(options, params);
            const { inputValue } = params;
            // Suggest the creation of a new value
            const isExisting = options.some((option) => inputValue === option);
            if (inputValue !== "" && !isExisting) {
              filtered.push(`Add ${inputValue}`);
            }
            return filtered;
          }}
        />

        <Autocomplete
          fullWidth
          multiple
          freeSolo
          disableCloseOnSelect
          limitTags={1}
          id="tags-standard"
          options={skillsObject}
          getOptionLabel={(option) => {
            // Value selected with enter, right from the input
            if (typeof option === "string") {
              return option;
            }
            // Add "xxx" option created dynamically
            if (option.inputValue) {
              return option.inputValue;
            }
            // Regular option
            return option.title;
          }}
          renderOption={(props, option) => <li {...props}>{option.title}</li>}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Multiple Objects values with create new"
            />
          )}
          filterOptions={(options, params) => {
            const filtered = filter(options, params);

            const { inputValue } = params;
            // Suggest the creation of a new value
            const isExisting = options.some(
              (option) => inputValue === option.title
            );
            if (inputValue !== "" && !isExisting) {
              filtered.push({
                inputValue,
                title: `Add "${inputValue}"`,
              });
            }
            return filtered;
          }}
          onChange={(event, newValue) => {
            if (typeof newValue === "string") {
              setValuesObj({
                title: newValue,
              });
            } else if (newValue && newValue.inputValue) {
              // Create a new value from the user input
              setValuesObj({
                title: newValue.inputValue,
              });
            } else {
              setValuesObj(newValue);
            }
          }}
          value={valuesObj}
        />
      </Stack>
    </Stack>
  );
}

export default MuiAutoComplete;
