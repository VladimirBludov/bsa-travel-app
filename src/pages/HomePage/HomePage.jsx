import { useMemo, useState } from 'react';
import Filter from 'components/Filter';
import TripsList from 'components/TripsList';
import { getVisibleTrips } from 'helpers';

export default function HomePage({ trips }) {
  const [filter, setFilter] = useState('');
  const [duration, setDuration] = useState('');
  const [level, setLevel] = useState('');

  const visibleTrips = useMemo(
    () => getVisibleTrips(filter, duration, level, trips),
    [duration, filter, level, trips]
  );

  return (
    <>
      <Filter
        filter={filter}
        duration={duration}
        level={level}
        getFilter={e => setFilter(e.target.value)}
        getDuration={e => setDuration(e.target.value)}
        getLevel={e => setLevel(e.target.value)}
      />
      <TripsList trips={visibleTrips} />
    </>
  );
}
