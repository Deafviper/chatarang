import React from 'react'

const Metadata = (props) => {
  return (
      <div style = {styles.Metadata}>
             <div style = {styles.user}>{props.message.user.displayName}</div>
            <div style = {styles.time}>{props.message.time} </div>
    </div>
  )
}

const styles  ={
    Metadata: {
        display: 'flex',
        alignitems: 'baseline',
      },
      
      user: {
        fontWeight: 'bold',
        marginRight: '0.5rem',
      },
      
      time: {
        color:'#999',
        fontSize: '0.8rem',
      },
}

export default Metadata