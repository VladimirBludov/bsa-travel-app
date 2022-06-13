import { useMemo, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  BookBtn,
  Container,
  Content,
  Description,
  Picture,
  Trip,
} from './TripPage.styles';
import TripInfo from 'components/TripInfo';
import TripPrice from 'components/TripPrice';
import Modal from 'components/Modal';
import TripPopup from 'components/TripPopup';

export default function TripPage({ trips }) {
  const [showModal, setShowModal] = useState(false);

  const { tripId } = useParams();

  const trip = useMemo(
    () => trips.find(({ id }) => id === tripId),
    [tripId, trips]
  );

  if (!trip) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Container>
        <Trip>
          <Picture src={trip.image} alt="trip placeholder" />
          <Content>
            <TripInfo
              title={trip.title}
              duration={trip.duration}
              level={trip.level}
            />
            <Description>{trip.description}</Description>
            <TripPrice price={trip.price} />
            <BookBtn text="Book a trip" onClick={() => setShowModal(true)} />
          </Content>
        </Trip>
      </Container>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <TripPopup trip={trip} onClose={() => setShowModal(false)} />
        </Modal>
      )}
    </>
  );
}

TripPage.propTypes = {
  trips: PropTypes.arrayOf(PropTypes.object),
};
