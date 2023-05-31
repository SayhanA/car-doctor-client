import './About.css'

const About = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className='relative lg:w-[50%]'>
                    <div className='img-body w-[460px] h-[470px] rounded-xl'>
                        
                    </div>
                    <div className='img-frame w-[300px] h-[300px] border-[10px] absolute -bottom-20 right-20'>

                    </div>
                </div>
                <div className='lg:w-[50%]'>
                    <h4 className='font-bold mb-5 text-xl text-[#FF3811]'>About Us</h4>
                    <h1 className="text-5xl font-bold mb-8 w-[370px] leading-[60px]">We are qualified & of experience in this field</h1>
                    <p className="">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    <p className="py-8">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className="btn bg-[#FF3811] normal-case border-0 rounded-md">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;