import React, { useState, useEffect, useRef } from 'react';
import { ShieldCheck, Truck, RefreshCcw, AlertTriangle, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';

// Animation Helper Component: Reveal on Scroll
export function RevealOnScroll({ 
  children, 
  delay = 0,
  className = "" 
}: { 
  children: React.ReactNode; 
  delay?: number;
  className?: string;
  key?: React.Key;
}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsIntersecting(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transform transition-all duration-700 ease-out ${
        isIntersecting 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-6'
      } ${className}`}
    >
      {children}
    </div>
  );
}

// Section Wrapper for Consistent Padding and Background
export function SectionWrapper({
  children,
  id,
  bgType = 'white',
  className = ""
}: {
  children: React.ReactNode;
  id?: string;
  bgType?: 'white' | 'gray' | 'green-light' | 'green-dark' | 'yellow-light';
  className?: string;
}) {
  const bgStyles = {
    white: 'bg-white',
    gray: 'bg-gray-50 border-t border-gray-100',
    'green-light': 'bg-[#E8F5E9] border-t border-[#DDEEDC]',
    'green-dark': 'bg-[#2E7D32] text-white',
    'yellow-light': 'bg-[#FFFDF6] border-t border-[#FFF8E1]'
  };

  return (
    <section 
      id={id} 
      className={`py-12 px-4 sm:py-16 sm:px-6 w-full ${bgStyles[bgType]} ${className}`}
    >
      <div className="w-full max-w-5xl mx-auto">
        {children}
      </div>
    </section>
  );
}

// UI Placeholder for Images/Videos
export function Placeholder({ 
  text, 
  className = "", 
  isVideo = false, 
  src 
}: { 
  text: string; 
  className?: string; 
  isVideo?: boolean; 
  src?: string;
}) {
  if (src) {
    return (
      <div className={`relative overflow-hidden bg-gray-100 flex items-center justify-center rounded-2xl border border-[#DDEEDC] ${className}`}>
        <img src={src} alt={text} className="absolute inset-0 w-full h-full object-cover" />
        {isVideo && (
          <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-black/40 flex items-center justify-center backdrop-blur-sm border-2 border-white/50 transition-transform active:scale-90 duration-200">
              <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[15px] border-l-white border-b-[8px] border-b-transparent ml-1"></div>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`flex flex-col items-center justify-center bg-gray-50 border-2 border-dashed border-gray-300 rounded-2xl p-6 text-center ${className}`}>
      {isVideo ? (
        <div className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center mb-3">
          <div className="w-0 h-0 border-t-8 border-t-transparent border-l-[14px] border-l-gray-500 border-b-8 border-b-transparent ml-1"></div>
        </div>
      ) : (
        <svg className="w-10 h-10 text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2-2v12a2 2 0 002 2z" />
        </svg>
      )}
      <span className="text-[13px] font-bold text-gray-500 uppercase tracking-wide px-4">{text}</span>
    </div>
  );
}

// CTA Button Component
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
  const baseStyle = "font-black text-[16px] sm:text-[18px] py-4 px-6 rounded-xl w-full flex items-center justify-center transition-all active:scale-[0.98] uppercase tracking-wide shadow-sm hover:translate-y-[-1px] duration-200 cursor-pointer";
  const variants = {
    primary: "bg-gradient-to-r from-[#F9A825] to-[#F57F17] text-white shadow-md shadow-[#F9A825]/20 border border-[#F9A825]",
    secondary: "bg-gradient-to-r from-[#2E7D32] to-[#1B5E20] text-white shadow-md shadow-[#2E7D32]/20 border border-[#2E7D32]",
    outline: "bg-white text-[#2E7D32] border-2 border-[#DDEEDC] hover:bg-[#E8F5E9] hover:border-[#2E7D32]"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}

// Section Title Component
export function SectionTitle({ 
  children, 
  className = "", 
  subtitle 
}: { 
  children: React.ReactNode; 
  className?: string;
  subtitle?: string;
}) {
  return (
    <div className={`text-center mb-8 sm:mb-10 ${className}`}>
      <h2 className="text-[24px] sm:text-[30px] font-black text-[#1F2937] uppercase leading-[1.2] relative inline-block">
        {children}
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-gradient-to-r from-[#F9A825] to-[#F57F17] rounded-full"></div>
      </h2>
      {subtitle && <p className="mt-5 text-[15px] sm:text-[16px] text-[#4B5563] font-medium max-w-xl mx-auto leading-relaxed">{subtitle}</p>}
    </div>
  );
}

// Feature Card (Pain Points Card)
export function FeatureCard({ text }: { text: string }) {
  return (
    <div className="bg-white border border-[#DDEEDC] p-4 rounded-2xl shadow-sm flex items-start hover:shadow-md transition-shadow duration-300">
      <div className="bg-red-50 p-1.5 rounded-full mr-3 shrink-0 mt-0.5 border border-red-100">
        <AlertTriangle className="w-4 h-4 text-red-500" />
      </div>
      <span className="text-[15px] sm:text-[16px] text-[#1F2937] font-medium leading-snug">{text}</span>
    </div>
  );
}

// Benefit Card (Solution/Benefits Card)
export function BenefitCard({ text, dark = false }: { text: string; dark?: boolean }) {
  return (
    <div className={`flex items-start p-4 rounded-2xl border transition-all duration-300 ${
      dark 
        ? 'bg-white/10 border-white/15 text-white hover:bg-white/15' 
        : 'bg-white border-[#DDEEDC] text-[#1F2937] hover:shadow-md shadow-sm'
    }`}>
      <div className={`p-1 rounded-full mr-3 shrink-0 mt-0.5 ${
        dark ? 'bg-[#F9A825]' : 'bg-[#2E7D32]'
      }`}>
        <CheckCircle2 className="w-4 h-4 text-white" />
      </div>
      <span className="text-[15px] sm:text-[16px] font-semibold leading-snug">{text}</span>
    </div>
  );
}

// Product Package Card
export function ProductPackageCard({ 
  title, 
  desc, 
  isPromo = false, 
  onBtnClick 
}: { 
  title: string; 
  desc: string; 
  isPromo?: boolean; 
  onBtnClick: () => void;
}) {
  return (
    <div className={`rounded-3xl shadow-md hover:shadow-lg overflow-hidden border-2 transition-all duration-300 flex flex-col justify-between ${
      isPromo 
        ? 'bg-gradient-to-b from-[#FFFDF6] to-white border-[#F9A825] scale-[1.01] relative' 
        : 'bg-white border-[#2E7D32] md:scale-[0.98]'
    }`}>
      {isPromo && (
        <div className="absolute top-0 right-0 bg-red-500 text-white text-[11px] font-black uppercase px-4 py-1.5 rounded-bl-2xl shadow-sm">
          Khuyên dùng
        </div>
      )}
      <div>
        <div className={`py-4 text-center ${isPromo ? 'bg-[#F9A825]' : 'bg-[#2E7D32]'}`}>
          <h3 className="text-white font-black text-[20px] uppercase tracking-wider drop-shadow-sm">{title}</h3>
        </div>
        <div className="p-6 text-center">
          <p className="text-[15px] text-[#4B5563] font-medium leading-relaxed">{desc}</p>
        </div>
      </div>
      <div className="px-6 pb-6 text-center">
        <Button 
          variant={isPromo ? 'primary' : 'secondary'} 
          onClick={onBtnClick} 
          className="w-full font-black py-4 uppercase text-[15px]"
        >
          Đặt bộ {title.split(' ')[2]}
        </Button>
      </div>
    </div>
  );
}

// Timeline Step Card (Process Step Card)
export function StepCard({ 
  stepNumber, 
  title, 
  desc, 
  imgPlaceholderText,
  imgSrc
}: { 
  stepNumber: string; 
  title: string; 
  desc: string; 
  imgPlaceholderText: string;
  imgSrc?: string;
}) {
  return (
    <div className="flex flex-col sm:flex-row bg-white rounded-2xl shadow-sm border border-[#DDEEDC] p-4 items-center gap-4 hover:shadow-md transition-shadow duration-300">
      <Placeholder 
        text={imgPlaceholderText} 
        src={imgSrc}
        className="w-full sm:w-1/3 aspect-video sm:aspect-square rounded-xl border-none shrink-0 bg-gray-50 text-xs py-8" 
      />
      <div className="flex-1 w-full text-center sm:text-left">
        <span className="inline-block bg-[#E8F5E9] text-[#2E7D32] font-black text-xs px-3 py-1 rounded-full mb-2 uppercase tracking-wide">
          {stepNumber}
        </span>
        <h3 className="text-[17px] font-bold text-[#1F2937] mb-1">{title}</h3>
        <p className="text-[14px] text-[#4B5563] font-medium leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

// Grid Ingredient Card
export function IngredientCard({ name, img }: { name: string; img: string }) {
  return (
    <div className="flex flex-col items-center group bg-white border border-[#DDEEDC]/60 rounded-2xl p-2 hover:shadow-md transition-shadow duration-300">
      <div className="w-full aspect-square rounded-xl overflow-hidden mb-2 bg-gray-50">
        <img src={img} alt={name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
      </div>
      <span className="font-bold text-[#1F2937] text-[13px] sm:text-[14px] text-center px-1 leading-tight">{name}</span>
    </div>
  );
}

// Grid Animal Card
export function AnimalCard({ name, img }: { name: string; img: string }) {
  return (
    <div className="flex flex-col items-center group bg-white border border-[#DDEEDC]/60 rounded-2xl p-2 hover:shadow-md transition-shadow duration-300">
      <div className="w-full aspect-square rounded-xl overflow-hidden mb-2 bg-gray-50">
        <img src={img} alt={name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
      </div>
      <span className="font-bold text-[#1F2937] text-[13px] sm:text-[14px] text-center px-1 leading-tight">{name}</span>
    </div>
  );
}

// FAQ Accordion Item Component
export function FAQItem({ 
  question, 
  answer, 
  isOpen, 
  onToggle 
}: { 
  question: string; 
  answer: string; 
  isOpen: boolean; 
  onToggle: () => void;
}) {
  return (
    <div className={`bg-white border transition-all duration-300 rounded-2xl overflow-hidden ${
      isOpen ? 'border-[#2E7D32] shadow-md ring-1 ring-[#2E7D32]/30' : 'border-[#DDEEDC] shadow-sm hover:border-[#2E7D32]'
    }`}>
      <button 
        className="w-full flex justify-between items-center p-5 text-left focus:outline-none"
        onClick={onToggle}
      >
        <span className={`text-[15px] sm:text-[16px] font-bold pr-4 transition-colors ${
          isOpen ? 'text-[#2E7D32]' : 'text-[#1F2937]'
        }`}>{question}</span>
        <div className={`p-1.5 rounded-full transition-colors shrink-0 ${isOpen ? 'bg-[#E8F5E9]' : 'bg-gray-50'}`}>
          {isOpen ? (
            <ChevronUp className="w-5 h-5 text-[#2E7D32]" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </div>
      </button>
      
      <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="p-5 pt-0 text-[14px] sm:text-[15px] text-[#4B5563] font-medium bg-white leading-relaxed">
          <div className="border-t border-gray-100 pt-4">
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
}
