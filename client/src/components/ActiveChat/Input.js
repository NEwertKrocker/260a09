import React, { useState } from 'react';
import axios from 'axios';
import { FormControl, FilledInput, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    justifySelf: 'flex-end',
    marginTop: 15,
  },
  input: {
    height: 70,
    backgroundColor: '#F4F6FA',
    borderRadius: 8,
    marginBottom: 20,
  },
}));

const imgPost = axios.create()

const Input = ({ otherUser, conversationId, user, postMessage }) => {
  const classes = useStyles();
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;
    let attachments = [];
    if(formElements.fileUpload.files.length){
      const images = formElements.fileUpload.files;
      attachments = await attachImages(images)
    }
    // add sender user info if posting to a brand new convo, so that the other user will have access to username, profile pic, etc.
    const reqBody = {
      text: formElements.text.value,
      recipientId: otherUser.id,
      conversationId,
      sender: conversationId ? null : user,
      attachments: attachments
    };

    await postMessage(reqBody);
    setText('');
  };

  const attachImages = async (images) => {
    const imgURLs = [];
    const imgBody = new FormData();
    for (let i = 0; i < images.length; i++){
      let file = images[i];
      imgBody.append("file", file);
      imgBody.append('upload_preset', "m7gjtifb");

      const imgData = await imgPost({
        method: 'post',
        url: "https://api.cloudinary.com/v1_1/dnxxjqz0o/image/upload",
        data: imgBody
      })
      imgURLs.push(imgData.data.url);
    }
    
    return imgURLs
  }

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <FormControl fullWidth hiddenLabel>
        <FilledInput
          classes={{ root: classes.input }}
          disableUnderline
          placeholder="Type something..."
          value={text}
          name="text"
          onChange={handleChange}
        />
      </FormControl>
      <FormControl>
        <Button variant='contained' component='label'>
          <input type="file" name="fileUpload" id="fileUpload" multiple />
        </Button>
      </FormControl>
    </form>
  );
};

export default Input;
