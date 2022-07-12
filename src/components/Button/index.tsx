import './style.scss';
import  React  from 'react';
import { type } from 'os';

const Button = (props: { label: string; type?: "submit" | "button" | "reset" | undefined, onClick?: ()=> void}): JSX.Element=> {
  return (
    <button onClick={props.onClick} type={props.type} className="botao">
      {props.label}
    </button>
  );
}

export default Button;