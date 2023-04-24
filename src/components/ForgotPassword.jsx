import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

function ForgotPassword() {
  return (
    <div>
      {" "}
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <TextField id="standard-basic" label="Email" variant="standard" />
      </Box>
      <Stack spacing={2} direction="row">
        {" "}
        <Button variant="contained">sign in</Button>
      </Stack>
    </div>
  );
}

export default ForgotPassword;
