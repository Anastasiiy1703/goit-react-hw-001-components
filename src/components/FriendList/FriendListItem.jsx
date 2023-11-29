import FriendsListCss from './FriendList.module.css';

const FriendListItem = ({ friend }) => {
  const { isOnline, name, avatar } = friend;
  const statusText = isOnline ? 'Online' : 'Offline';
  const statusClass = isOnline ? FriendsListCss.true : FriendsListCss.false;

  return (
    <li className={FriendsListCss.item}>
      <span className={`${FriendsListCss.status} ${statusClass}`}>{statusText}</span>
      <img className={FriendsListCss.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={FriendsListCss.name}>{name}</p>
    </li>
  );
};

export default FriendListItem;