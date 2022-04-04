import React from 'react';
import {
  Grid,
  TextField,
  Typography,
  Link,
  Button,
  FormControl,
  InputAdornment
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const LoginFields = ({ greeting, passReminder }) => {

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
      <FormControl margin="normal" required>
        <TextField
          aria-label="username"
          label="E-mail address"
          name="username"
          type="text"
          color="primary"
        />
      </FormControl>
      <FormControl margin="normal" required>
        <TextField
          label="Password"
          aria-label="password"
          type="password"
          name="password"
          color="primary"
          InputProps={passReminder && {
            endAdornment: <InputAdornment position='end'>
              <Typography color="primary" className={classes.forgotPassword}>Forgot?</Typography>
            </InputAdornment>,
          }}
        />
      </FormControl>
    </Grid>
  )
}

export default LoginFields
