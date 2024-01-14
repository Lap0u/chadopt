import axios from 'axios';
import { Cat } from '../../dto/CatDto';
import { updateCat } from './updateCat';

export async function changeAdoptionStatus(
  cat: Cat,
  isAdoption: boolean
): Promise<void> {
  const newStatus = isAdoption ? 'demande en cours' : 'Adoptable';
  const newCat = { ...cat, adoptionStatus: newStatus };
  updateCat(newCat);
}
