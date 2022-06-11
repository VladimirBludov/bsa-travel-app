import { Form, InputStyled, Section, Select } from './Filter.styles';

export default function Filter() {
  return (
    <Section>
      <h2 className="visually-hidden">Trips filter</h2>
      <Form autoComplete="off">
        <InputStyled
          title="Search by name"
          hidden
          name="search"
          type="search"
          placeholder="search by title"
        />
        <label>
          <span className="visually-hidden">Search by duration</span>
          <Select name="duration">
            <option value="">duration</option>
            <option value="0_x_5">&lt; 5 days</option>
            <option value="5_x_10">&lt; 10 days</option>
            <option value="10_x">&ge; 10 days</option>
          </Select>
        </label>
        <label>
          <span className="visually-hidden">Search by level</span>
          <Select name="level">
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
