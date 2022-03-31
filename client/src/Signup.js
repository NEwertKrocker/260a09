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

  const styles ={
    sidebarContainer: {
      position: 'relative',
      backgroundImage: `url(${bgImg})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: "contain",
      backgroundPosition: "auto",
      backgroundAttachment: "fixed",
      display: "inline",
      height: "100vh",
      width: "auto",
      maxWidth: "45%",
      maxHeight: "100%",
      color: "#FFF",
      textAlign: "center"
    }
  }

  useEffect(() => {
    if (user && user.id) history.push('/home');
  }, [user, history]);

  return (
    <Grid container sx={{ height: "100vh" }}>
      <Grid item
        xs={false}
        sm={5}
        md={7}
        style={styles.sidebarContainer}
      >
        <Box
          sx={{
            position: 'absolute',
            width: 'auto',
            maxWidth: "373px",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'rgba(58,141,255,.8)',
            display: { xs: 'none', sm: "flex" },
            color: "#FFF",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "100px"
          }}
        >
          <Box component="img" alt="Speech bubble icon" src={bubble} sx={{ height: "90px", width: "90px", padding: "50px" }} />
          <Typography variant="h5" >Converse with anyone with any language</Typography>
        </Box>
      </Grid>
      <Box sx={{ width: { xs: "80%", sm: "35%"}, padding: "0% 10%" }}>
        <Grid container item style={{ display: "flex", justifyContent: "flex-end", margin: "50px" }}>
          <Typography color='secondary' style={{ padding: "16px 24px" }}>Already have an account?</Typography>
          <Link href="/login" to="/login" style={{ textDecoration: "none" }}>
            <Button variant='text' size='large' color='primary' style={{ padding: "15px 50px", boxShadow: "1px 1px 5px .2px"}}>Login</Button>
          </Link>
        </Grid>
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
            <Grid container justifyContent="center">
              <Button type="submit" variant="contained" size="large" color='primary' style={{ fontSize: 18, padding: "15px 60px", margin: "50px"}}>
                Create
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Grid>
  );
};

export default Signup;
