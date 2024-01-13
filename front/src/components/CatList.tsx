import React from 'react';
import { Cat } from '../dto/CatDto';
import CatModal from './CatModal';

const CatList = ({ cats }: { cats: Cat[] }) => {
  if (!cats || cats.length === 0) {
    return <div>No cats available</div>;
  }

  return (
    <div className="grid grid-cols-2 w-full">
      {cats.map((cat) => (
        <CatModal key={cat.id} cat={cat} />
      ))}
    </div>
  );
};

export default CatList;
