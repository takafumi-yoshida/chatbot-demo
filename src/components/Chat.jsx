import React from "react";
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Brown from '../assets/image/brown.jpg'
import Cat from '../assets/image/cat.jpg'

const Chat = (props) => {

  const isQuestion = (props.type === "question")
  const classes = isQuestion ? "p-chat__row" : "p-chat__reverse";
  return (
      <ListItem className={classes}>
        <ListItemAvatar>

          {isQuestion ? (
            <Avatar alt="icon" src={Brown} />
          ) : (
            <Avatar alt="icon" src={Cat} />
          )}

        </ListItemAvatar>
        <div className="p-chat__bubble">{props.chat}</div>
      </ListItem>
  )
}

export default Chat;