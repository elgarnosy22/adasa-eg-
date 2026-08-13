import React from 'react'
import { Link } from 'react-router-dom'
import { blog } from 'fontawesome';

export default function CallToAction() {
    return (
        <section className="w-full bg-gradient-to-l from-orange-400 to-orange-600 py-20 px-4" dir="rtl">
            <div className="max-w-4xl mx-auto text-center text-white">

                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                    لديك أسئلة؟ دعنا نتحدث!
                </h2>

                <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed max-w-3xl mx-auto">
                    نحب أن نسمع منك. سواء كان لديك سؤال حول محتوانا، أو تريد المساهمة، أو تريد فقط إلقاء التحية، لا تتردد في التواصل.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

                    <button className="bg-[#0c0c0d] hover:bg-black/85 hover:-translate-y-1  text-white px-8 py-3.5 rounded-lg flex items-center justify-center gap-3 transition-all duration-300 w-full sm:w-auto">
                        <i className="fa-regular fa-envelope text-lg"></i>
                        <span className="font-semibold">تواصل معنا</span>
                    </button>

                    <Link to='/blog'>
                        <button className="border border-white text-white hover:bg-white hover:text-black px-8 py-3.5 rounded-lg font-semibold transition-colors duration-300 w-full sm:w-auto">
                            تصفح المقالات
                        </button>
                    </Link>


                </div>
            </div>
        </section>
    )
}