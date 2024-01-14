import React, { ChangeEvent } from 'react';

interface MyInputProps {
  label: string;
  value: string;
  type: string;
  onChange: (value: string) => void;
  isAdmin: boolean;
}

const MyInput: React.FC<MyInputProps> = ({
  label,
  value,
  type,
  onChange,
  isAdmin,
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <>
      <label className="block text-white text-sm font-bold mb-2">{label}</label>
      <input
        disabled={!isAdmin}
        type={type}
        value={value}
        onChange={handleChange}
        className="shadow appearance-none bg-gray-800 border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
      />
    </>
  );
};

export default MyInput;
