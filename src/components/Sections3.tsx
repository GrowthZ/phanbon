import React, { useState } from 'react';
import { Placeholder, Button, SectionTitle } from './ui';
import { BRAND } from '../constants';
import { Phone, MessageCircle, ChevronDown, ChevronUp, ThumbsUp, MessageSquare, Share2 } from 'lucide-react';

export function Technician({ onOpenForm }: { onOpenForm: () => void }) {
  return (
    <section className="py-12 px-4 bg-gradient-to-b from-green-900 to-green-950 text-white border-t-4 border-orange-500">
      <div className="bg-white/5 border border-white/10 rounded-3xl p-5 backdrop-blur-sm shadow-2xl">
        <Placeholder text="[ẢNH KỸ THUẬT VIÊN ĐANG TƯ VẤN/TẠI TRẠI]" src="https://loremflickr.com/600/400/vietnamese,agronomist?lock=22" className="w-full h-64 mb-6 rounded-2xl border-2 border-white/20 shadow-md text-gray-800 bg-gray-100" />
        
        <h2 className="text-[24px] sm:text-[28px] font-black uppercase leading-tight mb-4 text-white text-center">
          CÓ KỸ THUẬT VIÊN <span className="text-yellow-400">HƯỚNG DẪN TRỰC TIẾP</span>
        </h2>
        
        <p className="text-[16px] sm:text-[18px] text-green-100 font-medium mb-8 leading-relaxed text-center">
          Gọi hoặc nhắn Zalo để được hướng dẫn theo loại vật nuôi, số lượng đàn và nguyên liệu nhà mình đang có.
        </p>

        <div className="space-y-4">
          <a href={`tel:${BRAND.hotline}`} className="block">
            <Button variant="primary" className="shadow-lg border-orange-400">
              <Phone className="mr-2 w-6 h-6" /> GỌI KỸ THUẬT VIÊN
            </Button>
          </a>
          <a href={`https://zalo.me/${BRAND.zalo}`} target="_blank" rel="noreferrer" className="block">
            <Button className="bg-[#0068ff] text-white shadow-lg hover:bg-[#0052cc] border border-[#0052cc]">
              <MessageCircle className="mr-2 w-6 h-6" /> NHẮN ZALO GỬI ẢNH NGUYÊN LIỆU
            </Button>
          </a>
          <Button onClick={onOpenForm} className="bg-white text-green-900 shadow-lg hover:bg-gray-100 border border-gray-200">
            ĐỂ LẠI SỐ ĐỂ ĐƯỢC GỌI LẠI
          </Button>
        </div>
      </div>
    </section>
  );
}

