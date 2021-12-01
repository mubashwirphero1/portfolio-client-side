import React from 'react';
import styles from "../Banner/Banner.module.css"

const Services = () => {
    return (
        <div className="my-10 px-12">
            <h1 className="text-5xl font-semibold text-center text-gray-100">I am expertise in ....</h1>
            <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-10 my-32">
                <div>
                    <img src="https://i.ibb.co/KydLVz3/1216733.png" alt="HTML5" />
                    <br />
                    <p className={`${styles.textColor} text-4xl font-semibold text-center`}>HTML5</p>
                </div>
                <div>
                    <img src="https://i.ibb.co/kHPV7QY/852450.png" className="rounded-full" alt="CSS3" />
                    <br />
                    <p className={`${styles.textColor} text-4xl font-semibold text-center`}>CSS3</p>
                </div>
                <div>
                    <img src="https://i.ibb.co/r6sSJBc/919828.png" className="rounded-full" alt="JS" />
                    <br />
                    <p className={`${styles.textColor} text-4xl font-semibold text-center`}>JavaScript</p>
                </div>
                <div>
                    <img src="https://i.ibb.co/CBCzLp8/919851.png" className="rounded-full" alt="React JS" />
                    <br />
                    <p className={`${styles.textColor} text-4xl font-semibold text-center`}>React.JS</p>
                </div>
                <div>
                    <img src="https://i.ibb.co/5xSWx5B/500-F-352678266-NFcw-Iwhh-Y76mk-QIt-T4l-Cxyxc-CTP3-Lgv-Y.jpg" className="rounded-full" alt="Node JS" />
                    <br />
                    <p className={`${styles.textColor} text-4xl font-semibold text-center`}>Node.JS</p>
                </div>
                <div>
                    <img src="https://i.ibb.co/C2pdys9/Mongo-DB-Logo-500x313.png" className="rounded-full" alt="MongoDB" />
                    <br />
                    <p className={`${styles.textColor} text-4xl font-semibold text-center`}>MongoDB</p>
                </div>
            </div>
        </div>
    );
};

export default Services;