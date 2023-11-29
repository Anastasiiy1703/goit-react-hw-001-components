import ProfileCss from './Profile.module.css'
const Profile = ({ userData }) => {
  return  (
    <>
          <div className={ProfileCss.profile}>
  <div className="description">
    <img
        src={userData.avatar}
        alt="User avatar"
        className={ProfileCss.avatar}
    />
    <p className={ProfileCss.name}>{userData.username}</p>
    <p className={ProfileCss.tag}>@{userData.tag}</p>
    <p className={ProfileCss.location}>{userData.location}</p>
  </div>

    <ul className={ProfileCss.stats}>
    <li>
      <span className={ProfileCss.label}>Followers</span>
      <span className={ProfileCss.quantity}>{userData.stats.followers}</span>
    </li>
    <li>
      <span className={ProfileCss.label}>Views</span>
      <span className={ProfileCss.quantity}>{userData.stats.views}</span>
    </li>
    <li>
      <span className={ProfileCss.label}>Likes</span>
      <span className={ProfileCss.quantity}>{userData.stats.likes}</span>
    </li>
  </ul> 
</div>
    </>
  )
}

export default Profile