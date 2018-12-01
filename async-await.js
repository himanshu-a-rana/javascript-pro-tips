const random = () => {
  return Promise.resolve(Math.random());
};

// Bad Promise Code
const sumRandomAsycNums = () => {
  let first;
  let second;
  let third;

  return random()
    .then(v => {
      first = v;
      return random();
    })
    .then(v => {
      second = v;
      return random();
    })
    .then(v => {
      third = v;
      return first + second + third;
    })
    .then(v => {
      console.log(`Result ${v}`);
    });
};

// Good Promise Code
const sumRandomAsycNums = async () => {
  const first = await random();
  const second = await random();
  const third = await random();

  console.log(`Result ${first + second + third}`);
};
