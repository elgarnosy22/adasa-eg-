import React from 'react'
import Api from '../../posts.json'
import { Link } from 'react-router-dom'

export default function Second() {
    return (
        <>
            <div className="min-h-screen bg-[#0c0c0d] bg-[linear-gradient(to_left,rgba(234,88,12,0.12)_0%,transparent_40%)] text-white">
                <div className='w-full lg:w-[90%] mx-auto p-4 pt-20 lg:p-25'>

                    <div>
                        <div className="inline-flex items-center gap-2.5 rounded-full border mb-5 border-orange-500/30 bg-orange-950/30 px-5 py-2 text-sm font-medium text-orange-500">
                            <div className="flex items-center gap-1.5">
                                <span className="h-2 w-2 rounded-full bg-amber-800/80 animate-ping" />
                                <span className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
                            </div>
                            <span>مميز</span>
                        </div>
                        <h2 className='lg:text-6xl text-4xl mb-5 font-semibold'>مقالات مختارة</h2>

                        <div className='flex flex-col lg:flex-row lg:items-center justify-between gap-4'>
                            <div>
                                <p className='text-[1.13rem] text-gray-400 mb-2 lg:mb-0'>محتوى منتقى لبدء رحلة تعلمك</p>
                            </div>
                            <Link to={'blog'} href="" className='bg-orange-600 w-fit lg:p-3 px-5 py-3 rounded-xl hover:-translate-y-1 transition-all duration-300'>
                                عرض الكل <i className="fa-solid fa-chevron-left ms-1"></i>
                            </Link>
                        </div>
                    </div>

                    <div className="mt-10 flex flex-col gap-6">
                        {Api.posts.slice(0, 3).map((post, index) => (
                            <Link to={`blog/${Api.posts[index].slug}`}>
                                <div key={index} className='big flex flex-col lg:flex-row rounded-4xl border bg-[#161616] group hover:border-orange-500 border-gray-800'>

                                    <div className='image w-full lg:w-1/2 relative overflow-hidden rounded-t-4xl lg:rounded-t-none lg:rounded-tr-4xl lg:rounded-br-4xl z-0'>
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className='w-full h-64 lg:h-[25rem] object-cover group-hover:scale-110 transition-transform duration-700'
                                        />
                                        <span className='bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 text-white text-xs font-medium px-4 py-1 rounded-2xl absolute top-5 right-6'>
                                            <i className="fa-solid fa-star me-1"></i>مميز
                                        </span>
                                    </div>

                                    <div className='content w-full lg:w-1/2 p-5 lg:p-8 flex flex-col justify-center'>
                                        <div className='mb-4 flex items-center'>
                                            <span className='me-3 text-[0.8rem] font-semibold bg-orange-500/20 border border-orange-500 py-1 px-3.5 text-orange-600 rounded-2xl'>
                                                {post.category}
                                            </span>
                                            <span className='text-sm text-gray-500'>
                                                <i className="fa-regular fa-clock me-1"></i> {post.readTime}
                                            </span>
                                        </div>
                                        <h2 className='text-2xl lg:text-3xl font-semibold mb-3 lg:mb-5 group-hover:text-orange-500 transition-colors duration-300'>
                                            {post.title}
                                        </h2>
                                        <p className='text-gray-400 text-sm lg:text-base mb-8 lg:mb-10 line-clamp-3'>
                                            {post.excerpt}
                                        </p>

                                        <div className='flex flex-wrap items-center justify-between mt-auto'>
                                            <div className='flex items-center mb-3 sm:mb-0'>
                                                <div className='relative'>
                                                    <img src={post.author.avatar} alt={post.author.name} className="w-10 h-10 rounded-full object-cover" />
                                                    <span className='bottom-0 right-7 absolute w-3 h-3 bg-orange-500 border-2 border-[#161616] rounded-full'></span>
                                                </div>
                                                <div className='ms-3'>
                                                    <p className='text-[0.88rem] font-semibold mb-0.5'>{post.author.name}</p>
                                                    <p className='text-[0.75rem] text-gray-500'>{post.date}</p>
                                                </div>
                                            </div>
                                            <a href="" className='text-orange-600 font-medium hover:text-orange-400 transition-colors flex items-center'>
                                                اقرأ المقال<i className="fa-solid fa-arrow-left-long group-hover:ms-2 transition-all duration-300"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                </div>
            </div>
        </>
    )
}