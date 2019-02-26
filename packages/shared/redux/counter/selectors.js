import { createSelector } from 'reselect';

const getPreviousCount = createSelector(
  state => state.counter.count,
  value1 => value1 - 1,
);

export default { getPreviousCount };
