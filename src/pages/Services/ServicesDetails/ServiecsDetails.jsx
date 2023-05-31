import img from "../../../assets/images/services/4.jpg"

const ServiecsDetails = () => {
    return (
        <div className="pr-20">
            <img src={img} className="rounded-2xl h-[400px] w-full" alt="" />
            <h3 className="text-2xl font-bold pt-10">Unique Car Engine Service</h3>
            <p className="pt-3">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>
            <div className="grid grid-cols-2 gap-7 mt-10">
                <div className="border-0 border-t-4 border-t-red-500 rounded-md p-10 bg-base-200">
                    <h3 className="font-bold">Instant Car Services</h3>
                    <p>It uses a dictionary of over 200 Latin words, combined with a model sentence structures</p>
                </div>
                <div className="border-0 border-t-4 border-t-red-500 rounded-md p-10 bg-base-200">
                    <h3 className="font-bold">Instant Car Services</h3>
                    <p>It uses a dictionary of over 200 Latin words, combined with a model sentence structures</p>
                </div>
                <div className="border-0 border-t-4 border-t-red-500 rounded-md p-10 bg-base-200">
                    <h3 className="font-bold">Instant Car Services</h3>
                    <p>It uses a dictionary of over 200 Latin words, combined with a model sentence structures</p>
                </div>
                <div className="border-0 border-t-4 border-t-red-500 rounded-md p-10 bg-base-200">
                    <h3 className="font-bold">Instant Car Services</h3>
                    <p>It uses a dictionary of over 200 Latin words, combined with a model sentence structures</p>
                </div>

            </div>
            <p className="my-10">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
            <h3 className="text-2xl font-bold">3 Simple Steps to Process</h3>
            <p className="mt-5 mb-10">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>

            <div className="grid grid-cols-3 gap-5 mb-10">
                <div className="border rounded-xl flex flex-col justify-center items-center py-14 gap-5 hover:scale-110 transition-all shadow-xl">
                    <div className="rounded-full bg-[#ff391150] h-[80px] w-[80px] flex justify-center items-center">
                        <div className="rounded-full bg-[#FF3811] h-[50px] w-[50px] flex justify-center items-center text-xl font-bold text-white">
                            1
                        </div>
                    </div>
                    <h3 className="font-bold uppercase text-center">Step One</h3>
                    <p className="text-center text-gray-400">It uses a dictionary <br /> of over 200 .</p>
                </div>

                <div className="border rounded-xl flex flex-col justify-center items-center py-14 gap-5 hover:scale-110 transition-all shadow-xl">
                    <div className="rounded-full bg-[#ff391150] h-[80px] w-[80px] flex justify-center items-center">
                        <div className="rounded-full bg-[#FF3811] h-[50px] w-[50px] flex justify-center items-center text-xl font-bold text-white">
                            1
                        </div>
                    </div>
                    <h3 className="font-bold uppercase text-center">Step One</h3>
                    <p className="text-center text-gray-400">It uses a dictionary <br /> of over 200 .</p>
                </div>

                <div className="border rounded-xl flex flex-col justify-center items-center py-14 gap-5 hover:scale-110 transition-all shadow-xl">
                    <div className="rounded-full bg-[#ff391150] h-[80px] w-[80px] flex justify-center items-center">
                        <div className="rounded-full bg-[#FF3811] h-[50px] w-[50px] flex justify-center items-center text-xl font-bold text-white">
                            1
                        </div>
                    </div>
                    <h3 className="font-bold uppercase text-center">Step One</h3>
                    <p className="text-center text-gray-400">It uses a dictionary <br /> of over 200 .</p>
                </div>

            </div>
            <div>
                <iframe width="100%" height="450" className="rounded-xl mb-10" src="https://www.youtube.com/embed/chhmCdYt0iQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
    );
};

export default ServiecsDetails;