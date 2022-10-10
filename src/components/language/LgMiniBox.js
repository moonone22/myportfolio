import { motion } from 'framer-motion'
import React, { Children } from 'react'
import styled from 'styled-components'
import MyData from './MyData'

const LgMini = styled(motion.div)`
   background-color:white ;
   text-align:center ;
   padding: 15px;
   display:flex ;
   flex-direction:column ;
   justify-content:space-around ;
   height:500px ;
   h2{
    color:black;
   }
   @media screen and (max-width:768px){
    height:400px ;
    }
`
const LgIMG = styled(motion.div)`
   display:grid ;
   grid-template-columns:repeat(2,1fr) ;
   height:100% ;
   div{
    background-position:center ;
    background-repeat:no-repeat ;
    background-size:cover ;
    border:3px solid ;
    box-shadow: 0px 5px 20px 0px;
    border-radius:15px ;
    border-radius:30px ;
    width: 100%;
    height: 100%;
   }
   
   div:first-child{
    transform:rotate(345deg) ;
   }
   div:last-child{
    transform:rotate(26deg) ;
   }

   
`
const LgText = styled.div`
   h2{font-size: var(--h2-font-size);}
   p{font-size: var(--small-font-size);}
   margin-top: 10px;
`

const boxVar = {
    start:{scale:0},
    animate:{
        borderRadius:50,
        transition:{
            type:"spring",
            bounce:0.8,
        }
    },

  }

  const ImgBoxVar = {
    start:{
        opacity:0,
        scale:0.5
    },
    animate:{
        opacity:1,
        scale:1,
        transition:{
            staggerChildren:0.5,
        }
    },

  }
  const delayBoxVar = {
    start:{
        opacity:0,
    },
    animate:{
        opacity:1,
    },

  }

const LgMiniBox = ({id}) => {
    
    const data = MyData.find((i)=>{
        return i.id == id })

  return (
    <LgMini layoutId={id} variants={boxVar} initial="start" animate="animate">
        <h1>{id}</h1>
        <LgIMG variants={ImgBoxVar}  initial="start" animate="animate">
            <motion.div variants={delayBoxVar}  style={{backgroundImage:`url(${data.images[0]})`}} alt="" className="work_img" />
            <motion.div variants={delayBoxVar}  style={{backgroundImage:`url(${data.images[1]})`}} alt="" className="work_img" />
        </LgIMG>
        <LgText>
            <h2>Commentary</h2>
            <p>{data.comment}</p>
        </LgText>
    </LgMini>
  )
}

export default LgMiniBox