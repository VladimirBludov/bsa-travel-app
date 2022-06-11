import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  flex: 1;
  max-width: 380px;
  padding: 25px 40px 30px;
  background-color: var(--color-white);
  box-shadow: var(--shadow);
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 15px;
  right: 25px;
  padding: 0;
  font-weight: 300;
  font-size: var(--font-size-400);
  line-height: 1;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  opacity: 0.7;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Total = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 5px;
  padding-top: 15px;
  border-top: 1px solid var(--color-gray);
`;

export const Value = styled.output`
  font-weight: 600;
  font-size: var(--font-size-400);
`;
