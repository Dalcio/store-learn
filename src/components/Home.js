import React, { Component } from "react";
import SlideShow from "./SlideShow";
import CursoItem from "./courses/CursoItem";
import { Head } from "./courses/Head";
import ProdutoItem from "./produtos/ProdutoItem";
import { MyConsumer } from "../Context";

class Home extends Component {
  render() {
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
