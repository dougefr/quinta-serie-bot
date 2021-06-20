interface IMock {
  regex: RegExp;
  message: string;
}

const mocks: IMock[] = [
  {
    regex: /ão$/,
    message: "Seu cu é o mar, meu pau o tubarão",
  },
  {
    regex: /ina$/,
    message: "Tomate cru é vitamina, como você e sua prima",
  },
];

export default mocks;
