import PropTypes from 'prop-types';
import TripInfo from 'components/TripInfo';
import { Card, Content, DiscoverBtn, Picture, Value } from './TripsItem.styles';

export default function TripsItem({ trip }) {
  const { image, title, duration, level, price } = trip;
  return (
    <Card>
      <Picture src={image} alt="trip placeholder" />
      <Content>
        <TripInfo title={title} duration={duration} level={level} />
        <div>
          <span>Price</span>
          <Value>{price} $</Value>
        </div>
      </Content>
      <DiscoverBtn to="/trip">Discover a trip</DiscoverBtn>
    </Card>
  );
}

TripsItem.propTypes = {
  trip: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
    level: PropTypes.oneOf(['easy', 'moderate', 'difficult']).isRequired,
    price: PropTypes.number.isRequired,
  }),
};
