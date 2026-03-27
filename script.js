//* ZEBS STORE - Core Logic */
document.addEventListener('DOMContentLoaded', () => {
    // 1. Langsung munculin loader
    initLoadingScreen();
    // 2. Langsung render game tanpa nunggu
    renderGames(); 
});

function renderGames() {
    const gameGrid = document.getElementById('gameGrid');
    if (!gameGrid) return;

    const games = [
        {n: "Jual Rank Server DurianSMA", i: "assets/mc.jpg", p: "Minecraft Server"},
        {n: "Free Fire", i: "assets/ff.jpg", p: "Garena"},
        {n: "Free Fire Max", i: "assets/ff-max.jpg", p: "Garena"},
        {n: "Mobile Legend", i: "assets/ml.jpg", p: "Moonton"},
        {n: "Honor of Kings", i: "assets/hok.jpg", p: "Level Infinite"},
        {n: "Genshin Impact", i: "assets/genshin.jpg", p: "HoYoverse"},
        {n: "Blood Strike", i: "assets/bls.jpg", p: "NetEase"}, 
        {n: "PUBG Mobile", i: "assets/pubg.jpg", p: "Tencent"},
        {n: "Plant vs Zombie", i: "assets/pvz.jpg", p: "PopCap"},
        {n: "Valorant", i: "assets/valorant.jpg", p: "Riot Games"},
        {n: "Roblox", i: "assets/roblox.jpg", p: "Robux"},
        {n: "Call of Duty Mobile", i: "assets/codm.jpg", p: "Activision"},
        {n: "Point Blank", i: "assets/pb.jpg", p: "Zepetto"},
        {n: "Stumble Guys", i: "assets/stumble.jpg", p: "Scopely"},
        {n: "Eggy Party", i: "assets/eggy.jpg", p: "NetEase"},
        {n: "Metal Slug", i: "assets/metal-slug.jpg", p: "VNG"},
        {n: "Clash of Clans", i: "assets/coc.jpg", p: "Supercell"},
        {n: "Google Play", i: "assets/gp.jpg", p: "Voucher"},
        {n: "Steam Wallet", i: "assets/steam.jpg", p: "Valve"},
        {n: "Hago", i: "assets/hago.jpg", p: "Diamonds"}
    ];

    gameGrid.innerHTML = games.map(g => `
        <a href="form.html?game=${encodeURIComponent(g.n)}" class="game-card">
            <div class="game-img-container"><img src="${g.i}" alt="${g.n}" class="game-img"></div>
            <div class="game-info"><h4>${g.n}</h4><p>${g.p}</p></div>
        </a>
    `).join('');

    initGameSelection();
}

function initLoadingScreen() {
    // Cek dulu biar gak bikin loader double
    if (document.getElementById('loader-overlay')) return;
    
    const loader = document.createElement('div');
    loader.id = 'loader-overlay';
    loader.style.cssText = `
        position: fixed; inset: 0; background: #0a0510; z-index: 9999;
        display: flex; justify-content: center; align-items: center;
        transition: opacity 0.5s ease;
    `;
    loader.innerHTML = '<div class="loader"></div>'; 
    document.body.appendChild(loader);

    // Langsung hapus loader setelah 1 detik biar gak kelamaan nunggu
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => loader.remove(), 500);
    }, 1000);
}

function initGameSelection() {
    const gameCards = document.querySelectorAll('.game-card');
    gameCards.forEach(card => {
        card.addEventListener('click', function(e) {
            e.preventDefault();
            const targetUrl = this.getAttribute('href');
            const gameTitle = this.querySelector('h4').innerText;

            showToast(`Menyiapkan Top Up ${gameTitle}...`);

            setTimeout(() => {
                document.body.style.transition = 'opacity 0.5s ease';
                document.body.style.opacity = '0';
                setTimeout(() => {
                    window.location.href = targetUrl;
                }, 400);
            }, 600);
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
    toast.className = 'toast show'; // Langsung set class
    setTimeout(() => toast.className = 'toast', 3000);
}
