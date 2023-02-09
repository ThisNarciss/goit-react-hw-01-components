import PropTypes from 'prop-types';
import StatisticsItem from './StatisticsItem';
import css from './Statistics.module.css';

export default function Statistics({ title, stats }) {
  //   console.log(stats);
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.statList}>
        {stats.map(item => {
          return (
            <StatisticsItem
              key={item.id}
              label={item.label}
              percentage={item.percentage}
            />
          );
        })}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string })),
};
