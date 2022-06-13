import React from 'react';
import styles from './Footer.module.css';

const Content = () =>{

    return(
        <div className={styles.Footer}>
            <p>Contacto: <a href="mailto:agustinmaciel0810@gmail.com">agustinmaciel0810@gmail.com</a> / <a href='https://www.linkedin.com/in/agustinm0810/'>Linkedin</a></p>
            <p>Desarrollado por Agustin Maciel</p>
            <p>2022 ©</p>
        </div>
    )
}
export default Content;