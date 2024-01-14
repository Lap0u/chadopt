import axios from 'axios';
import { Cat } from '../../dto/CatDto';

export async function changeAdoptionStatus(
  cat: Cat,
  isAdoption: boolean
): Promise<void> {
  try {
    const newStatus = isAdoption ? 'demande en cours' : 'Adoptable';
    const newCat = { ...cat, adoptionStatus: newStatus };
    const response = await axios.put(
      `http://localhost:4000/cats/${cat.id}`,
      newCat
    );
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}
