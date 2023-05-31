import React from 'react'
import './Home.css';
import model from '../images/model.png'
import Products from './Products';

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="banner">
          <img src={model} alt="banner" />
          <div className="banner-description">
            <h2 className="banner-header my-0">Latest Styles</h2>
            <p className="banner-text my-1">At Yesterday’s Prices</p>
            <button className='browse-btn my-1'>BROWSE ALL STYLES</button>
          </div>
        </div>
      </div>

        <Products />
    </>
  )
}

export default Home;