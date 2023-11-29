import FriendList from '../components/FriendList/FriendList';
import Profile from '../components/Profile/Profile';
import Statistics from '../components/Statistics/Statistics';
import TransactionHistory from '../components/TransactionHistory/TransactionHistory';
import friends from '../documents/friends.json';
import user from '../documents/user.json';
import data from '../documents/data.json';
import transactions from '../documents/transactions.json';


const App = () => {
    return (
    <div>
      <Profile userData ={user}/>
      <Statistics dataData={data} />
      <FriendList friendData={friends} />
      <TransactionHistory transactionsData={transactions} />
    </div>
  );
};

export default App;