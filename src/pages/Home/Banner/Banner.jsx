// import img1 from "../../../assets/images/banner/1.jpg"
import img2 from "../../../assets/images/banner/2.jpg"
import img3 from "../../../assets/images/banner/3.jpg"
import img4 from "../../../assets/images/banner/4.jpg"
import img5 from "../../../assets/images/banner/5.jpg"
// import img6 from "../../../assets/images/banner/6.jpg"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Banner = () => {
    return (
        <div className="carousel w-full h-[650px]">
            <div id="slide1" className="carousel-item relative w-full rounded-xl">
                <img src={img5} className="w-full rounded-xl" />
                <div className="rounded-xl bg-gradient-to-r from-[#000000] to-[#00000010] w-full h-full absolute px-24 py-28">
                    <h3 className="text-6xl text-white font-bold w-[460px] leading-[75px] pb-8">Affordable Price For Car Servicing</h3>
                    <p className="text-white w-[522px] pb-8 text-lg">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div>
                        <button className="mr-5 btn bg-red-500 rounded-sm  text-white  border-0 normal-case text-lg ">Discover More</button>
                        <button className="btn btn-outline text-white rounded-sm  border-white normal-case text-lg">Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end bottom-0 gap-5 transform -translate-y-1/2 left-5 right-5">
                    <a href="#slide4" className="btn btn-circle hover:bg-rose-500 border-0 btn-outline text-white text-xl bg-[#ffffff50] w-[60px] h-[60px]"> <FaArrowLeft /> </a>
                    <a href="#slide2" className="btn btn-circle hover:bg-rose-500 border-0 btn-outline text-white text-xl bg-[#ffffff50] w-[60px] h-[60px]"> <FaArrowRight /> </a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full rounded-xl">
                <img src={img2} className="w-full rounded-xl" />
                <div className="rounded-xl bg-gradient-to-r from-[#000000] to-[#00000010] w-full h-full absolute px-24 py-28">
                    <h3 className="text-6xl text-white font-bold w-[460px] leading-[75px] pb-8">Affordable Price For Car Servicing</h3>
                    <p className="text-white w-[522px] pb-8 text-lg">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div>
                        <button className="mr-5 btn bg-red-500 rounded-sm  text-white  border-0 normal-case text-lg ">Discover More</button>
                        <button className="btn btn-outline text-white rounded-sm  border-white normal-case text-lg">Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end bottom-0 gap-5 transform -translate-y-1/2 left-5 right-5">
                    <a href="#slide1" className="btn btn-circle hover:bg-rose-500 border-0 btn-outline text-white text-xl bg-[#ffffff50] w-[60px] h-[60px]"> <FaArrowLeft /></a>
                    <a href="#slide3" className="btn btn-circle hover:bg-rose-500 border-0 btn-outline text-white text-xl bg-[#ffffff50] w-[60px] h-[60px]"> <FaArrowRight /> </a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full rounded-xl">
                <img src={img3} className="w-full rounded-xl" />
                <div className="rounded-xl bg-gradient-to-r from-[#000000] to-[#00000010] w-full h-full absolute px-24 py-28">
                    <h3 className="text-6xl text-white font-bold w-[460px] leading-[75px] pb-8">Affordable Price For Car Servicing</h3>
                    <p className="text-white w-[522px] pb-8 text-lg">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div>
                        <button className="mr-5 btn bg-red-500 rounded-sm  text-white  border-0 normal-case text-lg ">Discover More</button>
                        <button className="btn btn-outline text-white rounded-sm  border-white normal-case text-lg">Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end bottom-0 gap-5 transform -translate-y-1/2 left-5 right-5">
                    <a href="#slide2" className="btn btn-circle hover:bg-rose-500 border-0 btn-outline text-white text-xl bg-[#ffffff50] w-[60px] h-[60px]"> <FaArrowLeft /></a>
                    <a href="#slide4" className="btn btn-circle hover:bg-rose-500 border-0 btn-outline text-white text-xl bg-[#ffffff50] w-[60px] h-[60px]"> <FaArrowRight /> </a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full rounded-xl">
                <img src={img4} className="w-full rounded-xl" />
                <div className="rounded-xl bg-gradient-to-r from-[#000000] to-[#00000010] w-full h-full absolute px-24 py-28">
                    <h3 className="text-6xl text-white font-bold w-[460px] leading-[75px] pb-8">Affordable Price For Car Servicing</h3>
                    <p className="text-white w-[522px] pb-8 text-lg">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div>
                        <button className="mr-5 btn bg-red-500 rounded-sm  text-white  border-0 normal-case text-lg ">Discover More</button>
                        <button className="btn btn-outline text-white rounded-sm  border-white normal-case text-lg">Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end bottom-0 gap-5 transform -translate-y-1/2 left-5 right-5">
                    <a href="#slide3" className="btn btn-circle hover:bg-rose-500 border-0 btn-outline text-white text-xl bg-[#ffffff50] w-[60px] h-[60px]"> <FaArrowLeft /></a>
                    <a href="#slide1" className="btn btn-circle hover:bg-rose-500 border-0 btn-outline text-white text-xl bg-[#ffffff50] w-[60px] h-[60px]"> <FaArrowRight /> </a>
                </div>
            </div>
        </div>
    );
};

export default Banner;