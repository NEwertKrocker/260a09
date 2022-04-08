import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
  Grid,
  Button,
} from '@material-ui/core';
import LandingSidebar from './LandingSidebar.js'
import LoginHeader from './LoginHeader.js'
import LoginFields from './LoginFields.js'
import { makeStyles } from '@material-ui/core';

const Login = ({ user, login }) => {
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

  const handleLogin = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;
    const username = formElements.email.value;
    const password = formElements.password.value;

    await login({ username, password });
  };

  useEffect(() => {
    if (user && user.id) history.push('/home');
  }, [user, history]);

  const classes = useStyles();

  return (
    <Grid container sx={{ height: "100vh" }}>
      <LandingSidebar />
      <LoginHeader view={"login"} switchView={"/register"} buttonText={"Create account"}/>
        <form onSubmit={handleLogin}>
          <Grid container className={classes.formContainer}>
            <LoginFields login={true} greeting="Welcome back!" />
            <Grid container justifyContent="center">
              <Button type="submit" variant="contained" size="large" color='primary' className={classes.loginButton}>
                Login
              </Button>
            </Grid>
          </Grid>
        </form>
    </Grid>
  );
};

export default Login;
