import React from 'react';
import Button from '../Button';
import { useNavigate } from 'react-router-dom';
import CatList from '../CatList';
import useCats from '../../hooks/useCats';

const Client = () => {
  const nav = useNavigate();
  const cats = useCats();

  return (
    <div className="relative pt-24">
      <div className="absolute top-12 right-12">
        <Button onClick={() => nav('/admin')} text="Admin" />
      </div>
      <CatList cats={cats} isAdmin={false} />
    </div>
  );
};

export default Client;
