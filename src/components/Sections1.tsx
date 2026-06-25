import React from 'react';
import { Placeholder, Button, SectionTitle, SectionWrapper, RevealOnScroll, FeatureCard, BenefitCard } from './ui';
import { BRAND, trackEvent } from '../constants';
import { MessageCircle, ChevronRight } from 'lucide-react';

export function Hero({ onOpenForm }: { onOpenForm: () => void }) {
  const handleCtaClick = () => {
    trackEvent('hero_cta_click');
    onOpenForm();
  };

  const handleZaloClick = () => {
    trackEvent('zalo_click', { location: 'hero' });
  };

  return (
    <section className="pt-8 pb-10 px-4 bg-gradient-to-b from-[#E8F5E9] to-white text-center">
      <div className="w-full max-w-lg mx-auto">
        <RevealOnScroll className="inline-block border border-[#2E7D32] bg-white rounded-full px-4 py-2 mb-4 shadow-sm">
          <span className="text-[12px] sm:text-[13px] font-bold text-[#2E7D32] uppercase tracking-wider block">
            Men nhà nông - ủ dễ, nuôi nhàn, tối ưu chi phí
          </span>
        </RevealOnScroll>
        
        <RevealOnScroll delay={100}>
          <h1 className="text-[28px] sm:text-[36px] font-black text-[#1F2937] uppercase leading-[1.2] mb-4">
            GIẢM CHI PHÍ CÁM BẰNG CÁCH <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2E7D32] to-[#1B5E20]">
              TỰ Ủ CHÍN THỨC ĂN CHĂN NUÔI TẠI NHÀ
            </span>
          </h1>
        </RevealOnScroll>
        
        <RevealOnScroll delay={200}>
          <p className="text-[15px] sm:text-[16px] text-[#4B5563] font-medium leading-relaxed mb-6 px-2">
            Bộ men vi sinh gốc giúp bà con tận dụng cám, bã bia, bã đậu, rau củ, cỏ tươi, thân ngô, sắn… để tạo nguồn thức ăn thơm, dễ tiêu hóa, phù hợp cho trâu, bò, lợn, gà, vịt, dê, cá, tôm.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={300} className="mb-8 flex justify-center">
          <div className="w-full max-w-[340px] aspect-[9/16] rounded-2xl overflow-hidden shadow-md border-4 border-white bg-black">
            <iframe 
              src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F831586530047269%2F&show_text=false&t=0" 
              className="w-full h-full border-none"
              scrolling="no" 
              allowFullScreen={true} 
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
          </div>
        </RevealOnScroll>
        
        <RevealOnScroll delay={400} className="space-y-3">
          <Button variant="primary" onClick={handleCtaClick} className="w-full shadow-md bg-gradient-to-r from-[#F9A825] to-[#F57F17] hover:scale-[1.01]">
            NHẬN CÔNG THỨC Ủ MIỄN PHÍ
          </Button>
          <a href={BRAND.zaloUrl} target="_blank" rel="noreferrer" onClick={handleZaloClick} className="block">
            <Button variant="outline" className="w-full">
              <MessageCircle className="mr-2 w-6 h-6" /> NHẮN ZALO TƯ VẤN KỸ THUẬT
            </Button>
          </a>
        </RevealOnScroll>
      </div>
    </section>
  );
}

export function Problems() {
  const painPoints = [
    "Tiền cám tăng liên tục",
    "Vật nuôi ăn kém, chậm lớn, dễ rối loạn tiêu hóa",
    "Nấu cám mất thời gian, tốn công",
    "Thức ăn dễ chua, mốc, hư hỏng",
    "Có nhiều phụ phẩm nhưng chưa biết cách tận dụng",
    "Không biết công thức ủ đúng"
  ];

  return (
    <SectionWrapper bgType="yellow-light">
      <SectionTitle subtitle="Chăn nuôi vất vả mà hiệu quả không cao?">Cám ngày càng đắt, nuôi mãi vẫn khó có lãi?</SectionTitle>
      
      <div className="grid grid-cols-1 gap-3">
        {painPoints.map((item, i) => (
          <RevealOnScroll key={i} delay={i * 80}>
            <FeatureCard text={item} />
          </RevealOnScroll>
        ))}
      </div>
    </SectionWrapper>
  );
}

export function Solution({ onOpenForm }: { onOpenForm: () => void }) {
  const benefits = [
    "Tận dụng cám, bã bia, bã đậu, rau củ, cỏ tươi, sắn, bắp, thân ngô...",
    "Giảm đáng kể phụ thuộc vào cám công nghiệp",
    "Hỗ trợ vật nuôi ăn khỏe, tiêu hóa tốt hơn",
    "Tiết kiệm công nấu cám hàng ngày",
    "Chủ động chuẩn bị nguồn thức ăn",
    "Có video hướng dẫn chi tiết và kỹ thuật viên hỗ trợ"
  ];

  return (
    <SectionWrapper bgType="white">
      <SectionTitle subtitle="Ủ chín sinh học bằng bộ men vi sinh tự nhiên">
        GIẢI PHÁP TỰ Ủ THỨC ĂN TẠI NHÀ
      </SectionTitle>
      
      <div className="bg-[#E8F5E9] rounded-3xl p-5 sm:p-6 border border-[#DDEEDC] mb-8">
        <div className="grid grid-cols-1 gap-3">
          {benefits.map((item, i) => (
            <RevealOnScroll key={i} delay={i * 80}>
              <BenefitCard text={item} />
            </RevealOnScroll>
          ))}
        </div>
      </div>

      <RevealOnScroll delay={100} className="text-center">
        <Button variant="primary" onClick={() => { trackEvent('hero_cta_click'); onOpenForm(); }} className="w-full sm:w-auto px-8 mx-auto shadow-md">
          TÌM HIỂU THÊM VỀ BỘ SẢN PHẨM <ChevronRight className="w-5 h-5 ml-1" />
        </Button>
      </RevealOnScroll>
    </SectionWrapper>
  );
}
