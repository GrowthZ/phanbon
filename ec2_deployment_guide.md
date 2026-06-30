# Hướng dẫn Deploy Landing Page lên AWS EC2 bằng GitHub Actions (CI/CD)

Tài liệu này hướng dẫn chi tiết cách cấu hình và triển khai tự động Landing Page từ GitHub lên máy chủ AWS EC2 (Hệ điều hành Ubuntu) sử dụng **Nginx** và **GitHub Actions**.

---

## BƯỚC 1: Cấu hình trên máy chủ AWS EC2

### 1. Mở Cổng Security Groups trên AWS Console
Đảm bảo Instance EC2 của bạn được mở các cổng inbound sau:
*   **Port 22 (SSH)**: Cho phép IP của bạn hoặc `0.0.0.0/0` để GitHub Actions kết nối.
*   **Port 80 (HTTP)**: Cho phép `0.0.0.0/0` để người dùng truy cập web.
*   **Port 443 (HTTPS)**: Cho phép `0.0.0.0/0` (sau này nếu cài SSL).

### 2. Cài đặt Nginx trên EC2
SSH vào máy chủ EC2 của bạn và chạy các lệnh sau:
```bash
sudo apt update
sudo apt install -y nginx git rsync
```

### 3. Tạo các thư mục chứa Source Code của 2 nhánh
Dự án của bạn có 2 nhánh:
*   `landing-variant-giat-tit` -> Lưu tại `/var/www/biofarm`
*   `menvisinh2` -> Lưu tại `/var/www/channuoi`

Chạy các lệnh sau trên EC2 để tạo thư mục và phân quyền cho User SSH của bạn (thông thường user mặc định là `ubuntu`):
```bash
# Tạo thư mục
sudo mkdir -p /var/www/biofarm
sudo mkdir -p /var/www/channuoi

# Phân quyền cho user ubuntu để GitHub Actions có quyền ghi file vào đây
sudo chown -R ubuntu:ubuntu /var/www/biofarm
sudo chown -R ubuntu:ubuntu /var/www/channuoi
```

### 4. Cấu hình Nginx
Mở file cấu hình Nginx:
```bash
sudo nano /etc/nginx/sites-available/default
```

Thay thế nội dung file bằng cấu hình dưới đây (điều chỉnh tên miền `your-domain-biofarm.com` và `your-domain-channuoi.com` bằng tên miền/IP thật của bạn):

```nginx
# Nhánh landing-variant-giat-tit (biofarm)
server {
    listen 80;
    server_name biofarm.yourdomain.com; # Thay thế bằng tên miền phụ hoặc IP của bạn

    root /var/www/biofarm;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}

# Nhánh menvisinh2 (channuoi)
server {
    listen 80;
    server_name channuoi.yourdomain.com; # Thay thế bằng tên miền phụ hoặc IP của bạn

    root /var/www/channuoi;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```
> **Mẹo**: Nếu bạn chỉ có 1 Địa chỉ IP và không có tên miền, bạn có thể cấu hình phục vụ trên 2 cổng khác nhau (Ví dụ: `listen 80` cho biofarm và `listen 8080` cho channuoi).

Sau khi lưu cấu hình, kiểm tra lỗi và khởi động lại Nginx:
```bash
sudo nginx -t
sudo systemctl restart nginx
```

---

## BƯỚC 2: Cấu hình SSH Key trên GitHub Actions

Để GitHub Actions có quyền deploy file lên EC2, bạn cần thêm SSH key của EC2 vào GitHub Secrets.

### 1. Lấy mã Private Key (File `.pem`)
Tìm file Key Pair `.pem` bạn dùng để SSH vào EC2 (hoặc tạo một cặp SSH key mới trên EC2 và cấu hình `authorized_keys`).
*   Nội dung của file Private Key bắt đầu bằng `-----BEGIN RSA PRIVATE KEY-----` hoặc `-----BEGIN OPENSSH PRIVATE KEY-----`.

### 2. Cấu hình GitHub Secrets
Truy cập vào Repository của bạn trên GitHub:
1.  Vào mục **Settings** -> **Secrets and variables** -> **Actions**.
2.  Bấm nút **New repository secret**.
3.  Thêm 3 Secrets sau:
    *   `EC2_SSH_KEY`: Dán toàn bộ nội dung của file Private Key `.pem` của bạn vào đây.
    *   `EC2_HOST`: Địa chỉ Public IP hoặc Public DNS của EC2 (Ví dụ: `54.255.xx.xx`).
    *   `EC2_USER`: User truy cập SSH (Mặc định đối với Ubuntu là `ubuntu`).

---

## BƯỚC 3: Cách thức Hoạt động của CI/CD Pipeline

Tôi đã tạo sẵn file cấu hình GitHub Actions tại `.github/workflows/deploy.yml` cho cả 2 nhánh. 

### Quy trình tự động hóa hoạt động như sau:
1.  Khi bạn **Push/Merge** code vào nhánh `landing-variant-giat-tit`, GitHub Actions sẽ tự động:
    *   Tải code xuống môi trường ảo.
    *   Cài đặt Node.js và các thư viện liên quan (`npm ci`).
    *   Build ứng dụng (`npm run build`) tạo ra thư mục tĩnh `dist/`.
    *   Dùng SSH/Rsync đồng bộ thư mục `dist/` đó vào đường dẫn `/var/www/biofarm` trên EC2 của bạn.
2.  Khi bạn **Push/Merge** code vào nhánh `menvisinh2`, quy trình tương tự diễn ra nhưng thư mục đích trên EC2 sẽ là `/var/www/channuoi`.

Bạn không cần thao tác thủ công nữa, chỉ cần `git push` là hệ thống sẽ tự động cập nhật web trong vài chục giây!
