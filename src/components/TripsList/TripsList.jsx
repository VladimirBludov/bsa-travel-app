import React from 'react';
import PropTypes from 'prop-types';
import TripsItem from '../TripsItem';
import { Trips, TripsContainer } from './TripsList.styles';

export default function TripsList({ trips }) {
  return (
    <TripsContainer>
      <h2 className="visually-hidden">Trips List</h2>
      <Trips>
        {trips.map(trip => (
          <TripsItem key={trip.id} trip={trip} />
        ))}
      </Trips>
    </TripsContainer>
  );
}

TripsList.propTypes = {
  trips: PropTypes.arrayOf(PropTypes.object),
};
