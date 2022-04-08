import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  date: {
    fontSize: 11,
    color: '#BECCE2',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  text: {
    fontSize: 14,
    color: '#91A3C0',
    letterSpacing: -0.2,
    padding: 8,
    fontWeight: 'bold',
  },
  bubble: {
    background: '#F4F6FA',
    borderRadius: '10px 10px 0 10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: "flex-end",
    textAlign: "center",
  },
  image: {
    display: "block",
    width: "20%",
    borderRadius: '10px 10px 0px 0px',
  },
  imgThumb: {
    display: "inline-block",
    width: "100%",
    borderRadius: '10px 10px 0px 10px',
    padding: "5px"
  },
  imgGrid: {
    borderRadius: '10px 10px 0 10px',
    display: 'grid',
    gridTemplateColumns: "repeat(2, 1fr)",
    justifyItems: "end",
    width: "15%"
  },
}));

const SenderBubble = ({ time, text, attachments }) => {
  const classes = useStyles();

  let multiImages = attachments.map((image) => {
      return <Box className={classes.imgThumb} component="img" src={image} />
    })

  return (
    <Box className={classes.root}>
      {(attachments.length < 2) && <Typography className={classes.date}>{time}</Typography>}
      <Box className={classes.bubble}>
        {(attachments.length === 1) && <Box className={classes.image} component="img" src={attachments[0]} />}
        <Typography className={classes.text}>{text}</Typography>
      </Box>
      {(attachments.length > 1) && <Box className={classes.imgGrid}>
        {multiImages}
      </Box>}
      {(attachments.length > 1) && <Typography className={classes.date}>{time}</Typography>}
    </Box>
  );
};

export default SenderBubble;
