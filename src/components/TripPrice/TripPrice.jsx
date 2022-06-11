import PropTypes from 'prop-types';
import { Value } from './TripPrice.styles';

export default function TripPrice({ price }) {
  return (
    <div>
      <span>Price</span>
      <Value>{price} $</Value>
    </div>
  );
}
TripPrice.propTypes = {
  price: PropTypes.number.isRequired,
};
