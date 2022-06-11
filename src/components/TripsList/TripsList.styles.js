import styled from 'styled-components';

export const TripsContainer = styled.section`
  padding: 60px 20px;
`;

export const Trips = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, auto));
  justify-content: center;
  gap: 30px;
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 0;
  list-style: none;
`;
