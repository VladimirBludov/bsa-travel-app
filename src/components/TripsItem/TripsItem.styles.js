import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  max-width: 320px;
  background-color: var(--color-white);
  border-radius: 1px;
  box-shadow: var(--shadow);
`;
export const Picture = styled.img`
  height: 210px;
  object-fit: cover;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px 30px;
`;

export const DiscoverBtn = styled(Link)`
  display: block;
  width: 100%;
  min-height: 45px;
  padding: 10px 15px;
  color: var(--color-white);
  font-size: var(--font-size-200);
  text-align: center;
  text-decoration: none;
  background-color: var(--color-blue-200);
  border: none;
  border-radius: 1px;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: var(--color-blue-300);
  }
`;
