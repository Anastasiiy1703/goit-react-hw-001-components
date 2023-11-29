import FriendListItem from '../FriendList/FriendListItem';
import FriendsListCss from './FriendList.module.css'
const FriendList = ({ friendData }) => {
  return (
    <ul className={FriendsListCss.friendList}>
      {friendData.map((friend) => (
        <FriendListItem key={friend.id} friend={friend} />
      ))}
    </ul>
  );
};

export default FriendList;





