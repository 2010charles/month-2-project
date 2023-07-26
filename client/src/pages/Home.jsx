import React from 'react'
import img2 from '../projectImages/image2.jpg'
import './home.css'
import Header from '../components/Header'
function Home() {
  return (
    <>
      <Header />
      <div className='homePage'>
        <div className='homepagecontent'>
          <div className='image2'>
            <img src={img2} height={600} style={{ width: '100%' }} />
          </div>
          <h2 className='mainpagecontent'>A Platform Built For A New way Of Working</h2>
        </div>
      </div>
    </>
  )
}

export default Home
