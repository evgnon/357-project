import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import logo from "../Assets/logo.png";
import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, registerWithEmailAndPassword, signInWithGoogle } from "../Api/firebase";


const theme = createTheme();

export default function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);

  const register = () => {
    registerWithEmailAndPassword(firstName, lastName, email, password);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const response = await registerWithEmailAndPassword(email, password);

    setEmail("");
    setPassword("");
  };


  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img style={{ height: "250px", width: "350px" }} src={logo} alt="" />

          <Typography
            component="h1"
            variant="h5"
            style={{ marginTop: "20px", textDecoration: "bold" }}
          >
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            sx={{ mt: 1 }}
          >
            <input
              type="text"
              required
              fullWidth
              id="Name"
              label="First Name"
              name="Name"
              value={firstName}
              autoComplete="First Name"
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              required
              fullWidth
              id="Name"
              label="Last Name"
              name="Name"
              value={lastName}
              autoComplete="Last Name"
              onChange={(e) => setLastName(e.target.value)}
            />
            <TextField
              type="text"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              value={email}
              autoComplete="email"
              autoFocus
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              type="password"
              required
              fullWidth
              name="password"
              value={password}
              label="Password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{
                background: "#0dab0d",
              }}
              onClick={register}
              href="/disclaimer"
            >
              Sign Up
            </Button>

            <Grid container>
              <Grid item style={{ marginLeft: "90px" }}>
                <Link
                  href="/"
                  variant="subtitle2"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  {"Have an account? Log in"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
