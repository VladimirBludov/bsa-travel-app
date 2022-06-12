import BookingsItem from 'components/BookingsItem';
import PropTypes from 'prop-types';
import { List } from './BookingsList.styles';

export default function BookingsList({ bookings }) {
  return (
    <List>
      {bookings.map(booking => (
        <BookingsItem booking={booking} />
      ))}
    </List>
  );
}

BookingsList.propTypes = {
  bookings: PropTypes.arrayOf(PropTypes.object),
};
