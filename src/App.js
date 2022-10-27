import "./App.css";
import { Component } from "react";
import Movies from "./components/movies";
import AnimatedText from "react-animated-text-content";

class App extends Component {
  render() {
    return (
      <main className="container">
        {/* <AnimatedText
  type="words" 
  animation={{
    x: '200px',
    y: '-20px',
    scale: 1.1,
    ease: 'ease-in-out',
  }}
  animationType="float"
  interval={0.06}
  duration={0.8}
  tag="p"
  className="animated-paragraph"
  includeWhiteSpaces
  threshold={0.1}
  rootMargin="20%"
>
  Welcome to vidly
</AnimatedText> */}

        <AnimatedText className="animated-text"
          textColor="#cd122d"
          overlayColor="#fdc52c"
          overlayWidth="100%"
          overlayHeight="100%"
          overlayOpacity="0.5"
          overlayPosition="absolute"
          overlayZIndex="-1"
          overlayTransition="all 0.5s ease-in-out"
          overlayTransitionDelay="0.5s"
        >
          WELCOME TO VIDLY REACT APP
        </AnimatedText>

        <Movies />
      </main>
    );
  }
}

export default App;
