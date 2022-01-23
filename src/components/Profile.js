import './Profile.css';
import profilePicture from  '../images/image-jeremy.png'

function Profile(props) {

  return (
    <div className="profile">
      <div className="top">
        <img src={profilePicture} alt="face" />
        <div>
          <p>Report for</p>
          <h1>Jeremy Robson</h1>
        </div>
      </div>
      <div className="when">
        <p style={ props.planning === "day" ? { color:'white', fontWeight : '500'} : {}} onClick={props.daily}>Daily</p>
        <p style={ props.planning === "week" ? { color:'white', fontWeight : '500'} : {}} onClick={props.weekly}>Weekly</p>
        <p style={ props.planning === "month" ? { color:'white', fontWeight : '500'} : {}} onClick={props.monthly}>Monthly</p>
      </div>
    </div>
  );
}

export default Profile;