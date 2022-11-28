import * as React from 'react';

type BtnProps = {
  text: string;
  onClick: () => void;
  idName?:string;
};
const Button:React.FC<BtnProps> = ({ idName, text, onClick }: BtnProps) => {
  return (
    <button className='btn' onClick={onClick} id={idName}>
      {text}
    </button>
  );
};

export default Button;
