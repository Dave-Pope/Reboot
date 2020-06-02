import React from 'react';

import Carousel from 'react-bootstrap/Carousel';
import Grid from '../grid/Grid';

const Landingpage = () => {
    return (
        <div className='Landingpage'>
            <Carousel>
                <Carousel.Item>
                    <div className='landing-info'>
                        <h1>
                            Fashion Week <br /> Lookbook '19
                        </h1>

                        <button>SHOP NOW</button>
                    </div>

                    <div className='background'>
                        <img src={require('../../assets/images/banner1.jpg')} alt='' />
                    </div>
                </Carousel.Item>

                <Carousel.Item>
                    <div className='landing-info'>
                        <h1>
                            Fashion Week <br /> Lookbook '19
                        </h1>

                        <button>SHOP NOW</button>
                    </div>

                    <div className='background'>
                        <img src={require('../../assets/images/banner2.jpg')} alt='' />
                    </div>
                </Carousel.Item>
            </Carousel>

            <Grid />
        </div>
    );
};

export default Landingpage;
