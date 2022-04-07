import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
  Grid,
  FormControl,
  TextField,
  FormHelperText,
  Button
} from '@material-ui/core';
import LandingSidebar from './LandingSidebar.js'
import LoginHeader from './LoginHeader.js'
import LoginFields from './LoginFields.js'
import { makeStyles } from '@material-ui/core';

const Signup = ({ user, register }) => {
  const history = useHistory();

  const useStyles = makeStyles({
      forgotPassword: {
        fontSize: "12px"
      },
      formContainer: {
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        margin: "15% 10% 10% 50%",
        width: "380px"
      },
      loginButton: {
        fontSize: "16px",
        fontWeight: 700,
        width: "160px",
        height: "56px",
        textAlign: "center",
        margin: "60px"
      }
  })

  const classes = useStyles();

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
          <Grid container className={classes.formContainer}>
            <LoginFields signup={true} greeting="Create an account." />
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
              <Button type="submit" variant="contained" size="large" color='primary' className={classes.loginButton}>
                Create
              </Button>
            </Grid>
          </Grid>
        </form>
    </Grid>
  );
};

export default Signup;
