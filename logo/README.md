# Logo TUS

Bản chốt: khối lục giác có khe, bo góc vừa. Chữ T ở mặt trên, U ở mặt trái, S ở mặt phải.
Màu thương hiệu: `#251097`.

## Các file

| File | Dùng cho |
| --- | --- |
| `tus-logo.svg` | Logo chính, màu tím, nền trong suốt |
| `tus-logo-black.svg` | In ấn một màu, nền sáng |
| `tus-logo-white.svg` | Đặt trên nền tối hoặc nền tím |
| `png/tus-logo-{64,128,256,512,1024}.png` | Ảnh logo màu tím, nền trong suốt |
| `png/tus-logo-white-{512,1024}.png` | Ảnh logo trắng, nền trong suốt |
| `favicon/favicon.ico` | Favicon (16, 32, 48px) |
| `favicon/favicon.svg` | Favicon dạng vector cho trình duyệt mới |
| `favicon/favicon-{16,32,48,256}.png` | Favicon dạng PNG |
| `favicon/apple-touch-icon.png` | Icon iPhone/iPad (180px, nền tím) |
| `favicon/icon-192.png`, `icon-512.png` | Icon Android / PWA (nền tím) |
| `favicon/icon-badge.svg` | Logo trắng trên nền vuông tím, dạng vector |

## Thay vào tupt.dev

Hiện tại site dùng `/static/favicons/logo.png` và `/static/images/logo.png`.

1. Chép thư mục `favicon/` vào `public/static/favicons/`.
2. Chép `tus-logo.svg` vào `public/static/images/`.
3. Thay các thẻ favicon trong `<head>`:

```html
<link rel="icon" href="/static/favicons/favicon.ico" sizes="48x48">
<link rel="icon" href="/static/favicons/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/static/favicons/apple-touch-icon.png">
<link rel="manifest" href="/static/favicons/site.webmanifest">
```

4. Trong `site.webmanifest`, trỏ icon tới file mới:

```json
"icons": [
  { "src": "/static/favicons/icon-192.png", "sizes": "192x192", "type": "image/png" },
  { "src": "/static/favicons/icon-512.png", "sizes": "512x512", "type": "image/png" }
],
"theme_color": "#251097"
```

5. Logo trên header: đổi `src` sang `/static/images/tus-logo.svg`. Logo cũ đang có class `rounded-full`, nên bỏ class này để không cắt mất góc của khối lục giác.

## Ghi chú

- Logo có tỉ lệ 182 × 208 (cao hơn rộng một chút). Riêng favicon dùng khung vuông.
- Từ 32px trở lên đọc được ba chữ. Ở 16px chỉ còn thấy dáng khối hộp.
- File nguồn để chỉnh lại nằm ở `design/tus-logo-cube-soft.html` (bản "Bo vừa").
