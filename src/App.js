import './App.css';
import Hero from './componants/Hero';
import About from './componants/About';
import Work from './componants/Work';
import Contact from './componants/Contact';
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  ZoomIn
} from "react-scroll-motion";
function App() {
  return (
    <div className="App bg-pink scroll-smooth">
       <Hero/>
       <About/>
       <Work/>
       <Contact/>
    </div>
  );
}

export default App;
