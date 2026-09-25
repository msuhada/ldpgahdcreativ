// ========================================================
// AHD CREATIVE — GIMIMAY-STYLE LANDING PAGE JAVASCRIPT
// ========================================================

const SLIDES_DATA = [
  {
    title: "Bypass Sensor AI TikTok &\nHapus Metadata C2PA",
    description: "Hapus metadata AI (Google/OpenAI/Runway), XMP, EXIF, dan GPS agar tombol 'Konten yang dihasilkan AI' di TikTok bisa dimatikan 100%.",
    topIcon: "🛡️",
    topBadge: "Bypass TikTok AI 100% Valid",
    bottomIcon: "✓",
    bottomBadge: "C2PA Stripped (CapCut)"
  },
  {
    title: "Kamuflase Kamera HP Asli &\nTanggal Sekarang",
    description: "Format nama file VID_...mp4 dengan tanggal baru dan tersimpan otomatis di DCIM/Camera seperti hasil rekaman kamera HP asli.",
    topIcon: "📱",
    topBadge: "Format Kamera HP Asli",
    bottomIcon: "✓",
    bottomBadge: "Target: DCIM/Camera/"
  },
  {
    title: "Upscale Resolusi Nyata\nhingga 4K Ultra HD",
    description: "Tingkatkan resolusi video buram dari 720p/1080p ke 2K atau 4K tanpa pecah dengan teknologi AI Super Resolution & Detail Restorer.",
    topIcon: "💎",
    topBadge: "Super Resolusi 4K UHD",
    bottomIcon: "✓",
    bottomBadge: "28 Mbps Crisp Video"
  },
  {
    title: "AI Color Grading & Vibrance\nEstetika Ala Wink",
    description: "Warna asli video tetap 100% natural tanpa filter. Nyalakan toggle jika ingin efek warna lebih cerah & kontras estetika ala Wink.",
    topIcon: "🎨",
    topBadge: "Wink Color Pop (On/Off)",
    bottomIcon: "✓",
    bottomBadge: "Warna Asli (Natural)"
  },
  {
    title: "100% On-Device AI —\nTanpa Upload Cloud & Cepat",
    description: "Semua proses render dan penghapusan metadata berjalan langsung di hardware HP Anda. Privasi video 100% terjamin aman tanpa kuota internet.",
    topIcon: "⚡",
    topBadge: "100% Offline & Privat",
    bottomIcon: "✓",
    bottomBadge: "GPU Hardware Render"
  },
  {
    title: "Paket AHD PRO VIP —\nHanya Rp 5.000 / Bulan",
    description: "Ekspor video tanpa batas (Unlimited), kualitas 4K prioritas, dan bebas watermark. Pembayaran resmi dan aktivasi otomatis langsung di aplikasi HP.",
    topIcon: "👑",
    topBadge: "VIP Murah Rp 5.000/bln",
    bottomIcon: "✓",
    bottomBadge: "Akses Penuh Unlimited"
  }
];

let currentSlide = 0;
let slideInterval = null;

// DOM Elements
const headlineEl = document.getElementById('gimi-headline');
const descEl = document.getElementById('gimi-description');
const floatTopIconEl = document.getElementById('float-badge-top-icon');
const floatTopEl = document.getElementById('float-badge-top-text');
const floatBottomIconEl = document.getElementById('float-badge-bottom-icon');
const floatBottomEl = document.getElementById('float-badge-bottom-text');
const screenSlides = document.querySelectorAll('.gimi-slide-screen');
const dots = document.querySelectorAll('.gimi-dot');

function showSlide(index) {
  if (index < 0 || index >= SLIDES_DATA.length) return;
  currentSlide = index;

  const data = SLIDES_DATA[index];

  // Update text with soft fade
  if (headlineEl) {
    headlineEl.style.opacity = '0';
    headlineEl.style.transform = 'translateY(6px)';
    setTimeout(() => {
      headlineEl.innerHTML = data.title.replace('\n', '<br>');
      headlineEl.style.opacity = '1';
      headlineEl.style.transform = 'translateY(0)';
    }, 180);
  }

  if (descEl) {
    descEl.style.opacity = '0';
    setTimeout(() => {
      descEl.textContent = data.description;
      descEl.style.opacity = '1';
    }, 180);
  }

  // Update floating badges
  if (floatTopIconEl && data.topIcon) floatTopIconEl.textContent = data.topIcon;
  if (floatTopEl) floatTopEl.textContent = data.topBadge;
  if (floatBottomIconEl && data.bottomIcon) floatBottomIconEl.textContent = data.bottomIcon;
  if (floatBottomEl) floatBottomEl.textContent = data.bottomBadge;

  // Update screen mockup
  screenSlides.forEach((screen, idx) => {
    if (idx === index) {
      screen.classList.add('active');
    } else {
      screen.classList.remove('active');
    }
  });

  // Update dots
  dots.forEach((dot, idx) => {
    if (idx === index) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

function nextSlide() {
  const next = (currentSlide + 1) % SLIDES_DATA.length;
  showSlide(next);
}

function startAutoplay() {
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, 4500);
}

// Dot clicks
dots.forEach(dot => {
  dot.addEventListener('click', () => {
    const idx = parseInt(dot.getAttribute('data-index'), 10);
    showSlide(idx);
    startAutoplay(); // Reset timer on manual click
  });
});

// Toast notification helper
function showToast(message) {
  const toast = document.getElementById('notification-toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}

// Download button feedback
const btnDownloadMain = document.getElementById('btn-download-main');
if (btnDownloadMain) {
  btnDownloadMain.addEventListener('click', () => {
    showToast('⬇️ Memulai unduhan APK Resmi AHD Creative v1.0 (48 MB)...');
  });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  showSlide(0);
  startAutoplay();
});

