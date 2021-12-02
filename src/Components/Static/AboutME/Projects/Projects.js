import React, { useEffect, useState } from 'react';
import styles from '../../Home/Banner/Banner.module.css'

const Projects = () => {
    useEffect(() => {
        fetch('./FakeData.json')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])
    return (
        <div className='my-36'>
            <h1 className="text-gray-100 text-5xl font-semibold text-center">My Best <span className={`${styles.textColor}`}>Projects</span></h1>
        </div>
    );
};

export default Projects;