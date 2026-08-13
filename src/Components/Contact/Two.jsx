import React from 'react'

export default function Two() {
    return (
        <>
            <div className='bg-[#111111] h-fit border-t border-t-neutral-800 text-white '>
                <div className='w-full lg:w-[80%] mx-auto  pt-20'>
                    <div className="title mb-15 text-center">
                        <h2 className=' mb-4 text-3xl md:text-4xl font-bold relative inline-block before:absolute before:top-1/2 before:-translate-y-1/2 before:-right-5 before:w-1.5 before:h-10 before:bg-amber-500 before:rounded-4xl  after:absolute after:top-1/2 after:-translate-y-1/2 after:-left-5 after:w-1.5 after:h-10 after:bg-amber-500 after:rounded-4xl'>قيمنا</h2>
                        <p className='text-neutral-400 text-lg'>المبادئ التي توجه كل ما نقوم بإنشائه</p>
                    </div>
                    <div className='grid grid-cols-1 pb-20 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                        {/* card1 */}
                        <div className=' bg-neutral-900 text-center p-5 border border-neutral-700 rounded-2xl group hover:border-orange-700/35 hover:bg-gradient-to-br from-orange-500/25 to-orange-400/25'>
                            <div>
                                <i class="fa-solid fa-bullseye text-4xl text-orange-500"></i>
                                <h3 className='my-2 text-lg font-bold group-hover:text-orange-500 transition-colors duration-300'>الجودة أولاً</h3>
                                <p className='text-neutral-400 text-sm'>محتوى مدروس ومكتوب بخبرة</p>
                            </div>
                        </div>
                        {/* card2 */}
                        <div className=' bg-neutral-900 text-center p-5 border border-neutral-700 rounded-2xl group hover:border-orange-700/35 hover:bg-gradient-to-br from-orange-600/25 to-orange-400/25'>
                            <div>
                                <i class="fa-solid fa-bolt text-4xl text-orange-500"></i>
                                <h3 className='my-2 text-lg font-bold group-hover:text-orange-500 transition-colors duration-300'>تركيز عملي</h3>
                                <p className='text-neutral-400 text-sm'>أمثلة واقعية يمكنك تطبيقها اليوم</p>
                            </div>
                        </div>
                        {/* card3 */}
                        <div className=' bg-neutral-900 text-center p-5 border border-neutral-700 rounded-2xl group hover:border-orange-700/35 hover:bg-gradient-to-br from-orange-500/25 to-orange-400/25'>
                            <div>
                                <i class="fa-solid fa-handshake text-4xl text-orange-500"></i>
                                <h3 className='my-2 text-lg font-bold group-hover:text-orange-500 transition-colors duration-300'>المجتمع</h3>
                                <p className='text-neutral-400 text-sm'>تعلم مع آلاف المصورين</p>
                            </div>
                        </div>
                        {/* card4 */}
                        <div className=' bg-neutral-900 text-center p-5 border border-neutral-700 rounded-2xl group hover:border-orange-700/35 hover:bg-gradient-to-br from-orange-500/25 to-orange-400/25'>
                            <div>
                                <i class="fa-solid fa-rotate text-4xl text-orange-500"></i>
                                <h3 className='my-2 text-lg font-bold group-hover:text-orange-500 transition-colors duration-300'>دائماً محدث</h3>
                                <p className='text-neutral-400 text-sm'>أحدث الاتجاهات وأفضل الممارسات</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
