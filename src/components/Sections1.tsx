import React from 'react';
import { Placeholder, Button, SectionTitle } from './ui';
import { BRAND } from '../constants';
import { Phone, MessageCircle, CheckCircle2 } from 'lucide-react';

export function Hero({ onOpenForm }: { onOpenForm: () => void }) {
  return (
    <section className="pt-8 pb-10 px-4 bg-gradient-to-b from-green-50 to-white text-center">
      <div className="inline-block border border-green-600 bg-white rounded-full px-5 py-2 mb-4 shadow-sm">
        <span className="text-[14px] font-bold text-green-800 uppercase tracking-wider">
          GIẢI PHÁP CHĂN NUÔI TIẾT KIỆM
        </span>
      </div>
      
      <h1 className="text-[28px] sm:text-[34px] font-black text-gray-900 uppercase leading-[1.25] mb-5">
        RAU CỦ, CÁM BÃ ĐANG BỎ ĐI? <br/>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f97316] to-[#ea580c]">HÃY Ủ THÀNH THỨC ĂN BẰNG MEN VI SINH</span>
      </h1>
      
      <div className="bg-gradient-to-r from-[#166534] to-[#14532d] rounded-2xl px-5 py-4 mb-8 mx-auto inline-block shadow-lg w-full border border-green-800">
        <p className="text-[15px] sm:text-[17px] text-green-50 font-medium leading-relaxed">
          <span className="text-yellow-400 font-black text-[18px] sm:text-[20px] tracking-wide block mb-1">GIẢM CHI PHÍ MUA CÁM ĐÁNG KỂ</span>
          VẬT NUÔI ĂN KHỎE - ÍT BỆNH ĐƯỜNG RUỘT
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-left bg-white p-5 rounded-2xl shadow-sm border border-green-100">
        {[
          "Hoàn toàn từ hệ vi sinh có lợi",
          "Giúp thức ăn thơm ngon, mềm và dễ tiêu hóa",
          "Hỗ trợ giảm mùi hôi chuồng trại",
          "Phù hợp cho gia cầm, gia súc và thủy sản"
        ].map((item, i) => (
          <div key={i} className="flex items-start">
            <div className="bg-gradient-to-r from-[#f97316] to-[#ea580c] w-5 h-5 rounded-full mt-0.5 mr-3 shrink-0 flex items-center justify-center shadow-sm">
              <CheckCircle2 className="w-3 h-3 text-white" />
            </div>
            <span className="text-[15px] text-gray-700 font-medium leading-snug">{item}</span>
          </div>
        ))}
      </div>

      <Placeholder 
        text="[VIDEO DỌC/ẢNH NGƯỜI ĐANG TRỘN NGUYÊN LIỆU TẠI CHUỒNG TRẠI]" 
        className="w-full aspect-square sm:aspect-video mb-8 shadow-xl rounded-2xl overflow-hidden border-4 border-white"
        src="https://loremflickr.com/600/800/vietnam,farmer?lock=1"
        isVideo
      />
      
      <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden mb-8 transform transition-transform hover:scale-[1.02]">
        <div className="bg-gradient-to-r from-[#4ade80] to-[#22c55e] p-5">
           <h3 className="text-white font-black text-[19px] sm:text-[21px] uppercase tracking-wide drop-shadow-sm">Thức ăn sau ủ thơm hơn – Dễ tiêu hóa hơn</h3>
           <p className="text-green-50 font-medium mt-1 text-[15px]">Giúp vật nuôi hấp thu dinh dưỡng tốt hơn</p>
        </div>
        <div className="bg-white p-5 border-b border-gray-100">
           <h3 className="text-gray-900 font-black text-[19px] sm:text-[21px] uppercase tracking-wide">Thức ăn bảo quản được 4 - 6 tháng</h3>
        </div>
        <div className="bg-gradient-to-r from-[#dc2626] to-[#b91c1c] p-5">
           <h3 className="text-white font-black text-[19px] sm:text-[21px] uppercase tracking-wide drop-shadow-sm">Hỗ trợ kỹ thuật đến khi làm được</h3>
        </div>
      </div>

      <div className="space-y-4 mt-8">
        <a href={`tel:${BRAND.hotline}`} className="block">
          <Button variant="primary" className="animate-pulse-slow shadow-xl">
            <Phone className="mr-2 w-6 h-6" /> GỌI KỸ THUẬT VIÊN NGAY
          </Button>
        </a>
        <Button variant="outline" onClick={onOpenForm} className="bg-white">
          ĐỂ LẠI SỐ ĐỂ ĐƯỢC GỌI LẠI
        </Button>
      </div>
    </section>
  );
}

