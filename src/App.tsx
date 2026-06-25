import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, FileText, X } from 'lucide-react';
import { BRAND, trackEvent } from './constants';
import { Hero, Problems, Solution } from './components/Sections1';
import { ProductKit, Materials, Animals } from './components/Sections2';
import { Process, Benefits, OtherUses, SocialProof } from './components/Sections3';
import { LeadForm, FAQ, Policy } from './components/Sections4';
import { Button } from './components/ui';

function PopupForm({ 
  config, 
  onClose 
}: { 
  config: { title: string; subtitle: string; buttonText: string }; 
  onClose: () => void; 
}) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); 
    trackEvent('lead_form_submit');
    setSubmitted(true); 
  };

  const handleInputFocus = () => {
    trackEvent('form_start');
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl w-full max-w-md p-6 sm:p-8 relative shadow-2xl transition-all duration-300 border border-gray-100 max-h-[90vh] overflow-y-auto">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-gray-100 rounded-full text-gray-500 hover:bg-gray-200 hover:text-gray-800 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>
        
        {!submitted ? (
          <>
            <div className="text-center mb-6">
              <h2 className="text-[20px] sm:text-[22px] font-black text-[#2E7D32] uppercase mb-2 leading-tight">
                {config.title}
              </h2>
              <p className="text-[13px] sm:text-[14px] text-[#4B5563] font-medium leading-relaxed">
                {config.subtitle}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-bold text-xs mb-1">Họ và Tên</label>
                <input 
                  type="text" 
                  required 
                  onFocus={handleInputFocus}
                  placeholder="Họ và tên của bác"
                  className="w-full h-12 px-4 rounded-xl border-2 border-gray-200 bg-gray-50 focus:bg-white focus:border-[#2E7D32] focus:ring-4 focus:ring-[#2E7D32]/10 focus:outline-none text-[15px] sm:text-[16px] font-semibold transition-all" 
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-bold text-xs mb-1">Số điện thoại Zalo/Nghe gọi</label>
                <input 
                  type="tel" 
                  required 
                  onFocus={handleInputFocus}
                  placeholder="Số điện thoại Zalo/Nghe gọi"
                  className="w-full h-12 px-4 rounded-xl border-2 border-gray-200 bg-gray-50 focus:bg-white focus:border-[#2E7D32] focus:ring-4 focus:ring-[#2E7D32]/10 focus:outline-none text-[15px] sm:text-[16px] font-semibold transition-all" 
                />
              </div>

              <div>
                <label className="block text-gray-700 font-bold text-xs mb-1">Tỉnh / Thành phố</label>
                <input 
                  type="text" 
                  required 
                  onFocus={handleInputFocus}
                  placeholder="Ví dụ: Nghệ An, Hải Dương..."
                  className="w-full h-12 px-4 rounded-xl border-2 border-gray-200 bg-gray-50 focus:bg-white focus:border-[#2E7D32] focus:ring-4 focus:ring-[#2E7D32]/10 focus:outline-none text-[15px] sm:text-[16px] font-semibold transition-all" 
                />
              </div>

              <div>
                <label className="block text-gray-700 font-bold text-xs mb-1">Nội dung cần tư vấn (Không bắt buộc)</label>
                <textarea 
                  onFocus={handleInputFocus}
                  placeholder="Ví dụ: Ủ bã đậu cho lợn, ủ rau cỏ cho gà..."
                  rows={2}
                  className="w-full py-2.5 px-4 rounded-xl border-2 border-gray-200 bg-gray-50 focus:bg-white focus:border-[#2E7D32] focus:ring-4 focus:ring-[#2E7D32]/10 focus:outline-none text-[15px] sm:text-[16px] font-semibold transition-all resize-none" 
                />
              </div>
              
              <Button variant="primary" className="mt-2 py-4 w-full bg-gradient-to-r from-[#2E7D32] to-[#1B5E20] border-none text-white text-[16px] font-bold">
                {config.buttonText}
              </Button>
            </form>
          </>
        ) : (
          <div className="text-center py-6">
            <div className="w-16 h-16 bg-[#4CAF50] text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md shadow-[#4CAF50]/30 border-4 border-white/20 animate-scale-in">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-[22px] font-black text-[#1B5E20] mb-2 uppercase tracking-wide">ĐÃ GỬI THÀNH CÔNG!</h3>
            <p className="text-[14px] sm:text-[15px] text-[#4B5563] font-semibold mb-6 px-2 leading-relaxed">
              Cảm ơn bác/anh/chị. Kỹ thuật viên sẽ liên hệ lại qua số điện thoại vừa đăng ký.
            </p>
            <Button variant="outline" onClick={onClose} className="py-3 shadow-sm w-full font-bold">
              Đóng cửa sổ
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function App() {
  const [popupConfig, setPopupConfig] = useState<{
    title: string;
    subtitle: string;
    buttonText: string;
  } | null>(null);
  const [showSticky, setShowSticky] = useState(false);
  const [scrolled50, setScrolled50] = useState(false);
  const [scrolled90, setScrolled90] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPercentage = (scrollPosition / (documentHeight - windowHeight)) * 100;

      // Show sticky bar after scrolling down 400px
      if (scrollPosition > 400) {
        setShowSticky(true);
      } else {
        setShowSticky(false);
      }

      // Track scroll depth
      if (scrollPercentage > 50 && !scrolled50) {
        setScrolled50(true);
        trackEvent('scroll_50');
      }
      if (scrollPercentage > 90 && !scrolled90) {
        setScrolled90(true);
        trackEvent('scroll_90');
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled50, scrolled90]);

  const handleOpenForm = (context?: 'general' | 'materials' | 'animals' | '5kg' | '10kg') => {
    let title = "NHẬN TƯ VẤN KỸ THUẬT";
    let subtitle = "Kỹ thuật viên sẽ gọi lại hướng dẫn cách ủ chi tiết nhất cho bà con.";
    let buttonText = "GỬI YÊU CẦU TƯ VẤN";

    if (context === 'materials') {
      title = "NHẬN CÔNG THỨC Ủ NGUYÊN LIỆU";
      subtitle = "Tài liệu hướng dẫn cách ủ rau, cám, cỏ, bã đậu, bã bia... tỷ lệ chuẩn nhất.";
      buttonText = "NHẬN CÔNG THỨC MIỄN PHÍ";
    } else if (context === 'animals') {
      title = "NHẬN TỶ LỆ PHỐI TRỘN VẬT NUÔI";
      subtitle = "Hướng dẫn chi tiết cách trộn thức ăn vi sinh phù hợp cho từng nhóm gia súc, gia cầm.";
      buttonText = "NHẬN TỶ LỆ PHỐI TRỘN";
    } else if (context === '5kg') {
      title = "NHẬN ƯU ĐÃI BỘ Ủ 5KG";
      subtitle = "Đăng ký nhận bộ thử nghiệm 5kg Men Nhà Nông kèm quà tặng hướng dẫn kỹ thuật.";
      buttonText = "ĐĂNG KÝ MUA BỘ 5KG";
    } else if (context === '10kg') {
      title = "ĐĂNG KÝ BỘ Ủ TIẾT KIỆM 10KG";
      subtitle = "Nhận bộ 10kg ưu đãi lớn nhất cho trang trại vừa và nhỏ, hỗ trợ kỹ thuật 24/7.";
      buttonText = "ĐĂNG KÝ MUA BỘ 10KG";
    }

    setPopupConfig({ title, subtitle, buttonText });
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white min-h-screen shadow-2xl relative pb-28">
      {/* 13 Sections */}
      <Hero onOpenForm={() => handleOpenForm('general')} />
      <Problems />
      <Solution onOpenForm={() => handleOpenForm('general')} />
      <ProductKit onOpenForm={(type) => handleOpenForm(type === '5kg' ? '5kg' : '10kg')} />
      <Materials onOpenForm={() => handleOpenForm('materials')} />
      <Animals onOpenForm={() => handleOpenForm('animals')} />
      <Process onOpenForm={() => handleOpenForm('general')} />
      <Benefits />
      <OtherUses />
      <SocialProof />
      <FAQ />
      <Policy />
      <LeadForm />

      {/* Footer Text */}
      <footer className="py-8 px-4 bg-gray-50 text-center text-gray-500 text-xs border-t border-gray-100">
        <p className="font-bold text-gray-700 mb-1">{BRAND.company}</p>
        <p className="font-medium">Sản phẩm vi sinh hỗ trợ chăn nuôi an toàn sinh học.</p>
        <p className="mt-4 font-medium text-gray-400">© {new Date().getFullYear()} Bản quyền thuộc về {BRAND.company}</p>
      </footer>

      {/* Floating Zalo (Right side) */}
      <a 
        href={`https://zalo.me/${BRAND.zalo}`} 
        target="_blank" 
        rel="noreferrer" 
        className="fixed right-4 bottom-28 z-40 bg-[#0068ff] p-3.5 rounded-full shadow-lg shadow-blue-500/40 hover:scale-110 active:scale-95 transition-transform border-2 border-white"
        onClick={() => trackEvent('zalo_click', { location: 'floating_zalo' })}
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </a>

      {/* Sticky Bottom Bar */}
      {showSticky && (
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-[0_-4px_10px_rgba(0,0,0,0.06)] px-3 py-3 flex items-center justify-between gap-2 max-w-md mx-auto pb-safe">
          <a 
            href={`tel:${BRAND.hotline}`} 
            className="flex-1 flex flex-col items-center justify-center bg-[#ea580c] text-white py-2.5 rounded-xl active:bg-orange-700 transition-colors shadow-sm"
            onClick={() => trackEvent('phone_click')}
          >
            <Phone className="w-5 h-5 mb-0.5" />
            <span className="text-[12px] font-black uppercase tracking-wider">Gọi ngay</span>
          </a>
          
          <a 
            href={`https://zalo.me/${BRAND.zalo}`} 
            target="_blank" 
            rel="noreferrer" 
            className="flex-1 flex flex-col items-center justify-center bg-[#0068ff] text-white py-2.5 rounded-xl active:bg-blue-700 transition-colors shadow-sm"
            onClick={() => trackEvent('zalo_click', { location: 'sticky_cta' })}
          >
            <MessageCircle className="w-5 h-5 mb-0.5" />
            <span className="text-[12px] font-black uppercase tracking-wider">Zalo</span>
          </a>
          
          <button 
            onClick={() => {
              trackEvent('sticky_cta_click');
              handleOpenForm('general');
            }} 
            className="flex-1 flex flex-col items-center justify-center bg-[#2E7D32] text-white py-2.5 rounded-xl active:bg-green-800 transition-colors shadow-sm cursor-pointer"
          >
            <FileText className="w-5 h-5 mb-0.5" />
            <span className="text-[12px] font-black uppercase tracking-wider">Để lại số</span>
          </button>
        </div>
      )}

      {/* Popup Form */}
      {popupConfig !== null && <PopupForm config={popupConfig} onClose={() => setPopupConfig(null)} />}
    </div>
  );
}
