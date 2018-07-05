import React from 'react'

import Message from './Message'

const MessageList = (props) => {
  return (
    <div style={styles.MessageList} className="MessageList">
    <div style= {styles.roomAnnouncement} className="roomAnnouncement">
          <h3 style= {styles.h3} >#general</h3>
          <p>This is the very beginning of the #general room.</p>
        </div>
      {
        props.messages.map(msg => (
          <Message message={msg} key={msg.id} />
        ))
      }
    </div>
  )
}

const styles = {
  MessageList: {
    backgroundColor: 'white',
    flex: 1,
    paddingBottom: '1rem',
    overflowY: 'scroll',
  },
  
  roomAnnouncement: {
    padding: '2rem 1rem',
  },
  
  h3: {
    fontSize: '1.5rem',
  }
}




export default MessageList