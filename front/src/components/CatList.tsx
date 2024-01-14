import React from 'react';
import { Cat } from '../dto/CatDto';
import CatCard from './CatCard';

const CatList = ({ cats, isAdmin }: { cats: Cat[]; isAdmin: boolean }) => {
  if (!cats || cats.length === 0) {
    return <div>No cats available</div>;
  }

  return (
    <div className="mt-16 grid grid-cols-1 sm:grid-cols-4 w-full justify-center gap-y-8">
      {cats.map((cat) => (
        <CatCard key={cat.id} cat={cat} isAdmin={isAdmin} />
      ))}
    </div>
  );
};

export default CatList;
