import React, { useEffect } from 'react';
import useStorage from '../hooks/useStorage';
import styles from '../styles/Home.module.css';

const ProgressBar=({file,setFile,...props})=>{
    const{url,progress}=useStorage(file);


    useEffect(()=>{
        if(url){
            setFile(null)
        }
    },[url,setFile])


    return(

<div className={styles.progressBar} style={{width:progress + "%"}}></div>
    )
}

export default ProgressBar;