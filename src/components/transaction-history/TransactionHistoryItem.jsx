import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export default function TransactionHistoryItem({ type, amount, currency }) {
  return (
    <>
      <td className={css.transactionHistoryBodyRowData}>
        {(type = type[0].toUpperCase() + type.slice(1, type.length - 1))}
      </td>
      <td className={css.transactionHistoryBodyRowData}>{amount}</td>
      <td className={css.transactionHistoryBodyRowData}>{currency}</td>
    </>
  );
}

TransactionHistoryItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
