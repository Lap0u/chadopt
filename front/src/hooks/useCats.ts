import { useEffect, useState } from 'react';
import { Cat } from '../dto/CatDto';
import axios from 'axios';

const useCats = (sort?: string) => {
  if (!sort) sort = 'id';
  const [cats, setCats] = useState<Cat[]>([]);

  useEffect(() => {
    const fetchCats = async () => {
      const cats = await axios.get(
        `http://localhost:4000/cats/sort/${sort}`,
        {}
      );
      setCats(cats.data);
    };
    fetchCats();
  }, [sort]);

  return cats;
};

export default useCats;
