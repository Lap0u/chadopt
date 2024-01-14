import React, { useState } from 'react';
import { Cat } from '../dto/CatDto';
import CatModal from './CatModal';

type CatCardProps = {
  cat: Cat;
  isAdmin: boolean;
};

const CatCard = ({ cat, isAdmin }: CatCardProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  return (
    <>
      {isModalVisible ? (
        <CatModal
          isAdmin={isAdmin}
          cat={cat}
          closeModal={() => setIsModalVisible(false)}
        />
      ) : (
        <div
          className="bg-gray-800 rounded-lg shadow-md p-4 h-96 w-64 flex flex-col gap-y-4 justify-center items-center mx-auto"
          onClick={() => showModal()}>
          <img
            src={cat.photo}
            alt={cat.name}
            className="w-32 h-32 rounded-full mx-auto mb-4"
          />
          <h2 className="text-xl font-semibold text-center">{cat.name}</h2>
          <div className="w-full flex justify-evenly">
            <div>Like</div>
            <div>Adopte</div>
          </div>
          <div>Status</div>
        </div>
      )}
    </>
  );
};

export default CatCard;
