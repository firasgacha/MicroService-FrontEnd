import React from "react";

const About = () => {
    return (
        <div id="about">
            <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">Our Team Members</h1>
                </div>
                <div className="flex justify-evenly mt-10">
                    <div className="p-4 pb-6 flex justify-center flex-col items-center">
                        <img className="md:block hidden w-[109px] h-[136px]" src="src/assets/mj.png" alt="Jihed Mastouri Img" />
                        <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Jihed Mastouri</p>
                    </div>
                    <div className="p-4 pb-6 flex justify-center flex-col items-center">
                        <img className="md:block hidden w-[109px] h-[136px]" src="src/assets/fg.jpg" alt="Firas Gacha Img" />
                        <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Firas Gacha</p>
                    </div>
                    <div className="p-4 pb-6 flex justify-center flex-col items-center">
                        <img className="md:block hidden w-[109px] h-[136px]" src="src/assets/wael.jpg" alt="Yassine Darmoul Img" />
                        <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Yassine Darmoul</p>
                    </div>
                    <div className="p-4 pb-6 flex justify-center flex-col items-center">
                        <img className="md:block hidden w-[109px] h-[136px]" src="src/assets/yassine.jpg" alt="Wael Bouatay Img" />
                        <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Wael Bouatay</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
