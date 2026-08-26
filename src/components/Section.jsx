import React from 'react'

function Section() {
  return (
    <section className='hero-section'>
      <div className="hero-copy">
        <p className="eyebrow">YOUR HEALTH, SIMPLIFIED</p>
        <h1>Care starts with the <span>right doctor.</span></h1>
        <p className="hero-text">Search our trusted specialists and take the next step toward better health.</p>
        <button className="hero-button">Find a specialist</button>
      </div>
      <div className="hero-image-wrap">
        <img src="https://t4.ftcdn.net/jpg/02/74/73/01/360_F_274730119_ht4FXz4R6RnIJgPk7WeNALxxaf524Jrb.jpg" alt="Doctor consulting a patient" />
        <div className="hero-badge"><strong>24/7</strong><span>Care support</span></div>
      </div>
    </section>
  )
}

export default Section
