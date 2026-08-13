import React from 'react'
import Api from '../../posts.json'
import { Link, useParams } from 'react-router-dom';
export default function Image() {
    const { slug } = useParams();
    const currentPost = Api.posts.find(post => post.slug === slug);
    return (
        <>
            <div

                className="relative w-full min-h-[600px] flex flex-col justify-between overflow-hidden bg-gray-900"
                style={{
                    backgroundImage:
                        `url(${currentPost.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/10" />

                <div className="relative z-10  min-h-[600px]  px-6 sm:px-10 lg:px-16 pt-30">
                    {/* span1 */}
                    <div className='bg-zinc-900/50 backdrop-blur-md border border-white/10 text-sm w-fit rounded-3xl text-neutral-400 py-2 px-3'>
                        <span className='hover:text-white'><Link to={"/"}><i class="fa-solid fa-house"></i> </Link></span>
                        <i class="fa-solid fa-angle-left"></i>
                        <span className='hover:text-white'><Link to={'/blog'}>المدونة</Link> </span>
                        <i class="fa-solid fa-angle-left"></i>
                        <span className='text-orange-500 font-semibold'> {currentPost.category} </span>
                    </div>
                    <div className=' my-40 md:my-15 mx-auto md:w-[70%]'>
                        {/* span2 */}
                        <div className=' text-sm'>
                            <span className=' bg-orange-500 py-2 px-4 text-white font-bold rounded-2xl hover:bg-orange-600'><a href="">إضاءة</a></span>
                            <span className='mx-2 text-neutral-200 '><i class="fa-regular fa-calendar"></i>{currentPost.date}</span>
                            <span className='text-neutral-200 '><i class="fa-regular fa-clock"></i> {currentPost.readTime}</span>
                        </div>
                        <h1 className=' text-3xl md:text-5xl lg:text-6xl my-8 text-white font-bold'>{currentPost.title}</h1>
                        {/* img */}
                        <div className=' mt-20 flex bg-zinc-900/50 backdrop-blur-md border border-white/10 p-4 w-fit rounded-2xl'>
                            <img src={Api.posts[0].author.avatar} alt={currentPost.author.name} className='rounded-full w-15 border border-3 me-2 border-orange-500' />
                            <div>
                                <p className='font-bold text-white'>{currentPost.author.name}</p>
                                <p className='text-sm text-neutral-400'>{currentPost.author.role}</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
