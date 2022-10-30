import { ButonLoad, ButtonBlock } from './Button.style';
import PropTypes from 'prop-types';

const Button = ({ handlerButton }) => {
  return (
    <ButtonBlock>
      <ButonLoad onClick={handlerButton}>Load more</ButonLoad>
    </ButtonBlock>
  );
};

Button.propTypes = {
  handlerButton: PropTypes.func.isRequired,
};

export default Button;
