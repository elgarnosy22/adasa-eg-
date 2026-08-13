import React from 'react'

export default function Third() {
    return (
        <>
            <div className='min-h-screen bg-[#111111] border-t border-b border-t-gray-800 border-b-gray-800 '>
                <div className='lg:w-[90%] lg:mx-auto p-6 pt-20 lg:p-25'>
                    <div className="title text-center">
                        <div className="inline-flex items-center gap-2.5 rounded-full border mb-5 border-orange-500/30 bg-orange-950/30 px-5 py-2 text-sm font-medium text-orange-500">
                            <div className="flex items-center gap-1.5">
                                <span className="h-2 w-2 rounded-full bg-amber-800/80 animate-pulse" />
                                <span className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
                            </div>
                            <span>التصنيفات</span>
                        </div>
                        <h2 className=' text-4xl md:text-5xl lg:text-6xl font-bold text-white'>استكشف حسب الموضوع</h2>
                        <p className=' text-lg mt-8 text-gray-500'>اعثر على محتوى مصمم حسب اهتماماتك</p>
                    </div>
                    
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mt-12'>
                        
                        <div className='one relative cursor-pointer z-0 overflow-hidden hover:-translate-y-1.5 transition-all duration-300 bg-[#1c1b1b] flex items-center border-[0.04rem] group border-gray-700 p-5 rounded-2xl justify-between'>
                            <div className='absolute inset-0 bg-gradient-to-br from-orange-500 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10'></div>
                            <div>
                                <div className='bg-orange-500/30 p-3 w-max rounded-xl text-orange-600 group-hover:text-white group-hover:bg-white/20 text-xl transition-all duration-300'>
                                    <i className="fa-solid fa-sun"></i>
                                </div>
                                <h3 className=' text-white text-lg font-bold mt-4'>إضاءة</h3>
                                <p className='text-gray-500 group-hover:text-gray-200 transition-colors duration-300 text-sm'>3 مقالة</p>
                            </div>
                            <div className='bg-white/20 opacity-0 group-hover:opacity-100 text-white p-2 rounded-full transition-all duration-300'>
                                <i className="fa-solid fa-chevron-left"></i>
                            </div>
                        </div>

                        <div className='two relative cursor-pointer z-0 overflow-hidden hover:-translate-y-1.5 transition-all duration-300 bg-[#1c1b1b] flex items-center border-[0.04rem] group border-gray-700 p-5 rounded-2xl justify-between'>
                            <div className='absolute inset-0 bg-gradient-to-br from-orange-600 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10'></div>
                            <div>
                                <div className='bg-orange-500/30 p-3 w-max rounded-xl text-orange-600 group-hover:text-white group-hover:bg-white/20 text-xl transition-all duration-300'>
                                    <i className="fa-solid fa-user"></i>
                                </div>
                                <h3 className=' text-white text-lg font-bold mt-4'>بورتريه</h3>
                                <p className='text-gray-500 group-hover:text-gray-200 transition-colors duration-300 text-sm'>3 مقالة</p>
                            </div>
                            <div className='bg-white/20 opacity-0 group-hover:opacity-100 text-white p-2 rounded-full transition-all duration-300'>
                                <i className="fa-solid fa-chevron-left"></i>
                            </div>
                        </div>

                        <div className='three relative cursor-pointer z-0 overflow-hidden hover:-translate-y-1.5 transition-all duration-300 bg-[#1c1b1b] flex items-center border-[0.04rem] group border-gray-700 p-5 rounded-2xl justify-between'>
                            <div className='absolute inset-0 bg-gradient-to-br from-orange-500 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10'></div>
                            <div>
                                <div className='bg-orange-500/30 p-3 w-max rounded-xl text-orange-600 group-hover:text-white group-hover:bg-white/20 text-xl transition-all duration-300'>
                                    <i className="fa-solid fa-mountain-sun"></i>
                                </div>
                                <h3 className=' text-white text-lg font-bold mt-4'>مناظر طبيعية</h3>
                                <p className='text-gray-500 group-hover:text-gray-200 transition-colors duration-300 text-sm'>2 مقالة</p>
                            </div>
                            <div className='bg-white/20 opacity-0 group-hover:opacity-100 text-white p-2 rounded-full transition-all duration-300'>
                                <i className="fa-solid fa-chevron-left"></i>
                            </div>
                        </div>

                        <div className='four relative cursor-pointer z-0 overflow-hidden hover:-translate-y-1.5 transition-all duration-300 bg-[#1c1b1b] flex items-center border-[0.04rem] group border-gray-700 p-5 rounded-2xl justify-between'>
                            <div className='absolute inset-0 bg-gradient-to-br from-orange-500 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10'></div>
                            <div>
                                <div className='bg-orange-500/30 p-3 w-max rounded-xl text-orange-600 group-hover:text-white group-hover:bg-white/20 text-xl transition-all duration-300'>
                                    <i className="fa-solid fa-sliders"></i>
                                </div>
                                <h3 className=' text-white text-lg font-bold mt-4'>تقنيات</h3>
                                <p className='text-gray-500 group-hover:text-gray-200 transition-colors duration-300 text-sm'>5 مقالة</p>
                            </div>
                            <div className='bg-white/20 opacity-0 group-hover:opacity-100 text-white p-2 rounded-full transition-all duration-300'>
                                <i className="fa-solid fa-chevron-left"></i>
                            </div>
                        </div>

                        <div className='five relative cursor-pointer z-0 overflow-hidden hover:-translate-y-1.5 transition-all duration-300 bg-[#1c1b1b] flex items-center border-[0.04rem] group border-gray-700 p-5 rounded-2xl justify-between'>
                            <div className='absolute inset-0 bg-gradient-to-br from-orange-500 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10'></div>
                            <div>
                                <div className='bg-orange-500/30 p-3 w-max rounded-xl text-orange-600 group-hover:text-white group-hover:bg-white/20 text-xl transition-all duration-300'>
                                    <i className="fa-solid fa-gear"></i>
                                </div>
                                <h3 className=' text-white text-lg font-bold mt-4'>معدات</h3>
                                <p className='text-gray-500 group-hover:text-gray-200 transition-colors duration-300 text-sm'>3 مقالة</p>
                            </div>
                            <div className='bg-white/20 opacity-0 group-hover:opacity-100 text-white p-2 rounded-full transition-all duration-300'>
                                <i className="fa-solid fa-chevron-left"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}