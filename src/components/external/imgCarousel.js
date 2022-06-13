import React from 'react';
import { Carousel } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import styles from '../Content/Content.module.css'
import img1 from '../../images/portfolio1.png'
import img2 from '../../images/portfolio2.png'
import img3 from '../../images/portfolio3.png'

const ImgCarousel = (props) =>(
    <div className="carousel">
    <h1> Proyectos: </h1>
    <Carousel autoplay id={styles.car} className="custom-slider">
    <img className={styles.imgCar} src={img1} height="100" />
    <img className={styles.imgCar} src={img2} height="100" />
    <img className={styles.imgCar} src={img3} height="100" />
    
    </Carousel>
    </div>
  );


export default ImgCarousel;