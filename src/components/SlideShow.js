import React, { Component } from "react";
import Slide1 from "./img/slide-1.jpg";
import Slide2 from "./img/slide-2.jpg";
import Slide3 from "./img/slide-3.jpg";
import Slide4 from "./img/slide-4.jpg";
import Slides from "./Slides";

class SlideShow extends Component {
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
      indicator: this.state.indicator === 3 ? 0 : this.state.indicator + 1,
    };
  }

  mountImages() {
    const carousel = [Slide1, Slide2, Slide3, Slide4];
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
    const info = [
      {
        urlLink: "#",
        title: "Elit sint occaecat cupidatat deserunt.",
        description:
          "Fugiat enim pariatur laboris laboris est occaecat elit cupidatat consequat id commodo eu cupidatat.",
      },
      {
        urlLink: "#",
        title: "Ut voluptate ullamco aute elit.",
        description:
          "Sint sunt ipsum ea voluptate consectetur tempor cillum tempor duis do anim id laboris ut.",
      },
      {
        urlLink: "#",
        title: "Minim in amet nostrud nostrud laboris.",
        description: "Amet elit eiusmod aliquip ad.",
      },
      {
        urlLink: "#",
        title: "Lorem nisi adipisicing aliqua culpa.",
        description:
          "Voluptate veniam labore irure consectetur commodo enim aliquip incididunt cupidatat proident.",
      },
    ];
    return (
      <div className="container pb-0">
        <div className="row pb-0">
          {carousel.map((img, index) => {
            return (
              <Slides
                key={index}
                indicator={indicator}
                img={img}
                display={indicator === index ? "block" : "none"}
                size={carousel.length}
                urlLink={info[index].urlLink}
                title={info[index].title}
                description={info[index].description}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
export default SlideShow;
