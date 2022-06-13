import React from 'react';
import styles from './Content.module.css';
import PanelGrp from '../external/PanelGroup.js';
import ImgCarousel from '../external/imgCarousel.js';

const Content = () =>{

    return(
        <div className={styles.Content}>
            <PanelGrp id='main' />
            <ImgCarousel id='main'/>
        </div>
    )
}
export default Content;