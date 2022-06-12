export default function filterByDuration(duration, trips) {
  if (duration === '0_x_5') {
    return trips.filter(trip => trip.duration < 5);
  }

  if (duration === '5_x_10') {
    return trips.filter(trip => trip.duration >= 5 && trip.duration < 10);
  }

  if (duration === '10_x') {
    return trips.filter(trip => trip.duration >= 10);
  }
}
