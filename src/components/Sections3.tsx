import React, { useState, useEffect } from 'react';
import { Placeholder, SectionTitle, SectionWrapper, RevealOnScroll, StepCard, BenefitCard } from './ui';
import { trackEvent } from '../constants';
import { Star, PlayCircle, ShieldAlert, ChevronLeft, ChevronRight, X } from 'lucide-react';

export function Process({ onOpenForm }: { onOpenForm: () => void }) {
  const steps = [
    {
      step: "Bước 1",
      title: "Pha men 1 phút",
      desc: "Chỉ cần khuấy đều men vi sinh vào nước. Không cần đun nấu khói mù mịt như xưa!",
      img: "Pha men vi sinh",
      src: "/images/step_1.png"
    },
    {
      step: "Bước 2",
      title: "Trộn đều nguyên liệu phế phẩm",
      desc: "Hốt hết mớ cám, rau, bã đậu, thân ngô... trộn đều với nước men. Dọn dẹp cả đống rác thành tiền!",
      img: "Trộn nguyên liệu",
      src: "/images/step_2.png"
    },
    {
      step: "Bước 3",
      title: "Ủ kín & Xong việc!",
      desc: "Cột kín miệng túi. Sau 24h mở ra, mùi thơm nức mũi như rượu vang, vật nuôi tranh nhau ăn!",
      img: "Ủ kín và sử dụng",
      src: "/images/step_3.png"
    }
  ];

  return (
    <SectionWrapper bgType="gray">
      <SectionTitle subtitle="Vứt bỏ bếp củi, nhàn nhã uống trà đợi cám chín">CHỈ 3 BƯỚC NHÀN TÊNH - <span className="text-[#2E7D32]">AI CŨNG LÀM ĐƯỢC</span></SectionTitle>
      
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
    "CẮT ĐỨT 50% CHI PHÍ CÁM NGAY LẬP TỨC: Tiền lời đắp thẳng vào túi bạn!",
    "BĂM NÁT BỆNH ĐƯỜNG RUỘT: Tiêu hóa 100%, không còn cảnh tiêu chảy ồ ạt chết cả đàn",
    "THỊT THƠM DÀY - BÁN ĐƯỢC GIÁ: Bò lợn gà săn chắc, thương lái tranh nhau mua!",
    "CHỈ TỐN 10 PHÚT MỖI NGÀY: Quên đi cảnh hì hục củi lửa, khói lấm lem cả mặt",
    "CHUỒNG TRẠI SẠCH BONG, KHÔNG CÒN MÙI HÔI THỐI: Hàng xóm hết cửa phàn nàn!",
    "MIỄN NHIỄM DỊCH BỆNH: Men vi sinh bảo vệ dạ dày như một tấm khiên thép vững chắc"
  ];

  return (
    <SectionWrapper bgType="green-dark">
      <SectionTitle className="text-white" subtitle="Kết quả ngay trong tuần đầu tiên áp dụng">
        <span className="text-[#FFEB3B]">KẾT QUẢ SẼ LÀM BẠN SỐC NẶNG</span>
      </SectionTitle>
      
      <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-5 sm:p-6 border-2 border-white/30 shadow-2xl">
        <div className="grid grid-cols-1 gap-4">
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
    "Khử cực mạnh mùi hôi chuồng",
    "Làm đệm lót sinh học vĩnh cửu",
    "Ủ phân hữu cơ bón cây cực tốt",
    "Ủ đạm cá thối thành đạm thơm",
    "Cứu nguy môi trường ao tôm cá",
    "Nuôi sâu canxi lớn nhanh như thổi"
  ];

  return (
    <SectionWrapper bgType="white">
      <SectionTitle subtitle="Đa dụng vô đối - Không mua là một sai lầm lớn!">1 SẢN PHẨM - GIẢI QUYẾT BÁCH BỆNH TRANG TRẠI</SectionTitle>
      
      <div className="grid grid-cols-2 gap-3">
        {uses.map((item, i) => (
          <RevealOnScroll key={i} delay={i * 60}>
            <div className="bg-gradient-to-br from-[#FFFDF6] to-[#FFF8E1] border border-[#FFD54F] rounded-2xl p-4 flex flex-col items-center justify-center text-center shadow hover:shadow-md hover:scale-105 transition-all duration-300 min-h-[110px]">
              <ShieldAlert className="w-6 h-6 text-[#F57F17] mb-2 shrink-0 animate-pulse" />
              <span className="font-black text-[#1F2937] text-[13px] leading-tight">{item}</span>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </SectionWrapper>
  );
}

export function SocialProof() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

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
      text: "Suýt nữa thì bán sạch trại vì giá cám tăng điên cuồng. Từ lúc xài men này, lợn nhà tôi ăn bã đậu mà lớn như thổi. Tháng này dư được 15 củ tiền cám, đúng là cứu tinh!",
      avatarBg: "bg-blue-100 text-blue-700"
    },
    {
      name: "Chị Mai (Đồng Nai)",
      role: "Hộ chăn nuôi gà thảo dược",
      text: "Bất ngờ luôn em ơi. Gà trước đây rù mãi không lớn, giờ ăn thức ăn ủ men xong lông bóng mượt, đẻ trứng khỏe. Hàng xóm sang hỏi bí quyết chị giấu tiệt. Giao chị 5 can nữa nha.",
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

  const handlePrev = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (activeIdx === null) return;
    const newIdx = (activeIdx - 1 + reviewImages.length) % reviewImages.length;
    setActiveIdx(newIdx);
    trackEvent('review_image_nav', { direction: 'prev', toSrc: reviewImages[newIdx].src });
  };

  const handleNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (activeIdx === null) return;
    const newIdx = (activeIdx + 1) % reviewImages.length;
    setActiveIdx(newIdx);
    trackEvent('review_image_nav', { direction: 'next', toSrc: reviewImages[newIdx].src });
  };

  useEffect(() => {
    if (activeIdx === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'Escape') {
        setActiveIdx(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeIdx]);

  // Touch handlers for swipe
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  return (
    <SectionWrapper bgType="gray">
      <SectionTitle subtitle="Sự thật 100% từ những nông dân đã đổi đời">
        <span className="text-[#D32F2F]">HỌ ĐÃ THOÁT NỢ VÀ LÀM GIÀU, CÒN BẠN?</span>
      </SectionTitle>
      
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
                    setActiveIdx(idx);
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
      {activeIdx !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex flex-col items-center justify-center select-none"
          onClick={() => setActiveIdx(null)}
        >
          {/* Close Button */}
          <button 
            onClick={() => setActiveIdx(null)}
            className="absolute top-4 right-4 bg-black/50 hover:bg-black/80 text-white rounded-full p-2.5 transition-colors cursor-pointer border border-white/10 z-50 flex items-center justify-center"
            aria-label="Đóng"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Active Image Indicator */}
          <div className="absolute top-5 text-white/80 font-bold text-[14px] bg-black/40 px-3 py-1 rounded-full border border-white/10 z-40">
            {activeIdx + 1} / {reviewImages.length}
          </div>

          <div className="relative w-full max-w-4xl px-4 flex items-center justify-center">
            {/* Left Nav Button */}
            <button 
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-40 bg-black/50 hover:bg-black/80 text-white rounded-full p-2.5 sm:p-3.5 transition-all cursor-pointer border border-white/10 active:scale-90 flex items-center justify-center"
              aria-label="Ảnh trước"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Main Image with Swipable Gestures */}
            <div 
              className="relative max-w-full max-h-[80vh] flex flex-col items-center justify-center mx-12"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              <img 
                src={reviewImages[activeIdx].src} 
                alt={reviewImages[activeIdx].alt} 
                className="max-w-full max-h-[70vh] rounded-xl object-contain border border-white/10 shadow-2xl animate-scale-in" 
                onClick={(e) => {
                  e.stopPropagation(); // Avoid closing lightbox on clicking image
                  handleNext(); // Advance to next image when image is clicked
                }}
              />
              {/* Caption */}
              <p className="text-white/90 text-sm font-semibold mt-3 text-center bg-black/50 px-4 py-1.5 rounded-full border border-white/10 max-w-[85%] truncate">
                {reviewImages[activeIdx].alt}
              </p>
            </div>

            {/* Right Nav Button */}
            <button 
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-40 bg-black/50 hover:bg-black/80 text-white rounded-full p-2.5 sm:p-3.5 transition-all cursor-pointer border border-white/10 active:scale-90 flex items-center justify-center"
              aria-label="Ảnh tiếp theo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </SectionWrapper>
  );
}
