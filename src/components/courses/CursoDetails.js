import React, { Component } from "react";
import { MyConsumer } from "../../Context";
import styled from "styled-components";

import { Link } from "react-router-dom";
import StudentAvaliation from "./StudentAvaliation";
import { NoSelected } from "../NoSelected";

class Details extends Component {
  render() {
    return (
      <MyConsumer>
        {(value) => {
          const { cursoDetails, cursos, studentFeedback } = value;
          let curso = cursos.find((c) => c.id === cursoDetails);
          return cursoDetails === null ? (
            <NoSelected className="col-12 text-center">
              <h2>Nenhum Curso Selecionado</h2>
              <Link to="/home/cursos">
                <p>ir pra cursos</p>
              </Link>
            </NoSelected>
          ) : (
            <Div>
              <div className="container">
                <div className="row">
                  <div className="col-12 col-lg-8 d-lg-inline-block">
                    <img
                      src={curso.cover}
                      alt=""
                      className="col-12 p-0 course-cover"
                    />

                    <div className="col-12 pl-0">
                      <h3>{curso.nome}</h3>
                    </div>
                    <div className="col-12 p-0">
                      <h4>Objetivos</h4>
                      <div className="content">
                        Qui aliquip fugiat laboris velit minim mollit nulla elit
                        non Lorem fugiat laboris irure laborum.
                      </div>
                      <hr />
                      <h4>Legibilidade</h4>
                      <div className="content">
                        Consectetur consectetur elit veniam ullamco nostrud.
                        Esse elit cupidatat adipisicing laboris ad quis. Nisi
                        laboris duis mollit eu. Sint tempor in Lorem incididunt
                        non sit esse. Magna non aute laborum reprehenderit nulla
                        ut consectetur consequat irure. Sunt et pariatur culpa
                        eiusmod ex quis dolor dolore. Eu ea exercitation velit
                        deserunt Lorem elit ex.
                      </div>
                      <hr />
                      <h4>Plano Curricular</h4>
                      <ul className="col-12 p-0 temas">
                        {curso.temas.map((topic) => (
                          <li key={curso.id + topic.tema}>
                            <p className="col-8 d-inline-block text-left p-0 ">
                              {topic.tema}
                            </p>
                            <span className="col-4 d-inline-block text-right">
                              {topic.duracao}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="col-12 col-lg-4 ">
                    <ul className="col-12 pt-5 orientador">
                      <li>
                        <p className="col-4 d-inline-block text-left p-0 ">
                          Orientador
                        </p>
                        <span className="col-8 d-inline-block text-right">
                          {curso.orientador.nome}
                        </span>
                      </li>
                      <hr />
                      <li>
                        <p className="col-4 d-inline-block text-left p-0 ">
                          Preço
                        </p>
                        <span className="col-8 d-inline-block text-right">
                          {curso.preco} kz
                        </span>
                      </li>
                      <hr />
                      <li>
                        <p className="col-4 d-inline-block text-left p-0 ">
                          Avaliação
                        </p>
                        <span className="col-8 d-inline-block text-right">
                          {curso.orientador.nivel}
                        </span>
                      </li>
                      <li>
                        <button className="btn btn-success col-12 text-center">
                          Inscrever-se no Curso
                        </button>
                      </li>
                    </ul>
                    <hr />
                    <div className="col-12 p-0">
                      <h4>Reviews</h4>
                      <br />
                      <h6 style={{ color: "var(--success)" }}>Sua avaliação</h6>
                      <ul className="col-12 p-0 tex">
                        <li>
                          <p className="col-4 float-left p-0">Qualidade</p>
                          <span
                            className="col-4 float-left p-0 text-center"
                            style={{ fontSize: "20px" }}
                          >
                            * * * * *
                          </span>
                          <p className="col-4 d-inline-block p-0 text-right">
                            Excecional
                          </p>
                        </li>
                      </ul>
                      <div className="col-12 p-0">
                        <h6 style={{ color: "var(--success)" }}>
                          O Teu Comentário
                        </h6>
                        <textarea
                          name="feedback"
                          id="feedback"
                          cols="30"
                          rows="10"
                          className="col-12"
                        ></textarea>
                        <button className="btn btn-success">Enviar</button>
                      </div>
                      {studentFeedback.map((student) => (
                        <StudentAvaliation key={student.id} {...student} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Div>
          );
        }}
      </MyConsumer>
    );
  }
}
const Div = styled.div`
  .course-cover {
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  hr {
    background-color: var(--border-gray);
  }
  h3 {
    font-size: 28px;
    color: var(--gray-dark);
    font-weight: 700px;
  }
  h4 {
    font-size: 22px;
    color: var(--gray-dark);
    font-weight: 700px;
  }
  .content {
    font-size: 14px;
    color: var(--gray-dark);
  }
  li {
    list-style: none;
    font-size: 14px;
    p {
      color: var(--gray);
    }
  }
  .temas {
    li:hover {
      cursor: pointer;
      border-radius: 5px;
      p {
        color: var(--success);
      }
      color: var(--success);
      transition: all 0.5s ease-in-out;
    }
  }
  .orientador {
    p {
      color: var(--gray);
    }
    border: 1px solid var(--border-gray);
  }
  textarea {
    border: 1px solid var(--border-gray);
  }
`;
export default Details;
