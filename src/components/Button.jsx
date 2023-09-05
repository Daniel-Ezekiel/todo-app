/* eslint-disable react/prop-types */
const Button = (props) => {
  return (
    <button
      type='button'
      className={props.classNames}
      onClick={props.handleClick}
    >
      {props.name}
    </button>
  );
};

export default Button;
