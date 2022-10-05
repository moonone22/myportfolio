import { AnimatePresence, motion,  } from 'framer-motion'
import React, { useState } from 'react'
import styled from 'styled-components';
import Menu from './Menu'
import MotionMiniBox from './MotionMiniBox';
import "./portfolio.css"

const MtionBox = styled(motion.div)`
  position:fixed ;
  z-index: 99999999999999999999999;
`;

const Overlay = styled(motion.div)`
    position: fixed;
    width: 100%;
    height: 100%;
    background-color:rgba(0,0,0,0.5);
    top: 0px;
    right: 0px;
    left: 0px;
    margin: 0px auto;
`;

const box = {
  initial:{
    opacity:0
  },
  animate:{
    opacity:1
  },
  exit:{
    opacity:0
  },
}
const Portfolio = () => {

  const [items, setItems] = useState(Menu)

  const fillterItem = (categoryItem) => {
    const updatedItems = Menu.filter((curElem) => {
      return curElem.category === categoryItem
    })
    setItems(updatedItems)
  }

  const[id, setId] = useState(null);

  const onBoxCliced = (id) => {
    setId(id)
  };

  return (
    <section className="work container section" id="portfolio">
      <h2 className="section_title">My Work</h2>

      <div className="work_filters">
        <span className="work_item" onClick={()=>setItems(Menu)}>Everything</span>
        <span className="work_item" onClick={()=>fillterItem("React")}>React</span>
        <span className="work_item" onClick={()=>fillterItem("JS")}>JS</span>
        <span className="work_item" onClick={()=>fillterItem("CSS")}>CSS</span>
      </div>

      <div className="work_container grid">
        {items.map((elem)=>{
          const{ id, image, title, category} = elem
          return(
            <motion.div className="work_card" layoutId={id} key={id} onClick={()=>{onBoxCliced(id)}}>

              <div className="work_thumbnaul">
                <img src={image} alt="" className="work_img" />
                <div className="work_mask"></div>
              </div>

              <span className="work_category">{category}</span>
              <h3 className="work_title">{title}</h3>
              <a  className="work_button">
                <p>CLICK</p>
              </a>

            </motion.div>
          )
        })}
      </div>

      <AnimatePresence>
       {id
       ? <MtionBox>
          <Overlay  onClick={()=>{setId(null)}} 
          variants={box} 
          initial="initial" 
          animate="animate"
          exit="exit">
          </Overlay>
          <MotionMiniBox id={id}/>
       </MtionBox>
       : null}
      </AnimatePresence>

    </section>
  )
}

export default Portfolio