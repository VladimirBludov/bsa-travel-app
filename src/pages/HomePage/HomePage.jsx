import { useSearchParams } from 'react-router-dom';
import Filter from 'components/Filter';
import TripsList from 'components/TripsList';
import { getVisibleTrips } from 'helpers';

export default function HomePage({ trips }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const filter = searchParams.get('filter') || '';
  const duration = searchParams.get('duration') || '';
  const level = searchParams.get('level') || '';

  const visibleTrips = getVisibleTrips(filter, duration, level, trips);

  return (
    <>
      <Filter
        setSearchParams={setSearchParams}
        filter={filter}
        duration={duration}
        level={level}
      />
      <TripsList trips={visibleTrips} />
    </>
  );
}
