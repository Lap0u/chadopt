import axios from 'axios';

const checkLogin = async (username: string, password: string) => {
  try {
    const { data } = await axios.post('http://localhost:4000/auth/login', {
      username,
      password,
    });
    localStorage.setItem('token', data.access_token);
    return data;
  } catch (error) {
    console.log(error);
    return { error: error.response.data.message };
  }
};

export default checkLogin;
