import PropTypes from 'prop-types';
import { ButtonStyled } from './Button.styles';

export default function Button({ text = 'Button', ...attrs }) {
  return <ButtonStyled {...attrs}>{text}</ButtonStyled>;
}

Button.propTypes = {
  text: PropTypes.string,
};
