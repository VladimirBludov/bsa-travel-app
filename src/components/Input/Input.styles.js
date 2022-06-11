import styled from 'styled-components';

export const InputContainer = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const InputTitle = styled.span`
  font-size: var(--font-size-100);
  line-height: 1;
`;

export const InputStyled = styled.input`
  min-width: 160px;
  min-height: 45px;
  padding: 10px 15px;
  font-size: var(--font-size-300);
  background-color: var(--color-blue-100);
  border: none;
  border-radius: 1px;
  cursor: pointer;
  appearance: none;

  &::placeholder {
    color: var(--color-blue-400);
    opacity: 0.4;
  }
`;
