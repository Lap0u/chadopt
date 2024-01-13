import { useEffect, useState } from 'react';
import { Cat } from '../dto/CatDto';
import axios from 'axios';

const useCats = () => {
  const [cats, setCats] = useState<Cat[]>([]);

  useEffect(() => {
    const fetchCats = async () => {
      const cats = await axios.get('http://localhost:4000/cats');
      setCats(cats.data);
    };
    fetchCats();
  }, []);

  return cats;
};

export default useCats;
