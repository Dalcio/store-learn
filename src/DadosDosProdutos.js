import produtoImg from "./components/img/produtos/produto-3.png";

const produtos = [
  {
    id: 0,
    img: produtoImg,
    nome: "produto 1",
    preco: 150,
    info:
      "Esse labore incididunt esse in reprehenderit sit officia cupidatat. Sunt deserunt enim aliquip non pariatur quis mollit sit sunt do voluptate qui eu magna. Labore tempor anim aliquip irure dolor. Laboris aliquip sit nulla voluptate duis esse velit quis culpa. Dolore pariatur non do nisi ex sunt sint esse dolore dolore.",
    inCart: false,
    quantity: 0,
  },
  {
    id: 1,
    img: produtoImg,
    nome: "produto 2",
    preco: 300,
    info:
      "In reprehenderit anim mollit aliquip irure tempor nisi et est nostrud eu. Sit duis aute velit culpa. Excepteur nostrud occaecat irure adipisicing Lorem. Dolore quis proident commodo culpa sunt pariatur culpa. Irure est veniam consectetur mollit veniam id proident ad laborum cupidatat ullamco. Officia magna sint dolore consequat commodo anim veniam nisi reprehenderit in ullamco voluptate mollit.",
    inCart: false,
    quantity: 0,
    total: 0,
  },
  {
    id: 2,
    img: produtoImg,
    nome: "produto 3",
    preco: 10,
    info: "Est duis in sit reprehenderit mollit eu sint esse sint laborum.",
    inCart: false,
    quantity: 0,
  },
  {
    id: 3,
    img: produtoImg,
    nome: "produto 4",
    preco: 1250,
    info:
      "Velit tempor ad adipisicing labore pariatur anim nostrud ut cupidatat deserunt incididunt ex quis.",
    inCart: false,
    quantity: 0,
  },
  {
    id: 4,
    img: produtoImg,
    nome: "produto 5",
    preco: 3150,
    info: "Sint non id ad ad.",
    inCart: false,
    quantity: 0,
  },
];

const produtosFeedback = [
  {
    id: 0,
    name: "",
    img: "",
    feedback: "",
  },
];

export { produtos, produtosFeedback };
