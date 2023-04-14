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
// import { Link } from "react-router-dom";



const theme = createTheme();

export default function Login() {
  // const navigate=  useNavigate();
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
    
    var loggedIn = false
    UserData.map((element) => {
      console.log(element)
      if(element.email === data.get("email") && element.password === data.get("password")){
    
        return 
      }

    })
   
    

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
          <img style={{height : "250px",width : "350px"}} src={logo} alt="" />

          <Typography component="h1" variant="h5" style={{marginTop : "20px",textDecoration : "bold"}}>
            Log in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              
              
              
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              
            />
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style ={{

                background : "#0dab0d"

              }}
              onClick={Login}
              href="/account"
            >
              Sign In
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style ={{

                background : "orange"

              }}
            >
              Sign In with Google
            </Button>
            <Grid container>
              <Grid item style={{marginLeft : "90px"}}>
                <Link href="/register" variant="subtitle2" style={{textDecoration : "none",color : "black"}}>
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