export function Reviews() {
  const reviews = [
    {
      name: "Luân Nguyễn",
      time: "58 phút trước",
      rating: 5,
      content: "Heo nhà tôi ăn thức ăn ủ chín tăng trọng nhanh hơn, ít bị tiêu chảy. Giảm được khối tiền cám luôn",
      img: "https://loremflickr.com/400/300/pigs,eating?lock=230",
      avatar: "https://loremflickr.com/100/100/vietnamese,man?lock=100",
      likes: 4
    },
    {
      name: "Minh Phụng",
      time: "10 phút trước",
      rating: 5,
      content: "Đúng là giảm chi phí thật. Tôi nuôi quy mô nhỏ mà tiết kiệm gần 2/3 tiền cám mỗi tháng. Bà con nên thử.",
      avatar: "https://loremflickr.com/100/100/vietnamese,woman?lock=101",
      likes: 10
    },
    {
      name: "Linh Nguyễn",
      time: "1 ngày trước",
      rating: 5,
      content: "Giá cám tăng quá trời, từ ngày biết men này đỡ được kha khá. Tôi tận dụng được bã đậu của nhà máy gần đây, tiết kiệm nhiều lắm",
      img: "https://loremflickr.com/400/300/fermented,feed?lock=231",
      avatar: "https://loremflickr.com/100/100/vietnamese,aunt?lock=102",
      likes: 2
    },
    {
      name: "Uyên Chi",
      time: "20 phút trước",
      rating: 5,
      content: "Mua 2 bộ về ủ cho đàn gà hơn 200 con. Thịt săn chắc, gà ít bệnh đường ruột hơn. Ủ xong màu vàng đẹp, thơm nhẹ.",
      avatar: "https://loremflickr.com/100/100/vietnamese,family?lock=103",
      likes: 2
    },
    {
      name: "Tuấn Nguyễn",
      time: "10 phút trước",
      rating: 5,
      content: "Dùng men này hơn 4 tháng rồi, ủ cái gì cũng được. Tôi chủ yếu ủ thân ngô với cỏ voi, cho dê ăn rất hợp.",
      avatar: "https://loremflickr.com/100/100/vietnamese,uncle?lock=104",
      likes: 2
    }
  ];

  return (
    <section className="py-10 px-4 bg-gray-50 border-t border-gray-100">
      <div className="bg-white rounded-3xl shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-gray-100 p-4 sm:p-6 max-w-2xl mx-auto">
        <div className="flex items-center justify-between border-b border-gray-100 pb-3 mb-5">
          <span className="font-black text-gray-900 text-[18px]">1976 Bình luận</span>
          <div className="flex items-center text-[14px] text-gray-500 font-medium">
            <span>Sắp xếp theo</span>
            <select className="ml-2 bg-gray-50 border border-gray-200 rounded-lg px-2 py-1 outline-none text-gray-800 font-bold focus:ring-2 focus:ring-green-500">
              <option>Hàng đầu</option>
              <option>Mới nhất</option>
            </select>
          </div>
        </div>
        
        <div className="space-y-6">
          {reviews.map((review, i) => (
            <div key={i} className="flex gap-3">
              <img src={review.avatar} alt={review.name} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover shrink-0 border border-gray-200 shadow-sm" />
              <div className="flex-1">
                <div className="bg-[#f0f2f5] rounded-[18px] p-3 sm:px-4 sm:py-3 inline-block min-w-[80%] max-w-full">
                  <h4 className="font-bold text-[15px] text-[#050505]">{review.name}</h4>
                  <div className="flex text-[#f5c332] my-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <svg key={i} className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    ))}
                  </div>
                  <p className="text-[15px] text-[#050505] mt-1 leading-[1.4]">{review.content}</p>
                </div>
                {review.img && (
                  <img src={review.img} className="mt-2 rounded-2xl max-h-56 object-cover w-[85%] border border-gray-200 shadow-sm" alt="Review image" />
                )}
                <div className="flex items-center gap-4 mt-2.5 text-[13px] text-gray-500 font-bold px-3">
                  <button className="hover:underline">Thích</button>
                  <button className="hover:underline">Phản hồi</button>
                  <div className="flex items-center gap-1.5 text-gray-600">
                    <div className="bg-[#0866ff] rounded-full p-1">
                      <ThumbsUp className="w-3 h-3 text-white" />
                    </div>
                    <span>{review.likes}</span>
                  </div>
                  <span className="text-gray-400 font-normal">{review.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LeadForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-12 px-4 bg-white" id="lead-form-section">
      <div className="text-center mb-8 relative">
        <h2 className="text-[28px] font-black text-gray-900 uppercase leading-tight">
          NHẬN ƯU ĐÃI <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">GIẢM 30%</span>
        </h2>
        <div className="inline-block bg-red-100 text-red-700 font-black px-4 py-1 rounded-full mt-2 text-[15px] uppercase shadow-sm">
          DUY NHẤT HÔM NAY
        </div>
      </div>

      <div className="bg-gradient-to-b from-[#166534] to-[#14532d] rounded-3xl p-6 sm:p-8 shadow-2xl border-[6px] border-green-50 max-w-lg mx-auto relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-orange-500/20 rounded-full blur-3xl"></div>
        
        <div className="text-center mb-6 relative z-10">
          <h3 className="text-[22px] font-black text-[#facc15] uppercase tracking-wide drop-shadow-sm">
            NHẬN TƯ VẤN KỸ THUẬT MIỄN PHÍ
          </h3>
          <p className="text-[15px] text-green-50 mt-2 font-medium">
            Để lại thông tin, đội ngũ Kỹ thuật sẽ liên hệ hướng dẫn trực tiếp!
          </p>
        </div>
        
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
            <div>
              <input 
                type="text" 
                required 
                placeholder="Họ và Tên"
                className="w-full px-5 py-4 rounded-xl border-2 border-green-700 bg-white/95 focus:bg-white focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/20 focus:outline-none text-[16px] font-medium transition-all shadow-sm" 
              />
            </div>
            
            <div>
              <input 
                type="tel" 
                required 
                placeholder="Số điện thoại"
                className="w-full px-5 py-4 rounded-xl border-2 border-green-700 bg-white/95 focus:bg-white focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/20 focus:outline-none text-[16px] font-medium transition-all shadow-sm" 
              />
            </div>

            <div>
              <input 
                type="text" 
                placeholder="Địa chỉ (Không bắt buộc)"
                className="w-full px-5 py-4 rounded-xl border-2 border-green-700 bg-white/95 focus:bg-white focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/20 focus:outline-none text-[16px] font-medium transition-all shadow-sm" 
              />
            </div>

            <div className="text-center pt-3 pb-3">
              <p className="text-[14px] text-green-100/80 leading-relaxed italic">
                Hơn <strong className="text-yellow-300">1500+</strong> hộ chăn nuôi đã áp dụng thành công phương pháp ủ thức ăn.
              </p>
            </div>

            <button type="submit" className="w-full bg-gradient-to-r from-[#f97316] to-[#ea580c] text-white font-black text-[20px] py-4 rounded-xl shadow-lg border border-orange-400 uppercase tracking-wide active:scale-95 transition-all hover:shadow-orange-600/40">
              NHẬN TƯ VẤN NGAY
            </button>
          </form>
        ) : (
          <div className="text-center py-8 bg-black/20 rounded-2xl border border-white/10 backdrop-blur-sm relative z-10">
            <div className="w-20 h-20 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-5 shadow-lg border-4 border-white/20">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-[24px] font-black text-white mb-2 uppercase tracking-wide">ĐÃ GỬI THÀNH CÔNG!</h3>
            <p className="text-[16px] text-green-50 font-medium px-4">
              Cảm ơn bác/anh/chị. Kỹ thuật viên sẽ liên hệ lại qua số điện thoại vừa đăng ký.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export function FAQ() {
  const faqs = [
    { q: "Men này dùng được cho loại vật nuôi nào?", a: "Sản phẩm hỗ trợ tốt cho quy trình ủ thức ăn của các loài vật nuôi phổ biến như heo, gà, vịt, bò, dê và cá." },
    { q: "Có thể ủ những nguyên liệu nào?", a: "Các nguyên liệu phổ biến như cám gạo, cám bắp, bã đậu, rau củ thừa, thân chuối, thân ngô và các phụ phẩm nông nghiệp tại địa phương." },
    { q: "Tôi chưa từng ủ thức ăn có được hướng dẫn không?", a: "Có. Đội ngũ kỹ thuật viên sẽ gọi điện thoại hoặc nhắn Zalo để hướng dẫn từng bước từ khâu chuẩn bị đến khi thành phẩm." },
    { q: "Hộ nuôi ít có dùng được không?", a: "Hoàn toàn dùng được. Kỹ thuật viên sẽ hướng dẫn tỷ lệ pha trộn phù hợp với số lượng đàn nhỏ lẻ trong gia đình." },
    { q: "Sau khi ủ có thể bảo quản trong bao lâu?", a: "Tùy thuộc vào loại nguyên liệu và điều kiện bảo quản (đậy kín, tránh nắng trực tiếp). Kỹ thuật viên sẽ tư vấn thời gian cụ thể cho từng mẻ ủ." },
    { q: "Có thể gửi ảnh nguyên liệu qua Zalo để hỏi không?", a: "Rất khuyến khích. Bác/anh/chị có thể chụp ảnh nguyên liệu đang có gửi qua Zalo để kỹ thuật viên nhìn trực tiếp và đưa ra tỷ lệ chính xác nhất." }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-12 px-4 bg-[#fdfbf7]">
      <SectionTitle>CÂU HỎI THƯỜNG GẶP</SectionTitle>
      
      <div className="space-y-3 max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className={`bg-white border transition-all duration-300 rounded-2xl overflow-hidden ${openIndex === index ? 'border-green-500 shadow-md ring-1 ring-green-500' : 'border-gray-200 shadow-sm hover:border-green-300'}`}>
            <button 
              className="w-full flex justify-between items-center p-5 text-left focus:outline-none"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className={`text-[16px] font-bold pr-4 transition-colors ${openIndex === index ? 'text-green-700' : 'text-gray-800'}`}>{faq.q}</span>
              <div className={`p-1.5 rounded-full transition-colors ${openIndex === index ? 'bg-green-100' : 'bg-gray-50'}`}>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-green-700 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                )}
              </div>
            </button>
            
            <div 
              className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}
            >
              <div className="p-5 pt-0 text-[15px] text-gray-600 font-medium bg-white leading-relaxed">
                <div className="border-t border-gray-100 pt-4">
                  {faq.a}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
