import React from 'react'
import Api from '../../posts.json'

export default function Fifth() {
  return (
    <>
      <div className="min-h-screen bg-[#0c0c0d] bg-[radial-gradient(circle_at_top,transparent_0%,rgba(234,88,12,0.12)_0%,transparent_50%)] text-white flex items-center justify-center">
        <div className='w-full lg:w-[90%] mx-auto p-4 py-20 lg:p-25'>
          
          <div className='bg-[#161616] p-6 md:p-10 lg:p-12 mx-auto text-center rounded-4xl border border-gray-800'>
            
            <div className='bg-orange-600 w-fit mx-auto p-4 text-3xl rounded-2xl mb-6'>
              <i className="fa-regular fa-envelope"></i>
            </div>
            
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold my-4'>اشترك في <span className='text-orange-400'>نشرتنا الإخبارية</span></h2>
            <p className='text-base md:text-lg text-gray-400 mb-8 max-w-2xl mx-auto'>احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك الإلكتروني</p>
            
            {/* التعديل هنا: flex-col للموبايل و sm:flex-row للشاشات الأكبر */}
            <form className="flex flex-col sm:flex-row w-full max-w-2xl gap-4 mx-auto mb-8">
              <input 
                type="email" 
                placeholder="أدخل بريدك الإلكتروني" 
                className="w-full flex-grow bg-[#0a0a0a] border border-gray-800 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors duration-300" 
                required
              />
              <button
                type="submit"
                className="w-full sm:w-auto bg-[#ff5500] hover:bg-[#e64d00] text-white font-bold text-lg rounded-xl px-8 py-4 whitespace-nowrap transition-colors duration-300"
              >
                اشترك الآن
              </button>
            </form>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-6 text-sm text-gray-400">
              <div className="flex -space-x-3 space-x-reverse">
                <img src={Api.posts[0].author.avatar} alt="user" className="w-10 h-10 rounded-full border-2 border-[#161616] object-cover relative z-30" />
                <img src={Api.posts[1].author.avatar} alt="user" className="w-10 h-10 rounded-full border-2 border-[#161616] object-cover relative z-20" />
                <img src={Api.posts[2].author.avatar} alt="user" className="w-10 h-10 rounded-full border-2 border-[#161616] object-cover relative z-10" />
              </div>
              
              <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
                <p>انضم لـ <span className="font-bold text-white">+10,000</span> مصور</p>
                <span className="hidden md:inline text-gray-700 text-xs">•</span>
                <p>بدون إزعاج</p>
                <span className="hidden md:inline text-gray-700 text-xs">•</span>
                <p>إلغاء الاشتراك في أي وقت</p>
              </div>
            </div>
            
          </div>
          
        </div>
      </div>
    </>
  )
}