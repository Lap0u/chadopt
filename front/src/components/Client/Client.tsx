import React from 'react';
import Button from '../Button';
import { useNavigate } from 'react-router-dom';

const Client = () => {
  const nav = useNavigate();
  return (
    <div className="relative">
      <div className="absolute top-12 right-12">
        <Button onClick={() => nav('/admin')} text="Admin" />
      </div>
      Client
    </div>
  );
};

export default Client;
