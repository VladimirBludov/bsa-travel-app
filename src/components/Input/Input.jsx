import PropTypes from 'prop-types';
import { InputContainer, InputStyled, InputTitle } from './Input.styles';

export default function Input({ title = '', hidden = false, ...attrs }) {
  const className = hidden ? 'visually-hidden' : '';

  return (
    <InputContainer>
      <InputTitle className={className}>{title}</InputTitle>
      <InputStyled {...attrs} />
    </InputContainer>
  );
}

Input.propTypes = {
  title: PropTypes.string,
};
