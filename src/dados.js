import Prog from "./components/img/prog.png";
import Mickey from "./components/img/mickey.png";
import Destaque from "./components/img/destaque-44.png";
import HeadImg from "./components/img/head.png";
import Sexy from "./components/img/sexy.png";
import Sonic from "./components/img/sonic.png";
import nove from "./components/img/980246.jpg";

const cursos = [
  {
    id: 0,
    nome: "Lógica de Progamação",
    cover: Prog,
    info:
      "Ad deserunt aliquip voluptate velit mollit elit anim quis ea do. Ipsum commodo Lorem nulla velit. Anim adipisicing elit velit excepteur reprehenderit esse cillum ut esse deserunt commodo. Laboris non qui in esse aliqua do labore ex ad.",
    temas: [
      {
        tema: "Introdução",
        duracao: "10min:21s",
      },
      {
        tema: "Ea ex ullamco sunt pariatur fugiat officia est et do laborum.",
        duracao: "1h:10min:30s",
      },
      {
        tema:
          "Commodo ad laborum mollit tempor quis elit enim voluptate tempor.",
        duracao: "12min:03s",
      },
    ],
    preco: 5000,
    orientador: {
      img: Mickey,
      nivel: 3.8,
      nome: "Mickey Mouse",
    },
  },
  {
    id: 1,
    nome: "Matemática",
    cover: Destaque,
    info:
      "Cillum aute amet est nostrud ullamco non veniam dolore cupidatat tempor ea mollit aute pariatur. Dolor ullamco consequat nostrud amet. Eu pariatur id ea dolore ad est laborum ea nisi sit ea. Commodo eu ut eu adipisicing. Dolor deserunt magna eiusmod sit aliquip et fugiat. Elit et est in ex fugiat veniam pariatur laboris eu commodo consectetur nostrud ut.",
    temas: [
      {
        tema: "Introdução",
        duracao: "10min:21s",
      },
      {
        tema: "Ea ex ullamco sunt pariatur fugiat officia est et do laborum.",
        duracao: "1h:10min:30s",
      },
      {
        tema:
          "Commodo ad laborum mollit tempor quis elit enim voluptate tempor.",
        duracao: "12min:03s",
      },
    ],
    preco: 100,
    orientador: {
      img: HeadImg,
      nivel: 4,
      nome: "Songs Boy",
    },
  },
  {
    id: 2,
    nome: "Matemática Discreta",
    cover: nove,
    info:
      "Cillum aute amet est nostrud ullamco non veniam dolore cupidatat tempor ea mollit aute pariatur. Dolor ullamco consequat nostrud amet. Eu pariatur id ea dolore ad est laborum ea nisi sit ea. Commodo eu ut eu adipisicing. Dolor deserunt magna eiusmod sit aliquip et fugiat. Elit et est in ex fugiat veniam pariatur laboris eu commodo consectetur nostrud ut.",
    temas: [
      {
        tema: "Introdução",
        duracao: "10min:21s",
      },
      {
        tema: "Ea ex ullamco sunt pariatur fugiat officia est et do laborum.",
        duracao: "1h:10min:30s",
      },
      {
        tema:
          "Commodo ad laborum mollit tempor quis elit enim voluptate tempor.",
        duracao: "12min:03s",
      },
    ],
    preco: 450,
    orientador: {
      img: HeadImg,
      nivel: 4,
      nome: "Songs Boy",
    },
  },
];

const happyStudents = [
  {
    id: 0,
    img: Sexy,
    prof: "Sr Designer",
    comment: "Tempor duis nostrud exercitation ad mollit.",
    name: "Big Bobs",
  },
  {
    id: 1,
    img: Sonic,
    prof: "Phisics",
    comment: "Non nostrud officia deserunt et et eu nisi.",
    name: "Sonic I don't Know",
  },
];

const studentFeedback = [
  {
    id: 0,
    img: Sexy,
    nome: "Sexy Girl",
    classificacao: 3,
    feedback:
      "Dolor excepteur nostrud nostrud adipisicing minim ex voluptate deserunt adipisicing.",
  },
  {
    id: 1,
    img: Sonic,
    nome: "Sonic Boy",
    classificacao: 4,
    feedback: "Ea aliqua aliqua deserunt tempor quis dolor pariatur.",
  },
];

export { cursos, happyStudents, studentFeedback };
