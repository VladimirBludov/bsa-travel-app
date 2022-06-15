import PropTypes from 'prop-types';
import { Form, InputStyled, Section, Select } from './Filter.styles';

export default function Filter({ setSearchParams, filter, duration, level }) {
  const handleChange = ({ target: { name, value } }) => {
    const params = {};

    if (filter) params.filter = filter;
    if (duration) params.duration = duration;
    if (level) params.level = level;

    switch (name) {
      case 'filter':
        params.filter = value;
        break;
      case 'duration':
        params.duration = value;
        break;
      case 'level':
        params.level = value;
        break;

      default:
        break;
    }

    setSearchParams(params);
  };

  return (
    <Section>
      <h2 className="visually-hidden">Trips filter</h2>
      <Form autoComplete="off">
        <InputStyled
          title="Search by name"
          hidden
          name="filter"
          type="search"
          value={filter}
          onChange={handleChange}
          placeholder="search by title"
        />
        <label>
          <span className="visually-hidden">Search by duration</span>
          <Select name="duration" value={duration} onChange={handleChange}>
            <option value="">duration</option>
            <option value="0_x_5">&lt; 5 days</option>
            <option value="5_x_10">&lt; 10 days</option>
            <option value="10_x">&ge; 10 days</option>
          </Select>
        </label>
        <label>
          <span className="visually-hidden">Search by level</span>
          <Select name="level" value={level} onChange={handleChange}>
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
  setSearchParams: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
};
