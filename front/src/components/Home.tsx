import React from 'react';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import AdopteLogo from './AdopteLogo';

const Home = () => {
  const nav = useNavigate();
  return (
    <div className="w-screen h-screen flex flex-col gap-y-24 justify-center items-center">
      <div className="flex flex-col gap-y-4 items-center justify-center">
        <AdopteLogo />
        <div className="text-2xl text-center w-[90%]">
          Le site de référence pour trouver votre future boule de poile
        </div>
      </div>
      <div className="flex justify-center gap-x-20 ">
        <Button onClick={() => nav('/login')} text="Login" />
        <Button onClick={() => nav('/register')} text="Register" />
      </div>
    </div>
  );
};

export default Home;
