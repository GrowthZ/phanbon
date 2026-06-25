import React from 'react';
import { Placeholder, Button, SectionTitle, SectionWrapper, RevealOnScroll, ProductPackageCard, IngredientCard, AnimalCard } from './ui';
import { BRAND, trackEvent } from '../constants';
import { ShoppingBag, CheckCircle, Clock } from 'lucide-react';

export function ProductKit({ onOpenForm }: { onOpenForm: (type?: string) => void }) {
  const handlePackageClick = (pkgType: string) => {
    trackEvent('package_click', { package: pkgType });
    onOpenForm(pkgType);
  };

  const inclusions = [
    "1 can rỉ mật 5kg hoặc 10kg CHẤT LƯỢNG CAO",
    "2 gói nguyên liệu gốc tạo men ĐỘC QUYỀN",
    "CÔNG THỨC Ủ ĐỘT PHÁ theo từng nhóm vật nuôi",
    "Video hướng dẫn CẦM TAY CHỈ VIỆC chi tiết",
    "Kỹ sư Nông nghiệp hỗ trợ TRỰC TIẾP 24/7",
    "GIAO HÀNG TẬN NHÀ trên toàn quốc"
  ];

  return (
    <SectionWrapper bgType="gray">
      <SectionTitle subtitle="Trọn bộ vũ khí bí mật giúp bạn x2 lợi nhuận">
        <span className="text-[#D32F2F]">ƯU ĐÁI KHỦNG ĐẾN NỬA ĐÊM</span>
      </SectionTitle>
      
      <RevealOnScroll className="bg-white rounded-3xl p-5 sm:p-6 shadow-xl border-t-8 border-[#FF9800] mb-8 relative">
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FF9800] text-white font-black text-sm px-4 py-1 rounded-full flex items-center gap-1 shadow-md">
          <Clock className="w-4 h-4 animate-spin-slow" /> CHỈ CÒN 50 SUẤT HÔM NAY
        </div>
        <ul className="space-y-3 mb-6 mt-4">
          {inclusions.map((item, i) => (
            <li key={i} className="flex items-center text-[15px] text-[#1F2937] font-black">
              <CheckCircle className="w-6 h-6 text-[#FF9800] mr-3 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <Placeholder text="Trọn bộ Men Nhà Nông" className="w-full aspect-video rounded-xl shadow-md border-2 border-[#FF9800]/20" src="/images/product_kit.png" />
      </RevealOnScroll>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <RevealOnScroll delay={100}>
          <ProductPackageCard 
            title="BỘ Ủ 5KG (DÙNG THỬ)" 
            desc="Đầu tư SIÊU THẤP, hoàn vốn SIÊU NHANH. Lựa chọn an toàn cho hộ chăn nuôi quy mô nhỏ." 
            onBtnClick={() => handlePackageClick('5kg')} 
          />
        </RevealOnScroll>

        <RevealOnScroll delay={200}>
          <ProductPackageCard 
            title="BỘ Ủ 10KG (TIẾT KIỆM)" 
            desc="LỰA CHỌN THÔNG MINH NHẤT! Phù hợp trang trại vừa và nhỏ muốn CẮT GIẢM 50% CHI PHÍ NGAY LẬP TỨC." 
            isPromo={true}
            onBtnClick={() => handlePackageClick('10kg')} 
          />
        </RevealOnScroll>
      </div>
    </SectionWrapper>
  );
}

export function Materials({ onOpenForm }: { onOpenForm: () => void }) {
  const materials = [
    { name: "Cám, bã cám", img: "https://loremflickr.com/300/300/bran,rice?lock=30" },
    { name: "Rau củ quả vứt đi", img: "https://loremflickr.com/300/300/vegetables,scraps?lock=31" },
    { name: "Cỏ tươi mọc hoang", img: "https://loremflickr.com/300/300/grass,farming?lock=32" },
    { name: "Thân ngô, rơm rạ", img: "https://loremflickr.com/300/300/cornstalk,straw?lock=33" },
    { name: "Bã bia phế phẩm", img: "https://loremflickr.com/300/300/brewer,grains?lock=34" },
    { name: "Bã đậu giá rẻ", img: "https://loremflickr.com/300/300/soybean,meal?lock=35" },
    { name: "Sắn, bắp thô", img: "https://loremflickr.com/300/300/cassava,corn?lock=36" },
    { name: "Mọi phụ phẩm khác", img: "https://loremflickr.com/300/300/agricultural,waste?lock=37" }
  ];

  return (
    <SectionWrapper bgType="white">
      <SectionTitle subtitle="Đừng vứt đi bất cứ thứ gì, tất cả đều là tiền!">
        BẤT KỲ NGUYÊN LIỆU NÀO <br/> <span className="text-[#F57F17]">CŨNG BIẾN THÀNH VÀNG!</span>
      </SectionTitle>
      
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {materials.map((item, i) => (
          <RevealOnScroll key={i} delay={i * 60}>
            <IngredientCard name={item.name} img={item.img} />
          </RevealOnScroll>
        ))}
      </div>

      <RevealOnScroll delay={150} className="mt-8 max-w-md mx-auto">
        <Button 
          variant="primary" 
          onClick={() => {
            trackEvent('cta_materials_click');
            onOpenForm();
          }}
          className="bg-gradient-to-r from-[#FF8F00] to-[#E65100] text-white shadow-xl hover:scale-105 border-none font-black text-[16px] py-4 uppercase w-full animate-bounce-slow"
        >
          TÔI MUỐN LẤY CÔNG THỨC Ủ NGAY!
        </Button>
      </RevealOnScroll>
    </SectionWrapper>
  );
}

export function Animals({ onOpenForm }: { onOpenForm: () => void }) {
  const animals = [
    { name: "Trâu", icon: "🐃" },
    { name: "Bò", icon: "🐄" },
    { name: "Dê", icon: "🐐" },
    { name: "Lợn (Heo)", icon: "🐖" },
    { name: "Gà", icon: "🐔" },
    { name: "Vịt", icon: "🦆" },
    { name: "Cá", icon: "🐟" },
    { name: "Tôm", icon: "🦐" },
    { name: "Cua", icon: "🦀" }
  ];

  return (
    <SectionWrapper bgType="green-light">
      <SectionTitle subtitle="Đề kháng như thép - Không lo dịch bệnh">
        VẬT NUÔI NÀO <br/> CŨNG <span className="text-[#D32F2F]">LỚN NHANH NHƯ THỔI!</span>
      </SectionTitle>
      
      <div className="grid grid-cols-3 gap-3 sm:gap-4">
        {animals.map((item, i) => (
          <RevealOnScroll key={i} delay={i * 50}>
            <AnimalCard name={item.name} icon={item.icon} />
          </RevealOnScroll>
        ))}
      </div>

      <RevealOnScroll delay={150} className="mt-8 max-w-md mx-auto">
        <Button 
          variant="secondary" 
          onClick={() => {
            trackEvent('cta_animals_click');
            onOpenForm();
          }}
          className="w-full text-white bg-[#D32F2F] hover:bg-[#B71C1C] font-black text-[16px] py-4 shadow-lg border-2 border-white uppercase"
        >
          XEM TỶ LỆ PHỐI TRỘN CHUẨN XÁC!
        </Button>
      </RevealOnScroll>
    </SectionWrapper>
  );
}
