import React from 'react'
import Api from '../../posts.json'
import { Link, useParams } from 'react-router-dom'

export default function Content() {
    const { slug } = useParams()
    const currentPost = Api.posts.find(post => post.slug === slug);
    const renderContent = () => {
        const blocks = currentPost.content.split('\n\n');

        return blocks.map((block, index) => {
            if (block.startsWith('## ')) {
                const headingText = block.replace('## ', '');
                const realIndex = tableOfContents.indexOf(headingText);
                return (
                    <h2 id={`heading-${realIndex +1}`} key={index} className="text-2xl md:text-3xl font-bold my-5 text-white scroll-mt-30">
                        <i className="fa-solid fa-camera text-orange-500 bg-amber-700/20 me-2 p-1 rounded-xl"></i>
                        {headingText}
                    </h2>
                );
            }
            else {
                return (
                    <p key={index} className="text-lg text-neutral-400 mt-5 mb-15">
                        {block}
                    </p>
                );
            }
        });
    };
    const tableOfContents = currentPost.content
        .split('\n\n')
        .filter(block => block.startsWith('## '))
        .map(block => block.replace('## ', ''));
    return (
        <>
            <div className='bg-black min-h-screen py-10'>
                <div className='w-[95%] xl:w-[80%] mx-auto flex flex-col lg:flex-row gap-8 text-white'>

                    {/* content */}
                    {/* التعديل هنا: ضفنا order-2 للموبايل و lg:order-1 للشاشات الكبيرة */}
                    <div className='w-full lg:w-3/4 order-2 lg:order-1'>

                        {/* note */}
                        <div className='bg-amber-700/20 p-6 border border-orange-500/35 rounded-2xl'>
                            <p className=' text-lg italic'>"{currentPost.excerpt}"</p>
                        </div>

                        {/* details */}
                        <div>
                            {renderContent()}
                        </div>

                        {/* Tags */}
                        <div className='bg-[#111111] mb-5 border border-neutral-800 rounded-xl p-5'>
                            <div className='flex font-bold items-center mb-5'>
                                <i className="fa-solid fa-tags text-orange-500 bg-amber-700/20 border me-2 border-orange-500/35 p-2 rounded-xl"></i>
                                <h3>الوسوم</h3>
                            </div>
                            <div className='text-sm text-neutral-400 flex flex-wrap gap-3'>
                                <span className='bg-neutral-800 py-2 px-5 border border-neutral-700 rounded-3xl hover:text-orange-500 hover:border-orange-500/35 cursor-pointer' >#{currentPost.tags[0]}</span>
                                <span className='bg-neutral-800 py-2 px-5 border border-neutral-700 rounded-3xl hover:text-orange-500 hover:border-orange-500/35 cursor-pointer' >#{currentPost.tags[1]}</span>
                                <span className='bg-neutral-800 py-2 px-5 border border-neutral-700 rounded-3xl hover:text-orange-500 hover:border-orange-500/35 cursor-pointer' >#{currentPost.tags[2]}</span>
                            </div>
                        </div>

                        {/* Share */}
                        <div className='bg-[#111111] flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 mb-5 border border-neutral-800 rounded-xl p-4'>
                            <div className='flex font-bold items-center'>
                                <i className="fa-solid fa-share-nodes text-orange-500 bg-amber-700/20 border me-2 border-orange-500/35 p-2 rounded-xl"></i>
                                <h3>شارك المقال</h3>
                            </div>
                            <div className='text-sm text-neutral-400 flex gap-2'>
                                <button className='bg-neutral-800 p-2.5 rounded-xl cursor-pointer border border-neutral-700 hover:bg-sky-500 hover:text-white transition-all duration-300'><i className="fa-brands fa-x-twitter text-lg"></i></button>
                                <button className='bg-neutral-800 p-2.5 rounded-xl cursor-pointer border border-neutral-700 hover:bg-blue-500 hover:text-white transition-all duration-300'><i className="fa-brands fa-linkedin-in text-lg"></i></button>
                                <button className='bg-neutral-800 p-2.5 rounded-xl cursor-pointer border border-neutral-700 hover:bg-green-500 hover:text-white transition-all duration-300'><i className="fa-brands fa-whatsapp text-lg"></i></button>
                                <button className='bg-neutral-800 p-2.5 rounded-xl cursor-pointer border border-neutral-700 hover:bg-orange-500 hover:text-white transition-all duration-300'><i className="fa-solid fa-link text-lg"></i></button>
                            </div>
                        </div>

                        {/* Author */}
                        <div className='bg-[#111111] flex flex-col sm:flex-row items-center text-center sm:text-right gap-4 mb-5 border border-neutral-800 rounded-xl p-5'>
                            <img src={currentPost.author.avatar} alt={currentPost.author.name} className='w-24 h-24 object-cover rounded-2xl border border-3 border-orange-600/35' />
                            <div>
                                <span className='block text-orange-600 font-bold text-sm'>كاتب المقال</span>
                                <h3 className='text-xl font-bold'>{currentPost.author.name}</h3>
                                <p className='text-sm text-neutral-400'>{currentPost.author.role}</p>
                                <p className='mt-2 sm:mt-5 text-sm text-neutral-400'>مصور محترف شغوف بمشاركة المعرفة والخبرات في عالم التصوير الفوتوغرافي.</p>
                            </div>
                        </div>
                    </div>

                    {/* Side Bar */}
                    {/* التعديل هنا: ضفنا order-1 للموبايل و lg:order-2 للشاشات الكبيرة */}
                    <div className="w-full lg:w-1/4 lg:sticky lg:top-25 h-fit mb-10 lg:mb-0 order-1 lg:order-2">
                        <aside className="w-full flex flex-col gap-6 font-sans" dir="rtl">
                            {/* 1. كارت محتويات المقال */}
                            <div className="bg-[#111111] rounded-2xl p-6 border border-neutral-700 shadow-lg">
                                <h3 className="text-white text-lg font-bold mb-5 flex items-center gap-3">
                                    <i className="fa-solid fa-list text-orange-500 bg-amber-700/20 p-2 rounded-xl border border-orange-500/35"></i>
                                    محتويات المقال
                                </h3>
                                <ul className="flex flex-col gap-4 text-zinc-400">
                                    {tableOfContents.map((heading, index) => {
                                        // ده الـ id بتاع العنوان اللي عايزين نرحله
                                        const targetId = `heading-${index + 1}`;

                                        // الدالة دي اللي هتعمل حركة النزول الناعمة
                                        const handleScroll = (e) => {
                                            e.preventDefault(); // بنمنع الراوتر إنه يغير الرابط فوق
                                            const element = document.getElementById(targetId);
                                            if (element) {
                                                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                            }
                                        };

                                        return (
                                            <li key={index} className="flex items-center gap-3 my-1 hover:text-orange-500 transition-colors cursor-pointer group">
                                                <a
                                                    className="group-hover:bg-amber-700/20 w-full p-2 rounded-xl text-sm"
                                                    href={`#${targetId}`}
                                                    onClick={handleScroll} // ربطنا الدالة هنا
                                                >
                                                    <span className="text-zinc-600 font-mono text-sm me-1.5 group-hover:text-orange-500 transition-colors">
                                                        {index + 1}
                                                    </span>
                                                    {heading}
                                                </a>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>

                            {/* 2. كروت الوقت والتاريخ (جنب بعض) */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                {/* كارت وقت القراءة */}
                                <div className="flex-1 bg-[#1a1a1a] rounded-2xl p-5 border border-zinc-800/50 shadow-lg flex flex-col items-center justify-center text-center gap-2">
                                    <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 mb-1">
                                        <i className="fa-regular fa-clock"></i>
                                    </div>
                                    <span className="text-white font-bold text-sm">{currentPost.readTime}</span>
                                    <span className="text-zinc-500 text-xs">وقت القراءة</span>
                                </div>
                                {/* كارت تاريخ النشر */}
                                <div className="flex-1 bg-[#1a1a1a] rounded-2xl p-5 border border-zinc-800/50 shadow-lg flex flex-col items-center justify-center text-center gap-2">
                                    <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 mb-1">
                                        <i className="fa-regular fa-calendar"></i>
                                    </div>
                                    <span className="text-white font-bold text-sm">{currentPost.date}</span>
                                    <span className="text-zinc-500 text-xs">تاريخ النشر</span>
                                </div>
                            </div>

                            {/* 3. كارت الاشتراك (النشرة البريدية) */}
                            <div className="bg-amber-700/20 rounded-2xl p-6 border border-orange-500/35 shadow-lg flex flex-col items-center text-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 mt-2">
                                    <i className="fa-regular fa-envelope text-xl"></i>
                                </div>
                                <div className="mb-2">
                                    <h3 className="text-white text-lg font-bold mb-1">لا تفوت جديدنا</h3>
                                    <p className="text-zinc-400 text-sm">اشترك للحصول على أحدث المقالات</p>
                                </div>
                                <Link to={'blog'}>
                                    <button className="w-full bg-[#f97316] hover:bg-[#ea580c] text-white font-bold py-3 px-4 rounded-xl transition-colors duration-300">
                                        تصفح المزيد
                                    </button>
                                </Link>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </>
    )
}