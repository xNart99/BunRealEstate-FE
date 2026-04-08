import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Box,
  Grid,
} from "@mui/material";
import TextField from "@mui/material/TextField";

import { Controller, useForm } from "react-hook-form";
import { mockLogin } from "../../mocksapi/mockLogin";
import { setCookie } from "../../utils/cookie";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext.jsx";

const Login = () => {
  const { setAccessToken } = useContext(AuthContext);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const res = mockLogin(data);
    if (res.status == "error") {
      console.error("Login Failed: ", res);
      return;
    }

    console.log("access Token", res.token.accessToken);
    setAccessToken(res.token.accessToken);
    setCookie("refreshToken", res.token.refreshToken);
    setCookie("email", res.data.email);
    setCookie("fullname", res.data.fullname);
    setCookie("role", res.data.role);

    console.log("Login sucessfull: ", res);
  };
  return (
    <section className="flex justify-center">
      <Card sx={{ width: "35%", pr: "5%", pl: "2%" }}>
        <CardHeader title="Admin Login" />
        <CardContent>
          <Box component="form">
            {/* This box contains input layout only */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                rowGap: 2,
              }}
            >
              {/* Input layout for username */}
              <Controller
                name="username"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <TextField
                    label="Username"
                    variant="outlined"
                    {...field}
                    error={errors?.username}
                    helperText={
                      errors?.username ? "Please input your Username" : ""
                    }
                  />
                )}
              />
              {/* Input layout for password */}
              <Controller
                name="password"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    {...field}
                    error={errors?.password}
                    helperText={
                      errors?.password ? "You must input your password." : ""
                    }
                  />
                )}
              />
            </Box>
            <Grid container justifyContent="end" mt={2}>
              <Button variant="contained" onClick={handleSubmit(onSubmit)}>
                Login
              </Button>
            </Grid>
          </Box>
        </CardContent>
      </Card>
    </section>
  );
};

export default Login;
