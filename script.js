// Konfigurasi Tema Warna Tailwind
tailwind.config = {
    theme: {
        extend: {
            colors: {
                brand: {
                    50: '#eff6ff',
                    100: '#dbeafe',
                    200: '#bfdbfe',
                    300: '#93c5fd',
                    400: '#60a5fa',
                    500: '#3b82f6',
                    600: '#2563eb', // Electric Blue
                    700: '#1d4ed8',
                    800: '#1e40af',
                    900: '#1e3a8a',
                    950: '#0f172a', // Deep Blue / Dark Slate
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                heading: ['Outfit', 'sans-serif']
            }
        }
    }
};

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