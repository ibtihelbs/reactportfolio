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
  const ZoomInScrollOut = batch( FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move());
  return (

    <div className="App bg-pink scroll-smooth">
      <ScrollContainer>
     <ScrollPage>
       <Animator animation={ZoomInScrollOut}>
          <Hero/>
       </Animator>
     </ScrollPage>
     <ScrollPage>
       <Animator animation={ZoomInScrollOut}>
         <About/>
       </Animator>
     </ScrollPage>
     <ScrollPage>
       <Animator animation={batch(Fade())}>
         <Work/>
       </Animator>
     </ScrollPage>
     <ScrollPage>
       <Animator animation={batch(Fade())}>
        <Contact/>
       </Animator>
     </ScrollPage>
  </ScrollContainer>
   
      
       
       

    </div>
  );
}

export default App;
