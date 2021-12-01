import React from 'react';
import styles from "../Banner/Banner.module.css"

const AboutME = () => {
    return (
        <div className="my-24 px-12">
            <h1 className="text-5xl text-center font-semibold text-gray-100">KNOW ABOUT <span className={`${styles.textColor}`}>MYSELF</span></h1>
            <div className=" md:grid grid-cols-2 items-center justify-space-between gap-2 mt-20">
                <div>
                    <img width="50%" className="rounded-full" src="https://i.ibb.co/26WJTd3/Mubashwir-1.jpg" placeholder="portfolio image" />
                </div>
                <div>
                    <p className="text-gray-100 text-xl">Hello! I am <span className={styles.textColor}>Hasan Al Mubashwir</span>. And I am a Junior Web Developer. I have been started learning Web Development 1 year ago. I have no job experience. But I have done many projects before. I learned Web development from Programming Hero. I did all of the projects professionally. And I am sorry because I can't show any projects in this portfolio for some reason. In the next update of this portfolio, I will show all of the projects that I've done before.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutME;