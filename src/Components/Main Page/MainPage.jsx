import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Api from '../../posts.json' // اتأكد من المسار عندك
import Title from './Title';

// حط اسم الكومبوننت بتاعك زي ما هو هنا
export default function YourComponentName() {
    // اللوجيك بتاع الفلاتر والترقيم
    const [searchQuery, setSearchQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState('جميع المقالات');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6; // عرض 6 كروت بس

    // فلترة الداتا بناءً على السيرش والقسم
    const filteredPosts = Api.posts.filter((post) => {
        const matchesSearch = post.title.includes(searchQuery) || post.excerpt.includes(searchQuery);
        const matchesCategory = activeCategory === 'جميع المقالات' || post.category === activeCategory;
        return matchesSearch && matchesCategory;
    });

    // حساب عدد الصفحات وتقسيم المقالات
    const totalPages = Math.ceil(filteredPosts.length / itemsPerPage);
    const currentPosts = filteredPosts.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <>
        <Title/>
        <div className='min-h-screen bg-[rgb(12,12,13)] text-white'>
            <div className="w-full lg:w-[80%] py-7 px-4 mx-auto">
                <div className="flex flex-col md:flex-row flex-wrap justify-between items-center">
                    <div className="Search w-full mb-4 md:mb-0 md:w-1/4">
                        <div className="relative flex items-center w-full max-w-lg rounded-xl border border-gray-800 bg-zinc-800 p-2 pl-4 pr-4 focus-within:border-orange-500 transition-colors group">
                            <input
                                type="text"
                                placeholder="ابحث في المقالات..."
                                value={searchQuery}
                                onChange={(e) => {
                                    setSearchQuery(e.target.value);
                                    setCurrentPage(1);
                                }}
                                className="w-full bg-transparent text-gray-100 placeholder-gray-500 outline-none pr-2"
                            />
                            <div className="text-gray-500 mr-2">
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </div>
                        </div>
                    </div>
                    <div className="buttons text-gray-500 flex flex-wrap justify-center md:justify-end gap-3 w-full md:w-1/2">
                        <button type="button" onClick={() => { setActiveCategory('جميع المقالات'); setCurrentPage(1); }} className={`cursor-pointer text-sm rounded-xl px-4 py-2 transition ${activeCategory === 'جميع المقالات' ? 'bg-orange-500 text-white hover:bg-orange-600' : 'bg-[#161616] hover:bg-gray-700'}`}>
                            جميع المقالات
                        </button>
                        <button type="button" onClick={() => { setActiveCategory('إضاءة'); setCurrentPage(1); }} className={`cursor-pointer text-sm rounded-xl px-4 py-2 transition ${activeCategory === 'إضاءة' ? 'bg-orange-500 text-white hover:bg-orange-600' : 'bg-[#161616] hover:bg-gray-700'}`}>
                            إضاءة
                        </button>
                        <button type="button" onClick={() => { setActiveCategory('بورتريه'); setCurrentPage(1); }} className={`cursor-pointer text-sm rounded-xl px-4 py-2 transition ${activeCategory === 'بورتريه' ? 'bg-orange-500 text-white hover:bg-orange-600' : 'bg-[#161616] hover:bg-gray-700'}`}>
                            بورتريه
                        </button>
                        <button type="button" onClick={() => { setActiveCategory('مناظر طبيعية'); setCurrentPage(1); }} className={`cursor-pointer text-sm rounded-xl px-4 py-2 transition ${activeCategory === 'مناظر طبيعية' ? 'bg-orange-500 text-white hover:bg-orange-600' : 'bg-[#161616] hover:bg-gray-700'}`}>
                            مناظر طبيعية
                        </button>
                        <button type="button" onClick={() => { setActiveCategory('تقنيات'); setCurrentPage(1); }} className={`cursor-pointer text-sm rounded-xl px-4 py-2 transition ${activeCategory === 'تقنيات' ? 'bg-orange-500 text-white hover:bg-orange-600' : 'bg-[#161616] hover:bg-gray-700'}`}>
                            تقنيات
                        </button>
                        <button type="button" onClick={() => { setActiveCategory('معدات'); setCurrentPage(1); }} className={`cursor-pointer text-sm rounded-xl px-4 py-2 transition ${activeCategory === 'معدات' ? 'bg-orange-500 text-white hover:bg-orange-600' : 'bg-[#161616] hover:bg-gray-700'}`}>
                            معدات
                        </button>
                    </div>
                </div>
            </div>
            <div className='border-t border-gray-800'></div>
            <div className='w-full lg:w-[91%] mx-auto p-4 pt-20 lg:p-25 lg:pt-15'>
                <span className='text-gray-500'>عرض <span className=' text-white font-bold'>{filteredPosts.length}</span> مقالات</span>
                <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {currentPosts.map((post, index) => (
                        <Link 
                            to={`/blog/${post.slug}`} 
                            key={index} 
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className='big bg-[#161616] border overflow-hidden cursor-pointer group hover:-translate-y-1 transition-all duration-500 border-gray-700 rounded-3xl flex flex-col'
                        >
                            <div className="img relative rounded-t-3xl overflow-hidden z-0">
                                <img src={post.image} alt={post.title} className='w-full h-full object-cover group-hover:scale-115 transition-transform duration-900 z-0' />
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
                        </Link>
                    ))}
                </div>
                
                {totalPages > 1 && (
                    <div className='flex flex-wrap w-fit mt-8  mx-auto'>
                        <button 
                            onClick={() => currentPage > 1 && setCurrentPage(prev => prev - 1)}
                            className='bg-gray-800/35 border border-gray-700 p-3 rounded-xl hover:text-orange-500 transition-colors'
                        >
                            <i className="fa-solid fa-chevron-right"></i>
                        </button>
                        
                        {[...Array(totalPages)].map((_, i) => (
                            <button 
                                key={i} 
                                onClick={() => setCurrentPage(i + 1)}
                                className={`${currentPage === i + 1 ? 'bg-orange-500 text-white' : 'bg-gray-800/35'} border border-gray-700 mx-2 px-4 py-3 rounded-xl transition-colors`}
                            >
                                {i + 1}
                            </button>
                        ))}

                        <button 
                            onClick={() => currentPage < totalPages && setCurrentPage(prev => prev + 1)}
                            className='bg-gray-800/35 border border-gray-700 p-3 rounded-xl hover:text-orange-500 transition-colors'
                        >
                            <i className="fa-solid fa-chevron-left"></i>
                        </button>
                    </div>
                )}
                
                <p className=' text-gray-500 text-sm text-center mt-4'>صفحة {currentPage} من {totalPages}</p>
            </div>
        </div>
    </>)
}