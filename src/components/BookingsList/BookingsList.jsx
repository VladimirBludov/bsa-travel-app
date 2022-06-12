import BookingsItem from 'components/BookingsItem';
import PropTypes from 'prop-types';
import { List } from './BookingsList.styles';

export default function BookingsList({ bookings, updateBookings }) {
  const removeBooking = id => {
    const updatedBookings = bookings.filter(booking => booking.id !== id);

    updateBookings(updatedBookings);
  };

  const sortedBookings = [...bookings].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  return (
    <List>
      {sortedBookings.map(booking => (
        <BookingsItem
          key={booking.id}
          booking={booking}
          removeBooking={removeBooking}
        />
      ))}
    </List>
  );
}

BookingsList.propTypes = {
  bookings: PropTypes.arrayOf(PropTypes.object),
  updateBookings: PropTypes.func.isRequired,
};
