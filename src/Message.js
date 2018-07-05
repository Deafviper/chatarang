import React from 'react'
import Metadata from './MetaData';
import Avatar from './Avatar';

const Message = (props) => {
  return (
    <div style = {styles.Message}className="Message">
      <Avatar/>
        <div style={styles.details} name = "details">
          <Metadata message = {props.message}/>
          <div> {props.message.body}</div>
        </div>
    </div>
  )
}

const styles  ={

  Message: {
    display: 'flex',
    marginTop: '1rem',
    padding: '0 1rem',
  },
  
  details: {
    flex: '1',
    paddingLeft: '0.5rem',
  }
  



}

export default Message