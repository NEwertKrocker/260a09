import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
  Grid,
  Box,
  Typography,
  Button,
  FormControl,
  TextField,
  FormHelperText,
} from '@material-ui/core';
import LandingSidebar from './LandingSidebar.js'
import LoginHeader from './LoginHeader.js'
import bgImg from './assets/bg-img.png';
import bubble from './assets/bubble.svg';

const Signup = ({ user, register }) => {
  const history = useHistory();

  const [formErrorMessage, setFormErrorMessage] = useState({});

  const handleRegister = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;
    const username = formElements.username.value;
    const email = formElements.email.value;
    const password = formElements.password.value;
    const confirmPassword = formElements.confirmPassword.value;

    if (password !== confirmPassword) {
      setFormErrorMessage({ confirmPassword: 'Passwords must match' });
      return;
    }
    await register({ username, email, password });
  };

  useEffect(() => {
    if (user && user.id) history.push('/home');
  }, [user, history]);

  return (
    <Grid container sx={{ height: "100vh" }}>
      <LandingSidebar />
      <LoginHeader view={"signup"} switchView={"/login"} buttonText={"Login"}/>
        <form onSubmit={handleRegister}>
          <Grid>
            <Grid>
            <Typography variant='h5'>Create an account.</Typography>
              <FormControl margin="normal" fullWidth={true}>
                <TextField
                  aria-label="username"
                  label="Username"
                  name="username"
                  type="text"
                  color="primary"
                  required
                />
              </FormControl>
            </Grid>
            <Grid>
              <FormControl margin="normal" fullWidth={true}>
                <TextField
                  label="E-mail address"
                  aria-label="e-mail address"
                  type="email"
                  name="email"
                  color="primary"
                  required
                />
              </FormControl>
            </Grid>
            <Grid>
              <FormControl margin="normal" fullWidth={true} error={!!formErrorMessage.confirmPassword}>
                <TextField
                  aria-label="password"
                  label="Password"
                  type="password"
                  inputProps={{ minLength: 6 }}
                  name="password"
                  required
                />
                <FormHelperText>
                  {formErrorMessage.confirmPassword}
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid>
              <FormControl margin="normal" fullWidth={true} error={!!formErrorMessage.confirmPassword}>
                <TextField
                  label="Confirm Password"
                  aria-label="confirm password"
                  type="password"
                  inputProps={{ minLength: 6 }}
                  name="confirmPassword"
                  required
                />
                <FormHelperText>
                  {formErrorMessage.confirmPassword}
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid container justifyContent="center">
              <Button type="submit" variant="contained" size="large" color='primary' style={{ fontSize: 18, padding: "15px 60px", margin: "50px"}}>
                Create
              </Button>
            </Grid>
          </Grid>
        </form>
    </Grid>
  );
};

export default Signup;
