import React from 'react';
import { Placeholder, Button, SectionTitle, SectionWrapper, RevealOnScroll, ProductPackageCard, IngredientCard, AnimalCard } from './ui';
import { BRAND, trackEvent } from '../constants';
import { ShoppingBag, CheckCircle } from 'lucide-react';

export function ProductKit({ onOpenForm }: { onOpenForm: (type?: string) => void }) {
  const handlePackageClick = (pkgType: string) => {
    trackEvent('package_click', { package: pkgType });
    onOpenForm(pkgType);
  };

  const inclusions = [
    "1 can rỉ mật 5kg hoặc 10kg",
    "2 gói nguyên liệu gốc tạo men",
    "Công thức ủ theo từng nhóm vật nuôi",
    "Video hướng dẫn chi tiết",
    "Hỗ trợ kỹ thuật qua Zalo/điện thoại",
    "Giao hàng toàn quốc"
  ];

  return (
    <SectionWrapper bgType="gray">
      <SectionTitle subtitle="Trọn bộ men vi sinh và hướng dẫn chi tiết">BỘ SẢN PHẨM GỒM NHỮNG GÌ?</SectionTitle>
      
      <RevealOnScroll className="bg-white rounded-3xl p-5 sm:p-6 shadow-sm border border-[#DDEEDC] mb-8">
        <ul className="space-y-3 mb-6">
          {inclusions.map((item, i) => (
            <li key={i} className="flex items-center text-[15px] text-[#4B5563] font-semibold">
              <CheckCircle className="w-5 h-5 text-[#2E7D32] mr-3 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <Placeholder text="Trọn bộ Men Nhà Nông" className="w-full max-w-md mx-auto aspect-square rounded-xl shadow-sm border border-gray-100" src="/images/anh-san-pham2.jpeg" />
      </RevealOnScroll>

      <RevealOnScroll className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-100/60 rounded-3xl p-5 mb-8 shadow-sm flex flex-col items-center">
        <div className="flex items-center gap-2 mb-3">
          <span className="relative flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-red-500"></span>
          </span>
          <span className="text-[13px] sm:text-[14px] text-red-700 font-extrabold uppercase tracking-wide text-center">
            🔥 ƯU ĐÃI KHAN HIẾM: CHỈ CÒN LẠI 7 BỘ CÓ GIÁ KHUYẾN MÃI HÔM NAY!
          </span>
        </div>
        <div className="w-full bg-gray-200/80 rounded-full h-3 overflow-hidden mb-2 relative">
          <div 
            className="bg-gradient-to-r from-red-500 to-orange-500 h-full rounded-full transition-all duration-1000 ease-out"
            style={{ width: '93%' }}
          />
        </div>
        <div className="flex justify-between w-full text-[11px] sm:text-[12px] text-gray-500 font-bold">
          <span>Đã bán: 93 bộ (93%)</span>
          <span className="text-red-600 animate-pulse">Còn lại: 7 bộ cuối cùng</span>
        </div>
      </RevealOnScroll>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <RevealOnScroll delay={100}>
          <ProductPackageCard 
            title="BỘ Ủ 5KG" 
            desc="Phù hợp hộ chăn nuôi nhỏ, dùng thử, hoặc ủ lượng thức ăn vừa phải cho gia đình." 
            onBtnClick={() => handlePackageClick('5kg')} 
          />
        </RevealOnScroll>

        <RevealOnScroll delay={200}>
          <ProductPackageCard 
            title="BỘ Ủ 10KG" 
            desc="Phù hợp hộ nuôi nhiều, trang trại nhỏ/vừa, đại lý hoặc có nhu cầu ủ liên tục số lượng lớn." 
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
    { name: "Rau củ quả", img: "/images/vegetable_scraps.png" },
    { name: "Cỏ tươi", img: "/images/wild_grass.png" },
    { name: "Thân ngô, rơm rạ", img: "/images/cornstalk_straw.png" },
    { name: "Bã bia", img: "/images/spent_grains.png" },
    { name: "Bã đậu", img: "/images/soybean_dregs.png" },
    { name: "Sắn, bắp", img: "/images/cassava_corn.png" },
    { name: "Phụ phẩm khác", img: "/images/farm_byproducts.png" }
  ];

  return (
    <SectionWrapper bgType="white">
      <SectionTitle subtitle="Giải quyết triệt để phụ phẩm dư thừa xung quanh">Ủ ĐƯỢC NHỮNG NGUYÊN LIỆU NÀO?</SectionTitle>
      
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
        >
          Nhận công thức ủ nguyên liệu miễn phí
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
    { name: "Lợn", img: "/images/vietnamese_pig.png" },
    { name: "Gà", img: "/images/vietnamese_chicken.png" },
    { name: "Vịt", img: "/images/vietnamese_duck.png" },
    { name: "Cá", img: "/images/vietnamese_fish.png" },
    { name: "Tôm", img: "/images/vietnamese_shrimp.png" },
    { name: "Cua", img: "/images/vietnamese_crab.png" }
  ];

  return (
    <SectionWrapper bgType="green-light">
      <SectionTitle subtitle="Đa dạng công thức ủ cho các nhóm vật nuôi khác nhau">DÙNG CHO VẬT NUÔI NÀO?</SectionTitle>
      
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
        >
          Nhận tỷ lệ phối trộn cho vật nuôi của tôi
        </Button>
      </RevealOnScroll>
    </SectionWrapper>
  );
}
