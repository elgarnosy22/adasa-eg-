import React from 'react'
import Api from '../../posts.json'

export default function Fourth() {
    return (
        <>
            <div className='min-h-screen bg-[#0c0c0d] bg-[linear-gradient(to_right,rgba(234,88,12,0.07)_0%,transparent_40%)] text-white'>
                <div className='w-full lg:w-[90%] mx-auto p-4 pt-20 xl:p-25'>
                    
                    <div className="title">
                        <div className="inline-flex items-center gap-2.5 rounded-full border mb-5 border-orange-500/30 bg-orange-950/30 px-5 py-2 text-sm font-medium text-orange-500">
                            <div className="flex items-center gap-1.5">
                                <span className="h-2 w-2 rounded-full bg-amber-800/80 animate-ping" />
                                <span className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
                            </div>
                            <span>الأحدث</span>
                        </div>
                        <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold mt-3'>أحدث المقالات</h2>
                        
                        <div className="flex flex-col md:flex-row md:items-center justify-between mt-5 gap-4">
                            <p className='text-gray-500 text-lg'>محتوى جديد طازج من المطبعة</p>
                            <a href="" className='text-orange-500 w-fit font-semibold group hover:text-orange-400 transition-colors'>
                                عرض جميع المقالات <i className="fa-solid fa-arrow-left-long group-hover:-translate-x-2 transition-transform duration-300 ms-2"></i>
                            </a>
                        </div>
                    </div>

                    <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {Api.posts.slice(3, 6).map((post, index) => (
                            <div key={index} className='big bg-[#161616] border overflow-hidden cursor-pointer group hover:-translate-y-1 transition-all duration-500 border-gray-700 rounded-3xl flex flex-col'>
                                
                                <div className="img relative rounded-t-3xl overflow-hidden z-0">
                                    <img src={post.image} alt={post.title} className='w-full h-full object-cover group-hover:scale-115 transition-transform duration-900 z-0'/>
                                    <span className='absolute top-3 right-5 bg-black  text-[0.75rem] font-medium px-3 py-1 rounded-2xl'>{post.category}</span>
                                    <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
                                </div>
                                
                                <div className='content p-5 flex flex-col flex-grow'>
                                    <div className='text-gray-500 text-sm flex items-center mb-3'>
                                        <span className='me-3'><i className="fa-regular fa-clock me-1"></i> {post.readTime}</span>
                                        <span>{post.date}</span>
                                    </div>
                                    <h3 className='text-xl font-bold mb-3 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2'>{post.title}</h3>
                                    <p className='text-sm text-gray-500 line-clamp-3 mb-4'>{post.excerpt}</p>
                                    
                                    <div className='border-t border-t-gray-700 pt-5 mt-auto flex items-center justify-between w-full'>
                                        <div className='flex items-center'>
                                            <img src={post.author.avatar} alt={post.author.name} className='w-10 h-10 rounded-full object-cover' />
                                            <div className='ms-3'>
                                                <p className='text-sm font-semibold'>{post.author.name}</p>
                                                <p className='text-[0.75rem] text-gray-500'>{post.author.role}</p>
                                            </div>
                                        </div>
                                        <div className='bg-orange-500/20 text-orange-500 w-8 h-8 flex items-center justify-center rounded-full group-hover:text-white group-hover:bg-orange-500 transition-colors duration-300'>
                                            <i className="fa-solid fa-chevron-left"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </>
    )
}