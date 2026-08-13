import React from 'react'
import Api from '../../posts.json'
export default function TeamSection() {
    return (
        <>
            <div className='min-h-screen bg-[#0c0c0d] border-t border-t-neutral-800 text-white'>
                <div className='w-full lg:w-[90%] mx-auto p-4 pt-20 lg:p-25'>
                    <div className="title text-center">
                        <div className="inline-flex items-center gap-2.5 rounded-full border mb-5 border-orange-500/30 bg-orange-950/30 px-5 py-2 text-sm font-medium text-orange-500">
                            <div className="flex items-center gap-1.5">
                                <span className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
                            </div>
                            <span>فريقنا</span>
                        </div>
                        <h2 className='text-3xl md:text-4xl font-bold'>تعرف على كتابنا</h2>
                        <p className='mt-4 text-neutral-400 text-lg'>فريقنا من المصورين والكتاب ذوي الخبرة شغوفون بمشاركة معرفتهم مع المجتمع.</p>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12'>
                        {Api.posts.map((post, index) => (
                            <div className="bg-[#121212] border border-neutral-800 rounded-2xl p-8 flex flex-col items-center justify-center transition-colors hover:border-orange-600/35">
                                <div className="relative mb-4">
                                    <img
                                        src={post.author.avatar}
                                        alt={post.author.name}
                                        className="w-24 h-24 rounded-full object-cover bg-neutral-800"
                                    />
                                    <div className="absolute bottom-0 right-0 bg-orange-500 text-white w-6 h-6 flex items-center justify-center rounded-full border-2 border-[#121212]">
                                        <i className="fa-solid fa-check text-xs"></i>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-1">{post.author.name}</h3>
                                <p className="text-orange-500 text-sm mb-6">{post.author.role}</p>

                                <div className="flex items-center gap-3">
                                    <a href="#" className="w-10 h-10 rounded-lg bg-[#1a1a1a] flex items-center justify-center text-neutral-400 hover:bg-orange-500 transition-colors group">
                                        <i className="fa-brands fa-x-twitter text-lg group-hover:text-white transition-colors"></i>
                                    </a>
                                    <a href="#" className="w-10 h-10 rounded-lg bg-[#1a1a1a] flex items-center justify-center text-neutral-400 hover:bg-neutral-700 transition-colors group">
                                        <i className="fa-brands fa-github text-lg group-hover:text-white transition-colors"></i>
                                    </a>
                                    <a href="#" className="w-10 h-10 rounded-lg bg-[#1a1a1a] flex items-center justify-center hover:bg-[#0a66c2] text-neutral-400 group">
                                        <i className="fa-brands fa-linkedin text-lg group-hover:text-white "></i>
                                    </a>


                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
