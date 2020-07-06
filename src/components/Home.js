import React, { Component } from "react";
import SlideShow from "./SlideShow";
import CursoItem from "./courses/CursoItem";
import { Head } from "./courses/Head";
import Prog from "./img/prog.png";
import Mickey from "./img/mickey.png";
import Destaque from "./img/destaque-44.png";
import HeadImg from "./img/head.png";
import Sexy from "./img/sexy.png";
import Sonic from "./img/sonic.png";
import nove from "./img/980246.jpg";
import ProdutoItem from "./produtos/ProdutoItem";
import { MyConsumer } from "../Context";
import StudentShow from "./StudentShow";

class Home extends Component {
  render() {
    const cursos = [
      {
        id: 0,
        nome: "Lógica de Progamação",
        cover: Prog,
        info:
          "Ad deserunt aliquip voluptate velit mollit elit anim quis ea do. Ipsum commodo Lorem nulla velit. Anim adipisicing elit velit excepteur reprehenderit esse cillum ut esse deserunt commodo. Laboris non qui in esse aliqua do labore ex ad.",
        orientador: {
          img: Mickey,
          nivel: 3.8,
          nome: "Mickey Mouse",
        },
        preco: 5000,
      },
      {
        id: 1,
        nome: "Matemática",
        cover: Destaque,
        info:
          "Cillum aute amet est nostrud ullamco non veniam dolore cupidatat tempor ea mollit aute pariatur. Dolor ullamco consequat nostrud amet. Eu pariatur id ea dolore ad est laborum ea nisi sit ea. Commodo eu ut eu adipisicing. Dolor deserunt magna eiusmod sit aliquip et fugiat. Elit et est in ex fugiat veniam pariatur laboris eu commodo consectetur nostrud ut.",
        orientador: {
          img: HeadImg,
          nivel: 4,
          nome: "Songs Boy",
        },
        preco: 100,
      },
      {
        id: 2,
        nome: "Matemática Discreta",
        cover: nove,
        info:
          "Cillum aute amet est nostrud ullamco non veniam dolore cupidatat tempor ea mollit aute pariatur. Dolor ullamco consequat nostrud amet. Eu pariatur id ea dolore ad est laborum ea nisi sit ea. Commodo eu ut eu adipisicing. Dolor deserunt magna eiusmod sit aliquip et fugiat. Elit et est in ex fugiat veniam pariatur laboris eu commodo consectetur nostrud ut.",
        orientador: {
          img: HeadImg,
          nivel: 4,
          nome: "Songs Boy",
        },
        preco: 450,
      },
    ];
    return (
      <MyConsumer>
        {({ produtos, cursos, handleProdutoDetails }) => {
          return (
            <div>
              <div className="col-12">
                <SlideShow />
              </div>
              <div className="container" style={{ marginTop: "-30px" }}>
                <div className="row">
                  <Head className="col-12 text-center">
                    <p>Produtos Mais Populares</p>
                    <h2>Produtos</h2>
                  </Head>
                  <div className="col-12">
                    <div className="row">
                      <ProdutoItem
                        key={produtos[0].id}
                        {...produtos[0]}
                        handleProduto={handleProdutoDetails}
                      />
                      <ProdutoItem
                        key={produtos[1].id}
                        {...produtos[1]}
                        handleProduto={handleProdutoDetails}
                      />
                      <ProdutoItem
                        key={produtos[2].id}
                        {...produtos[2]}
                        handleProduto={handleProdutoDetails}
                      />
                    </div>
                  </div>
                  <Head className="col-12 text-center">
                    <p>Cursos Mais Populares</p>
                    <h2>Cursos</h2>
                  </Head>
                  <div className="col-12">
                    <div className="row">
                      {cursos.map((curso) => {
                        return <CursoItem key={curso.id} {...curso} />;
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </MyConsumer>
    );
  }
}

export default Home;
