import React, { useState, useEffect } from 'react';
import { ShoppingBag, Check } from 'lucide-react';

interface Notification {
  name: string;
  action: string;
  time: string;
  type: 'buy' | 'inquiry';
}

const notifications: Notification[] = [
  { name: "Chú Bảy (Đồng Nai)", action: "đã đặt mua Bộ men ủ 10kg", time: "2 phút trước", type: "buy" },
  { name: "Anh Minh (Hà Tĩnh)", action: "đã đăng ký nhận công thức ủ ngô", time: "5 phút trước", type: "inquiry" },
  { name: "Bác Ba (Thanh Hóa)", action: "đã đặt mua Bộ men ủ 5kg", time: "8 phút trước", type: "buy" },
  { name: "Chị Lan (Sóc Trăng)", action: "đã đăng ký tư vấn ủ bã đậu", time: "11 phút trước", type: "inquiry" },
  { name: "Anh Hoàng (Bắc Giang)", action: "đã đặt mua Bộ men ủ 10kg", time: "15 phút trước", type: "buy" },
  { name: "Bác Năm (Tây Ninh)", action: "đã đặt mua Bộ men ủ 5kg", time: "18 phút trước", type: "buy" },
  { name: "Chú Sáu (Lâm Đồng)", action: "đã đăng ký nhận công thức ủ cỏ", time: "22 phút trước", type: "inquiry" },
  { name: "Anh Tuấn (Hải Dương)", action: "đã đặt mua Bộ men ủ 10kg", time: "25 phút trước", type: "buy" }
];

export function LiveBuyersPopup({ onClick }: { onClick?: () => void }) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Initial delay before showing the first popup
    const startTimeout = setTimeout(() => {
      setVisible(true);
    }, 3000);

    const interval = setInterval(() => {
      // Hide the current popup
      setVisible(false);

      // Wait for slide-out transition to complete (approx 800ms) before updating content
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % notifications.length);
        // Show next popup
        setVisible(true);
      }, 800);

    }, 12000); // Cycles every 12 seconds (visible for ~8s, hidden/transition for ~4s)

    return () => {
      clearTimeout(startTimeout);
      clearInterval(interval);
    };
  }, []);

  const current = notifications[index];

  return (
    <div
      onClick={onClick}
      className={`fixed z-40 max-w-[290px] w-[calc(100vw-32px)] bg-white/95 backdrop-blur-sm border border-[#E8F5E9] shadow-lg shadow-black/5 rounded-2xl p-3 flex items-center gap-3 transition-all duration-700 ease-out bottom-[88px] md:bottom-28 left-4 md:left-[calc(50vw-210px)] cursor-pointer hover:bg-emerald-50/50 active:scale-[0.98] ${
        visible 
          ? 'translate-x-0 opacity-100' 
          : '-translate-x-[120%] opacity-0 pointer-events-none'
      }`}
    >
      {/* Icon / Avatar container */}
      <div className={`w-10 h-10 rounded-full shrink-0 flex items-center justify-center relative ${
        current.type === 'buy' ? 'bg-[#E8F5E9] text-[#2E7D32]' : 'bg-[#FFF8E1] text-[#F57F17]'
      }`}>
        {current.type === 'buy' ? (
          <ShoppingBag className="w-5 h-5" />
        ) : (
          <Check className="w-5 h-5" />
        )}
        {/* Pulsing indicator */}
        <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-white animate-pulse" />
      </div>

      {/* Text Info */}
      <div className="flex-1 min-w-0">
        <h4 className="text-[13px] font-extrabold text-[#1F2937] leading-tight truncate">
          {current.name}
        </h4>
        <p className="text-[12px] text-[#4B5563] font-semibold leading-tight mt-0.5">
          {current.action}
        </p>
        <span className="text-[10px] text-[#9CA3AF] font-bold block mt-1">
          {current.time}
        </span>
      </div>
    </div>
  );
}
