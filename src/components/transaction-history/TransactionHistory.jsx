import PropTypes from 'prop-types';
import TransactionHistoryItem from './TransactionHistoryItem';
import css from './TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
  return (
    <table id="table" className={css.transactionHistory}>
      <thead>
        <tr>
          <th className={css.transactionHistoryHeadTitle}>Type</th>
          <th className={css.transactionHistoryHeadTitle}>Amount</th>
          <th className={css.transactionHistoryHeadTitle}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => {
          return (
            <tr className={css.transactionHistoryBodyRow} key={item.id}>
              <TransactionHistoryItem
                type={item.type}
                amount={item.amount}
                currency={item.currency}
              />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired }).isRequired
  ).isRequired,
};
