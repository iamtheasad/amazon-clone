import React, {Fragment} from 'react';
import './Home.css';
import Product from "./Product";

const Home = () => {
    return (
        <Fragment>
            <div className="home">
                <img className="home__image"
                     src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
                     alt="Banner Image"/>

               <div className="home__row">
                   <Product
                       id="12321341"
                       title="Sennheiser HD 300 Closed Back, Around Ear Headphone"
                       image="https://cdn.pixabay.com/photo/2017/05/11/11/15/workplace-2303851__340.jpg"
                       price={11.96}
                       rating={5}
                   />
                   <Product
                       id="12321341"
                       title="50MM Drivers Studio Headphones MAONO AU-MH601 Over Ear Stereo Monitor Closed Back Headphones.."
                       image="https://cdn.pixabay.com/photo/2017/01/18/17/14/girl-1990347__340.jpg"
                       price={39.95}
                       rating={4}
                   />
               </div>
                <div className="home__row">
                    <Product
                        id="12321341"
                        title="COWIN E7 Active Noise Cancelling Headphones Bluetooth Headphones with Microphone.."
                        image="https://cdn.pixabay.com/photo/2016/11/29/09/08/headphone-1868612__340.jpg"
                        price={59.99}
                        rating={5}
                    />
                    <Product
                        id="12321341"
                        title="Sony MDRZX110/BLK ZX Series Stereo Headphones (Black)"
                        image="https://cdn.pixabay.com/photo/2015/01/20/12/51/mobile-605422__340.jpg"
                        price={11.96}
                        rating={5}
                    />
                    <Product
                        id="12321341"
                        title="Sony Noise Cancelling Headphones WHCH710N: Wireless Bluetooth.."
                        image="https://cdn.pixabay.com/photo/2018/09/17/14/27/headphones-3683983__340.jpg"
                        price={199.99}
                        rating={5}
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="12321341"
                        title="HOTCOK H37 Kids Headphones for Girls Boys Foldable Adjustable On Ear Headphones.."
                        image="https://cdn.pixabay.com/photo/2015/07/31/15/01/girl-869213__340.jpg"
                        price={17.50}
                        rating={5}
                    />
                </div>
            </div>
        </Fragment>
    );
};

export default Home;