import { BUTTON_VARIANT } from './constants'

import style from './Button.module.css'

const Button = (props) => {
  const { text, variant = BUTTON_VARIANT.PRIMARY, ...otherProps } = props;

  return (
    <button variant={variant} className={style.Button} {...otherProps}>
      {text}
    </button>
  );
};

export { Button };
