# Logo TUS mũi tên

Bản chốt: "mũi tên, bản 3", nét dày 24.
Chữ T là mũi tên đứng giữa (hai cạnh mái + thân dọc). Chữ U nằm bên trái, chữ S nằm bên phải, khung ngoài đối xứng.
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

## Light mode và dark mode

| Chế độ | Nền | Logo | Tương phản |
| --- | --- | --- | --- |
| Light | `#FFFFFF` | `#251097` | 13,1 : 1 |
| Dark | `#1E1E1E` | `#8B7CFF` | 5,1 : 1 |

Màu tím than `#251097` trên nền tối chỉ đạt 1,3 : 1 (gần như không thấy), nên chế độ tối dùng `#8B7CFF`, cùng họ tím.

| File | Dùng cho |
| --- | --- |
| `tus-logo-dark.svg`, `png/tus-logo-dark-{256,512,1024}.png` | Logo trên nền tối |
| `tus-logo-auto.svg` | Tự đổi màu theo chế độ sáng/tối của máy người xem |
| `favicon/favicon.svg` | Favicon tự đổi màu theo chế độ sáng/tối |
| `favicon/favicon-dark-{16,32,48}.png` | Favicon PNG bản tối |
| `favicon/icon-512-dark.png`, `icon-badge-dark.svg` | Icon ứng dụng bản tối (logo tím sáng trên nền `#1E1E1E`) |

Nếu site có nút chuyển theme riêng (không theo hệ điều hành), đổi logo theo class của theme, ví dụ với Tailwind:

```html
<img src="/static/images/tus-logo.svg" class="block dark:hidden" alt="tupt.dev">
<img src="/static/images/tus-logo-dark.svg" class="hidden dark:block" alt="tupt.dev">
```

Hoặc chèn SVG trực tiếp vào trang và đặt màu logo bằng `currentColor`, rồi đổi `color` theo theme.

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

5. Logo trên header: đổi `src` sang `/static/images/tus-logo.svg` và bỏ class `rounded-full`, để không cắt mất các góc của lục giác.

## Ghi chú

- Logo có tỉ lệ khoảng 201 × 228 (cao hơn rộng một chút). Riêng favicon dùng khung vuông.
- Ở 16px vẫn thấy rõ mũi tên và khung lục giác. Chữ U và S đọc rõ từ khoảng 32px trở lên.
- File nguồn: `design/tus-logo-arrow-3.html` (ô "Nét 24").
