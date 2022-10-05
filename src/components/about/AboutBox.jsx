import React from 'react'

const AboutBox = () => {
  return (
    <div className="about_boxes grid">

        <div className="about_box">
            <i className="about_icon icon-fire"></i>

            <div>
                <h3 className="about_title">198</h3>
                <span className="aobut_subtitle">Project completed</span>
            </div>
        </div>

        <div className="about_box">
            <i className="about_icon icon-fire"></i>

            <div>
                <h3 className="about_title">5670</h3>
                <span className="aobut_subtitle">Cup of coffee</span>
            </div>
        </div>

        <div className="about_box">
            <i className="about_icon icon-fire"></i>

            <div>
                <h3 className="about_title">427</h3>
                <span className="aobut_subtitle">Satisfied clients</span>
            </div>
        </div>

        <div className="about_box">
            <i className="about_icon icon-fire"></i>

            <div>
                <h3 className="about_title">427</h3>
                <span className="aobut_subtitle">Nominees winner</span>
            </div>
        </div>

    </div>
  )
}

export default AboutBox