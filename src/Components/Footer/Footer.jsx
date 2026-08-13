import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const exploreLinks = ['الرئيسية', 'المدونة', 'من نحن'];
  const categoryLinks = ['إضاءة', 'بورتريه', 'مناظر طبيعية', 'تقنيات'];

  return (
    <footer className="bg-[#0a0a0a] bg-[radial-gradient(ellipse_at_top,rgba(234,88,12,0.06)_0%,transparent_60%)] text-white pt-16 border-t border-gray-800" dir="rtl">
      <div className="w-full max-w-[90%] mx-auto px-4 lg:px-8">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#ff5500] rounded-xl flex items-center justify-center text-white text-xl font-bold">ع</div>
              <span className="text-2xl font-bold text-white">عدسة</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم.
            </p>

            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-xl bg-[#161616] flex items-center justify-center text-gray-400 hover:bg-[#ff5500] hover:text-white transition-all duration-300">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-[#161616] flex items-center justify-center text-gray-400 hover:bg-[#ff5500] hover:text-white transition-all duration-300">
                <i class="fa-brands fa-github"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-[#161616] flex items-center justify-center text-gray-400 hover:bg-[#ff5500] hover:text-white transition-all duration-300">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-[#161616] flex items-center justify-center text-gray-400 hover:bg-[#ff5500] hover:text-white transition-all duration-300">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold flex items-center gap-2 mb-6">
              <span className="w-4 h-0.5 bg-[#ff5500] rounded-full"></span>
              استكشف
            </h3>
            <ul className="flex flex-col gap-4">
              {exploreLinks.map((item, index) => (
                <li key={index} className="relative group cursor-pointer w-fit">
                  <i className="fa-solid fa-chevron-left text-[#ff5500] text-[11px] absolute right-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></i>
                  <span className="block text-gray-400 group-hover:text-[#ff5500] transition-transform duration-300 transform group-hover:-translate-x-4">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold flex items-center gap-2 mb-6">
              <span className="w-4 h-0.5 bg-[#ff5500] rounded-full"></span>
              التصنيفات
            </h3>
            <ul className="flex flex-col gap-4">
              {categoryLinks.map((item, index) => (
                <li key={index} className="relative group cursor-pointer w-fit">
                  <i className="fa-solid fa-chevron-left text-[#ff5500] text-[11px] absolute right-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></i>
                  <span className="block text-gray-400 group-hover:text-[#ff5500] transition-transform duration-300 transform group-hover:-translate-x-4">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold flex items-center gap-2 mb-6">
              <span className="w-4 h-0.5 bg-[#ff5500] rounded-full"></span>
              ابقى على اطلاع
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              اشترك للحصول على أحدث المقالات والتحديثات.
            </p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                className="w-full bg-[#161616] border border-gray-800 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#ff5500] transition-colors duration-300"
                required
              />
              <Link to={'about'}>
                <button
                  type="submit"
                  className="w-full bg-[#ff5500] hover:bg-[#e64d00] text-white font-bold rounded-3xl px-4 py-3 transition-colors duration-300"
                >
                  اشترك
                </button>
              </Link>
            </form>
          </div>
        </div>

        <div className="py-6 border-t border-gray-800 flex flex-col-reverse md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-right">
            © 2026 عدسة. صنع بكل <span className="text-red-500">❤️</span> جميع الحقوق محفوظة
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-orange-500 transition-colors duration-300">شروط الخدمة</a>
            <a href="#" className="hover:text-orange-500 transition-colors duration-300">سياسة الخصوصية</a>
          </div>
        </div>

      </div>
    </footer>
  );
}