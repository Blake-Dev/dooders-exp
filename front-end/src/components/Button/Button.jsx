/* eslint-disable react/prop-types */
import './Button.css';

function Button({ text, onClick, color }) {
  return <button className={`Button Button-${color}`} onClick={onClick}>{text}</button>;
}

export default Button;
