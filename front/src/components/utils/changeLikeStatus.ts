import axios from 'axios';
import { Cat } from '../../dto/CatDto';

export async function changeLikeStatus(
  cat: Cat,
  isLiked: boolean
): Promise<void> {
  try {
    const newStatus = isLiked ? cat.favorite + 1 : cat.favorite - 1;
    const newCat = { ...cat, favorite: newStatus };
    const response = await axios.put(
      `http://localhost:4000/cats/${cat.id}`,
      newCat
    );
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}
