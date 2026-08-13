import React from 'react'

export default function NotFound() {
    return (
        <>
            <div onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="relative min-h-screen w-full overflow-hidden bg-[#0a0908] flex items-center justify-center px-4"
            >
                {/* grid background */}
                <div
                    className="pointer-events-none absolute inset-0"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)",
                        backgroundSize: "42px 42px",
                        maskImage:
                            "radial-gradient(ellipse 70% 60% at 50% 40%, black 40%, transparent 90%)",
                        WebkitMaskImage:
                            "radial-gradient(ellipse 70% 60% at 50% 40%, black 40%, transparent 90%)",
                    }}
                />

                {/* ambient center glow */}
                <div className="pointer-events-none absolute left-1/2 top-[38%] h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-600/20 blur-[100px]" />

                <div className="relative z-10 flex w-full flex-col items-center text-center">
                    {/* 404 */}
                    <h1 className="bg-gradient-to-b from-amber-300 via-orange-400 to-orange-600 bg-clip-text text-[5.5rem] sm:text-[7rem] md:text-[8rem] font-extrabold leading-none text-transparent drop-shadow-[0_0_35px_rgba(234,88,12,0.35)]">
                        404
                    </h1>

                    {/* icon cluster */}
                    <div className="relative my-8 flex h-32 w-32 items-center justify-center">
                        {/* soft outer glow circle */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-500/20 via-orange-700/10 to-transparent blur-sm" />

                        {/* floating dots */}
                        <span className="absolute -top-1 right-3 h-5 w-5 animate-bounce rounded-full bg-orange-500" />
                        <span className="absolute bottom-2 -left-1 h-3 w-3 animate-pulse rounded-full bg-yellow-600 [animation-delay:.4s]" />

                        {/* inner circle with frown icon */}
                        <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-orange-500 bg-black/20">
                            <i className="fa-regular fa-face-frown text-2xl text-orange-500" />
                        </div>
                    </div>

                    {/* heading */}
                    <h2 className="text-2xl md:text-3xl font-bold text-white">
                        عفواً! الصفحة غير موجودة
                    </h2>

                    {/* subtext */}
                    <p className="mt-4 max-w-md text-sm md:text-base leading-relaxed text-gray-400">
                        الصفحة التي تبحث عنها غير موجودة أو تم نقلها. دعنا نعيدك إلى
                        المسار الصحيح.
                    </p>

                    {/* actions */}
                    <div className="mt-8 flex w-full max-w-xs sm:max-w-none flex-col sm:w-auto sm:flex-row items-center justify-center gap-4">
                        <button
                            className="flex w-full sm:w-auto justify-center items-center gap-2 rounded-full bg-gradient-to-l from-orange-600 to-orange-500 px-6 py-3 text-sm md:text-base font-semibold text-white shadow-lg shadow-orange-900/40 transition-transform duration-200 hover:-translate-y-1"
                        >
                            <i className="fa-solid fa-house" />
                            الذهاب للرئيسية
                        </button>
                        <button
                            className="flex w-full sm:w-auto justify-center items-center gap-2 rounded-full border border-gray-700 px-6 py-3 text-sm md:text-base font-semibold text-gray-200 transition-colors duration-200 hover:bg-orange-500/30 hover:border-orange-500/35 hover:text-orange-500"
                        >
                            <i className="fa-solid fa-newspaper" />
                            تصفح المقالات
                        </button>

                    </div>
                </div>
            </div>
        </>
    )
}