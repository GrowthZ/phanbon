# Hướng dẫn Cấu hình Google Sheets & Apps Script

Tài liệu này hướng dẫn cách cấu hình Google Sheet để tự động nhận và lưu dữ liệu đăng ký tư vấn từ Landing Page của hai nhánh (`biofarm` và `channuoi`).

---

## 1. Mã Nguồn Google Apps Script
Bà con truy cập vào Google Sheet muốn lưu dữ liệu, chọn **Tiện ích mở rộng (Extensions)** -> **Apps Script**, xóa hết mã hiện tại và dán đoạn code dưới đây vào:

```javascript
function doGet(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000); // Đợi tối đa 10 giây nếu có nhiều luồng cùng gửi dữ liệu
  
  try {
    var name = e.parameter.name || "";
    var phone = e.parameter.phone || "";
    var province = e.parameter.province || "";
    var notes = e.parameter.notes || "";
    var sheetName = e.parameter.sheetName || "biofarm"; // Sheet mặc định
    var branchName = e.parameter.branch || "";
    
    var doc = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = doc.getSheetByName(sheetName);
    
    // Nếu sheet chưa tồn tại, tự động tạo mới và thêm dòng tiêu đề
    if (!sheet) {
      sheet = doc.insertSheet(sheetName);
      sheet.appendRow(["Thời gian", "Họ tên", "Số điện thoại", "Tỉnh thành", "Ghi chú", "Chi nhánh"]);
      // Định dạng dòng tiêu đề in đậm
      sheet.getRange(1, 1, 1, 6).setFontWeight("bold");
    }
    
    var timestamp = new Date();
    sheet.appendRow([timestamp, name, phone, province, notes, branchName]);
    
    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      message: "Lead recorded successfully"
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}
```

---

## 2. Các Bước Triển Khai (Deploy) trên Google Apps Script

1. **Lưu dự án**: Nhấn nút biểu tượng **Lưu (Save)** (hình đĩa mềm) hoặc tổ hợp phím `Ctrl + S`.
2. **Triển khai ứng dụng Web**:
   - Nhấn nút **Triển khai (Deploy)** ở góc trên bên phải -> Chọn **Triển khai mới (New deployment)**.
   - Nhấp vào biểu tượng bánh răng cài đặt ở dòng "Chọn loại (Select type)" -> Chọn **Ứng dụng web (Web app)**.
   - Cấu hình các thông số như sau:
     - **Mô tả (Description)**: Điền bất kỳ (Ví dụ: `Landing Page API`).
     - **Thực thi dưới dạng (Execute as)**: Chọn **Tôi (Me - Địa chỉ email của bạn)**.
     - **Ai có quyền truy cập (Who has access)**: Chọn **Bất kỳ ai (Anyone)** *(Lưu ý: Bắt buộc chọn cái này để landing page gửi dữ liệu thành công)*.
   - Nhấn nút **Triển khai (Deploy)**.
3. **Cấp quyền truy cập (Ủy quyền)**:
   - Một hộp thoại yêu cầu cấp quyền xuất hiện, chọn **Cấp quyền truy cập (Authorize access)**.
   - Chọn tài khoản Google của bạn.
   - Nhấp vào **Nâng cao (Advanced)** ở góc dưới bên trái -> Nhấp tiếp vào **Đi tới [Tên dự án của bạn] (không an toàn)**.
   - Nhấn **Cho phép (Allow)**.
4. **Copy URL**: Sau khi deploy thành công, sao chép địa chỉ **URL của ứng dụng web** (Web app URL) hiển thị trên màn hình. URL này có dạng:
   `https://script.google.com/macros/s/XXXXX/exec`

---

## 3. Cấu hình trên Hosting (Vercel / Netlify)

Dán URL ứng dụng Web vừa sao chép ở trên vào biến môi trường:
- Tên biến: `VITE_APPSCRIPT_URL`
- Giá trị biến: Đường dẫn URL ứng dụng web đã copy.

Sau đó, tiến hành redeploy lại cả 2 nhánh trên Vercel và Netlify để kích hoạt cấu hình này.
- Nhánh **main** (hoặc `landing-variant-giat-tit` nếu trỏ thủ công) trỏ về Vercel -> Dữ liệu đăng ký sẽ tự động đẩy vào sheet **`biofarm`**.
- Nhánh **`menvisinh2`** trỏ về Netlify -> Dữ liệu đăng ký sẽ tự động đẩy vào sheet **`channuoi`**.
