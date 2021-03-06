import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, Avatar } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
  },
  avatar: {
    height: 30,
    width: 30,
    marginRight: 11,
    marginTop: 6,
  },
  usernameDate: {
    fontSize: 11,
    color: '#BECCE2',
    fontWeight: 'bold',
    marginBottom: 5,
    display: "inline-block"
  },
  bubble: {
    backgroundImage: 'linear-gradient(225deg, #6CC1FF 0%, #3A8DFF 100%)',
    borderRadius: '0 10px 10px 10px',
    display: "inline-block"
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFFFFF',
    letterSpacing: -0.2,
    padding: 8,
  },
  imgThumb: {
    display: "inline-block",
    width: "100%",
    borderRadius: '0px 10px 10px 10px',
    padding: "5px"
  },
  imgGrid: {
    borderRadius: '10px 10px 0 10px',
    display: 'grid',
    gridTemplateColumns: "repeat(2, 1fr)",
    width: "30%",
    margin: "none"
  },
}));

const OtherUserBubble = ({ text, time, otherUser, attachments }) => {
  const classes = useStyles();

  let imgThumbs;

    attachments?.map((image) => {
        return <Box className={classes.imgThumb} key={image} component="img" src={image} />
    });

  return (
    <Box className={classes.root}>
      <Avatar
        alt={otherUser.username}
        src={otherUser.photoUrl}
        className={classes.avatar}
      />
      <Box>
        <Typography className={classes.usernameDate}>
          {otherUser.username} {time}
        </Typography>
        {(attachments.length === 1) && <Box className={classes.imgGrid}>
          {attachments && imgThumbs}
        </Box>}
        <Box className={classes.bubble}>
          <Typography className={classes.text}>{text}</Typography>
        </Box>
        {(attachments.length > 1) && <Box className={classes.imgGrid}>
          {attachments && imgThumbs}
        </Box>}
      </Box>
    </Box>
  );
};

export default OtherUserBubble;
