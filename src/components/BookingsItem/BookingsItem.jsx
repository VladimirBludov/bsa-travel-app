import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Moment from 'moment';
import { Booking, CancelBtn, Title } from './BookingsItem.styles';

export default function BookingsItem({ booking }) {
  const {
    trip: { title },
    guests,
    date,
    totalPrice,
  } = booking;

  const [formatDate, setFormatDate] = useState('');

  useEffect(() => {
    setFormatDate(Moment(date).format('DD.MM.YYYY'));
  }, [date]);

  return (
    <Booking>
      <Title>{title}</Title>
      <span>{guests} guests</span>
      <span>{formatDate}</span>
      <span>{totalPrice} $</span>
      <CancelBtn type="button" title="Cancel booking">
        <span className="visually-hidden">Cancel booking</span>×
      </CancelBtn>
    </Booking>
  );
}

BookingsItem.propTypes = {
  booking: PropTypes.shape({
    guests: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    totalPrice: PropTypes.number.isRequired,
    trip: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }),
  }),
};
