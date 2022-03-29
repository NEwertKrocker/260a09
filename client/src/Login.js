import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
  Grid,
  Box,
  Typography,
  Button,
  FormControl,
  TextField,
} from '@material-ui/core';
import bgImg from './assets/bg-img.png';

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
    <Grid container justifyContent="space-evenly">
      <Grid item>
        <img alt='People chatting amiably' src={bgImg} />
      </Grid>
      <Box>
        <Grid container item>
          <Typography color='secondary'>Don't have an account?</Typography>
          <Link href="/register" to="/register">
            <Button variant='text' size='large' color='primary'>Create Account</Button>
          </Link>
        </Grid>
        <form onSubmit={handleLogin}>
          <Grid>
            <Grid>
              <Typography variant='h5'>Welcome back!</Typography>
              <FormControl margin="normal" required>
                <TextField
                  aria-label="username"
                  label="Username"
                  name="username"
                  type="text"
                  color="secondary"
                />
              </FormControl>
            </Grid>
            <FormControl margin="normal" required>
              <TextField
                label="password"
                aria-label="password"
                type="password"
                name="password"
                color="secondary"
              />
            </FormControl>
            <Grid>
              <Button type="submit" variant="contained" size="large" color='primary'>
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
