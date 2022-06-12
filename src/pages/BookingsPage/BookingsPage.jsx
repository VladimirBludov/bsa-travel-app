import BookingsList from 'components/BookingsList';
import { Container } from './BookingsPage.styles';

export default function BookingsPage({ bookings }) {
  return (
    <Container>
      <BookingsList bookings={bookings} />
    </Container>
  );
}
