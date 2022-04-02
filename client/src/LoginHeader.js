import React from 'react';
import {
  Grid,
  Box,
  Typography,
  Link,
  Button
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const LoginHeader = () => {

  const useStyles = makeStyles({
      headerContainer: {
        width: "100%",
        padding: "0% 10%",
      },
      createAccountHeader: {
        display: "flex",
        justifyContent: "flex-end",
        margin: "30px"
      },
      switchLoginButton: {
        position: "absolute",
        background: "#FFFFFF",
        width: "170px",
        height: "54px",
        boxShadow: "0px 2px 12px rgba(74, 106, 149, 0.2)",
        borderRadius: "5px",
        textAlign: "center"
      },
      switchLoginLink: {
        textDecoration: "none"
      }
  })

  const classes = useStyles();

  return (
    <Box className={classes.headerContainer}>
      <Grid item className={classes.createAccountHeader}>
        <Typography color='secondary' style={{ padding: "16px 24px" }}>Don't have an account?</Typography>
        <Link href="/register" to="/register" className={classes.switchLoginLink}>
          <Button variant='text' size='large' color='primary' className={classes.switchLoginButton}>Create Account</Button>
        </Link>
      </Grid>
    </Box>
  )
}

export default LoginHeader;
