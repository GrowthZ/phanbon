import React, { useState } from 'react';
import { SectionTitle, SectionWrapper, RevealOnScroll, FAQItem } from './ui';
import { BRAND, trackEvent } from '../constants';
import { ShieldCheck, Truck, RefreshCcw, CheckCircle } from 'lucide-react';

export function LeadForm() {
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
    <SectionWrapper bgType="white" id="lead-form-section">
      <SectionTitle subtitle="Kỹ thuật viên sẽ liên hệ lại ngay để hướng dẫn cách ủ phù hợp với mô hình nhà mình">
        NHẬN TƯ VẤN & CÔNG THỨC Ủ MIỄN PHÍ
      </SectionTitle>

      <RevealOnScroll className="w-full max-w-lg mx-auto">
        <div className="bg-gradient-to-b from-[#2E7D32] to-[#1B5E20] rounded-3xl p-6 sm:p-8 shadow-xl border-[6px] border-[#E8F5E9] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#F9A825]/20 rounded-full blur-3xl"></div>
          
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
              <div>
                <label className="block text-white font-bold text-sm mb-1">Họ và Tên</label>
                <input 
                  type="text" 
                  required 
                  onFocus={handleInputFocus}
                  placeholder="Họ và Tên của bác/anh/chị"
                  className="w-full h-12 px-4 rounded-xl border-2 border-white/20 bg-white/95 focus:bg-white focus:border-[#F9A825] focus:ring-4 focus:ring-[#F9A825]/20 focus:outline-none text-[15px] sm:text-[16px] font-semibold transition-all shadow-inner" 
                />
              </div>
              
              <div>
                <label className="block text-white font-bold text-sm mb-1">Số điện thoại Zalo/Nghe gọi</label>
                <input 
                  type="tel" 
                  required 
                  onFocus={handleInputFocus}
                  placeholder="Số điện thoại của bác"
                  className="w-full h-12 px-4 rounded-xl border-2 border-white/20 bg-white/95 focus:bg-white focus:border-[#F9A825] focus:ring-4 focus:ring-[#F9A825]/20 focus:outline-none text-[15px] sm:text-[16px] font-semibold transition-all shadow-inner" 
                />
              </div>

              <div>
                <label className="block text-white font-bold text-sm mb-1">Tỉnh / Thành phố</label>
                <input 
                  type="text" 
                  required 
                  onFocus={handleInputFocus}
                  placeholder="Ví dụ: Nghệ An, Hải Dương..."
                  className="w-full h-12 px-4 rounded-xl border-2 border-white/20 bg-white/95 focus:bg-white focus:border-[#F9A825] focus:ring-4 focus:ring-[#F9A825]/20 focus:outline-none text-[15px] sm:text-[16px] font-semibold transition-all shadow-inner" 
                />
              </div>

              <div>
                <label className="block text-white font-bold text-sm mb-1">Nội dung cần tư vấn (Không bắt buộc)</label>
                <textarea 
                  onFocus={handleInputFocus}
                  placeholder="Ví dụ: Ủ bã đậu cho lợn, ủ rau cỏ cho gà..."
                  rows={2}
                  className="w-full py-2.5 px-4 rounded-xl border-2 border-white/20 bg-white/95 focus:bg-white focus:border-[#F9A825] focus:ring-4 focus:ring-[#F9A825]/20 focus:outline-none text-[15px] sm:text-[16px] font-semibold transition-all shadow-inner resize-none text-[#1F2937]" 
                />
              </div>

              <button 
                type="submit" 
                className="w-full h-14 bg-gradient-to-r from-[#F9A825] to-[#F57F17] text-white font-black text-[18px] rounded-xl shadow-lg border border-[#F9A825] uppercase tracking-wide active:scale-[0.98] transition-all hover:translate-y-[-1px] duration-200 mt-2 cursor-pointer"
              >
                ĐĂNG KÝ TƯ VẤN NGAY
              </button>
              <p className="text-center text-white/80 text-[12px] sm:text-[13px] mt-3 italic leading-relaxed">
                * Thông tin của bà con được bảo mật tuyệt đối. Chúng tôi sẽ bảo mật và liên hệ trong thời gian sớm nhất.
              </p>
            </form>
          ) : (
            <div className="text-center py-8 bg-black/20 rounded-2xl border border-white/10 backdrop-blur-sm relative z-10">
              <div className="w-16 h-16 bg-[#4CAF50] text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg border-4 border-white/20">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-[22px] font-black text-white mb-2 uppercase tracking-wide">ĐÃ GỬI THÀNH CÔNG!</h3>
              <p className="text-[15px] text-[#E8F5E9] font-medium px-4 leading-relaxed">
                Cảm ơn bác/anh/chị. Kỹ thuật viên sẽ sớm liên hệ lại qua số điện thoại vừa đăng ký.
              </p>
            </div>
          )}
        </div>
      </RevealOnScroll>
    </SectionWrapper>
  );
}

