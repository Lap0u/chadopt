import axios from 'axios';
import { useEffect, useState } from 'react';

const useHello = () => {
  const [hello, setHello] = useState<string>('');
  useEffect(() => {
    const fetchHello = async () => {
      const response = await axios.get('http://localhost:4000');
      setHello(response.data);
    };
    fetchHello();
  }, []);
  return hello;
};

export default useHello;
