import Filter from 'components/Filter';
import TripsList from 'components/TripsList';

export default function HomePage({ trips }) {
  return (
    <>
      <Filter />
      <TripsList trips={trips} />
    </>
  );
}
