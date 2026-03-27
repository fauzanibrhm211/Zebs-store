/* ZEBS STORE - Core Logic */
document.addEventListener('DOMContentLoaded', () => {
    initLoadingScreen();
    initGameSelection();
});

// 1. Loading Screen
function initLoadingScreen() {
    if (document.getElementById('loader-overlay')) return;
    const loader = document.createElement('div');
    loader.id = 'loader-overlay';
    loader.style.cssText = `
        position: fixed; inset: 0; background: #0a0510; z-index: 9999;
        display: flex; justify-content: center; align-items: center;
        transition: opacity 0.8s ease;
    `;
    loader.innerHTML = '<div class="loader"></div>'; 
    document.body.appendChild(loader);

    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => loader.remove(), 800);
        }, 500);
    });
}

// 2. Fungsi Klik Game Card (Penting untuk GitHub)
function initGameSelection() {
    const gameCards = document.querySelectorAll('.game-card');
    
    gameCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Kita biarkan link href jalan, tapi kita kasih animasi dulu
            const targetUrl = this.getAttribute('href');
            const gameTitle = this.querySelector('h4').innerText;

            e.preventDefault(); // Stop bentar buat munculin toast

            // Simpan ke localStorage buat cadangan
            localStorage.setItem('selectedGame', gameTitle);

            showToast(`Menyiapkan Top Up ${gameTitle}...`);

            // Pindah halaman setelah animasi toast
            setTimeout(() => {
                document.body.style.transition = 'opacity 0.5s ease';
                document.body.style.opacity = '0';
                setTimeout(() => {
                    window.location.href = targetUrl;
                }, 500);
            }, 800);
        });
    });
}

function showToast(message) {
    let toast = document.querySelector('.toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.className = 'toast';
        document.body.appendChild(toast);
    }
    toast.innerText = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
}
