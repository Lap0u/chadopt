import React, { useState } from 'react';
import Button from '../Button';
import { useNavigate } from 'react-router-dom';
import CatList from '../CatList';
import useCats from '../../hooks/useCats';

const Client = () => {
  const nav = useNavigate();
  const [sort, setSort] = useState('name'); // ['name', 'city', 'adoptionStatus'
  const [isFavorite, setIsFavorite] = useState(false);
  const cats = useCats(sort);

  return (
    <div className="relative pt-24">
      <div className="absolute top-12 right-12">
        <Button onClick={() => nav('/admin')} text="Admin" />
      </div>
      <div className="flex justify-center w-full gap-x-24">
        <select
          className="bg-gray-800"
          onChange={(e) => setSort(e.target.value)}
          value={sort}>
          <option value="name">Sort by name</option>
          <option value="city">Sort by city</option>
          <option value="adoptionStatus">Sort by adoption Status</option>
        </select>
        <div className="w-36">
          <Button
            onClick={() => setIsFavorite(!isFavorite)}
            text={isFavorite ? 'Tous les chats' : 'Favoris'}
          />
        </div>
      </div>
      <CatList cats={cats} isAdmin={false} isFavorite={isFavorite} />
    </div>
  );
};

export default Client;
