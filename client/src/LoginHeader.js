import React from 'react';
import {
  Grid,
  Box,
  Typography,
  Link,
  Button
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const LoginHeader = ({ view, switchView, buttonText }) => {

  const useStyles = makeStyles({
      headerContainer: {
        position: "absolute",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        width: "100%",
        height: "15%",
        padding: "0% 5%",
      },
      switchViewText: {
        fontSize: "14px",
        padding: "0px 30px"
      },
      switchLoginButton: {
        fontSize: "14px",
        background: "#FFFFFF",
        padding: "0px 35px",
        height: "54px",
        boxShadow: "0px 2px 12px rgba(74, 106, 149, 0.2)",
        borderRadius: "5px",
        textAlign: "center"
      },
      switchLoginLink: {
        textDecoration: "none",
      }
  })

  const classes = useStyles();

  return (
    <Grid container className={classes.headerContainer}>
        {(view === "login") ? <Typography color='secondary' className={classes.switchViewText}>Don't have an account?</Typography> :
          <Typography color='secondary' className={classes.switchViewText}> Already have an account? </Typography>}
        <Link href={switchView} to={switchView} className={classes.switchLoginLink}>
          <Button variant='text' size='large' color='primary' className={classes.switchLoginButton}>{buttonText}</Button>
        </Link>
    </Grid>
  )
}

export default LoginHeader;
