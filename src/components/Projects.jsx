import React from "react"
import img2 from '../assets/Lung_cancer.jpg'
import img3 from '../assets/fras.jpg'
import img4 from '../assets/food.jpg'
import img5 from '../assets/ar.jpg'
const Projects = () => {
    return (
        <div id="Projects" className="p-20 flex flex-col items-center justify-center">
            <h1 data-aos="fade-right" className="text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500">Projects</h1>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-20">
                <img data-aos="fade-up" height={300} width={300} className="text-[26px] flex items-center justify-center rounded-3xl h-36 w-44 p1 border-2 border-fuchsia-800 b_glow" src={img5} alt="" />
                <img data-aos="fade-down" height={300} width={300} className="text-[26px] flex items-center justify-center rounded-3xl h-36 w-44 p1 border-2 border-fuchsia-800 b_glow" src={img2} alt="" />
                <img data-aos="fade-up" height={300} width={300} className="text-[26px] flex items-center justify-center rounded-3xl h-36 w-44 p1 border-2 border-fuchsia-800 b_glow" src={img3} alt="" />
                <img data-aos="fade-down" height={300} width={300} className="text-[26px] flex items-center justify-center rounded-3xl h-36 w-44 p1 border-2 border-fuchsia-800 b_glow" src={img4} alt="" />
            </div>

        </div>
    )
}
export default Projects