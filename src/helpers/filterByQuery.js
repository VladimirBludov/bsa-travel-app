export default function filterByQuery(query, trips) {
  const optimizedQuery = query.toLowerCase();
  return trips.filter(trip =>
    trip.title.toLowerCase().includes(optimizedQuery)
  );
}
