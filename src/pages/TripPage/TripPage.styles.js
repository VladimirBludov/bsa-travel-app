import Button from 'components/Button';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 60px 20px;
`;

export const Trip = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px 50px;
  width: 100%;
  max-width: var(--container-width);
  margin: 0 auto;
`;

export const Picture = styled.img`
  width: 400px;
  height: 400px;
  object-fit: cover;
`;

export const Content = styled.div`
  display: flex;
  flex: 1 1 400px;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
  padding-top: 20px;
`;

export const Description = styled.div`
  opacity: 0.7;
`;

export const BookBtn = styled(Button)`
  max-width: 200px;
`;
