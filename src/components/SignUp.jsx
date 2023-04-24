import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

function SignUp() {
  return (
    <div>
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
        <TextField id="standard-basic" label="Password" variant="standard" />
        <TextField id="standard-basic" label="Repeat password" variant="standard" />
      </Box>
      <Stack spacing={2} direction="row">
        {" "}
        <Button variant="contained">sign up</Button>
      </Stack>
    </div>
  );
}

export default SignUp;
