import React, { useState } from "react";
import {
  TextField,
  MenuItem,
  Stack,
  Box,
  IconButton,
  Chip,
  Select,
  InputLabel,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

const listOptions = [
  { key: "India", value: "IND" },
  { key: "United State", value: "USA" },
  { key: "Canda", value: "CAD" },
  { key: "China", value: "CNA" },
  { key: "Australia", value: "AUS" },
];

function MuiSelect() {
  const [country, setCountry] = useState("IND");
  const [countries, setCountries] = useState([]);
  const handleChange = (e) => {
    setCountry(e.target.value);
  };
  const handleChangeMulti = (e) => {
    const value = e.target.value;
    console.log(value);
    setCountries(typeof value === "string" ? value.split(",") : value);
  };
  const clearCountries = () => {
    setCountries([]);
  };
  return (
    <Stack spacing={2} direction="row" marginTop="20px">
      <Box width="250px">
        <TextField
          id="default-select"
          label="Select a country"
          size="small"
          color="secondary"
          select
          fullWidth
          value={country}
          onChange={(e) => handleChange(e)}
        >
          {listOptions.map((menu) => (
            <MenuItem key={menu.key} value={menu.value}>
              {menu.key}
            </MenuItem>
          ))}
        </TextField>
      </Box>

      <Box width="250px">
        <TextField
          id="default-multi-select"
          label="Select countries"
          size="small"
          color="secondary"
          select
          fullWidth
          value={countries}
          onChange={(e) => handleChangeMulti(e)}
          SelectProps={{ multiple: true }}
          InputProps={{
            ...(countries.length !== 0 && {
              endAdornment: (
                <IconButton onClick={clearCountries}>
                  <ClearIcon />
                </IconButton>
              ),
            }),
          }}
        >
          {listOptions.map((menu) => (
            <MenuItem key={menu.key} value={menu.value}>
              {menu.key}
            </MenuItem>
          ))}
        </TextField>
      </Box>

      <Box width="250px">
        <InputLabel id="demo-multiple-chip-label">
          Select countries in chip
        </InputLabel>
        <Select
          id="demo-multiple-chip-label"
          size="small"
          color="secondary"
          select
          fullWidth
          value={countries}
          onChange={(e) => handleChangeMulti(e)}
          //   SelectProps={{ multiple: true }}
          multiple
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap" }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          endAdornment={
            countries.length !== 0 && (
              <IconButton onClick={clearCountries}>
                <ClearIcon />
              </IconButton>
            )
          }
        >
          {listOptions.map((menu) => (
            <MenuItem key={menu.key} value={menu.value}>
              {menu.key}
            </MenuItem>
          ))}
        </Select>
      </Box>
    </Stack>
  );
}

export default MuiSelect;
