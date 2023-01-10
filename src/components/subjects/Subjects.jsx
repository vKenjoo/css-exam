import React from 'react'
import {dataSciSubs} from "../data/Data.js"
import '../../index.css';

const Subjects = () => {
  return (
    <>
        <section className='subs'>
        <div className='subsContent'>
            <h3>Subjects</h3>
            <h6>Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit sed do eiusmod tempor incididunt ut</h6>
            <div className="subButtons">
                <button className='datasci'>Data Science</button>
                <button className='coresci'>Core Science</button>
                <button className='gamedev'>Game Dev</button>
            </div>
        </div>
        </section>
        <section className='flex'>
        <div className='flexboxContainer'>
          {dataSciSubs.map((item) => (
            <div className='box boxItems'>
              <div className='subImg'>
                <img src={"https://images.pexels.com/photos/15010356/pexels-photo-15010356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt = "`alt`"/>
              </div>
              <div className='details'>
                  <h3>{item.unit}</h3>
                <p><h6>{item.course}</h6></p>
                    <div className='container'>
                    <button className='subMore'>Learn More</button>
                </div>   
              </div>
            </div>
          ))}
        </div>
    </section> 
</>
  )
}

export default Subjects