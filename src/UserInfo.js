
const UserInfo = (props) => {
    return (
        <div
        className="UserInfo"
        style={styles.UserInfo}
        >
        <img style = {styles.Avatar} height='40px' width = '40px' src='https://www.shareicon.net/data/256x256/2015/09/14/100868_skull_512x512.png'/>

        <div style = {styles.user} className="user">
          {props.user.displayName}
        </div>
        <a style = {styles.a} href="#">
        <i class="fa fa-sign-out" aria-hidden="true"></i>
        </a>
        </div>
    )
  }

  const styles = {
    UserInfo: {
        marginBottom: '1rem',
        display: 'flex',
        alignItems: 'center',
      },
      Avatar: {
      marginRight : '0.1rem',
      },
      user: {
        flex: 1,
      },
      a: {
        border: '0',
        padding: '0',
        backgroundColor: 'transparent',
        color: 'rgba(255, 255, 255, 0.6)',
        fontSize: '1.2rem',
        transition: 'color 0.25s ease-out',
      }
      
  }
  
  export default UserInfo


