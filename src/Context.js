import React, { Component } from "react";
import { cursos, happyStudents, studentFeedback } from "./dados";
import { produtos } from "./DadosDosProdutos";

const MyContext = React.createContext();

class MyProvider extends Component {
  state = {
    cursos: [...cursos],
    happyStudents: [...happyStudents],
    studentFeedback: [...studentFeedback],
    cursoDetails: null,
    produtos: [...produtos],
    produtoDetails: null,
    cartProd: [],
    cartTotal: 0,
  };

  handleDetails = (id) => {
    this.setState({ cursoDetails: id });
  };
  getCourseDetails = (id) => {
    let courses = [...this.state.cursos];
    let tempCourse = courses.filter((course) => course.id === id);
    return tempCourse;
  };

  getProduto = (id) => {
    let produtos = [...this.state.produtos];
    return produtos.find((produto) => produto.id === id);
  };
  handleProdutoDetails = (id) => {
    this.setState({ produtoDetails: id });
  };
  addToCart = (id) => {
    let produtos = [...this.state.produtos];
    const index = produtos.findIndex((prod) => prod.id === id);
    let tempProd = this.getProduto(id);
    produtos[index].inCart = true;
    tempProd.total = produtos[index].preco;
    tempProd.quantity = 1;
    let cartTotal = this.state.cartTotal;
    cartTotal += produtos[index].preco;
    this.setState(
      () => {
        return {
          produtos: [...produtos],
          cartProd: [...this.state.cartProd, tempProd],
          cartTotal: cartTotal,
        };
      },
      () => {}
    );
  };
  remFromCart = (id) => {
    const produtos = [...this.state.produtos];
    const cartProd = [...this.state.cartProd];
    const index = produtos.findIndex((prod) => prod.id === id);
    produtos[index].inCart = false;
    let cartTotal = this.state.cartTotal;
    cartTotal -= produtos[index].preco * produtos[index].quantity;
    const tempProds = cartProd.filter((prod) => prod.id !== id);
    this.setState(
      () => {
        return {
          produtos: [...produtos],
          cartProd: [...tempProds],
          cartTotal: cartTotal,
        };
      },
      () => {}
    );
  };

  clearCart = () => {
    const produtos = [...this.state.produtos];
    for (let i = 0; i < produtos.length; i++) produtos[i].inCart = false;
    this.setState({ produtos: [...produtos], cartProd: [], cartTotal: 0 });
  };
  incrementProd = (id) => {
    let cartProd = [...this.state.cartProd];
    const indexOfId = cartProd.findIndex((prod) => prod.id === id);
    cartProd[indexOfId].quantity += 1;
    cartProd[indexOfId].total =
      cartProd[indexOfId].quantity * cartProd[indexOfId].preco;

    let cartTotal = this.state.cartTotal;
    cartTotal += cartProd[indexOfId].preco;
    this.setState({ cartProd: [...cartProd], cartTotal: cartTotal });
  };

  decreaseProd = (id) => {
    let cartProd = [...this.state.cartProd];
    const indexOfId = cartProd.findIndex((prod) => prod.id === id);
    if (cartProd[indexOfId].quantity === 1) {
      this.remFromCart(id);
    } else {
      cartProd[indexOfId].quantity -= 1;
      cartProd[indexOfId].total -= cartProd[indexOfId].preco;
      let cartTotal = this.state.cartTotal;
      cartTotal -= cartProd[indexOfId].preco;
      this.setState({ cartProd: [...cartProd], cartTotal: cartTotal });
    }
  };

  render() {
    return (
      <MyContext.Provider
        value={{
          ...this.state,
          handleDetails: this.handleDetails,
          getCourseDetails: this.getCourseDetails,
          addToCart: this.addToCart,
          remFromCart: this.remFromCart,
          handleProdutoDetails: this.handleProdutoDetails,
          incrementProd: this.incrementProd,
          decreaseProd: this.decreaseProd,
          clearCart: this.clearCart,
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}
const MyConsumer = MyContext.Consumer;
export { MyProvider, MyConsumer };
