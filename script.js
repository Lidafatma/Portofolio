// Tambahkan / Ganti konfigurasi Tailwind pada head HTML Anda
tailwind.config = {
    theme: {
        extend: {
            colors: {
                dark: {
                    bg: '#0b0914',       // Background Utama Gelap
                    card: '#161226',     // Card Gelap Ungu
                    border: '#272042'    // Border Tipis Ungu
                },
                neon: {
                    purple: '#9d4edf',   // Neon Ungu Utama
                    cyan: '#00d2ff',     // Neon Cyan / Biru Muda
                    pink: '#ff007f'      // Pink Aksentuasi
                }
            }
        }
    }
}

// Fungsi pembantu ambil ID
function id(e) { 
    return document.getElementById(e); 
}

// Logika Navigasi Mobile
document.addEventListener('DOMContentLoaded', () => {
    const btn = id('mobile-menu-btn');
    const menu = id('mobile-menu');
    if (btn && menu) {
        btn.addEventListener('click', () => menu.classList.toggle('hidden'));
    }
});

// Fungsi Filter Proyek / Tab Filter
function filterProjects(category) {
    const cards = document.querySelectorAll('.project-card');
    const btns = document.querySelectorAll('.project-tab-btn');

    btns.forEach(b => {
        b.classList.remove('bg-blue-600', 'text-white', 'shadow-md');
        b.classList.add('bg-white', 'text-slate-600', 'border', 'border-slate-200');
    });

    if (event && event.target) {
        event.target.classList.remove('bg-white', 'text-slate-600', 'border', 'border-slate-200');
        event.target.classList.add('bg-blue-600', 'text-white', 'shadow-md');
    }

    cards.forEach(card => {
        if (category === 'all' || card.classList.contains(category)) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}
// Script Otomatis Scroll Reveal Animation
document.addEventListener("DOMContentLoaded", function () {
    // Pilih elemen-elemen yang ingin diberi efek animasi scroll
    const targetElements = document.querySelectorAll(
        "#about > div, #internship > div, #experience > div, #projects .project-card, #organization > div, #certificates .space-y-4 > div, #keahlian > div, #contact > div"
    );

    // Tambahkan class 'reveal-on-scroll' ke setiap elemen target secara otomatis
    targetElements.forEach((el) => {
        el.classList.add("reveal-on-scroll");
    });

    // Gunakan Intersection Observer untuk memicu animasi saat elemen masuk viewport
    const observerOptions = {
        root: null,
        rootMargin: "0px 0px -50px 0px", // Animasi terpicu sedikit sebelum elemen mencapai batas bawah layar
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observerInstance) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                // Opsional: Hentikan observasi setelah animasi berjalan sekali
                // observerInstance.unobserve(entry.target);
            }
        });
    }, observerOptions);

    targetElements.forEach((el) => {
        observer.observe(el);
    });
});
