import axios from 'axios';
import { Cat } from '../../dto/CatDto';
import { updateCat } from './updateCat';

export async function changeLikeStatus(
  cat: Cat,
  isLiked: boolean
): Promise<void> {
  const newStatus = isLiked ? cat.favorite + 1 : cat.favorite - 1;
  const newCat = { ...cat, favorite: newStatus };
  updateCat(newCat);
}
