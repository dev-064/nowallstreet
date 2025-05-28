import { Noto_Serif } from 'next/font/google';

const notoSerif = Noto_Serif({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 md:w-[50%] w-[90%] m-3 z-20 bg-[#e2fcf3] border border-white/10 bg-opacity-90 text-white flex items-center justify-between px-8 h-12 shadow-lg rounded-full md:translate-x-1/2">
        <div className="font-bold text-xl text-[#022013] tracking-tight">Flat Street</div>
        <a
          href="https://twitter.com/nowallstreet"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-[#022013] hover:text-blue-400 transition-colors"
          aria-label="Twitter"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="currentColor" />
          </svg>
        </a>
      </nav>
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-screen overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute min-w-full min-h-full object-cover"
        >
          <source src="/home_bg.mp4" type="video/mp4" />
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#022013]/70 h-screen" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-screen flex items-center justify-center text-center px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className={`${notoSerif.className} text-5xl md:text-7xl font-extrabold text-white mb-6`}>
            Wall Street trades earnings.
            <br />
            We trade energy, culture, and conviction.
          </h1>
          <h2 className={`${notoSerif.className} text-xl md:text-2xl text-white/90 mt-8`}>
            No gatekeepers. No closing bell.
            <br />
            Just permissionless speculation — 24/7
          </h2>
          {/* Animated Coming Soon Text */}
          <p className="mt-8 text-base md:text-lg font-light animate-fadein text-white/80">
            Coming soon on
            <span className="mx-2 px-2 py-1 rounded bg-gradient-to-r from-green-200 to-green-400 text-[#022013] font-bold shadow-sm rounded-full">hyperswap</span>
            and
            <span className="mx-2 px-2 py-1 rounded bg-gradient-to-r from-green-200 to-green-400 text-[#022013] font-bold shadow-sm rounded-full">kittenswap</span>
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full text-center py-6 bg-[#02170d] text-white relative z-10">
        <div className="text-sm text-white/40">All Rights Reserved, 2025</div>
      </footer>
    </>
  );
}
