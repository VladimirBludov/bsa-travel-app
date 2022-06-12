import PropTypes from 'prop-types';
import { useState } from 'react';
import Moment from 'moment';
import Button from 'components/Button';
import Input from 'components/Input';
import TripInfo from 'components/TripInfo';
import { CloseBtn, Container, Form, Total, Value } from './TripPopup.styles';

const ONE_DAY_IN_MS = 86400000;

export default function TripPopup({ trip, onClose }) {
  const [date, setDate] = useState('');
  const [guests, setGuests] = useState(1);
  const { title, duration, level, price } = trip;

  const totalPrice = price * guests;
  const minDate = Moment(Date.now() + ONE_DAY_IN_MS).format('YYYY-MM-DD');

  const resetForm = () => {
    setDate('');
    setGuests(1);
  };

  const handelSubmit = e => {
    e.preventDefault();

    const booking = {
      date,
      guests,
      totalPrice,
    };
    console.log('Booking: ', booking);

    resetForm();
  };

  return (
    <Container>
      <CloseBtn type="button" onClick={() => onClose()}>
        ×
      </CloseBtn>
      <Form autoComplete="off" onSubmit={handelSubmit}>
        <TripInfo title={title} duration={duration} level={level} />
        <Input
          title="Date"
          name="date"
          min={minDate}
          value={date}
          onChange={e => setDate(e.target.value)}
          type="date"
          required
        />
        <Input
          title="Number of guests"
          name="guests"
          type="number"
          min="1"
          max="10"
          value={guests}
          onChange={e => setGuests(e.target.value)}
          required
        />
        <Total>
          Total: <Value>{totalPrice}$</Value>
        </Total>
        <Button text="Book a trip" type="submit" />
      </Form>
    </Container>
  );
}

TripPopup.propTypes = {
  trip: PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
    level: PropTypes.oneOf(['easy', 'moderate', 'difficult']).isRequired,
    price: PropTypes.number.isRequired,
  }),

  onClose: PropTypes.func.isRequired,
};
