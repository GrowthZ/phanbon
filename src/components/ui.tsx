import React from 'react';

export function Placeholder({ text, className = "", isVideo = false, src }: { text: string; className?: string; isVideo?: boolean; src?: string }) {
  if (src) {
    return (
      <div className={`relative overflow-hidden bg-gray-200 flex items-center justify-center rounded-lg ${className}`}>
        <img src={src} alt={text} className="absolute inset-0 w-full h-full object-cover" />
        {isVideo && (
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-black/40 flex items-center justify-center backdrop-blur-sm border-2 border-white/50">
              <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-2"></div>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`flex flex-col items-center justify-center bg-gray-200 border-2 border-dashed border-gray-400 rounded-lg p-6 text-center ${className}`}>
      {isVideo ? (
        <div className="w-12 h-12 rounded-full bg-black/10 flex items-center justify-center mb-3">
          <div className="w-0 h-0 border-t-8 border-t-transparent border-l-[14px] border-l-gray-600 border-b-8 border-b-transparent ml-1"></div>
        </div>
      ) : (
        <svg className="w-10 h-10 text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2-2v12a2 2 0 002 2z" /></svg>
      )}
      <span className="text-[15px] font-bold text-gray-600 uppercase tracking-wide">{text}</span>
    </div>
  );
}

export function Button({ 
  children, 
  variant = 'primary', 
  className = "", 
  onClick 
}: { 
  children: React.ReactNode; 
  variant?: 'primary' | 'secondary' | 'outline'; 
  className?: string;
  onClick?: () => void;
}) {
  const baseStyle = "font-black text-[18px] py-4 px-6 rounded-xl w-full flex items-center justify-center transition-all active:scale-95 uppercase tracking-wide";
  const variants = {
    primary: "bg-gradient-to-r from-[#f97316] to-[#ea580c] text-white shadow-lg shadow-orange-600/30 border border-orange-500",
    secondary: "bg-gradient-to-r from-[#16a34a] to-[#15803d] text-white shadow-lg shadow-green-700/30 border border-green-500",
    outline: "bg-white text-[#15803d] border-2 border-[#15803d] shadow-sm hover:bg-green-50"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}

export function SectionTitle({ children, className = "", subtitle }: { children: React.ReactNode; className?: string, subtitle?: string }) {
  return (
    <div className={`text-center mb-8 ${className}`}>
      <h2 className="text-[26px] font-black text-[#111827] uppercase leading-[1.2] relative inline-block">
        {children}
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-gradient-to-r from-[#f97316] to-[#ea580c] rounded-full"></div>
      </h2>
      {subtitle && <p className="mt-5 text-[16px] text-gray-600 font-medium">{subtitle}</p>}
    </div>
  );
}
