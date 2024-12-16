import React from 'react'
import './Home.css'
import Navbar from '../../component/Navbar/Navbar'
import Refresh from './refresh.png'
import CashOn from './cashon.png'
import Clock from './clock.png'
import BagCards from '../../component/BagCards/BagCards'
import { cards } from '../../config/config'

function Home() {
  return (
    <>
      <Navbar />
      <div >
        <img src='https://zouk.co.in/cdn/shop/files/BACKPACK_AND_TRAVEL_POUCH_BANNERS-02.png?v=1733816733&width=2000' className='banner' />
      </div>
      <section>
        <div className='container mt-5'>
          <h1 className='text-center mb-5'>Why To choose <span className='color-bagtrend'><b>Bagtrend</b></span>?</h1>
          <div className='row'>

            <div className='col-4'>
              <img src={Refresh} className='img-height' />
              <h2 className='headings'>Hassel free return</h2>
            </div>

            <div className='col-4'>
              <img src={CashOn} className='img-height' />
              <h2 className='headings'>Cash On Delivery</h2>
            </div>

            <div className='col-4'>
              <img src={Clock} className='img-height' />
              <h2 className='headings'>12 Month Warranty</h2>
            </div>

          </div>
        </div>
      </section>
      <div className='hhhh'>
        <div className='container '>
          <h1 className='text-center mb-5'>Provided Categories</h1>
          <div className='cards-container'>
            {
              cards.map((cardsdetails) => {
                return <BagCards
                  imgUrl={cardsdetails.imgUrl}
                  title={cardsdetails.title}
                  desc={cardsdetails.desc}
                  price={cardsdetails.price}
                />
              })
            }
          </div>
        </div>
        </div>
      </>
      )
}

      export default Home