# TUS brand

Bộ nhận diện thương hiệu TUS cho tupt.dev.

## Logo

Logo chính: chữ **T** là mũi tên chỉ lên ở giữa lục giác, **U** bên trái, **S** bên phải. Khung ngoài đối xứng, nét dày 24.

- File logo, favicon, icon ứng dụng: [`logo-arrow/`](logo-arrow/) (hướng dẫn chi tiết trong [`logo-arrow/README.md`](logo-arrow/README.md)).
- Phương án cũ (khối hộp lục giác, bo vừa): [`logo/`](logo/).
- Các vòng thiết kế và trang trình bày: [`design/`](design/).

## Màu

Hai chế độ theo kiểu chủ đề VS Code. Nguồn chuẩn: [`tokens/colors.json`](tokens/colors.json).

| Vai trò | Light | Dark |
| --- | --- | --- |
| Logo | `#251097` | `#8B7CFF` |
| Nền | `#FFFFFF` | `#1E1E1E` |
| Bề mặt phụ (tab, sidebar) | `#F3F3F3` | `#181818` |
| Viền | `#E5E5E5` | `#2B2B2B` |
| Chữ | `#1F1F1F` | `#CCCCCC` |
| Chữ phụ | `#616161` | `#9D9D9D` |

Màu thương hiệu là `#251097`. Trên nền tối, màu này chỉ đạt tương phản 1,3 : 1 nên logo chuyển sang `#8B7CFF` (5,1 : 1). Trên nền sáng, `#251097` đạt 13,1 : 1.

### Dùng trong code

- **CSS:** nhúng [`tokens/colors.css`](tokens/colors.css) rồi dùng các biến `--tus-logo`, `--tus-bg`, `--tus-surface`, `--tus-border`, `--tus-text`, `--tus-muted`. Mặc định theo chế độ của hệ điều hành; đặt `data-theme="light"` / `"dark"` (hoặc class `dark`) trên `<html>` để ghi đè.
- **Tailwind:** xem [`tokens/tailwind.colors.js`](tokens/tailwind.colors.js).
- **Ví dụ chạy được:** mở [`examples/light-dark.html`](examples/light-dark.html) trong trình duyệt. Trang có nút chuyển theme, logo nhúng SVG đổi màu theo `--tus-logo`, và favicon tự đổi màu.

## Các thư mục khác

- [`brand-questionnaire.md`](brand-questionnaire.md): bộ câu hỏi ban đầu.
- `.claude/skills/`: các skill thiết kế thương hiệu dùng trong quá trình làm.
