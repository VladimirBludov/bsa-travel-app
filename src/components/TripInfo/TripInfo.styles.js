import styled from 'styled-components';
import calendarIcon from '../../assets/icons/calendar.svg';

export const Container = styled.div`
  width: 100%;
  max-width: 300px;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--color-gray);
`;

export const Title = styled.h3`
  margin: 0 0 5px;
  font-weight: 600;
  font-size: var(--font-size-400);
  font-family: 'Playfair Display', serif;
`;

export const Content = styled.div`
  display: flex;
  font-weight: 300;
`;

export const Duration = styled.span`
  min-width: 120px;
  padding-left: 25px;
  background-image: url(${calendarIcon});
  background-repeat: no-repeat;
  background-position: 0 25%;
  background-size: 15px;
`;

export const Level = styled.span`
  &::before {
    content: '•';
    margin-right: 10px;
    color: var(--color-blue-200);
  }
`;
