import filterByDuration from './filterByDuration';
import filterByLevel from './filterByLevel';
import filterByQuery from './filterByQuery';

export default function getVisibleTrips(filter, duration, level, trips) {
  let filteredTrips = [...trips];

  if (filter) {
    filteredTrips = filterByQuery(filter, filteredTrips);
  }

  if (duration) {
    filteredTrips = filterByDuration(duration, filteredTrips);
  }

  if (level) {
    filteredTrips = filterByLevel(level, filteredTrips);
  }

  return filteredTrips;
}
