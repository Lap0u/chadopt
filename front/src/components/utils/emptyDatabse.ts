export const emptyDatabase = async () => {
  await fetch('http://localhost:4000/cats/empty', {
    method: 'POST',
  });
};
