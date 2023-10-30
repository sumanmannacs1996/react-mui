import React, { useState } from "react";
import { Stack, Rating, Typography } from "@mui/material";

function MuiRatting() {
  const [rattingValue, setRattingValue] = useState(null);
  const handleRating = (e, curentValue) => {
    setRattingValue(curentValue);
  };
  console.log(rattingValue);
  return (
    <Stack spacing={2} direction="row" marginTop="20px">
      <Typography>Provide ratting</Typography>
      <Rating name="ratting" value={rattingValue} onChange={handleRating} />
    </Stack>
  );
}

export default MuiRatting;
