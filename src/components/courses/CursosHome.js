import React, { Component } from "react";
import PageHeader from "../PageHeader";
import CursoItem from "./CursoItem";
import HappyStudent from "./HappyStudent";
import { Head } from "./Head";
import { MyConsumer } from "../../Context";

class CursosHome extends Component {
  render() {
    return (
      <MyConsumer>
        {(values) => {
          const { happyStudents, cursos } = values;
          return (
            <div>
              {" "}
              <PageHeader title="Nossos Cursos" path="Home / Cursos" />
              <div className="container">
                <div className="row">
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

export default CursosHome;
