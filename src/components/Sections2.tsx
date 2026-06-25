import React from 'react';
import { Placeholder, Button, SectionTitle, SectionWrapper, RevealOnScroll, ProductPackageCard, IngredientCard, AnimalCard } from './ui';
import { BRAND, trackEvent } from '../constants';
import { ShoppingBag, CheckCircle } from 'lucide-react';

export function ProductKit({ onOpenForm }: { onOpenForm: () => void }) {
  const handlePackageClick = (pkgType: string) => {
    trackEvent('package_click', { package: pkgType });
    onOpenForm();
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
        <Placeholder text="Trọn bộ Men Nhà Nông" className="w-full aspect-video rounded-xl shadow-sm border border-gray-100" src="/images/product_kit.png" />
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
    { name: "Cám, bã cám", img: "https://loremflickr.com/300/300/bran,rice?lock=30" },
    { name: "Rau củ quả", img: "https://loremflickr.com/300/300/vegetables,scraps?lock=31" },
    { name: "Cỏ tươi", img: "https://loremflickr.com/300/300/grass,farming?lock=32" },
    { name: "Thân ngô, rơm rạ", img: "https://loremflickr.com/300/300/cornstalk,straw?lock=33" },
    { name: "Bã bia", img: "https://loremflickr.com/300/300/brewer,grains?lock=34" },
    { name: "Bã đậu", img: "https://loremflickr.com/300/300/soybean,meal?lock=35" },
    { name: "Sắn, bắp", img: "https://loremflickr.com/300/300/cassava,corn?lock=36" },
    { name: "Phụ phẩm khác", img: "https://loremflickr.com/300/300/agricultural,waste?lock=37" }
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
    { name: "Trâu", icon: "🐃" },
    { name: "Bò", icon: "🐄" },
    { name: "Dê", icon: "🐐" },
    { name: "Lợn", icon: "🐖" },
    { name: "Gà", icon: "🐔" },
    { name: "Vịt", icon: "🦆" },
    { name: "Cá", icon: "🐟" },
    { name: "Tôm", icon: "🦐" },
    { name: "Cua", icon: "🦀" }
  ];

  return (
    <SectionWrapper bgType="green-light">
      <SectionTitle subtitle="Đa dạng công thức ủ cho các nhóm vật nuôi khác nhau">DÙNG CHO VẬT NUÔI NÀO?</SectionTitle>
      
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
        >
          Nhận tỷ lệ phối trộn cho vật nuôi của tôi
        </Button>
      </RevealOnScroll>
    </SectionWrapper>
  );
}
