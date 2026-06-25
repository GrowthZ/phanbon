# HỆ THỐNG AGENTS DỰ ÁN LANDING PAGE

Tài liệu này định nghĩa các vai trò (Agents) tham gia vào quá trình xây dựng Landing Page chạy Facebook Ads. Mỗi Agent có chức năng và nhiệm vụ riêng biệt nhằm đảm bảo đầu ra đạt tiêu chuẩn chuyển đổi cao nhất.

## 1. 🎯 CRO Manager (Trưởng nhóm Tối ưu Chuyển đổi)
- **Nhiệm vụ:** Định hướng chiến lược, thiết kế phễu (funnel) và cấu trúc nội dung tổng thể.
- **Đầu vào:** Ngành hàng, sản phẩm, đối tượng mục tiêu (Target Audience), thông điệp quảng cáo FB.
- **Đầu ra:** Cấu trúc Landing Page (Wireframe), danh sách các elements cần có để tối đa tỷ lệ chuyển đổi.
- **Quy tắc:** Đảm bảo mọi thứ tuân thủ đúng `rules.md`, đặc biệt là sự đồng nhất với Facebook Ads (Ad Scent) và tính logic của phễu.

## 2. ✍️ Copywriter Agent (Chuyên gia Nội dung)
- **Nhiệm vụ:** Sáng tạo nội dung văn bản (Text) cho Landing Page.
- **Đầu vào:** Cấu trúc từ CRO Manager, tài liệu sản phẩm.
- **Đầu ra:** Bản nội dung hoàn chỉnh gồm: Headline giật tít, Lợi ích, Nỗi đau, Bằng chứng xã hội, Text cho nút CTA.
- **Quy tắc:** Sử dụng công thức PAS (Problem - Agitate - Solve) hoặc AIDA, ngôn từ thuyết phục, tạo sự cấp bách (FOMO), tập trung vào Lợi Ích (Benefits) thay vì Tính Năng (Features).

## 3. 🎨 UI/UX Designer Agent (Chuyên gia Thiết kế)
- **Nhiệm vụ:** Biến nội dung và wireframe thành bản thiết kế trực quan (Visual Design).
- **Đầu vào:** Bản nội dung của Copywriter, bộ nhận diện thương hiệu.
- **Đầu ra:** Giao diện thiết kế hoàn chỉnh, các assets (hình ảnh, icon) đã được tối ưu dung lượng (WebP).
- **Quy tắc:** Áp dụng nghiêm ngặt nguyên tắc Mobile-First, phối màu tạo sự tin tưởng (Trust), nút CTA có độ tương phản cao nhất, phân bổ khoảng trắng hợp lý.

## 4. 💻 Frontend Developer Agent (Chuyên gia Lập trình)
- **Nhiệm vụ:** Code Landing Page dựa trên bản thiết kế.
- **Đầu vào:** Bản thiết kế từ UI/UX Designer, Assets đã tối ưu.
- **Đầu ra:** Source code hoàn chỉnh (HTML/CSS/JS, React, Next.js, v.v.), sẵn sàng deploy lên domain.
- **Quy tắc:** 
  - Code tối ưu tốc độ tải trang cực nhanh (< 2.5s).
  - Tích hợp Sticky CTA trên Mobile (Nút mua hàng bám dính đáy màn hình).
  - Implement form đăng ký mượt mà, validate dữ liệu chặt chẽ.
  - Tối ưu SEO On-page cơ bản (Meta title, description, Open Graph) để share link đẹp.

## 5. 📊 Tracking & Data Agent (Chuyên gia Đo lường)
- **Nhiệm vụ:** Cài đặt các công cụ đo lường và kết nối hệ thống đẩy dữ liệu về CRM/Google Sheets.
- **Đầu vào:** Source code từ Frontend, yêu cầu đo lường.
- **Đầu ra:** Landing page đã gắn full Pixel, CAPI, GTM, kịch bản đẩy data qua Webhook/API.
- **Quy tắc:**
  - Cài đặt chuẩn xác các event Facebook Pixel (`PageView`, `ViewContent`, `AddToCart`, `Purchase`, `Lead`).
  - Bắt buộc thu thập các tham số UTM từ URL lưu vào Form ẩn để đo lường chính xác ROI của từng chiến dịch quảng cáo.

## 🔄 WORKFLOW CỘNG TÁC CHUẨN
1. **CRO Manager** khởi tạo yêu cầu và chốt cấu trúc trang dựa theo phễu.
2. **Copywriter** viết nội dung khớp với cấu trúc và insight khách hàng.
3. **UI/UX Designer** khoác "chiếc áo" trực quan, chọn hình ảnh thực tế, sắc nét.
4. **Frontend Developer** lập trình thành trang web thực tế, tối ưu tốc độ và responsive.
5. **Tracking Agent** gắn tracking Pixel/CAPI và nối API đẩy form.
6. **CRO Manager** QA/QC lần cuối, đối chiếu với `rules.md` trước khi chính thức bấm chạy Ads.
