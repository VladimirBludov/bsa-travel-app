import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 50px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  max-width: 340px;
  margin-bottom: 30px;
`;

export const Title = styled.h2`
  margin: 0 0 20px;
  font-size: var(--font-size-400);
  text-align: center;
`;

export const SignUnLink = styled(Link)`
  color: var(--color-blue-200);
  transition: 0.1s color ease;

  &:hover {
    color: var(--color-blue-300);
  }
`;
