import Filter from 'components/Filter';
import TripsList from 'components/TripsList';

import trips from '../../db/trips.json';

export default function HomePage() {
  return (
    <>
      <Filter />
      <TripsList trips={trips} />
    </>
  );
}
