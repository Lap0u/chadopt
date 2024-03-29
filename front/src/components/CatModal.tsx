import React, { useState } from 'react';
import { Cat } from '../dto/CatDto';
import Button from './Button';
import MyInput from './MyInput';
import deleteCat from './utils/deleteCat';
import { updateCat } from './utils/updateCat';

type CatModalProps = {
  cat: Cat;
  isAdmin?: boolean;
  closeModal?: () => void;
};

const CatModal: React.FC<CatModalProps> = ({
  cat,
  isAdmin = false,
  closeModal = null,
}) => {
  const [name, setName] = useState(cat.name);
  const [birthdate, setBirthdate] = useState(cat.birthdate);
  const [race, setRace] = useState(cat.race);
  const [gender, setGender] = useState(cat.gender);
  const [city, setCity] = useState(cat.city);
  const [description, setDescription] = useState(cat.description);
  const [photo, setPhoto] = useState(cat.photo);
  const [adoptionStatus, setAdoptionStatus] = useState(cat.adoptionStatus);

  const handleUpdateCat = () => {
    const updatedCat: Cat = {
      ...cat,
      name,
      birthdate,
      race,
      gender,
      city,
      description,
      photo,
      adoptionStatus,
    };
    updateCat(updatedCat);
  };
  const handleDeleteCat = () => {
    deleteCat(cat.id);
  };

  return (
    <div className="bg-gray-800 rounded-lg shadow-md p-4 h-auto w-80 flex flex-col gap-y-4 justify-center items-center mx-auto relative">
      <div className="flex justify-center items-center gap-x w-full gap-x-4">
        <div className="md:flex flex-col">
          <div className="mb-4">
            <MyInput
              isAdmin={isAdmin}
              label="Name"
              value={name}
              type="text"
              onChange={setName}
            />
          </div>
          <div className="mb-4">
            <MyInput
              isAdmin={isAdmin}
              label="city"
              value={city}
              type="text"
              onChange={setCity}
            />
          </div>
          <div className="mb-4">
            <MyInput
              isAdmin={isAdmin}
              label="Race"
              value={race}
              type="text"
              onChange={setRace}
            />
          </div>

          <div className="mb-4">
            <MyInput
              isAdmin={isAdmin}
              label="Gender"
              value={gender}
              type="text"
              onChange={setGender}
            />
          </div>
        </div>
        <div className="md:flex flex-col">
          <div className="mb-4">
            <MyInput
              isAdmin={isAdmin}
              label="description"
              value={description}
              type="text"
              onChange={setDescription}
            />
          </div>

          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2">
              Birthdate:
            </label>
            <input
              type="date"
              disabled={!isAdmin}
              value={birthdate.toString()}
              onChange={(e) => setBirthdate(e.target.value)}
              className="shadow appearance-none bg-gray-800 border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <MyInput
              isAdmin={isAdmin}
              label="photo"
              value={photo}
              type="text"
              onChange={setPhoto}
            />
          </div>
          <div className="mb-4">
            <MyInput
              isAdmin={isAdmin}
              label="adoptionStatus"
              value={adoptionStatus}
              type="text"
              onChange={setAdoptionStatus}
            />
          </div>
        </div>
      </div>
      {isAdmin && (
        <div className="w-full flex justify-center gap-x-4">
          <Button onClick={handleUpdateCat} text="Update" />
          <Button onClick={handleDeleteCat} text="Supprimer" />
        </div>
      )}
      {closeModal && (
        <div className="absolute top-0 right-0">
          <Button text="X" onClick={() => closeModal()} />
        </div>
      )}
    </div>
  );
};

export default CatModal;
