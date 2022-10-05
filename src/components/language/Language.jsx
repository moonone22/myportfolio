import React, { useState } from 'react'
import "./language.css"
import styled from 'styled-components'
import { AnimatePresence, motion } from 'framer-motion'
import LgMiniBox from './LgMiniBox'
import MyData from './MyData'





const Overlay = styled(motion.div)`
    position: fixed;
    width: 100%;
    height: 100%;
    background-color:rgba(0,0,0,0.5);
    top: 0px;
    right: 0px;
    left: 0px;
    margin: 0px auto;
    z-index:99999999999;
    display:grid ;
    justify-content:center ;
    align-items:center ;
    grid-template-columns:700px ;
    @media screen and (max-width:768px){
      grid-template-columns:350px ;
    }
    @media screen and (max-width:350px){
        grid-template-columns: 1fr;
    }
`;
const box = {
  initial:{
    opacity:0,
    
  },
  animate:{
    opacity:1,

  },
  exit:{
    opacity:0,
  },
}




const Language = () => {
  const[id, setId] = useState(null);

  const onBoxCliced = (id) => {
    setId(id)
  };

  return (

    <section className="servies container section" id="services">

      <h2 className="section_title">My Language</h2>
  
      <div className="language_container grid">
        {MyData.map(({id,image,title,description}) => {
          return (
            <motion.div 
            className="language_card" 
            layoutId={id} 
            key={id} 
            onClick={()=>{onBoxCliced(id)
            }}>
              <img src={image} alt="" className='language_img'/>

              <h3 className="language_title">{title}</h3>
              <p className="language_description">{description}</p>
            </motion.div>
          )
        })}
      </div>

      <AnimatePresence>
      {id 
      ?
      <Overlay  onClick={()=>{setId(null)}} 
          variants={box} 
          initial="initial" 
          animate="animate"
          exit="exit">
          <LgMiniBox id={id}/>
      </Overlay>
      :null
      }
      </AnimatePresence>
      
    </section>
  )
}

export default Language