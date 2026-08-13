import React from 'react'

export default function Title() {
    return (
        <>
            <div className="relative mt-15 py-20 bg-[#0a0a0a] flex items-center justify-center overflow-hidden font-sans">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px]"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-orange-600/10 rounded-full blur-[120px] pointer-events-none"></div>
                <div className="relative z-10 flex flex-col items-center text-center px-4">
                    <div className="flex items-center gap-2 px-5 py-1.5 mb-8 rounded-full border border-orange-700/50 bg-[#1a1005] text-orange-500 text-sm cursor-pointer hover:bg-[#241607] transition-colors">
                        <span className='w-2 h-2 rounded-full bg-amber-600 animate-pulse'></span>
                        <i class="fa-regular fa-newspaper"></i>
                        <span className="font-medium pt-1">مدونتنا</span>
                </div>
                <h1 className="text-4xl md:text-7xl font-bold mb-6 flex gap-4 flex-wrap justify-center drop-shadow-lg">
                    <span className="text-white">استكشف</span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-orange-500 to-amber-400">
                        مقالاتنا
                    </span>
                </h1>
                <p className="text-gray-400 text-lg md:text-xl max-w-2xl font-light">
                    اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
                </p>
            </div>
        </div >
        </>
    )
}
