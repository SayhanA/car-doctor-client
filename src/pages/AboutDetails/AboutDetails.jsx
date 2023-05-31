import React from 'react';

const AboutDetails = () => {
    return (
        <div>
            <div className='h-[600px] rounded-lg grid grid-cols-2'>
                <div className='flex justify-center items-center'>
                    <h3 className='text-5xl font-bold  leading-[60px] font-serif'>We are car mechanic engine's working together as a family and fluently.</h3>
                </div>
                <div className='relative grid grid-cols-2'>
                    <div className='ml-auto'>
                        <img className='w-full h-[370px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZqwxBMJq5AVdCdOJdu5VwudIs0GyzpBDipdo0dcOh1MD0vLA5U7-DoOOJy4rfZrVEdls&usqp=CAU" alt="" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC36aSkyte-T3AqzFitSEHFSuuLoMPBTW81nUWIXo4OUcI3JW93Qd9bCxXj0JcQaFBrZ0&usqp=CAU" alt="" />
                    </div>
                    <div className='mr-'>
                        <img className='w-[255px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp67c2uQ_bYkyIREb24dlNlizUvsIt3uL2OiM5IJuJktTtsFSb3GVi5J215MhLL8S8tu8&usqp=CAU" alt="" />
                        <img className='w-[255px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlyY0eXf_kFWiOllcNFbztqr7Mwl1AXIgB1sqxeMdi3DsqTLld1E0Vi0F1hY6GDT6egKg&usqp=CAU" alt="" />
                        <img className='w-[255px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg79cZU5ZQ5S6W8YlOjbq6GgEjjw_-mqAQxak5XWcajpO9ZOltWsN-uH2n8p0Y5k0B204&usqp=CAU" alt="" />
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-2 mt-20'>
                <div className=' gap-20'>
                    <img className='rounded-xl' src="https://media.istockphoto.com/id/1438376535/photo/handsome-mechanic-job-in-uniform-working-on-car.jpg?s=2048x2048&w=is&k=20&c=_rvBkPEragPYqJLDGIIz13DymkVKzEG9gjzAPVPIHhk=" alt="" />
                </div>
                <div className=' p-20'>
                    <h3 className='text-2xl font-bold '>Md.Khalid Mortak</h3>
                    <p className='pb-5'>Senior Engineer</p>

                    <p className='pb-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos esse iusto natus! Recusandae maxime minus quos non eius ipsa voluptas distinctio totam! Laborum, voluptates incidunt assumenda laboriosam excepturi placeat eaque.</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos esse iusto natus! Recusandae maxime minus quos non eius ipsa voluptas distinctio totam! Laborum, voluptates incidunt assumenda laboriosam excepturi placeat eaque.</p>
                </div>
            </div>
            <div className='grid grid-cols-2 mt-20'>
                
                <div className=' p-20'>
                    <h3 className='text-2xl font-bold '>Md.Musfiqure Rohim</h3>
                    <p className='pb-5'>Electric Engineer</p>

                    <p className='pb-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos esse iusto natus! Recusandae maxime minus quos non eius ipsa voluptas distinctio totam! Laborum, voluptates incidunt assumenda laboriosam excepturi placeat eaque.</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos esse iusto natus! Recusandae maxime minus quos non eius ipsa voluptas distinctio totam! Laborum, voluptates incidunt assumenda laboriosam excepturi placeat eaque.</p>
                </div>
                <div className=' gap-20'>
                    <img className='rounded-xl' src="https://media.istockphoto.com/id/1438376535/photo/handsome-mechanic-job-in-uniform-working-on-car.jpg?s=2048x2048&w=is&k=20&c=_rvBkPEragPYqJLDGIIz13DymkVKzEG9gjzAPVPIHhk=" alt="" />
                </div>
            </div>
            <div className='grid grid-cols-2 mt-20'>
                <div className=' gap-20'>
                    <img className='rounded-xl' src="https://media.istockphoto.com/id/1438376535/photo/handsome-mechanic-job-in-uniform-working-on-car.jpg?s=2048x2048&w=is&k=20&c=_rvBkPEragPYqJLDGIIz13DymkVKzEG9gjzAPVPIHhk=" alt="" />
                </div>
                <div className=' p-20'>
                    <h3 className='text-2xl font-bold '>Md.Mayder Mahbub</h3>
                    <p className='pb-5'>production manege</p>

                    <p className='pb-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos esse iusto natus! Recusandae maxime minus quos non eius ipsa voluptas distinctio totam! Laborum, voluptates incidunt assumenda laboriosam excepturi placeat eaque.</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos esse iusto natus! Recusandae maxime minus quos non eius ipsa voluptas distinctio totam! Laborum, voluptates incidunt assumenda laboriosam excepturi placeat eaque.</p>
                </div>
            </div>
            
        </div>
    );
};

export default AboutDetails;