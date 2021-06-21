interface IMock {
  regex: RegExp;
  messages: string[];
}

const mocks: IMock[] = [
  {
    regex: /[a|ã]o$/,
    messages: [
      "Meu pau na sua mão",
      "Teu cu é o mar, meu pau o tubarão",
      "Teu cu é o aeroporto, meu pau o avião",
      "Teu cu é o morro, meu pau é o complexo do alemão",
    ],
  },
  {
    regex: /ina$/,
    messages: ["Tomate cru é vitamina, como você e sua prima"],
  },
  {
    regex: /exo$/,
    messages: [
      "Teu cu é o Moonwalk, meu pau é o Michael Jackson",
      "Teu cu é o espelho, o meu pau o reflexo",
    ],
  },
  {
    regex: /oca$/,
    messages: ["Meu pau na sua boca"],
  },
  {
    regex: /uca$/,
    messages: ["Meu pau que te cutuca"],
  },
  {
    regex: /ola$/,
    messages: ["Teu cu nas minha bola"],
  },
  {
    regex: /ido$/,
    messages: ["Meu pau no teu ouvido"],
  },
  {
    regex: /dani$/,
    messages: ["A danificada que eu dei no seu cu"],
  },
  {
    regex: /uro$/,
    messages: ["Meu pau no teu furo"],
  },
  {
    regex: /ando$/,
    messages: ["Mama me olhando"],
  },
  {
    regex: /eio$/,
    messages: ["Teu cu na reta meu pau sem freio"],
  },
  {
    regex: /inho$/,
    messages: ["Me mama de canudinho"],
  },
  {
    regex: /ente$/,
    messages: ["Meu pau na sua mente"],
  },
  {
    regex: /ado$/,
    messages: ["Meu pau entrando, seu cu danificado"],
  },
  {
    regex: /[ê|e]ncia$/,
    messages: ["Meu pau é o Einstein, seu cu a ciência "],
  },
  {
    regex: /nocu$/,
    messages: [
      "Tomar no cu é verde, verde é bambu, bola na rede, meu pau no seu cu",
    ],
  },
  {
    regex: /osta$/,
    messages: ["Vira o cu que eu tiro a bosta"],
  },
  {
    regex: /angue$/,
    messages: ["Vira o cu que eu tiro sangue"],
  },
  {
    regex: /ete$/,
    messages: [
      "Seu cu é o ouvido, meu pau é o cotonete",
      "Seu cu é o funkeiro, meu pau é o Juliet",
      "Seu cu é o Fiuk, meu pau é a Juliette",
      "Seu cu é a TV, meu pau é o vídeocassete",
      "Seu cu é a estrada, meu pau é a camionete",
      "Meu pau é a mortadela, seu cu é a baguete",
      "Meu pau é o rei, seu cu é o valete",
    ],
  },
  {
    regex: /cala\sboca/,
    messages: ["Cala boca já morreu quem manda na minha boca sou eu"],
  },
];

export default mocks;
