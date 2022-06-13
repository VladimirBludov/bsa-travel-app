import PropTypes from 'prop-types';
import { useEffect, useReducer, useRef } from 'react';
import { Form, InputStyled, Section, Select } from './Filter.styles';

function filterReducer(state, action) {
  switch (action.type) {
    case 'changeFilter':
      return { ...state, filter: action.payload };
    case 'changeDuration':
      return { ...state, duration: action.payload };
    case 'changeLevel':
      return { ...state, level: action.payload };

    default:
      throw new Error(`Unsupported action type ${action.type}`);
  }
}

export default function Filter({ setSearchParams, initialState }) {
  const [state, dispatch] = useReducer(filterReducer, initialState);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const params = {};

    for (let [key, value] of Object.entries(state)) {
      if (value) {
        params[key] = value;
      }
    }

    setSearchParams(params);
  }, [setSearchParams, state]);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'filter':
        return dispatch({ type: 'changeFilter', payload: value });
      case 'duration':
        return dispatch({ type: 'changeDuration', payload: value });
      case 'level':
        return dispatch({ type: 'changeLevel', payload: value });

      default:
        return;
    }
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
          value={state.filter}
          onChange={handleChange}
          placeholder="search by title"
        />
        <label>
          <span className="visually-hidden">Search by duration</span>
          <Select
            name="duration"
            value={state.duration}
            onChange={handleChange}
          >
            <option value="">duration</option>
            <option value="0_x_5">&lt; 5 days</option>
            <option value="5_x_10">&lt; 10 days</option>
            <option value="10_x">&ge; 10 days</option>
          </Select>
        </label>
        <label>
          <span className="visually-hidden">Search by level</span>
          <Select name="level" value={state.level} onChange={handleChange}>
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
  initialState: PropTypes.shape({
    filter: PropTypes.string,
    duration: PropTypes.string,
    level: PropTypes.string,
  }),
};
