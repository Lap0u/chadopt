import axios from 'axios';

async function deleteCat(id: number): Promise<void> {
  try {
    await axios.delete(`http://localhost:4000/cats/${id}`);
    console.log('Cat deleted successfully');
  } catch (error) {
    console.error('Error deleting cat:', error);
  }
}

export default deleteCat;