export function FAQ() {
  const faqs = [
    { q: "Có hướng dẫn cho người mới không?", a: "Có ạ. Trong bộ sản phẩm có sẵn giấy hướng dẫn và mã QR xem video. Ngoài ra Kỹ thuật viên sẽ theo sát, gọi điện/Zalo hướng dẫn bà con từng bước." },
    { q: "Một bộ 5kg ủ được bao nhiêu thức ăn?", a: "Tuỳ thuộc vào nguyên liệu, thông thường 1 bộ 5kg có thể ủ chín hàng trăm kg thức ăn, giúp bà con tiết kiệm chi phí cám công nghiệp rất lớn." },
    { q: "Sau khi ủ bảo quản được bao lâu?", a: "Nếu đậy kín, tránh nắng trực tiếp và ruồi nhặng, thức ăn ủ có thể bảo quản từ 5 - 7 ngày hoặc hơn tuỳ điều kiện thời tiết." },
    { q: "Ship hàng bao lâu thì tới?", a: "Giao hàng toàn quốc từ 2-4 ngày tuỳ khu vực. Bà con được kiểm tra hàng trước khi thanh toán." }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number, question: string) => {
    const isOpening = openIndex !== index;
    setOpenIndex(isOpening ? index : null);
    if (isOpening) {
      trackEvent('faq_open', { question });
    }
  };

  return (
    <SectionWrapper bgType="gray">
      <SectionTitle subtitle="Giải đáp nhanh các thắc mắc phổ biến của các hộ chăn nuôi">BÀ CON THƯỜNG HỎI</SectionTitle>
      
      <div className="space-y-3 max-w-2xl mx-auto">
        {faqs.map((faq, index) => (
          <RevealOnScroll key={index} delay={index * 80}>
            <FAQItem 
              question={faq.q} 
              answer={faq.a} 
              isOpen={openIndex === index} 
              onToggle={() => handleToggle(index, faq.q)} 
            />
          </RevealOnScroll>
        ))}
      </div>
    </SectionWrapper>
  );
}

export function Policy() {
  const policies = [
    {
      title: "KIỂM TRA HÀNG TẬN NƠI",
      desc: "Mở hộp kiểm tra đúng sản phẩm, tem mác rồi mới thanh toán.",
      icon: <ShieldCheck className="w-6 h-6 sm:w-8 sm:h-8 text-[#2E7D32]" />
    },
    {
      title: "GIAO HÀNG TOÀN QUỐC",
      desc: "Ship tận nhà mọi miền Tổ quốc, phí ship ưu đãi.",
      icon: <Truck className="w-6 h-6 sm:w-8 sm:h-8 text-[#2E7D32]" />
    },
    {
      title: "HỖ TRỢ KỸ THUẬT 24/7",
      desc: "Luôn có Kỹ thuật viên đồng hành cùng bà con trong suốt quá trình chăn nuôi.",
      icon: <RefreshCcw className="w-6 h-6 sm:w-8 sm:h-8 text-[#2E7D32]" />
    }
  ];

  return (
    <SectionWrapper bgType="white">
      <div className="flex flex-col gap-3.5 max-w-lg mx-auto">
        {policies.map((item, i) => (
          <RevealOnScroll key={i} delay={i * 80}>
            <div className="flex items-start p-4 rounded-2xl bg-[#FFFDF6] border border-[#DDEEDC] shadow-sm hover:shadow-md transition-shadow duration-300 gap-4">
              <div className="bg-white p-2.5 sm:p-3 rounded-full shadow-sm border border-gray-100 shrink-0 mt-0.5">
                {item.icon}
              </div>
              <div className="flex-1 text-left">
                <h3 className="font-black text-[14px] sm:text-[15px] text-[#1F2937] mb-1 uppercase tracking-wide">{item.title}</h3>
                <p className="text-[13px] sm:text-[14px] text-[#4B5563] font-semibold leading-relaxed">{item.desc}</p>
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </SectionWrapper>
  );
}
