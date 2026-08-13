import React from 'react'

export default function One() {
  return (
    <>
      <div className="relative w-full py-24 px-4 bg-[#0a0a0a] overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none"></div>
        <div className="relative pt-20 z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
          <div className="flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-orange-700/30 bg-[#1a1005] text-orange-500 text-sm">
            <span className="flex gap-1 ml-1">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-orange-700 animate-ping ms-1"></span>
            </span>
            <span className="font-medium pb-1">من نحن</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">مهمتنا هي </span>
            <span className="text-orange-400">الإعلام والإلهام</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mb-16 leading-relaxed font-light">
            مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية
            لتطوير مهاراتكم. نحن شغوفون بمشاركة المعرفة ومساعدة المصورين على تنمية مهاراتهم من
            خلال محتوى عالي الجودة.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full">
            <div className="bg-[#121212] border border-gray-800 rounded-2xl p-6 md:p-8 flex flex-col items-center justify-center transition-colors hover:border-gray-700">
              <div className="text-orange-500 text-3xl mb-3">
                <i className="fa-solid fa-users"></i>
              </div>
              <div className="text-orange-500 text-2xl md:text-3xl font-bold mb-2">2+ مليون</div>
              <div className="text-gray-400 text-sm font-medium">قارئ شهرياً</div>
            </div>
            <div className="bg-[#121212] border border-gray-800 rounded-2xl p-6 md:p-8 flex flex-col items-center justify-center transition-colors hover:border-gray-700">
              <div className="text-orange-500 text-3xl mb-3">
                <i className="fa-regular fa-newspaper"></i>
              </div>
              <div className="text-orange-500 text-2xl md:text-3xl font-bold mb-2">500+</div>
              <div className="text-gray-400 text-sm font-medium">مقالة منشورة</div>
            </div>
            <div className="bg-[#121212] border border-gray-800 rounded-2xl p-6 md:p-8 flex flex-col items-center justify-center transition-colors hover:border-gray-700">
              <div className="text-orange-500 text-3xl mb-3">
                <i className="fa-solid fa-pen-nib"></i>
              </div>
              <div className="text-orange-500 text-2xl md:text-3xl font-bold mb-2">50+</div>
              <div className="text-gray-400 text-sm font-medium">كاتب خبير</div>
            </div>
            <div className="bg-[#121212] border border-gray-800 rounded-2xl p-6 md:p-8 flex flex-col items-center justify-center transition-colors hover:border-gray-700">
              <div className="text-orange-500 text-3xl mb-3">
                <i className="fa-solid fa-book-open"></i>
              </div>
              <div className="text-orange-500 text-2xl md:text-3xl font-bold mb-2">15+</div>
              <div className="text-gray-400 text-sm font-medium">تصنيف</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
