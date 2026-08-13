import React from 'react'
import { Link } from 'react-router-dom'

export default function Frist() {
    return (
        <>
            <div className="relative min-h-screen w-full  mt-20 pt-20 bg-[#0a0a0a] text-white flex flex-col justify-center items-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff2d_1px,transparent_1px),linear-gradient(to_bottom,#ffffff2d_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none"
                />
                <div
                    className="absolute -left-20 top-1/3 w-[450px] h-[450px] bg-orange-600/50 rounded-full blur-[130px] pointer-events-none"
                />
                <div
                    className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#0a0a0a_80%)] pointer-events-none"
                />
                {/* محتوى النص */}
                <div className="relative z-10 text-center max-w-3xl px-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-neutral-800 mb-6">
                        <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse"></span>
                        <span className="w-2 h-2 rounded-full bg-orange-600 animate-pulse"></span>
                        مرحباً بك في عدسة
                    </div>

                    <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold leading-tight">
                        اكتشف <span className="text-amber-500">فن</span><br /> التصوير الفوتوغرافي
                    </h1>

                    <p className="mt-4 text-neutral-400 text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto">
                        انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
                    </p>
                </div>
                <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4 my-10 px-4 w-full max-w-md sm:max-w-none">
                    <Link to={'blog'} className="w-full sm:w-auto text-center bg-orange-500 text-white p-4 rounded-4xl cursor-pointer transition-all duration-300 hover:-translate-y-1">
                        استكشف المقالات <i className="fa-solid fa-arrow-left me-2"></i>
                    </Link>
                    <Link to={'about'} className="w-full sm:w-auto text-center bg-neutral-950 border border-neutral-800 p-4 rounded-4xl cursor-pointer transition-all duration-300 hover:border-orange-500 hover:text-orange-500">
                        <i className="fa-solid fa-circle-info ms-2"></i> اعرف المزيد
                    </Link>
                </div>
                
                <div className='relative z-10 grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-2xl px-4'>
                    <div className='text-center text-3xl text-orange-500 bg-black border-2 border-gray-800 py-4 px-4 sm:px-8 rounded-3xl hover:scale-105 transition-all duration-300'>
                        <i className="fa-regular fa-newspaper"></i>
                        <p className=' text-orange-400 text-[1.4rem] font-bold'>+50</p>
                        <p className='text-gray-500 text-sm'>مقالة</p>
                    </div>
                    <div className='text-center text-3xl text-orange-500 bg-black border-2 border-gray-800 py-4 px-4 sm:px-8 rounded-3xl hover:scale-105 transition-all duration-300'>
                        <i className="fa-solid fa-users"></i>
                        <p className=' text-orange-400 text-[1.4rem] font-bold'>+10ألف</p>
                        <p className='text-gray-500 text-sm'>قارئ</p>
                    </div>
                    <div className='text-center text-3xl text-orange-500 bg-black border-2 border-gray-800 py-4 px-4 sm:px-8 rounded-3xl hover:scale-105 transition-all duration-300'>
                        <i className="fa-solid fa-folder-open"></i>
                        <p className=' text-orange-400 text-[1.4rem] font-bold'>4</p>
                        <p className='text-gray-500 text-sm'>تصنيفات</p>
                    </div>
                    <div className='text-center text-3xl text-orange-500 bg-black border-2 border-gray-800 py-4 px-4 sm:px-8 rounded-3xl hover:scale-105 transition-all duration-300'>
                        <i className="fa-solid fa-pen-nib "></i>
                        <p className=' text-orange-400 text-[1.4rem] font-bold'>6</p>
                        <p className='text-gray-500 text-sm'>كاتب</p>
                    </div>
                </div>

            </div>
        </>
    )
}