import React from 'react'
import Api from '../../posts.json'
import { Link, useParams } from 'react-router-dom'
export default function Recommend() {
    const { slug } = useParams()
    const currentPost = Api.posts.find(post => post.slug === slug);
    return (
        <>
            <div className='bg-black min-h-screen py-10'>
                <div className='w-[95%] xl:w-[80%] mx-auto flex flex-col lg:flex-row gap-8 text-white'>
                    <div className=' border-t w-fit border-neutral-800 w-full '>
                        {/* title */}
                        <div className='flex justify-between items-center  my-10'>
                            <div className='flex'>
                                <i class="fa-solid fa-images text-orange-500 bg-amber-700/20 p-3 border border-orange-500/35 text-xl rounded-xl"></i>
                                <div className='ms-2'>
                                    <h3 className=' text-2xl font-bold'>مقالات قد تعجبك</h3>
                                    <p className=' text-sm text-neutral-400'>استكشف المزيد من المحتوى المميز</p>
                                </div>
                            </div>
                            <Link to={'/blog'} className='text-orange-500 hidden md:block hover:text-orange-400 group'>
                                عرض الكل <i class="fa-solid fa-arrow-left-long group-hover:ms-2 transition-all duration-300"></i>
                            </Link>
                        </div>
                        {/* cards */}
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full'>
                            {Api.posts.filter((post) => post.category == currentPost.category && post.slug !== currentPost.slug).slice(0, 3).map((post, index) => (
                                <Link to={`/blog/${post.slug}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="block">
                                    <div
                                        key={index}

                                        className="max-w-d w-full bg-black rounded-2xl overflow-hidden shadow-lg group cursor-pointer border border-gray-800 transition-all duration-300 hover:shadow-2xl"
                                    >
                                        <div className="relative h-40 overflow-hidden">
                                            <img
                                                src={post.image}
                                                alt={post.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-115"
                                            />

                                            <span className="absolute top-4 right-4 bg-[#ff6b00] text-white text-xs font-bold px-4 py-1.5 rounded-full z-10">
                                                {post.category}
                                            </span>

                                            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/90 to-transparent  transition-opacity duration-500 z-10 pointer-events-none">
                                            </div>
                                        </div>

                                        <div className="p-6">
                                            <h2 className="text-white  font-bold mb-8 group-hover:text-orange-500 leading-relaxed">
                                                {post.title}
                                            </h2>

                                            <div className="flex justify-between items-center text-gray-400 text-sm">
                                                <div className="flex items-center gap-3">
                                                    <img
                                                        src={post.author.avatar}
                                                        alt={post.author.name}
                                                        className="w-8 h-8 rounded-full object-cover"
                                                    />
                                                    <span>{post.author.name}</span>
                                                </div>

                                                <span>{post.readTime}</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
