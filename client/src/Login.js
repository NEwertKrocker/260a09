import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
  Grid,
  Box,
  Typography,
  Button,
  FormControl,
  TextField,
  InputAdornment
} from '@material-ui/core';
import LandingSidebar from './LandingSidebar.js'
import bgImg from './assets/bg-img.png';
import bubble from './assets/bubble.svg';

const Login = ({ user, login }) => {
  const history = useHistory();

  const handleLogin = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;
    const username = formElements.username.value;
    const password = formElements.password.value;

    await login({ username, password });
  };

  useEffect(() => {
    if (user && user.id) history.push('/home');
  }, [user, history]);


  return (
    <Grid container sx={{ height: "100vh" }}>
      <LandingSidebar />
      <Box sx={{ width: { xs: "80%", sm: "35%"}, padding: "0% 10%" }}>
        <Grid container item style={{ display: "flex", justifyContent: "flex-end", margin: "50px" }}>
          <Typography color='secondary' style={{ padding: "16px 24px" }}>Don't have an account?</Typography>
          <Link href="/register" to="/register" style={{ textDecoration: "none" }}>
            <Button variant='text' size='large' color='primary' style={{ padding: "15px 25px", boxShadow: "1px 1px 5px .2px"}}>Create Account</Button>
          </Link>
        </Grid>
        <form onSubmit={handleLogin}>
          <Grid style={{ marginTop: "100px"}}>
            <Grid>
              <Typography variant='h5'>Welcome back!</Typography>
              <FormControl margin="normal" fullWidth={true} required>
                <TextField
                  aria-label="username"
                  label="E-mail address"
                  name="username"
                  type="text"
                  color="primary"
                />
              </FormControl>
            </Grid>
            <FormControl margin="normal" fullWidth={true} required>
              <TextField
                label="Password"
                aria-label="password"
                type="password"
                name="password"
                color="primary"
                InputProps={{
                  endAdornment: <InputAdornment position='end' color="primary">
                    <Typography color="primary" variant="body2">Forgot?</Typography>
                  </InputAdornment>,
                }}
              />
            </FormControl>
            <Grid container justifyContent="center">
              <Button type="submit" variant="contained" size="large" color='primary' style={{ fontSize: 18, padding: "15px 60px", margin: "50px"}}>
                Login
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Grid>
  );
};

export default Login;
