import React, { useState } from 'react';
import { Placeholder, SectionTitle, SectionWrapper, RevealOnScroll, StepCard, BenefitCard } from './ui';
import { trackEvent } from '../constants';
import { Star, PlayCircle } from 'lucide-react';

export function Process({ onOpenForm }: { onOpenForm: () => void }) {
  const steps = [
    {
      step: "Bước 1",
      title: "Pha men",
      desc: "Pha men vi sinh với nước hoặc rỉ mật theo tỷ lệ hướng dẫn đi kèm.",
      img: "Pha men vi sinh",
      src: "/images/step_1.png"
    },
    {
      step: "Bước 2",
      title: "Trộn nguyên liệu",
      desc: "Trộn đều dung dịch men đã pha với cám, rau, bã đậu, thân ngô băm nhỏ...",
      img: "Trộn nguyên liệu",
      src: "/images/step_2.png"
    },
    {
      step: "Bước 3",
      title: "Ủ kín và sử dụng",
      desc: "Cho vào thùng phuy hoặc bao nilon buộc kín. Sau 1-2 ngày thức ăn thơm chín là dùng được.",
      img: "Ủ kín và sử dụng",
      src: "/images/step_3.png"
    }
  ];

  return (
    <SectionWrapper bgType="gray">
      <SectionTitle subtitle="Làm tại nhà cực kỳ đơn giản và nhanh chóng">QUY TRÌNH Ủ 3 BƯỚC</SectionTitle>
      
      <div className="space-y-4">
        {steps.map((item, i) => (
          <RevealOnScroll key={i} delay={i * 100}>
            <StepCard 
              stepNumber={item.step} 
              title={item.title} 
              desc={item.desc} 
              imgPlaceholderText={item.img} 
              imgSrc={item.src}
            />
          </RevealOnScroll>
        ))}
      </div>
    </SectionWrapper>
  );
}

