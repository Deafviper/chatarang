import React from 'react'

const Avatar = (props) => {
  return (
      <div style = {styles.Avatar}>
            <img height='40px' width = '40px' src='https://www.shareicon.net/data/256x256/2015/09/14/100868_skull_512x512.png'/>
    </div>
  )
}

const styles  ={
    Avatar: {
        height: '40px',
        width: '40px',
        fontSize: '1rem',
        borderRadius: '20px',
        
      }      
}

export default Avatar