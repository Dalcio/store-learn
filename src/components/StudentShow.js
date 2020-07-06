import React, { Component } from "react";
import Slide1 from "./img/slide-1.jpg";
import Slide2 from "./img/slide-2.jpg";
import Slide3 from "./img/slide-3.jpg";
import Slide4 from "./img/slide-4.jpg";
import Slides from "./Slides";
import { MyConsumer } from "../Context";

class StudentShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      indicator: 0,
      carousel: [],
    };
  }

  updateSlide() {
    this.setState(this.getIndicator, this.setIndicator);
  }

  setIndicator() {
    this.indicator = setTimeout(this.updateSlide.bind(this), 2000);
  }

  getIndicator() {
    return {
      indicator: this.state.indicator === 1 ? 0 : this.state.indicator + 1,
    };
  }

  mountImages() {
    const carousel = [Slide1, Slide2];
    this.setState({ carousel: [...carousel] });
  }

  componentDidMount() {
    this.mountImages();
    this.updateSlide();
  }

  componentWillUnmount() {
    if (this.indicator) {
      clearTimeout(this.indicator);
    }
  }

  render() {
    const { indicator, carousel } = this.state;

    return (
      <MyConsumer>
        {({ happyStudents }) => {
          return (
            <div className="container pb-0">
              <div className="row pb-0">
                {carousel.map((img, index) => {
                  return (
                    <Slides
                      key={index}
                      indicator={indicator}
                      img={happyStudents[index].img}
                      display={indicator === index ? "block" : "none"}
                      size={carousel.length}
                      title={happyStudents[index].name}
                      description={happyStudents[index].comment}
                      t={true}
                    />
                  );
                })}
              </div>
            </div>
          );
        }}
      </MyConsumer>
    );
  }
}
export default StudentShow;