export function Benefits() {
  const benefits = [
    "Giảm đáng kể chi phí cám nhờ tận dụng nguyên liệu sẵn có quanh nhà",
    "Thức ăn sau ủ có mùi thơm, chín mềm, kích thích vật nuôi ăn nhiều hơn",
    "Hỗ trợ hệ tiêu hóa khỏe mạnh, hạn chế tối đa tiêu chảy, đầy hơi",
    "Giảm công nấu cám hằng ngày, chỉ cần phối trộn và ủ kín",
    "Chủ động nguồn thức ăn dự trữ cho đàn gia súc, gia cầm",
    "Hạn chế lãng phí phụ phẩm nông nghiệp sau mỗi mùa thu hoạch"
  ];

  return (
    <SectionWrapper bgType="green-dark">
      <SectionTitle className="text-white" subtitle="Kết quả vượt trội khi bà con áp dụng đúng kỹ thuật">
        LỢI ÍCH VƯỢT TRỘI
      </SectionTitle>
      
      <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-5 sm:p-6 border border-white/15">
        <div className="grid grid-cols-1 gap-3">
          {benefits.map((item, i) => (
            <RevealOnScroll key={i} delay={i * 80}>
              <BenefitCard text={item} dark={true} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

export function OtherUses() {
  const uses = [
    "Khử mùi hôi chuồng trại",
    "Làm đệm lót sinh học",
    "Ủ phân hữu cơ",
    "Ủ đạm cá",
    "Hỗ trợ xử lý môi trường ao nuôi",
    "Kết hợp mô hình sâu canxi / ruồi lính đen"
  ];

  return (
    <SectionWrapper bgType="white">
      <SectionTitle subtitle="1 bộ sản phẩm tích hợp đa ứng dụng chăn nuôi">KHÔNG CHỈ DÙNG ĐỂ Ủ THỨC ĂN</SectionTitle>
      
      <div className="grid grid-cols-2 gap-3">
        {uses.map((item, i) => (
          <RevealOnScroll key={i} delay={i * 60}>
            <div className="bg-[#FFFDF6] border border-[#FFF8E1] rounded-2xl p-4 flex flex-col items-center justify-center text-center shadow-sm hover:border-[#F9A825] transition-colors duration-300 min-h-[110px]">
              <Star className="w-6 h-6 text-[#F9A825] mb-2 shrink-0" />
              <span className="font-bold text-[#1F2937] text-[13px] leading-tight">{item}</span>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </SectionWrapper>
  );
}

export function SocialProof() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const videos = [
    {
      id: "-nn6DGdTmAU",
      title: "Cách làm men sử dụng để ủ thức ăn cho vật nuôi"
    },
    {
      id: "oHMhopZDpoA",
      title: "Phối trộn bã đậu cùng men vi sinh, đạm cá giúp vật nuôi mau lớn"
    }
  ];

  const feedbacks = [
    {
      name: "Anh Hoàng (Hải Dương)",
      role: "Nuôi 50 lợn thịt",
      text: "Men ủ thơm lắm em ơi, đàn lợn nhà anh thích ăn hẳn, ăn xong ngủ kỹ không phá chuồng nữa. Tiết kiệm được bao nhiêu tiền cám cò!",
      avatarBg: "bg-blue-100 text-blue-700"
    },
    {
      name: "Chị Mai (Đồng Nai)",
      role: "Hộ chăn nuôi gà thảo dược",
      text: "Ủ bã đậu với mật mía theo công thức em hướng dẫn, gà ăn khỏe, phân khô hẳn không bị hôi chuồng. Gửi thêm cho chị 2 bộ nữa nhé.",
      avatarBg: "bg-green-100 text-green-700"
    }
  ];

  const reviewImages = [
    { src: "/reviews/review_3.jpg", alt: "Bà con sử dụng Men Nhà Nông" },
    { src: "/reviews/review_2.jpg", alt: "Phản hồi Trang Phan" },
    { src: "/reviews/review_4.jpg", alt: "Phản hồi Ngô Thông" },
    { src: "/reviews/review_5.jpg", alt: "Phản hồi Messenger" },
    { src: "/reviews/review_6.jpg", alt: "Phản hồi Thu Dang" },
    { src: "/reviews/review_1.jpg", alt: "Can mật rỉ thực tế" }
  ];

  return (
    <SectionWrapper bgType="gray">
      <SectionTitle subtitle="Video từ bà con chăn nuôi & phản hồi thực tế">BẰNG CHỨNG THỰC TẾ</SectionTitle>
      
      <div className="space-y-7">
        {/* Video trải nghiệm thực tế từ Facebook Reel */}
        <RevealOnScroll delay={100}>
          <div className="bg-white p-4 rounded-3xl shadow-sm border border-[#DDEEDC]">
            <h3 className="text-center font-black text-[#2E7D32] mb-3 text-[14px] sm:text-[15px] uppercase tracking-wide">
              TRẢI NGHIỆM THỰC TẾ TỪ BÀ CON
            </h3>
            <div className="w-full max-w-[280px] mx-auto aspect-[9/16] rounded-2xl overflow-hidden shadow-inner border border-gray-100 bg-black">
              <iframe 
                src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F811918025158381%2F&show_text=false&t=0" 
                className="w-full h-full border-none"
                scrolling="no" 
                allowFullScreen={true} 
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                loading="lazy"
              ></iframe>
            </div>
            <p className="text-center text-[12.5px] text-[#4B5563] font-semibold mt-3 leading-relaxed px-1">
              Hiệu quả ủ chín thức ăn thực tế và phản ứng hào hứng của vật nuôi khi ăn cám vi sinh thơm ngon.
            </p>
          </div>
        </RevealOnScroll>

        {/* Gallery ảnh review thực tế từ bà con */}
        <div className="space-y-3">
          <h3 className="font-black text-[15px] sm:text-[16px] text-[#1F2937] uppercase tracking-wide border-l-4 border-[#2E7D32] pl-3">
            Phản hồi & Tương tác thực tế
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
            {reviewImages.map((img, idx) => (
              <RevealOnScroll key={idx} delay={idx * 50}>
                <div 
                  onClick={() => {
                    trackEvent('review_image_click', { src: img.src });
                    setActiveImage(img.src);
                  }}
                  className="aspect-square rounded-2xl overflow-hidden shadow-sm border border-[#DDEEDC] cursor-pointer hover:border-[#2E7D32] transition-colors duration-300 bg-white group relative"
                >
                  <img 
                    src={img.src} 
                    alt={img.alt} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300" />
                </div>
              </RevealOnScroll>
            ))}
          </div>
          <p className="text-center text-[11.5px] text-[#9CA3AF] font-medium italic">
            * Nhấn vào hình ảnh bất kỳ để phóng to xem tin nhắn phản hồi rõ nét.
          </p>
        </div>

        {/* Video hướng dẫn YouTube thật */}
        <div className="space-y-4">
          <h3 className="font-black text-[15px] sm:text-[16px] text-[#1F2937] uppercase tracking-wide border-l-4 border-[#2E7D32] pl-3">
            Video hướng dẫn phối trộn
          </h3>
          <div className="grid grid-cols-1 gap-4">
            {videos.map((vid, idx) => (
              <RevealOnScroll key={vid.id} delay={idx * 100}>
                <div className="bg-white p-3 rounded-2xl shadow-sm border border-[#DDEEDC]">
                  <iframe 
                    className="w-full aspect-video rounded-xl shadow-inner border-none"
                    src={`https://www.youtube.com/embed/${vid.id}`}
                    title={vid.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                  <p className="text-xs sm:text-sm font-semibold text-[#374151] mt-2.5 px-1 leading-snug">
                    {vid.title}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>

        {/* Feedback Zalo/Tin nhắn kiểu HTML */}
        <div className="space-y-4">
          <h3 className="font-black text-[15px] sm:text-[16px] text-[#1F2937] uppercase tracking-wide border-l-4 border-[#2E7D32] pl-3">
            Đánh giá từ các hộ chăn nuôi
          </h3>
          <div className="grid grid-cols-1 gap-3.5">
            {feedbacks.map((fb, idx) => (
              <RevealOnScroll key={idx} delay={idx * 80}>
                <div className="bg-[#FFFDF6] p-4 rounded-2xl border border-[#DDEEDC] shadow-sm relative overflow-hidden">
                  <div className="flex items-center gap-3 mb-2.5">
                    <div className={`w-9 h-9 rounded-full ${fb.avatarBg} flex items-center justify-center font-bold text-sm shrink-0 shadow-sm`}>
                      {fb.name.charAt(4)}
                    </div>
                    <div>
                      <h4 className="text-[13px] sm:text-[14px] font-black text-[#1F2937] leading-tight">{fb.name}</h4>
                      <p className="text-[11px] text-[#2E7D32] font-bold">{fb.role}</p>
                    </div>
                  </div>
                  <p className="text-[13px] sm:text-[14px] text-[#4B5563] font-semibold leading-relaxed italic bg-white p-3 rounded-xl border border-gray-50">
                    "{fb.text}"
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>

        {/* Ảnh So sánh Trước & Sau thực tế */}
        <RevealOnScroll delay={250}>
          <div className="bg-white p-4 sm:p-5 rounded-3xl shadow-sm border border-[#DDEEDC]">
            <h3 className="text-center font-bold text-[#2E7D32] mb-4 text-[14px] sm:text-[15px] uppercase tracking-wide">
              KẾT QUẢ Ủ THỨC ĂN THỰC TẾ
            </h3>
            <div className="w-full relative rounded-2xl overflow-hidden shadow-inner border border-gray-100">
              <img 
                src="/images/fermented_feed_comparison.png" 
                alt="So sánh trước và sau khi ủ chín thức ăn" 
                className="w-full object-cover" 
              />
              <div className="absolute top-2 left-2 bg-black/60 text-white text-[10px] sm:text-[11px] font-bold px-2 py-0.5 rounded shadow-sm">
                TRƯỚC: Cám thô
              </div>
              <div className="absolute top-2 right-2 bg-[#2E7D32]/90 text-white text-[10px] sm:text-[11px] font-bold px-2 py-0.5 rounded shadow-sm">
                SAU: Chín thơm ngọt
              </div>
            </div>
            <p className="text-center text-[12px] sm:text-[13px] text-[#4B5563] font-semibold mt-3.5 leading-relaxed px-1">
              Nguyên liệu thô xơ ban đầu (trái) biến thành hỗn hợp chín sinh học mềm, vàng ươm, dậy mùi thơm men kích thích vật nuôi thèm ăn (phải).
            </p>
          </div>
        </RevealOnScroll>

        {/* Ảnh Đơn hàng/Giao hàng */}
        <RevealOnScroll delay={300}>
          <div className="relative rounded-3xl overflow-hidden shadow-sm border border-[#DDEEDC]">
            <img 
              src="/images/farm_delivery.png" 
              alt="Giao hàng Men Nhà Nông toàn quốc" 
              className="w-full object-cover" 
            />
            <div className="absolute bottom-3 left-3 right-3 bg-black/60 backdrop-blur-sm py-2 px-3 rounded-xl text-center">
              <span className="text-[11px] sm:text-xs font-bold text-white uppercase tracking-wider block">
                Hàng đi liên tục - Giao hàng toàn quốc tận nơi
              </span>
            </div>
          </div>
        </RevealOnScroll>
        
        <p className="text-center text-[#9CA3AF] text-[11px] italic font-medium">
          * Hình ảnh và video thực tế từ các hộ chăn nuôi hợp tác cùng Men Nhà Nông.
        </p>
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4"
          onClick={() => setActiveImage(null)}
        >
          <div className="relative max-w-full max-h-[90vh] flex items-center justify-center">
            <img 
              src={activeImage} 
              alt="Review phóng to" 
              className="max-w-full max-h-[80vh] rounded-xl object-contain border-2 border-white/25 shadow-2xl animate-scale-in" 
            />
            <button 
              onClick={() => setActiveImage(null)}
              className="absolute -top-12 right-0 bg-black/60 hover:bg-black/80 text-white rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold transition-colors cursor-pointer border border-white/10"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </SectionWrapper>
  );
}
