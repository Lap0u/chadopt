import axios from 'axios';
import { Cat } from '../../dto/CatDto';

export async function updateCat(cat: Cat): Promise<void> {
  try {
    const response = await axios.put(
      `http://localhost:4000/cats/${cat.id}`,
      cat
    );
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}
