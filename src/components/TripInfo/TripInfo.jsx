import PropTypes from 'prop-types';
import { Container, Content, Duration, Level, Title } from './TripInfo.styles';

export default function TripInfo({ title, duration, level }) {
  return (
    <Container>
      <Title>{title}</Title>
      <Content>
        <Duration>
          <strong>{duration}</strong> days
        </Duration>
        <Level>{level}</Level>
      </Content>
    </Container>
  );
}

TripInfo.propTypes = {
  title: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  level: PropTypes.string.isRequired,
};
