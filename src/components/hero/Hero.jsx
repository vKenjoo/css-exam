import React from "react"
import {home} from "../data/Data.js"
import Typewriter from "typewriter-effect"
import '../../index.css';

export const Hero = () => {
  return (
    <>
      <section className='hero'>
        {home.map((val) => (
          <div className='heroContent'>
            <h2 className='fontSize' data-aos='fade-right'>
              {val.text}
            </h2>
            <h1>
              <Typewriter options={{
                strings: [`${val.first}`, `${val.second}`, `${val.third}`],
                autoStart: true,
                loop: true }}/>
            </h1>
            <div className="buttons">
              <p data-aos='fade-left' className="desc">{val.desc}</p>
                <button className='tracks'>#tracks</button>
                <button className='subjects'>#subjects</button>
                <button className='latestpage'>#latestpage</button>
            </div>
          </div>
        ))}
      </section>
    </>
  )
}
export default Hero