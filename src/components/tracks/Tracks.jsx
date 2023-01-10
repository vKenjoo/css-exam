import React from 'react'
import {tracks} from "../data/Data.js"
import '../../index.css';

const Tracks = () => {
  return (
    <>
    <div className='track'>
      <h2>Tracks</h2>
      </div>
    <section className='ds'>
        <div className='container'>
          {tracks.map((item) => (
            <div className='box boxItems'>
              <div className='img'>
                <img src={"https://images.pexels.com/photos/15010356/pexels-photo-15010356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt = "`alt`"/>
              </div>
              <div className='details'>
                  <h3>{item.title}</h3>
                <p>{item.desc.slice(0, 180)}...</p>
                    <div className='container'>
                    <button className='more'>Learn More</button>
                    </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Tracks