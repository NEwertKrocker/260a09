import React from 'react';
import {
  Grid,
  TextField,
  Typography,
  FormControl,
  InputAdornment,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const LoginFields = ({ login, signup, greeting }) => {

  const useStyles = makeStyles({
      forgotPassword: {
        fontSize: "12px"
      },
      formContainer: {
        display: "flex",
        flexDirection: "column",
        width: "380px"
      }
  })

  const classes = useStyles();

  return(
    <Grid container className={classes.formContainer}>
      <Typography variant='h5'>{greeting}</Typography>
      {signup && <Grid>
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
      </Grid>}
      <FormControl margin="normal" required>
        <TextField
          aria-label="email-address"
          label="E-mail address"
          name="username"
          type="text"
          color="primary"
        />
      </FormControl>
      {login && <FormControl margin="normal" required>
        <TextField
          label="Password"
          aria-label="password"
          type="password"
          name="password"
          color="primary"
          InputProps={{
            endAdornment: <InputAdornment position='end'>
              <Typography color="primary" className={classes.forgotPassword}>Forgot?</Typography>
            </InputAdornment>,
          }}
        />
      </FormControl>}
    </Grid>
  )
}

export default LoginFields
