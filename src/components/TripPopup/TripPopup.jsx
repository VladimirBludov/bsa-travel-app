import Button from 'components/Button';
import Input from 'components/Input';
import TripInfo from 'components/TripInfo';
import PropTypes from 'prop-types';
import { CloseBtn, Container, Form, Total, Value } from './TripPopup.styles';

export default function TripPopup({ trip, onClose }) {
  const { title, duration, level, price } = trip;

  return (
    <Container>
      <CloseBtn type="button" onClick={() => onClose()}>
        ×
      </CloseBtn>
      <Form autoComplete="off">
        <TripInfo title={title} duration={duration} level={level} />
        <Input title="Date" name="date" type="date" required />
        <Input
          title="Number of guests"
          name="guests"
          type="number"
          min="1"
          max="10"
          value="1"
          required
        />
        <Total>
          Total: <Value>{price}$</Value>
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
