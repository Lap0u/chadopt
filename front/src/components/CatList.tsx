import React from 'react';
import { Cat } from '../dto/CatDto';
import CatCard from './CatCard';

const CatList = ({
  cats,
  isAdmin,
  isFavorite,
}: {
  cats: Cat[];
  isAdmin: boolean;
  isFavorite: boolean;
}) => {
  if (!cats || cats.length === 0) {
    return <div>No cats available</div>;
  }
  const filteredCats = isFavorite ? cats.filter((cat) => cat.favorite) : cats;
  return (
    <div className="mt-16 grid grid-cols-1 sm:grid-cols-4 w-full justify-center gap-y-8">
      {filteredCats.map((cat) => (
        <CatCard key={cat.id} cat={cat} isAdmin={isAdmin} />
      ))}
    </div>
  );
};

export default CatList;
