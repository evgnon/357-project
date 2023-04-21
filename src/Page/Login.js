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
import UserData from "../Data/UserData";
import { redirect } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db, googleProvider } from "../firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { addDoc, query, getDocs, where, collection } from "firebase/firestore";


const theme = createTheme();

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/dashboard");
  }, [user, loading]);


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

          <Typography component="h1" variant="h5" style={{ marginTop: "20px", textDecoration: "bold" }}>
            Log in
          </Typography>
          <Box
            component="form"
            noValidate
            sx={{ mt: 1 }}
          >
            <input
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => setEmail(e.target.value)}


            />
            <input
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
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

                background: "#0dab0d"

              }}

              onClick={async () => {
                try {
                  await signInWithEmailAndPassword(auth, email, password);
                } catch (err) {
                  console.error(err);
                  alert(err.message);
                }
              }}

              href="/disclaimer"

            >
              Sign In
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{

                background: "orange"

              }}

              onClick={async () => {
                try {
                  const res = await signInWithPopup(auth, googleProvider);
                  const user = res.user;
                  const q = query(collection(db, "users"), where("uid", "==", user.uid));
                  const docs = await getDocs(q);
                  if (docs.docs.length === 0) {
                    await addDoc(collection(db, "users"), {
                      uid: user.uid,
                      firstName: user.firstName,
                      lastName: user.lastName,
                      authProvider: "google",
                      email: user.email,
                    });
                  }
                } catch (err) {
                  console.error(err);
                  alert(err.message);
                }
              }}
   href="/disclaimer"

            >
              Sign In with Google
            </Button>
            <Grid container>
              <Grid item style={{ marginLeft: "90px" }}>
                <Link href="/register" variant="subtitle2" style={{ textDecoration: "none", color: "black" }}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>

      </Container>
    </ThemeProvider>
  );
}
