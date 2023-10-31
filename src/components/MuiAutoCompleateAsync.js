import React, { useEffect, useState } from "react";
import { Stack, TextField } from "@mui/material";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";

const fetchData = async (url) =>
  fetch(url)
    .then((res) => res.json())
    .catch((error) => []);

function MuiAutoCompleateAsync() {
  const [value, setValue] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const loading = open && options.length === 0;
  console.log(value);

  useEffect(() => {
    async function loadData() {
      const data = await fetchData(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (data) setOptions(data.map((val) => val.name));
    }
    if (open) loadData();
  }, [open]);
  return (
    <Stack marginTop="20px">
      <Autocomplete
        id="asynchronous-demo"
        sx={{ width: 300 }}
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        getOptionLabel={(option) => option}
        options={options}
        loading={loading}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Asynchronous"
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <React.Fragment>
                  {loading ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null}
                  {params.InputProps.endAdornment}
                </React.Fragment>
              ),
            }}
          />
        )}
        onChange={(e, newValue) => setValue(newValue)}
        value={value}
        multiple
        disableCloseOnSelect
      />
    </Stack>
  );
}

export default MuiAutoCompleateAsync;
