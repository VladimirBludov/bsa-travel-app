export default function filterByLevel(level, trips) {
  return trips.filter(trip => trip.level === level);
}
