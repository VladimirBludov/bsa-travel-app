import styled from 'styled-components';

export const Booking = styled.li`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 10px 40px;
  width: 100%;
  padding: 15px 25px;
  background-color: var(--color-blue-100);
  border-left: 4px solid var(--color-blue-200);
  border-radius: 1px;
`;

export const Title = styled.h3`
  width: 100%;
  margin: 0;
  font-weight: 600;
  font-size: var(--font-size-400);
  font-family: 'Playfair Display', serif;
  line-height: 1;
`;

export const CancelBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 15px;
  padding: 0;
  font-weight: 300;
  font-size: var(--font-size-400);
  line-height: 1;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  opacity: 0.5;
`;
