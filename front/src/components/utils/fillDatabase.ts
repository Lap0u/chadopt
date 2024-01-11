export const fillDatabase = async () => {
  await fetch('http://localhost:4000/cats/fill', {
    method: 'POST',
  });
};
