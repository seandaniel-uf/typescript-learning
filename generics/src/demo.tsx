// arrow functions in react NEED a trailing comma after the type parameter

const getRandomElement2 = <T,>(list: T[]): T => {
  const randIdx = Math.floor(Math.random() * list.length);
  return list[randIdx];
};
