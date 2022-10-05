import logo from './logo.svg';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import CodingStory from './components/codingstory/CodingStory';
import Portfolio from './components/portfolio/Portfolio';
import About from './components/about/About';
import styled from 'styled-components';
import { motion, useScroll, useTransform } from 'framer-motion';
import scrollIMG from "./assets/scroll.png"
import Language from './components/language/Language';

const Container = styled(motion.div) `
  width: 30px;
  height: 180px;
  overflow: hidden;
  background: black;
  border-radius: 30px;
  position:fixed ;
  top:50%;
  right:0;
  z-index:999999999999 ;
  transform:translateY(-50%) ;
`

const Item = styled(motion.div)`
  width: 30px;
  height: 360px;
  background: url(${scrollIMG});
  transform-origin: 50% 100%;
  display:flex ;
  justify-content:center ;
  align-items:center ;
`

function App() {
  const { scrollYProgress } = useScroll();
  const scrollScale = useTransform(scrollYProgress, [0,1], [0,-180])
  return (
    <>
    <Sidebar/>
    <main className='main'>

      <Container>
        <Item style={{y:scrollScale}}>
        
        </Item>
      </Container>  

      <Home/>
      <About/>
      <Language/>
      <CodingStory/>
      <Portfolio/>

    </main>
    </>
  );
}

export default App;
