import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button';
import { fillDatabase } from '../utils/fillDatabase';
import CatModal from '../CatModal';
import { Cat } from '../../dto/CatDto';
import useCats from '../../hooks/useCats';
import CatList from '../CatList';
import { emptyDatabase } from '../utils/emptyDatabse';

const Admin = () => {
  const mock: Cat = {
    id: 1,
    name: 'test',
    birthdate: '2021-01-01',
    race: 'test',
    gender: 'test',
    city: 'test',
    description: 'test',
    photo: 'test',
    adoptionStatus: 'test',
  };

  const nav = useNavigate();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const cats = useCats();
  return (
    <div className="relative flex flex-col h-full w-full justify-start pt-24">
      <div className="absolute top-4 right-4">
        <Button onClick={() => nav('/cats')} text="ClientSide" />
      </div>
      <div className="flex flex-col sm:flex-row gap-y-4 justify-center items-start gap-x-6 w-48 md:w-[400px] m-auto h-full">
        <Button onClick={async () => await emptyDatabase()} text="Vider" />
        <Button onClick={async () => await fillDatabase()} text="Préremplir" />
        <Button onClick={() => setIsModalVisible(true)} text="Ajouter" />
        <Button onClick={() => setIsModalVisible(false)} text="Visualiser" />
      </div>
      <>
        {isModalVisible ? (
          <CatModal cat={mock} isAdmin={true} />
        ) : (
          <CatList cats={cats} isAdmin={true} />
        )}
      </>
    </div>
  );
};

export default Admin;
