import { animate, AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'
import styled from 'styled-components';
import Menu from './Menu'


const BigBox = styled(motion.div)`
    position:fixed;
      width:600px;
      background:white;
      top:20%;
      right:0;
      left:0;
      margin:0 auto;
      display:flex ;
      flex-direction:column ;
      h1{
        font-size: var(--h2-font-size);
      }
      button{
        background: transparent;
        font-size: 44px;
        transition:1s ;
      }
      button:hover{
        transform:scale(1.2) ;
        
      }
      @media screen and (max-width:768px){
        width:300px;
        font-size:10px ;
        top:10%;
        h1{
        font-size:15px ;
        }
}
`;

const MiniBox = styled(motion.div)`
        display:grid ;
        grid-template-columns:repeat(2,1fr) ;
        text-align:center ;
        @media screen and (max-width:768px){
            grid-template-columns:repeat(1,1fr) ;
}
`;

const SlideBox = styled(motion.div)`
    width:300px;
    height:400px;
   position:relative ;
   border-right: 3px solid;
   display:flex ;
   flex-direction:column ;
   justify-content:center ;
   align-items:center ;
   button{
    position:absolute ;
    bottom:0 ;
   }
   h1{
    position:absolute ;
    top:0 ;
   }
   @media screen and (max-width:768px){
    display:none;
}
`;
const SkillBox = styled(motion.div)`

    display: grid;
    grid-template-columns:repeat(3,minmax(0,1fr));
    grid-gap: 25px;
    grid-auto-rows: 69px;
    padding:30px ;
    @media screen and (max-width:768px){
        grid-template-columns:repeat(4,minmax(0,1fr));
}
`;

const Box = styled(motion.div)`
    box-shadow: 16px 20px 11px rgb(0 0 0 / 24%);
    width:90%;
    border-radius:20px;
    position:absolute ;
    img{
        width:100%;
        height:100%;
        border-radius:20px;
    }
`
const Description = styled(motion.div)`
      width:100%;
      border-top:3px solid ;
      padding:15px ;
      text-align:center;
`;

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

const SlideVar = {
    invisible:{
        y:100,
        opacity:0,
        scale:0,
    },
    visible:{
        y:0,
        x:0,
        opacity:1,
        scale:1,
        transition: {
            duration:1,
        },
    },
    exit:{
        y:-100,
        opacity:0,
        scale:0,
        transition: {
            duration:1,
        },
    },
}

const boxVariants = {
    start:{
    },
    end:{
        transition:{
            staggerChildren:0.5,
        },
    },

}
const circlevar = {
    start:{
       opacity:0 ,
       scale:0,
    },
    end:{
        opacity:1 ,
        scale:1,
        transition:{
            type:"spring",
            bounce:0.9,
            staggerChildren:0.5,
        },
    },

}

const SkillBigBox = styled.div`
    width:100% ;
    height:100% ;
`

const Adress = styled.div`
width:100% ;
height:100px;
border-top:3px solid ;
display:grid ;
grid-template-columns:repeat(2,1fr) ;
div{

    align-self:center ;
    justify-self:center ;
    svg{
        width:100%;
    }
}
h1{
    transition:0.3s ;
}
h1:hover{
    color:var(--first-color)
}
`;

const SBOX = styled(motion.p)`
      background-attachment: gray;
      font-size:10px ;
`;

const MotionMiniBox = ({id}) => {
const [visible, setVisible] = useState(0);

const nextPlese = () => setVisible(prev => 
    prev === Menu[id-1].images.length -1 
    ? 0 
    : prev+1)

  return (
    <BigBox layoutId={id} variants={boxVar} initial="start" animate="animate">
        <MiniBox >
            
            <SlideBox>
            <h1>MY WORK</h1> 
            <AnimatePresence>
            {Menu[id-1].images.map((i,index) => {
            
                return (
                index == visible
                ?<Box key={index} variants={SlideVar} initial="invisible" animate="visible" exit="exit">
                    <img src={i} alt="" />
                </Box>
                :null
                )
            })}
            </AnimatePresence>
            <button onClick={nextPlese}><i className="icon-arrow-down"></i></button>
            </SlideBox>
            <div>
                <h1>Skill</h1> 
                <SkillBox variants={boxVariants} initial="start" animate="end">
                {Menu[id-1].skill.map((i,index)=>{
                    return (
                        <motion.div key={index} variants={circlevar}>
                            <motion.img  key={i}
                            src={i.img}/>
                            <SBOX>{i.name}</SBOX>
                        </motion.div>
                    
                        
                    )
                })}
                
                </SkillBox>
            </div>
            
    </MiniBox>

         <Description>
            <h1>Commentary</h1>
            <p>{Menu[id-1].comment}</p>
        </Description>

        <Adress>
                <div>
                    {Menu[id-1].GitHub === null ? null : <a target="blank" href={Menu[id-1].GitHub}><h1>GitHub</h1></a>}    
                </div>


                <div>
                <a target="blank" href={Menu[id-1].myPage}><h1>MY PAGE</h1></a>   
                </div>

            </Adress>
   </BigBox>
  )
}

export default MotionMiniBox