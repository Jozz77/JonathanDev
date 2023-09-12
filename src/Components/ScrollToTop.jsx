import { Component } from "react";
import { MdKeyboardDoubleArrowUp } from 'react-icons/md';

class ScrollToTop extends Component {
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY > 100) {
      this.showScrollButton();
    } else {
      this.hideScrollButton();
    }
  };

  showScrollButton = () => {
    // Show a scroll-to-top button or execute your desired logic here
  };

  hideScrollButton = () => {
    // Hide the scroll-to-top button or reset any other logic here
  };

  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: Adds smooth scrolling effect
    });
  };

  render() {
    return (
      <div onClick={this.scrollToTop} className=" ">
        <section className="text-[1.5rem] flex justify-center font-bold hover:text-gray">
        <MdKeyboardDoubleArrowUp className="animate-bounce infinite cursor-pointer"  />
        </section>
        <button
          
          className="scroll-to-top-button hover:text-gray font-Montserrat font-bold mt-2 text-[0.95rem] "
        >
          BACK TO TOP
        </button>
      </div>
    );
  }
}

export default ScrollToTop;
