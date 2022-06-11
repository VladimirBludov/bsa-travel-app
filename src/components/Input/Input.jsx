import PropTypes from 'prop-types';
import { InputContainer, InputStyled, InputTitle } from './Input.styles';

export default function Input({ title = '', ...attrs }) {
  return (
    <InputContainer>
      <InputTitle>{title}</InputTitle>
      <InputStyled {...attrs} />
    </InputContainer>
  );
}

Input.propTypes = {
  title: PropTypes.string,
};
