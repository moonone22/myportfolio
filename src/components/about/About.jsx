import React from 'react'
import "./about.css"
import Image from'../../assets/profile03.png';
import AboutBox from './AboutBox';

const About = () => {
  return (
    <section className='about container section' id='about'>
      <h2 className="section_title">About Me</h2>

      <div className="about_container grid">
        <img src={Image} alr="" className='about_img'/>

        <div className="about_data grid">
          <div className="about_info">
            <p className="about_description">
           안녕하세요. 프런트엔드개발자를 꿈꾸는 예비 개발자 김달원입니다. 
           창작과 개발의 특성을 지닌 프론트엔드 개발자라는 직업에 흥미가 생겼고 
           지난 1년간 신입개발자로써 자격을 갖추기 위해 열심히 달려왔습니다.
           항상 빠르게 변화해야하고 적응해야할 프론트엔드 개발자라는 영역에서 
           항상 배우고 발전해 나갈 잘할 자신이 있습니다!!!
            </p>
           
          </div>

          <div className="about_skills grid">

              
              <div className="skills_data">
                <div className="skills_title">
                  <h3 className="skills_name">CSS</h3>
                  <span className="skills_number">85%</span>
                </div>
                <div className="skills_bar">
                  <span className="skills_percentage CSS"></span>
                </div>
              </div>

              <div className="skills_data">
                <div className="skills_title">
                  <h3 className="skills_name">JavaScript</h3>
                  <span className="skills_number">85%</span>
                </div>
                <div className="skills_bar">
                  <span className="skills_percentage development"></span>
                </div>
              </div>

              <div className="skills_data">
                <div className="skills_title">
                  <h3 className="skills_name">React</h3>
                  <span className="skills_number">90%</span>
                </div>
                <div className="skills_bar">
                  <span className="skills_percentage ui_design"></span>
                </div>
              </div>

              <div className="skills_data">
                <div className="skills_title">
                  <h3 className="skills_name">Flutter</h3>
                  <span className="skills_number">50%</span>
                </div>
                <div className="skills_bar">
                  <span className="skills_percentage photography"></span>
                </div>
              </div>

          </div>
          
        </div> 
      </div>
    </section>

    
  )
}

export default About