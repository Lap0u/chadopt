import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button';
import { fillDatabase } from '../utils/fillDatabase';
import CatModal from '../CatModal';
import { Cat } from '../../dto/CatDto';

const Admin = () => {
  const mock: Cat = {
    //create a mock cat
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
  // const cats = useCats()
  return (
    <div className="relative flex flex-col h-full w-full justify-start pt-24">
      <div className="absolute top-4 right-4">
        <Button onClick={() => nav('/cats')} text="ClientSide" />
      </div>
      <div className="flex justify-center items-start gap-x-6 w-48 md:w-[400px] m-auto h-full">
        <Button onClick={async () => await fillDatabase()} text="Préremplir" />
        <Button onClick={() => nav('/admin/users')} text="Ajouter" />
      </div>
      <CatModal cat={mock} isAdmin={true} />
      {/* <CatList cats={cats} /> */}
    </div>
  );
};

export default Admin;