export function Problems() {
  return (
    <section className="py-10 px-4 bg-gray-50 border-t border-gray-100">
      <SectionTitle>NHÀ MÌNH CÓ ĐANG GẶP TÌNH TRẠNG NÀY?</SectionTitle>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
        {[
          "Có nhiều rau, cám bã nhưng không biết tận dụng",
          "Thức ăn tự ủ hay bị chua, mốc hoặc có mùi",
          "Vật nuôi ăn không đều, chậm lớn",
          "Tốn nhiều tiền mua cám công nghiệp",
          "Mất thời gian nấu cám mỗi ngày",
          "Chưa biết cách ủ thế nào cho đúng"
        ].map((item, i) => (
          <div key={i} className="bg-white border border-red-100 p-4 rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.04)] flex items-start">
            <div className="bg-red-50 p-1.5 rounded-full mr-3 shrink-0 mt-0.5 border border-red-100">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            </div>
            <span className="text-[16px] text-gray-800 font-medium leading-snug">{item}</span>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 p-5 rounded-r-2xl mb-6 shadow-sm">
        <p className="text-[16px] text-red-900 font-bold leading-relaxed">
          <span className="text-red-600 font-black uppercase">Lưu ý:</span> Ủ sai tỷ lệ hoặc sai cách có thể làm hỏng cả mẻ thức ăn. Nên được kỹ thuật viên hướng dẫn trước khi làm.
        </p>
      </div>

      <Placeholder 
        text="[ẢNH HOẶC VIDEO NGUYÊN LIỆU BỎ PHÍ, CÁM BÃ, RAU CỦ BỊ HỎNG]" 
        src="https://loremflickr.com/600/400/vegetable,waste?lock=2"
        className="w-full h-52 rounded-2xl shadow-md border-4 border-white" 
      />
    </section>
  );
}

export function Materials() {
  return (
    <section className="py-12 px-4 bg-white">
      <SectionTitle subtitle="Các loại nguyên liệu sẵn có, chi phí thấp có thể dùng ngay">
        NGUYÊN LIỆU CÓ THỂ TẬN DỤNG
      </SectionTitle>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
        {[
          { text: "Rau củ thừa", src: "https://loremflickr.com/300/300/vegetable,scraps?lock=3" },
          { text: "Cám gạo, cám bã", src: "https://loremflickr.com/300/300/rice,bran?lock=4" },
          { text: "Bã đậu", src: "https://loremflickr.com/300/300/soybean,meal?lock=5" },
          { text: "Thân ngô", src: "https://loremflickr.com/300/300/corn,stalk?lock=6" },
          { text: "Bèo, rau xanh", src: "https://loremflickr.com/300/300/water,hyacinth?lock=7" },
          { text: "Phụ phẩm khác", src: "https://loremflickr.com/300/300/agricultural,waste?lock=8" }
        ].map((item, i) => (
          <div key={i} className="flex flex-col items-center group">
            <div className="w-full aspect-square rounded-2xl overflow-hidden shadow-sm mb-3 border-2 border-gray-100 group-hover:border-green-400 transition-colors">
              <Placeholder text={`[ẢNH ${item.text.toUpperCase()}]`} src={item.src} className="w-full h-full border-none rounded-none" />
            </div>
            <span className="font-bold text-gray-800 text-[15px]">{item.text}</span>
          </div>
        ))}
      </div>

      <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4 mb-6">
        <p className="text-[15px] text-blue-900 font-medium text-center italic leading-relaxed">
          "Không phải nguyên liệu nào cũng ủ giống nhau. Cần xác định đúng nguyên liệu trước khi bắt đầu."
        </p>
      </div>

      <a href={`https://zalo.me/${BRAND.zalo}`} target="_blank" rel="noreferrer" className="block">
        <Button variant="secondary" className="shadow-lg">
          <MessageCircle className="mr-2 w-6 h-6" /> GỬI ẢNH ĐỂ ĐƯỢC TƯ VẤN
        </Button>
      </a>
    </section>
  );
}

export function ProductIntro({ onOpenForm }: { onOpenForm: () => void }) {
  return (
    <section className="py-12 px-4 bg-gray-50 border-t border-gray-100">
      <SectionTitle>GIẢI PHÁP TỪ {BRAND.name}</SectionTitle>
      
      <div className="bg-gradient-to-br from-[#f0fdf4] to-white rounded-3xl p-6 shadow-lg border border-green-200">
        <div className="bg-white p-2 rounded-2xl shadow-sm mb-6">
          <Placeholder 
            text="[ẢNH SẢN PHẨM THẬT TRÊN TAY]" 
            src="https://loremflickr.com/600/600/product,packaging?lock=99" 
            className="w-full aspect-square rounded-xl border-none" 
          />
        </div>
        
        <h3 className="text-[22px] sm:text-[24px] font-black text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-green-900 uppercase mb-5 leading-tight">
          MEN VI SINH CHUYÊN DỤNG Ủ THỨC ĂN
        </h3>
        
        <ul className="space-y-4 mb-8">
          {[
            <><span className="font-black text-gray-900 block mb-0.5 text-[16px]">Dạng sản phẩm</span> <span className="text-gray-600">Dạng bột dễ phối trộn, tiện lợi bảo quản.</span></>,
            <><span className="font-black text-gray-900 block mb-0.5 text-[16px]">Quy cách</span> <span className="text-gray-600">Đóng gói theo tiêu chuẩn, phù hợp cho mọi quy mô nuôi.</span></>,
            <><span className="font-black text-gray-900 block mb-0.5 text-[16px]">Liều lượng</span> <span className="text-gray-600">1 gói ủ được khối lượng lớn nguyên liệu (có hướng dẫn cụ thể).</span></>,
            <><span className="font-black text-gray-900 block mb-0.5 text-[16px]">Độ an toàn</span> <span className="text-gray-600">Lành tính, an toàn cho tay người trộn và hệ tiêu hóa vật nuôi.</span></>
          ].map((item, i) => (
            <li key={i} className="flex items-start text-[15px] bg-white p-3 rounded-xl border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
              <div className="bg-green-100 p-1.5 rounded-full mr-3 shrink-0 mt-0.5">
                <CheckCircle2 className="w-4 h-4 text-green-700" />
              </div>
              <div className="leading-snug">{item}</div>
            </li>
          ))}
        </ul>
        
        <Button variant="primary" onClick={onOpenForm} className="shadow-xl">
          NHẬN BÁO GIÁ & TƯ VẤN
        </Button>
      </div>
    </section>
  );
}

export function Benefits() {
  const benefits = [
    "Tận dụng ngô, cám, bã đậu, rau xanh và phụ phẩm làm thức ăn.",
    "Giảm đáng kể chi phí mua cám công nghiệp.",
    "Thức ăn sau lên men thơm, mềm và dễ tiêu hóa.",
    "Hỗ trợ cân bằng hệ vi sinh đường ruột, vật nuôi ăn khỏe.",
    "Góp phần giảm hiện tượng tiêu chảy, rối loạn tiêu hóa.",
    "Hạn chế mùi hôi từ thức ăn và chất thải chăn nuôi.",
    "Thức ăn ủ có thể bảo quản từ 4-6 tháng.",
    "Giảm công nấu cám, tiết kiệm thời gian chuẩn bị.",
    "Phù hợp cho gà, vịt, lợn, bò, dê, cá, tôm...",
    "Một bộ nguyên liệu gốc ủ được số lượng lớn thức ăn."
  ];

  return (
    <section className="py-12 px-4 bg-gradient-to-b from-[#14532d] to-[#166534] text-white">
      <div className="text-center mb-8">
        <h2 className="text-[26px] sm:text-[30px] font-black uppercase leading-[1.2] mb-3">
          TẠI SAO NGÀY CÀNG NHIỀU HỘ <br/> <span className="text-[#facc15]">CHỌN MEN VI SINH?</span>
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-[#facc15] to-[#ca8a04] mx-auto rounded-full"></div>
      </div>

      <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-5 border border-white/20">
        <div className="space-y-0">
          {benefits.map((item, i) => (
            <div key={i} className="flex items-start py-3.5 border-b border-white/10 last:border-0">
              <div className="bg-[#facc15] rounded-full p-[3px] mt-0.5 mr-3.5 shrink-0 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-green-900" />
              </div>
              <span className="text-[16px] font-medium text-green-50 leading-snug">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
