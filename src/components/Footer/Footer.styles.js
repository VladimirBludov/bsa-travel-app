import styled from 'styled-components';
import { BsSuitHeartFill } from 'react-icons/bs';

export const FooterStyled = styled.footer`
  bottom: 0;
  padding: 30px 20px;
  color: var(--color-white);
  text-align: center;
  background-color: var(--color-blue-400);
`;

export const Text = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7px;
`;

export const Link = styled.a`
  color: var(--color-blue-200);
  text-decoration: none;
  transition: 0.1s color ease;

  &:hover {
    color: var(--color-blue-300);
  }
`;

export const IconHeart = styled(BsSuitHeartFill).attrs({
  size: 16,
  color: 'var(--color-white)',
  alt: 'heart icon',
})``;
