import { useState } from 'react';
import bookingsDB from '../../db/booking-list';
import BookingsList from 'components/BookingsList';
import { Container } from './BookingsPage.styles';

const initialBookings = bookingsDB;

export default function BookingsPage() {
  const [bookings, setBookings] = useState(initialBookings);

  return (
    <Container>
      <BookingsList
        bookings={bookings}
        updateBookings={bookings => setBookings(bookings)}
      />
    </Container>
  );
}
