
export const getRandomBetween = (min, max) => (Math.floor(Math.random() * (max - min + 1)) + min);

export const maxLength = (text) => {
    return (text =
      text.length < 140 ? text : text.split('').join('').slice(0, 137) + '...');
  };
 