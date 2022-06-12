import PropTypes from 'prop-types';
import { Form, InputStyled, Section, Select } from './Filter.styles';

export default function Filter({
  filter,
  duration,
  level,
  getFilter,
  getDuration,
  getLevel,
}) {
  return (
    <Section>
      <h2 className="visually-hidden">Trips filter</h2>
      <Form autoComplete="off">
        <InputStyled
          title="Search by name"
          hidden
          name="search"
          type="search"
          value={filter}
          onChange={getFilter}
          placeholder="search by title"
        />
        <label>
          <span className="visually-hidden">Search by duration</span>
          <Select name="duration" value={duration} onChange={getDuration}>
            <option value="">duration</option>
            <option value="0_x_5">&lt; 5 days</option>
            <option value="5_x_10">&lt; 10 days</option>
            <option value="10_x">&ge; 10 days</option>
          </Select>
        </label>
        <label>
          <span className="visually-hidden">Search by level</span>
          <Select name="level" value={level} onChange={getLevel}>
            <option value="">level</option>
            <option value="easy">easy</option>
            <option value="moderate">moderate</option>
            <option value="difficult">difficult</option>
          </Select>
        </label>
      </Form>
    </Section>
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
  getFilter: PropTypes.func.isRequired,
  getDuration: PropTypes.func.isRequired,
  getLevel: PropTypes.func.isRequired,
};
