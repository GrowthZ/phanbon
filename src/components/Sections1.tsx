import React from 'react';
import { Placeholder, Button, SectionTitle, SectionWrapper, RevealOnScroll, FeatureCard, BenefitCard } from './ui';
import { BRAND, trackEvent } from '../constants';
import { MessageCircle, ChevronRight, AlertTriangle, Zap } from 'lucide-react';

export function Hero({ onOpenForm }: { onOpenForm: () => void }) {
  const handleCtaClick = () => {
    trackEvent('hero_cta_click');
    onOpenForm();
  };

  const handleZaloClick = () => {
    trackEvent('zalo_click', { location: 'hero' });
  };

  return (
    <section className="pt-10 pb-12 px-4 bg-gradient-to-b from-[#FFF9C4] to-[#FFEBEE] text-center border-b-8 border-[#D32F2F]">
      <div className="w-full max-w-lg mx-auto">
        <RevealOnScroll className="inline-block border-2 border-[#D32F2F] bg-white rounded-full px-5 py-2 mb-6 shadow-md animate-pulse">
          <span className="text-[13px] sm:text-[14px] font-black text-[#D32F2F] uppercase tracking-widest block flex items-center justify-center gap-1">
            <AlertTriangle className="w-4 h-4" /> CẢNH BÁO QUAN TRỌNG
          </span>
        </RevealOnScroll>
        
        <RevealOnScroll delay={100}>
          <h1 className="text-[32px] sm:text-[40px] font-black text-[#B71C1C] uppercase leading-[1.1] mb-5 drop-shadow-sm">
            99% NGƯỜI NÔNG DÂN ĐÃ <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8F00] to-[#E65100]">
              GIẢM MỘT NỬA CHI PHÍ
            </span> <br/>
            CHĂN NUÔI NHỜ CÁCH NÀY
          </h1>
        </RevealOnScroll>
        
        <RevealOnScroll delay={200}>
          <p className="text-[16px] sm:text-[18px] text-[#374151] font-bold leading-relaxed mb-8 px-2 bg-white/60 p-3 rounded-xl border border-white">
            Bí quyết <span className="text-[#D32F2F] underline decoration-2 underline-offset-2">chưa từng tiết lộ</span> giúp vật nuôi lớn nhanh như thổi, khỏe mạnh, không lo dịch bệnh. Đọc ngay trước khi đối thủ của bạn biết!
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={300} className="mb-10 flex justify-center">
          <div className="w-full max-w-[340px] aspect-[9/16] rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(211,47,47,0.3)] border-4 border-[#D32F2F] bg-black relative">
            <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded animate-pulse z-10">
              ● TRỰC TIẾP TỪ TRANG TRẠI
            </div>
            <iframe 
              src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F831586530047269%2F&show_text=false&t=0" 
              className="w-full h-full border-none"
              scrolling="no" 
              allowFullScreen={true} 
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
          </div>
        </RevealOnScroll>
        
        <RevealOnScroll delay={400} className="space-y-4">
          <Button variant="primary" onClick={handleCtaClick} className="w-full shadow-xl bg-gradient-to-r from-[#D32F2F] to-[#C62828] hover:scale-[1.02] text-[18px] py-4 h-auto uppercase tracking-wide border-2 border-[#FFCDD2] text-white font-black animate-bounce-slow">
            <Zap className="inline-block mr-2 w-6 h-6" /> TÔI MUỐN GIẢM 50% CHI PHÍ NGAY!
          </Button>
          <p className="text-xs font-bold text-[#D32F2F] italic">Chỉ dành cho 50 người đăng ký đầu tiên hôm nay!</p>
          <a href={BRAND.zaloUrl} target="_blank" rel="noreferrer" onClick={handleZaloClick} className="block mt-4">
            <Button variant="outline" className="w-full border-2 border-[#1E88E5] text-[#1E88E5] hover:bg-[#E3F2FD] font-bold">
              <MessageCircle className="mr-2 w-6 h-6" /> NHẮN ZALO NHẬN TƯ VẤN KÍN
            </Button>
          </a>
        </RevealOnScroll>
      </div>
    </section>
  );
}

