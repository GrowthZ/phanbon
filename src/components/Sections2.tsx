import React, { useState } from 'react';
import { Placeholder, Button, SectionTitle } from './ui';
import { BRAND } from '../constants';
import { Phone, ArrowDown } from 'lucide-react';

export function BeforeAfter() {
  return (
    <section className="py-12 px-4 bg-white">
      <SectionTitle>TRƯỚC VÀ SAU KHI Ủ KHÁC NHAU THẾ NÀO?</SectionTitle>
      
      <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
        <div className="w-full bg-gray-50 p-3 rounded-3xl border border-gray-100 shadow-sm relative">
          <Placeholder text="[ẢNH NGUYÊN LIỆU TRƯỚC KHI Ủ]" src="https://loremflickr.com/400/400/vietnam,vegetables?lock=9" className="w-full aspect-square rounded-2xl mb-3 text-sm border-none" />
          <p className="text-center font-black text-[18px] text-gray-500 uppercase">Nguyên liệu ban đầu</p>
        </div>
        
        <div className="bg-gradient-to-b from-[#f97316] to-[#ea580c] p-3 rounded-full shadow-lg z-10 md:-rotate-90">
          <ArrowDown className="text-white w-6 h-6" />
        </div>
        
        <div className="w-full bg-green-50 p-3 rounded-3xl border border-green-200 shadow-md relative">
          <Placeholder text="[ẢNH THÀNH PHẨM SAU KHI Ủ]" src="https://loremflickr.com/400/400/animal,feed?lock=10" className="w-full aspect-square rounded-2xl mb-3 text-sm border-none" />
          <p className="text-center font-black text-[18px] text-green-700 uppercase">Thức ăn sau khi ủ</p>
        </div>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section className="py-12 px-4 bg-gray-50 border-y border-gray-100">
      <SectionTitle>CÁCH Ủ THỨC ĂN THEO 3 BƯỚC</SectionTitle>
      
      <div className="space-y-4 mb-8">
        {[
          {
            step: "Bước 1",
            title: "Chuẩn bị nguyên liệu",
            desc: "Rau củ, cám bã, bã đậu, thân ngô hoặc phụ phẩm có sẵn.",
            img: "[ẢNH CHUẨN BỊ]",
            src: "https://loremflickr.com/600/400/vietnam,agriculture?lock=11"
          },
          {
            step: "Bước 2",
            title: "Trộn men",
            desc: "Điều chỉnh tỷ lệ theo loại nguyên liệu và vật nuôi.",
            img: "[ẢNH TRỘN MEN]",
            src: "https://loremflickr.com/600/400/asian,farmer?lock=12"
          },
          {
            step: "Bước 3",
            title: "Ủ & Sử dụng",
            desc: "Theo dõi mùi, độ ẩm và thời gian ủ trước khi cho ăn.",
            img: "[ẢNH THÙNG Ủ]",
            src: "https://loremflickr.com/600/400/plastic,barrel?lock=13"
          }
        ].map((item, i) => (
          <div key={i} className="flex bg-white rounded-2xl shadow-sm border border-gray-100 p-3 items-center">
            <Placeholder text={item.img} src={item.src} className="w-1/3 max-w-[120px] aspect-square rounded-xl border-none shrink-0" />
            <div className="pl-4">
              <span className="inline-block bg-orange-100 text-orange-800 font-black text-xs px-2.5 py-1 rounded-full mb-1.5 uppercase">
                {item.step}
              </span>
              <h3 className="text-[17px] font-black text-gray-900 mb-1">{item.title}</h3>
              <p className="text-[15px] text-gray-600 font-medium leading-snug">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <Placeholder text="[VIDEO THỰC TẾ TRỘN VÀ Ủ THỨC ĂN]" src="https://loremflickr.com/600/800/vietnam,farmer?lock=14" className="w-full aspect-[3/4] sm:aspect-video mb-8 rounded-3xl shadow-lg border-4 border-white" isVideo />

      <a href={`tel:${BRAND.hotline}`} className="block">
        <Button variant="primary" className="shadow-xl">
          <Phone className="mr-2 w-6 h-6" /> GỌI HỎI CÁCH Ủ PHÙ HỢP
        </Button>
      </a>
    </section>
  );
}

export function AnimalTabs() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 'heo', label: 'Nuôi heo', desc: 'Có thể tư vấn cách tận dụng cám gạo, bã đậu, rau củ hoặc phụ phẩm sẵn có theo số lượng đàn heo tại nhà.', cta: 'GỌI HỎI CÁCH Ủ CHO ĐÀN HEO', img: '[ẢNH ĐÀN HEO THỰC TẾ]', src: 'https://loremflickr.com/600/400/vietnam,pig?lock=15' },
    { id: 'gia-cam', label: 'Nuôi gà, vịt', desc: 'Hướng dẫn phối trộn thức ăn cho gà, vịt, ngan giúp tận dụng tối đa nguyên liệu địa phương.', cta: 'GỌI HỎI CÁCH Ủ CHO ĐÀN GÀ VỊT', img: '[ẢNH ĐÀN GÀ/VỊT THỰC TẾ]', src: 'https://loremflickr.com/600/400/vietnam,chicken?lock=16' },
    { id: 'gia-suc', label: 'Nuôi bò, dê', desc: 'Cách ủ cỏ, thân ngô, phụ phẩm nông nghiệp làm thức ăn dự trữ cho bò, dê.', cta: 'GỌI HỎI CÁCH Ủ CHO ĐÀN BÒ DÊ', img: '[ẢNH BÒ/DÊ THỰC TẾ]', src: 'https://loremflickr.com/600/400/vietnam,cow?lock=17' },
    { id: 'ca', label: 'Nuôi cá', desc: 'Ủ thức ăn cho cá từ cám bã, nguyên liệu thực vật giúp nổi tốt và hạn chế ô nhiễm nước.', cta: 'GỌI HỎI CÁCH Ủ CHO CÁ', img: '[ẢNH AO CÁ THỰC TẾ]', src: 'https://loremflickr.com/600/400/vietnam,fishpond?lock=18' },
    { id: 'tong-hop', label: 'Tổng hợp', desc: 'Tư vấn giải pháp ủ thức ăn dùng chung hoặc dùng riêng cho mô hình chăn nuôi nhiều loại con vật.', cta: 'GỌI TƯ VẤN MÔ HÌNH TỔNG HỢP', img: '[ẢNH TRANG TRẠI TỔNG HỢP]', src: 'https://loremflickr.com/600/400/vietnam,farm?lock=19' },
  ];

  return (
    <section className="py-12 px-4 bg-white">
      <SectionTitle subtitle="Dành riêng cho từng loại vật nuôi">CHỌN MÔ HÌNH CHĂN NUÔI CỦA NHÀ MÌNH</SectionTitle>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(index)}
            className={`px-4 py-3 rounded-xl font-bold text-[15px] flex-grow text-center transition-all duration-300 border-2 ${
              activeTab === index 
                ? 'bg-gradient-to-r from-green-600 to-green-700 text-white border-green-700 shadow-md transform scale-105' 
                : 'bg-white text-gray-600 border-gray-100 hover:border-green-200 hover:bg-green-50'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="bg-gradient-to-br from-[#f0fdf4] to-white border border-green-100 rounded-3xl p-5 shadow-lg transition-all duration-300">
        <Placeholder text={tabs[activeTab].img} src={tabs[activeTab].src} className="w-full h-56 mb-5 bg-white rounded-2xl border-none shadow-sm" />
        <p className="text-[16px] text-gray-800 font-medium mb-6 leading-relaxed bg-white p-4 rounded-xl border border-gray-50 shadow-[0_2px_10px_rgba(0,0,0,0.03)]">
          {tabs[activeTab].desc}
        </p>
        <a href={`tel:${BRAND.hotline}`} className="block">
          <Button variant="primary" className="shadow-xl">
            <Phone className="mr-2 w-5 h-5" /> {tabs[activeTab].cta}
          </Button>
        </a>
      </div>
    </section>
  );
}

export function Usage() {
  return (
    <section className="py-12 px-4 bg-gray-50 border-t border-gray-100">
      <SectionTitle>VẬT NUÔI SỬ DỤNG THỨC ĂN SAU Ủ</SectionTitle>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <Placeholder text="[VIDEO/ẢNH HEO ĂN THỨC ĂN Ủ]" src="https://loremflickr.com/600/400/vietnam,pig,eating?lock=20" className="w-full h-56 rounded-3xl shadow-md border-4 border-white" isVideo />
        <Placeholder text="[VIDEO/ẢNH GÀ VỊT ĂN THỨC ĂN Ủ]" src="https://loremflickr.com/600/400/vietnam,chicken,eating?lock=21" className="w-full h-56 rounded-3xl shadow-md border-4 border-white" isVideo />
      </div>
      
      <div className="bg-gradient-to-r from-green-600 to-green-800 border-none p-5 rounded-2xl shadow-xl mt-4 text-center mx-2 transform -translate-y-4">
        <p className="text-[16px] font-black uppercase text-white tracking-wide">
          Chuồng trại thật – Vật nuôi thật – Quy trình thực tế
        </p>
      </div>
    </section>
  );
}
