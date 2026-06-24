import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, FileText, X } from 'lucide-react';
import { BRAND } from './constants';
import { Hero, Problems, Materials, ProductIntro, Benefits } from './components/Sections1';
import { BeforeAfter, Process, AnimalTabs, Usage } from './components/Sections2';
import { Technician, Reviews, LeadForm, FAQ } from './components/Sections3';
import { Button } from './components/ui';

function PopupForm({ onClose }: { onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
      <div className="bg-white rounded-3xl w-full max-w-md p-6 sm:p-8 relative shadow-2xl animate-in fade-in zoom-in duration-200 border border-white/20">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-gray-100 rounded-full text-gray-500 hover:bg-gray-200 hover:text-gray-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
        
        {!submitted ? (
          <>
            <div className="text-center mb-6">
              <h2 className="text-[24px] font-black text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-green-900 uppercase mb-2 leading-tight">
                ĐỂ LẠI SỐ ĐIỆN THOẠI
              </h2>
              <p className="text-[15px] text-gray-500 font-medium">
                Kỹ thuật viên sẽ gọi lại hướng dẫn trong thời gian sớm nhất.
              </p>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
              <div>
                <input 
                  type="text" 
                  required 
                  placeholder="Họ và tên / Tên gọi"
                  className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 bg-gray-50 focus:bg-white focus:border-green-500 focus:ring-4 focus:ring-green-500/10 focus:outline-none text-[16px] font-medium transition-all" 
                />
              </div>
              
              <div>
                <input 
                  type="tel" 
                  required 
                  placeholder="Số điện thoại *"
                  className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 bg-gray-50 focus:bg-white focus:border-green-500 focus:ring-4 focus:ring-green-500/10 focus:outline-none text-[16px] font-medium transition-all" 
                />
              </div>
              
              <Button variant="primary" className="mt-2 py-4 shadow-xl">
                GỬI YÊU CẦU TƯ VẤN
              </Button>
            </form>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="w-20 h-20 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-5 shadow-lg shadow-green-500/30">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-[24px] font-black text-green-800 mb-2 uppercase tracking-wide">ĐÃ GỬI THÀNH CÔNG!</h3>
            <p className="text-[16px] text-gray-600 font-medium mb-8">
              Cảm ơn bác/anh/chị. Kỹ thuật viên sẽ liên hệ lại qua số điện thoại vừa đăng ký.
            </p>
            <Button variant="outline" onClick={onClose} className="py-3 shadow-sm">
              Đóng cửa sổ
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky bar after scrolling down 500px (~1 screen)
      if (window.scrollY > 500) {
        setShowSticky(true);
      } else {
        setShowSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full max-w-md mx-auto bg-white min-h-screen shadow-2xl relative pb-24">
      {/* Container max-w-md simulates mobile-first view perfectly even on desktop */}
      
      <Hero onOpenForm={() => setShowPopup(true)} />
      <Problems />
      <Materials />
      <ProductIntro onOpenForm={() => setShowPopup(true)} />
      <Benefits />
      <BeforeAfter />
      <Process />
      <AnimalTabs />
      <Usage />
      <Technician onOpenForm={() => setShowPopup(true)} />
      <Reviews />
      <LeadForm />
      <FAQ />

      {/* Footer Text */}
      <footer className="py-6 px-4 bg-gray-100 text-center text-gray-500 text-sm">
        <p className="font-bold mb-1">{BRAND.company}</p>
        <p>Sản phẩm vi sinh hỗ trợ chăn nuôi an toàn.</p>
        <p className="mt-4">© {new Date().getFullYear()} Bản quyền thuộc về {BRAND.company}</p>
      </footer>

      {/* Sticky Bottom Bar */}
      {showSticky && (
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] px-2 py-2 flex items-center justify-between gap-2 max-w-md mx-auto animate-in slide-in-from-bottom-full duration-300">
          <a href={`tel:${BRAND.hotline}`} className="flex-1 flex flex-col items-center justify-center bg-[#ea580c] text-white py-2 rounded-lg active:bg-orange-700">
            <Phone className="w-6 h-6 mb-0.5" />
            <span className="text-[13px] font-bold">Gọi ngay</span>
          </a>
          
          <a href={`https://zalo.me/${BRAND.zalo}`} target="_blank" rel="noreferrer" className="flex-1 flex flex-col items-center justify-center bg-blue-600 text-white py-2 rounded-lg active:bg-blue-700">
            <MessageCircle className="w-6 h-6 mb-0.5" />
            <span className="text-[13px] font-bold">Zalo</span>
          </a>
          
          <button onClick={() => setShowPopup(true)} className="flex-1 flex flex-col items-center justify-center bg-[#166534] text-white py-2 rounded-lg active:bg-green-800">
            <FileText className="w-6 h-6 mb-0.5" />
            <span className="text-[13px] font-bold">Để lại số</span>
          </button>
        </div>
      )}

      {/* Popup Form */}
      {showPopup && <PopupForm onClose={() => setShowPopup(false)} />}
    </div>
  );
}
