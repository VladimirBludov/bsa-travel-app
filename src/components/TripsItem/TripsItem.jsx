import PropTypes from 'prop-types';
import TripInfo from 'components/TripInfo';
import { Card, Content, DiscoverBtn, Picture } from './TripsItem.styles';
import TripPrice from 'components/TripPrice';

export default function TripsItem({ trip }) {
  const { id, image, title, duration, level, price } = trip;
  return (
    <Card>
      <Picture src={image} alt="trip placeholder" />
      <Content>
        <TripInfo title={title} duration={duration} level={level} />
        <TripPrice price={price} />
      </Content>
      <DiscoverBtn to={`/trip/${id}`}>Discover a trip</DiscoverBtn>
    </Card>
  );
}

TripsItem.propTypes = {
  trip: PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
    level: PropTypes.oneOf(['easy', 'moderate', 'difficult']).isRequired,
    price: PropTypes.number.isRequired,
  }),
};