export function Problems() {
  const painPoints = [
    "Cám cò BÓP NGHẸT lợi nhuận của bạn mỗi ngày!",
    "Nuôi 3 tháng ròng rã KHÔNG BẰNG bệnh 3 ngày!",
    "Mất trắng gia sản chỉ sau 1 đêm vì DỊCH BỆNH càn quét!",
    "Sáng dậy nấu cám mệt mỏi, tốn cả đống củi lửa, điện đóm!",
    "Bã đậu, cỏ tươi vứt đi la liệt trong khi vật nuôi thiếu ăn!",
    "Thử mọi cách nhưng đàn lợn, đàn gà vẫn CÒI CỌC, MÃI KHÔNG LỚN!"
  ];

  return (
    <SectionWrapper bgType="gray">
      <SectionTitle subtitle="SỰ THẬT ĐÁNG SỢ VỀ CHĂN NUÔI HIỆN NAY:">
        <span className="text-[#D32F2F]">BẠN ĐANG LÀM GIÀU CHO ĐẠI LÝ CÁM CÒ?</span>
      </SectionTitle>
      
      <div className="grid grid-cols-1 gap-4 mt-2">
        {painPoints.map((item, i) => (
          <RevealOnScroll key={i} delay={i * 80}>
            <div className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-[#D32F2F] flex items-start gap-3">
              <div className="bg-[#FFEBEE] p-1.5 rounded-full mt-0.5 shrink-0">
                <AlertTriangle className="w-5 h-5 text-[#D32F2F]" />
              </div>
              <p className="text-[15px] sm:text-[16px] text-[#1F2937] font-bold leading-snug">{item}</p>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </SectionWrapper>
  );
}

export function Solution({ onOpenForm }: { onOpenForm: () => void }) {
  const benefits = [
    "Ủ cám RẺ NHƯ BÈO: 100kg cám ủ chỉ tốn vài nghìn đồng tiền men!",
    "X2 TỐC ĐỘ LỚN: Vật nuôi ăn như hạm, tiêu hóa sạch sành sanh, lớn nhanh như thổi!",
    "KHÔNG LO DỊCH BỆNH: Men vi sinh tạo màng bảo vệ đường ruột cực mạnh, đề kháng như thép!",
    "NHÀN TÊNH: Không cần đun nấu khói bụi, trộn xong ủ đó, vài ngày sau cho ăn!",
    "MÙI THƠM PHỨC: Phân không còn mùi hôi thối, chuồng trại sạch bóng, hàng xóm không than phiền!",
    "BIẾN RÁC THÀNH VÀNG: Bã bia, bã đậu, gốc rau vứt đi nay thành thức ăn siêu dinh dưỡng!"
  ];

  return (
    <SectionWrapper bgType="white">
      <SectionTitle subtitle="BÍ QUYẾT ĐỘC QUYỀN CHƯA TỪNG TIẾT LỘ">
        ĐÂY LÀ PHƯƠNG PHÁP <span className="text-[#2E7D32]">'THẦN THÁNH'</span> ĐÃ CỨU SỐNG 10,000+ TRANG TRẠI
      </SectionTitle>
      
      <div className="bg-gradient-to-br from-[#E8F5E9] to-[#C8E6C9] rounded-3xl p-5 sm:p-6 border-2 border-[#4CAF50] mb-8 shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 bg-[#FF9800] text-white text-[10px] font-black px-3 py-1 rounded-bl-xl z-10 uppercase">
          Giải pháp đột phá 2024
        </div>
        <div className="grid grid-cols-1 gap-4 relative z-0 mt-4">
          {benefits.map((item, i) => (
            <RevealOnScroll key={i} delay={i * 80}>
              <div className="flex items-start gap-3 bg-white/60 p-3 rounded-lg">
                <div className="bg-[#4CAF50] rounded-full p-1 mt-0.5 shrink-0 shadow-sm">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-[15px] sm:text-[16px] text-[#1B5E20] font-bold leading-snug">{item}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>

      <RevealOnScroll delay={100} className="text-center">
        <Button variant="primary" onClick={() => { trackEvent('hero_cta_click'); onOpenForm(); }} className="w-full sm:w-auto px-8 mx-auto shadow-xl bg-gradient-to-r from-[#4CAF50] to-[#2E7D32] text-white font-black text-[18px] py-4 h-auto border-2 border-[#81C784] animate-pulse">
          TÔI MUỐN SỞ HỮU BÍ KÍP NÀY <ChevronRight className="w-6 h-6 ml-1" />
        </Button>
      </RevealOnScroll>
    </SectionWrapper>
  );
}
