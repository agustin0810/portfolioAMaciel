import React from 'react';
import styles from './Header.module.css';
import profileImg from '../../images/profileImage.jpg'

const Header = () =>{
    const [age, setAge] = React.useState(0)

    if(age==0){
        const getAge = birthDate => Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e+10)
        setAge(getAge('2002-10-08'))
    }
    return(
        <div className={styles.container}>
            <div className={styles.child}>
                <img className={styles.profileImg} src={profileImg}/> 
                <h1>Agustin Maciel</h1>
                <h2 style={{padding:20}}>{age} años</h2>
                <h2 style={{padding:20}}>Estudiante Analista Programador</h2>
            </div>
        </div>
    )
}
export default Header;