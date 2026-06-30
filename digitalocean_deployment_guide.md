# Hướng dẫn Deploy Landing Page lên DigitalOcean Droplet bằng GitHub Actions (CI/CD)

Tài liệu này hướng dẫn chi tiết cách cấu hình và triển khai tự động Landing Page từ GitHub lên máy chủ **DigitalOcean Droplet** (Hệ điều hành Ubuntu) sử dụng **Nginx** và **GitHub Actions**.

---

## BƯỚC 1: Cấu hình trên Droplet của bạn (IP: `209.97.165.66`)

### 1. Cấu hình Firewall trên DigitalOcean Console hoặc UFW
Đảm bảo Droplet của bạn cho phép truy cập các cổng:
*   **Port 22 (SSH)**: Cổng truy cập từ xa.
*   **Port 80 (HTTP)**: Cổng web thông thường.
*   **Port 443 (HTTPS)**: Cổng web bảo mật.

Nếu dùng UFW (Firewall mặc định của Ubuntu), hãy chạy:
```bash
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw enable
```

### 2. Cài đặt Nginx trên Droplet
Chạy các lệnh sau:
```bash
sudo apt update
sudo apt install -y nginx rsync
```

### 3. Tạo thư mục chứa Code và Phân quyền
Dự án có 2 nhánh sẽ lưu tại:
*   `landing-variant-giat-tit` -> Lưu tại `/var/www/biofarm`
*   `menvisinh2` -> Lưu tại `/var/www/channuoi`

Chạy các lệnh tạo thư mục và cấp quyền cho User SSH của bạn (thường là `root` nếu bạn dùng SSH mặc định của DigitalOcean, hoặc user khác nếu bạn đã tạo):
```bash
# Tạo thư mục
sudo mkdir -p /var/www/biofarm
sudo mkdir -p /var/www/channuoi

# Cấp quyền ghi cho user (Ví dụ nếu dùng user 'root')
sudo chown -R root:root /var/www/biofarm
sudo chown -R root:root /var/www/channuoi
```
*(Nếu bạn tạo user khác thay thế root, hãy thay `root:root` bằng `user_cua_ban:user_cua_ban`).*

### 4. Cấu hình Nginx
Mở file cấu hình default của Nginx:
```bash
sudo nano /etc/nginx/sites-available/default
```

Thay thế nội dung bằng cấu hình sau:

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
*Lưu ý: Nếu chưa có tên miền riêng trỏ về IP `209.97.165.66`, bạn có thể cấu hình Nginx chạy trên 2 cổng khác nhau (ví dụ: `listen 80` cho biofarm, `listen 8080` cho channuoi), hoặc truy cập qua đường dẫn subfolder.*

Kiểm tra cú pháp và khởi động lại Nginx:
```bash
sudo nginx -t
sudo systemctl restart nginx
```

---

## BƯỚC 2: Cấu hình Secrets trên GitHub

Truy cập repository của bạn trên GitHub, chọn **Settings** -> **Secrets and variables** -> **Actions** -> **New repository secret** và thêm 3 biến sau:

1.  `DROPLET_SSH_KEY`: Dán toàn bộ nội dung file Private Key SSH (file `.pem` hoặc key bạn dùng để kết nối SSH lên Droplet).
2.  `DROPLET_HOST`: Điền IP Public của Droplet: `209.97.165.66`
3.  `DROPLET_USER`: Điền user SSH (Mặc định là `root`).

---

## BƯỚC 3: Trải nghiệm CI/CD tự động

File cấu hình GitHub Actions đã được đặt tại `.github/workflows/deploy.yml`. 

Mỗi khi bạn thực hiện `git push` lên một trong hai nhánh:
- Code sẽ tự động được cài đặt thư viện và build bản production (`dist/`).
- GitHub Actions sẽ tự động đồng bộ bản build lên đúng thư mục trên Droplet (`/var/www/biofarm` hoặc `/var/www/channuoi`) mà không cần bạn làm thủ công bất kỳ bước nào!
