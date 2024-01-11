import { useEffect, useState } from 'react';
import axios from 'axios';
import { UserDto } from '../dtos/userDto';

export const useUser = () => {
  const [user, setUser] = useState<UserDto | null>(null);

  useEffect(() => {
    const getUser = async () => {
      const token = localStorage.getItem('token');
      try {
        const { data } = await axios.get('http://localhost:4000/auth/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(data);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, []);

  return { user };
};
