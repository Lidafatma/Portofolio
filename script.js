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
