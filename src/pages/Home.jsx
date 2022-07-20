import React from 'react'
import Product from '../components/Product'

const Home = () => {
  return (
    <div className='home'>
        <div className="home_container">
            <img className='home_image' src="https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3740_.jpg" alt="" />
            <div className="home_row">
              <Product title='TCL 50-inch Class 4-Series 4K UHD Smart Roku LED TV' img='https://m.media-amazon.com/images/I/71wJCiFPrfL._AC_UL480_FMwebp_QL65_.jpg' price={200.00} id={1}/>
              <Product title='Health and personal care' img='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/GW_CONS_AUS_HPC_HPCEssentials_CatCard_Desktop1x._SY304_CB627424361_.jpg' price={150.00} id={2}/>
              <Product title='samsung galaxy smartphone' img='https://m.media-amazon.com/images/I/71c5rhsUkxL._AC_UY327_FMwebp_QL65_.jpg' price={400.00} id={3}/>
            </div>
            <div className="home_row">
              <Product title='solmio care anti lotion' img='https://m.media-amazon.com/images/I/611gRCaFD9L._AC_UY327_FMwebp_QL65_.jpg' price={100.00} id={4}/>
              <Product title='Death in sunshine' img='https://images-na.ssl-images-amazon.com/images/I/81Z0KqJ8a2L._UX300__PJku-headphones-v1,TopRight,0,-50_AC_UL127_SR127,127_.jpg' price={60.00} id={5}/>
              <Product title='Logitech Wireless Mouse' img='https://m.media-amazon.com/images/I/61xgpXecLML._AC_UY327_FMwebp_QL65_.jpg' price={65.00} id={6}/>
            </div>
            <div className="home_row">
              <Product title='Childern Toys' img='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Toys_1X._SY304_CB639759658_.jpg' price={23.00} id={7}/>
              <Product title='Heath anad care products' img='https://m.media-amazon.com/images/I/914P2Ot1XnL._AC_SY200_.jpg' price={78.00} id={8}/>
            </div>
        </div>
    </div>
  )
}

export default Home