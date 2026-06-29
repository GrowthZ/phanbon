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
        <span className="text-[#D32F2F]">ƯU ĐÃI KHỦNG ĐẾN NỬA ĐÊM</span>
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
        <Placeholder text="Trọn bộ Men Nhà Nông" className="w-full max-w-md mx-auto aspect-square rounded-xl shadow-md border-2 border-[#FF9800]/20" src="/images/anh-san-pham2.jpeg" />
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
    { name: "Cám, bã cám", img: "/images/rice_bran.png" },
    { name: "Rau củ quả vứt đi", img: "/images/vegetable_scraps.png" },
    { name: "Cỏ tươi mọc hoang", img: "/images/wild_grass.png" },
    { name: "Thân ngô, rơm rạ", img: "/images/cornstalk_straw.png" },
    { name: "Bã bia phế phẩm", img: "/images/spent_grains.png" },
    { name: "Bã đậu giá rẻ", img: "/images/soybean_dregs.png" },
    { name: "Sắn, bắp thô", img: "/images/cassava_corn.png" },
    { name: "Mọi phụ phẩm khác", img: "/images/farm_byproducts.png" }
  ];

  return (
    <SectionWrapper bgType="white">
      <SectionTitle subtitle="Đừng vứt đi bất cứ thứ gì, tất cả đều là tiền!">
        BẤT KỲ NGUYÊN LIỆU NÀO <br /> <span className="text-[#F57F17]">CŨNG BIẾN THÀNH VÀNG!</span>
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
    { name: "Trâu", img: "/images/vietnamese_buffalo.png" },
    { name: "Bò", img: "/images/vietnamese_cow.png" },
    { name: "Dê", img: "/images/vietnamese_goat.png" },
    { name: "Lợn (Heo)", img: "/images/vietnamese_pig.png" },
    { name: "Gà", img: "/images/vietnamese_chicken.png" },
    { name: "Vịt", img: "/images/vietnamese_duck.png" },
    { name: "Cá", img: "/images/vietnamese_fish.png" },
    { name: "Tôm", img: "/images/vietnamese_shrimp.png" },
    { name: "Cua", img: "/images/vietnamese_crab.png" }
  ];

  return (
    <SectionWrapper bgType="green-light">
      <SectionTitle subtitle="Đề kháng như thép - Không lo dịch bệnh">
        VẬT NUÔI NÀO <br /> CŨNG <span className="text-[#D32F2F]">LỚN NHANH NHƯ THỔI!</span>
      </SectionTitle>

      <div className="grid grid-cols-3 gap-3 sm:gap-4">
        {animals.map((item, i) => (
          <RevealOnScroll key={i} delay={i * 50}>
            <AnimalCard name={item.name} img={item.img} />
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
