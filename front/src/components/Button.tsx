import React from 'react';

type ButtonProps = {
  onClick: () => void;
  text: string;
};

const Button = ({ onClick, text }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="w-full bg-[#2a3749] hover:text-[#1F2937] hover:bg-white transition-colors ease-in-out text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
      {text}
    </button>
  );
};

export default Button;
