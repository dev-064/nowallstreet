import { Noto_Serif } from 'next/font/google';

const notoSerif = Noto_Serif({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export default function Manifesto() {
  return (
    <main className="min-h-screen relative">
      {/* Back to Home Arrow */}
      <a
        href="/"
        className="fixed top-6 left-6 z-30 flex items-center gap-2 bg-[#e2fcf3] bg-opacity-90 text-[#022013] rounded-full px-4 py-2 shadow-lg border border-white/10 hover:bg-[#c6f7e2] transition-colors"
        aria-label="Back to Home"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 19l-7-7 7-7" stroke="#022013" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className="font-semibold text-sm">Home</span>
      </a>
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
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
        <div className="absolute inset-0 bg-[#022013]/70 h-full" />
      </div>
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="max-w-4xl mx-auto rounded-xl p-8 md:p-12 shadow-lg">
          <div className="text-xs md:text-sm text-white/90 leading-relaxed space-y-4 font-light">
            <div className="mb-4 text-2xl md:text-5xl font-semibold text-green-200 text-center">This isn't a disruption.</div>
            <div className="mb-4 text-2xl md:text-5xl font-semibold text-green-200 text-center"> It's a replacement.</div>
            <p className='text-base md:text-xl text-center'>Wall Street was built to control access, extract rent, and reward the past. It closes at 4pm, filters through bankers, and only lists what it can understand. But the world doesn't work like that anymore. Culture moves 24/7. Memes move markets. And the best investments start as internet jokes, not Bloomberg reports.</p>
            <p className='text-base md:text-xl text-center'>No Wall Street flips the table — no gatekeepers, no closing bell, no permission required. Powered by Hyperliquid, any narrative can become a market in minutes. $NST is how we bet on what matters now — attention, belief, chaos, and conviction.</p>
            <p className='text-base md:text-xl text-center'>This isn't a protocol. It's a rejection of everything they built. We're not disrupting Wall Street. We're replacing it.</p>
          </div>
        </div>
      </div>
    </main>
  );
} 