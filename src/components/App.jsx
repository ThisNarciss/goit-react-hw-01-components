import Profile from './profile/Profile';
import Statistics from './statistics/Statistics';
import FriendList from './friend-list/FriendList';
import TransactionHistory from './transaction-history/TransactionHistory';
import user from './profile/user.json';
import data from './statistics/data.json';
import friends from './friend-list/friends.json';
import transactions from './transaction-history/transactions.json';
import css from './App.module.css';

export const App = () => {
  return (
    <div className={css.app}>
      <div className={css.profile_and_friends}>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />

        <FriendList friends={friends} />
      </div>
      <div className={css.stats_and_transaction}>
        <Statistics title="Upload stats" stats={data} />
        <Statistics stats={data} />
        <TransactionHistory items={transactions} />
      </div>
    </div>
  );
};

const table = document.getElementById('table');
console.log(table);
