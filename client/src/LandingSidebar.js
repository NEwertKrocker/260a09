import React from 'react';
import {
  Grid,
  Box,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import bgImg from './assets/bg-img.png';
import bubble from './assets/bubble.svg';

const LandingSidebar = () => {

  const useStyles = makeStyles({
    backgroundImage: {
      position: 'absolute',
      background: `url(${bgImg})`,
      backgroundSize: "cover",
      height: "100%",
      width: "42%",
      left: '0px',
      top: '0px',
    },
    background: {
      position: "absolute",
      width: "100%",
      height: "100%",
      left: "0px",
      top: "0px",
      background: "linear-gradient(180deg, #3A8DFF 0%, #86B9FF 100%)",
      mixBlendMode: "normal",
      opacity: 0.85,
    },
    sidebarText: {
      position: "absolute",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center",
      width: "100%",
      height: "100%",
      padding: "70px"
    },
    speechBubble: {
      width: "67px",
      height: "66px",
      marginTop: "130px",
      marginBottom: "40px"
    },
    tagline: {
      height: "80px",
      left: "0%",
      right: "0%",
      top: "calc(50% - 80px/2 + 53px)",
      fontFamily: 'Open Sans',
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "26px",
      lineHeight: "40px",
      textAlign: "center",
      color: "#FFFFFF",
    }

  })

  const classes = useStyles();

 return (
   <Grid item className={classes.backgroundImage} >
     <Box className={classes.background} />
     <Grid container className={classes.sidebarText}>
       <Box className={classes.speechBubble} component="img" alt="Speech bubble icon" src={bubble} />
       <Typography className={classes.tagline} variant="h5" >Converse with anyone with any language</Typography>
     </Grid>
   </Grid>

 )

}

export default LandingSidebar;
