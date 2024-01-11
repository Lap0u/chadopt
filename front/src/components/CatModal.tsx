import React, { useState } from 'react';
import { Cat } from '../dto/CatDto';
import Button from './Button';
import MyInput from './MyInput';

type CatModalProps = {
  cat: Cat;
  isAdmin?: boolean;
};

const CatModal: React.FC<CatModalProps> = ({ cat, isAdmin = false }) => {
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
  };

  return (
    <div className="relative top-20 m-4 p-5 border w-auto shadow-lg rounded-md bg-gray-800 text-white md:mx-[500px] flex flex-col items-center">
      <div className="flex justify-evenly items-center gap-x w-full">
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
              label="city"
              value={city}
              type="text"
              onChange={setCity}
            />
          </div>
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
        <div className="w-36 flex justify-center">
          <Button onClick={handleUpdateCat} text="Update" />
        </div>
      )}
    </div>
  );
};

export default CatModal;
