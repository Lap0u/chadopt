import React, { useState } from 'react';
import { Cat } from '../dto/CatDto';
import CatModal from './CatModal';
import { Icon } from '@iconify/react';
import { changeAdoptionStatus } from './utils/changeAdoptionStatus';
import { changeLikeStatus } from './utils/changeLikeStatus';

type CatCardProps = {
  cat: Cat;
  isAdmin: boolean;
};

const CatCard = ({ cat, isAdmin }: CatCardProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isAdoption, setIsAdoption] = useState(false);
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
            {isLiked ? (
              <div className="flex justify-center gap-x-1">
                <Icon
                  className="hover:cursor-pointer"
                  onClick={(event) => {
                    event.stopPropagation();
                    const newLiked = !isLiked;
                    setIsLiked(newLiked);
                    changeLikeStatus(cat, newLiked);
                  }}
                  icon="material-symbols-light:star"
                  style={{ fontSize: '36px' }}
                />
                <div className="text-sm">{`(${cat.favorite})`}</div>
              </div>
            ) : (
              <div className="flex justify-center gap-x-1">
                <Icon
                  className="hover:cursor-pointer"
                  onClick={(event) => {
                    event.stopPropagation();
                    const newLiked = !isLiked;
                    setIsLiked(newLiked);
                    changeLikeStatus(cat, newLiked);
                  }}
                  icon="material-symbols-light:star-outline"
                  style={{ fontSize: '36px' }}
                />
                <div className="text-sm">{`(${cat.favorite})`}</div>
              </div>
            )}
            {isAdoption ? (
              <Icon
                className="hover:cursor-pointer"
                onClick={(event) => {
                  const revAdoption = !isAdoption;
                  event.stopPropagation();
                  setIsAdoption(revAdoption);
                  changeAdoptionStatus(cat, revAdoption);
                }}
                icon="ph:heart-fill"
                style={{ fontSize: '36px' }}
              />
            ) : (
              <Icon
                className="hover:cursor-pointer"
                onClick={(event) => {
                  const revAdoption = !isAdoption;

                  event.stopPropagation();
                  setIsAdoption(revAdoption);
                  changeAdoptionStatus(cat, revAdoption);
                }}
                icon="ph:heart-thin"
                style={{ fontSize: '36px' }}
              />
            )}
          </div>
          <div>{cat.adoptionStatus}</div>
        </div>
      )}
    </>
  );
};

export default CatCard;
