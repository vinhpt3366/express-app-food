# Express Starter Kit

Đây là một dự án mẫu sử dụng **Express.js** để xây dựng ứng dụng backend. Dự án được cấu hình sẵn với các công cụ và thư viện phổ biến như Prisma, dotenv, Helmet, Morgan, và nhiều hơn nữa.

## 🚀 Mục tiêu

- Cung cấp một bộ khung cơ bản để bắt đầu phát triển ứng dụng backend với **Express.js**.
- Hỗ trợ quản lý cơ sở dữ liệu thông qua Prisma.
- Cấu hình môi trường phát triển và sản xuất dễ dàng với `dotenv`.

---

## 🛠️ Công nghệ sử dụng

- **Node.js**: Runtime để chạy JavaScript.
- **Express.js**: Framework backend.
- **Prisma**: ORM để quản lý cơ sở dữ liệu.
- **dotenv**: Quản lý biến môi trường.
- **Helmet**: Bảo mật ứng dụng thông qua HTTP headers.
- **Morgan**: Ghi log request.
- **cookie-parser**: Xử lý cookie.
- **CORS**: Hỗ trợ Cross-Origin Resource Sharing.

---

## 📂 Cấu trúc dự án

```
express-starter-kit/
├── node_modules/         # Thư viện phụ thuộc được cài đặt bởi npm
├── prisma/
│   ├── schema.prisma     # Định nghĩa schema cho Prisma ORM
├── src/
│   ├── common/           # Chứa các thành phần dùng chung
│   │   ├── constant/
│   │   │   ├── app.constant.js  # Các hằng số chung cho ứng dụng
│   │   │   ├── corsConfig.js    # Cấu hình CORS
│   │   │   └── init.prisma.js   # Khởi tạo Prisma Client
│   │   ├── helpers/
│   │       ├── HttpException.js # Xử lý ngoại lệ HTTP
│   │       └── response.helper.js # Hỗ trợ định dạng phản hồi
│   ├── controllers/      # Xử lý logic cho các route
│   ├── middlewares/      # Middleware tùy chỉnh
│   ├── routes/           # Định nghĩa các route
│   │   |
│   │   └── root.router.js # Route chính (root)
│   ├── services/         # Thư mục dành cho các service (nếu có)
│   ├── app.js            # Cấu hình ứng dụng Express
│   └── server.js         # Điểm vào chính của ứng dụng
├── .env                  # Biến môi trường chính
├── .env.dev              # Biến môi trường cho môi trường phát triển
├── .gitignore            # Danh sách các file/thư mục bị bỏ qua khi commit
├── package.json          # Thông tin dự án và dependencies
├── package-lock.json     # Khóa phiên bản các dependencies

```

---

## 🔧 Hướng dẫn cài đặt

### 1. Clone dự án

```bash
git clone <repository-url>
cd express-starter-kit
```

### 2. Cài đặt dependencies

Sử dụng `npm` để cài đặt các thư viện cần thiết:

```bash
npm install
```

### 3. Thiết lập biến môi trường

- Tạo file `.env` ở thư mục gốc dự án.
- Sao chép nội dung từ file `.env.dev` và chỉnh sửa theo nhu cầu của bạn:
  ```env
  PORT=3069
  DATABASE_URL="mysql://username:password@localhost:port/database"
  ALLOWED_ORIGINS=http://localhost:3000,https://your-production-domain.com
  NODE_ENV=development
  ```

### 4. Chạy ứng dụng

#### Chạy ở chế độ sản xuất:

```bash
npm start
```

#### Chạy ở chế độ phát triển:

```bash
npm run dev
```

Ứng dụng sẽ chạy ở `http://localhost:3069` (hoặc cổng được chỉ định trong `.env`).

---

## 🗂️ Prisma ORM

### 1. Cài đặt Prisma

Prisma đã được thêm sẵn vào dự án. Để khởi tạo schema và migration:

```bash
npx prisma migrate dev --name init
```

### 2. Mở Prisma Studio

Để quản lý cơ sở dữ liệu trực quan:

```bash
npx prisma studio
```

### 3. Cập nhật schema

Nếu bạn thay đổi schema trong `prisma/schema.prisma`, chạy lệnh sau để áp dụng thay đổi:

```bash
npx prisma generate
```

### 3. Cập nhật schema khi database thay đổi

Nếu cơ sở dữ liệu có thay đổi, chạy các lệnh sau để cập nhật:

```bash
npx prisma db pull
npx prisma generate
```

---

## 📋 Scripts có sẵn

- **`npm start`**: Chạy ứng dụng ở chế độ sản xuất.
- **`npm run dev`**: Chạy ứng dụng ở chế độ phát triển với `nodemon`.
- **`npx prisma migrate dev`**: Tạo migration mới cho cơ sở dữ liệu.
- **`npx prisma studio`**: Mở giao diện quản lý Prisma Studio.

---

## 🔒 Bảo mật

- **Helmet** đã được cấu hình để bảo vệ ứng dụng khỏi các lỗ hổng bảo mật phổ biến.
- **CORS** được sử dụng để giới hạn các nguồn gốc được phép truy cập API. Bạn có thể chỉnh sửa biến môi trường `ALLOWED_ORIGINS` để phù hợp với ứng dụng của mình.

---

## 📜 Ghi chú

- Đảm bảo rằng bạn đã cài đặt **MySQL** (hoặc cơ sở dữ liệu tương thích) và cập nhật thông tin kết nối trong `DATABASE_URL`.
- Tệp `.env` không nên được commit vào Git. Hãy thêm nó vào `.gitignore` để bảo mật thông tin nhạy cảm.

---

## 🤝 Đóng góp

Nếu bạn muốn đóng góp cho dự án, hãy tạo một **Pull Request** hoặc mở **Issue** để thảo luận.

---

## 📧 Liên hệ

Nếu bạn có bất kỳ câu hỏi nào, vui lòng liên hệ qua email: [youremail@example.com](mailto:youremail@example.com).
