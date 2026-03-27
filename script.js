/* ZEBS STORE - FORM LOGIC FINAL */

const allGames = {
    "Jual Rank Server DurianSMA": { label: "Rank", needsZone: false },
    "Free Fire": { label: "Diamonds", needsZone: false },
    "Free Fire Max": { label: "Diamonds", needsZone: false },
    "Mobile Legend": { label: "Diamonds", needsZone: true },
    "Honor of Kings": { label: "Tokens", needsZone: true },
    "Genshin Impact": { label: "Crystals", needsZone: true },
    "Blood Strike": { label: "Gold", needsZone: false },
    "PUBG Mobile": { label: "UC", needsZone: false },
    "Valorant": { label: "Points", needsZone: false },
    "Roblox": { label: "Robux", needsZone: false },
    "Call of Duty Mobile": { label: "CP", needsZone: false },
    "Point Blank": { label: "PB Cash", needsZone: false },
    "Stumble Guys": { label: "Gems", needsZone: false },
    "Eggy Party": { label: "Tokens", needsZone: false },
    "Metal Slug": { label: "Ruby", needsZone: false },
    "Clash of Clans": { label: "Gems", needsZone: false },
    "Google Play": { label: "Voucher", needsZone: false },
    "Steam Wallet": { label: "IDR", needsZone: false },
    "Hago": { label: "Diamonds", needsZone: false },
    "Plant vs Zombie": { label: "Gems", needsZone: false }
};

// Daftar Harga (Data abang tetap aman di sini)
const hargaFF = [{q: 5, p: "Rp 500"}, {q: 12, p: "Rp 500"}, {q: 120, p: "Rp 4.500"}, {q: 150, p: "Rp 7.000"}, {q: 170, p: "Rp 9.500"}, {q: 300, p: "Rp 14.000"}, {q: 380, p: "Rp 19.000"}, {q: 500, p: "Rp 30.000"}, {q: 600, p: "Rp 39.000"}, {q: 610, p: "Rp 47.000"}, {q: 1000, p: "Rp 56.000"}, {q: 2000, p: "Rp 100.000"}, {q: 3000, p: "Rp 200.000"}, {q: 4500, p: "Rp 350.000"}, {q: 8000, p: "Rp 450.000"}, {q: 5000, p: "Rp 500.000"}, {q: 5700, p: "Rp 540.000"}, {q: 6500, p: "Rp 570.000"}, {q: 7500, p: "Rp 600.000"}, {q: 100000, p: "Rp 920.000"}];
const hargaML = [{q: 5, p: "Rp 1.000"}, {q: 12, p: "Rp 2.000"}, {q: 19, p: "Rp 3.100"}, {q: 28, p: "Rp 7.000"}, {q: 44, p: "Rp 12.000"}, {q: 59, p: "Rp 16.000"}, {q: 85, p: "Rp 23.000"}, {q: 170, p: "Rp 35.000"}, {q: 215, p: "Rp 38.000"}, {q: 350, p: "Rp 45.000"}, {q: 1000, p: "Rp 100.000"}, {q: 1200, p: "Rp 110.000"}, {q: 1300, p: "Rp 120.000"}, {q: 2000, p: "Rp 150.000"}, {q: 2700, p: "Rp 230.000"}, {q: 3000, p: "Rp 305.000"}, {q: 3700, p: "Rp 440.000"}, {q: 5000, p: "Rp 530.000"}, {q: 100000, p: "Rp 1.250.000"}, {q: 2000000, p: "Rp 2.450.000"}];
const hargaRoblox = [{q: 80, p: "Rp 16.000"}, {q: 160, p: "Rp 29.000"}, {q: 240, p: "Rp 30.000"}, {q: 320, p: "Rp 39.500"}, {q: 400, p: "Rp 44.000"}, {q: 480, p: "Rp 88.000"}, {q: 560, p: "Rp 99.000"}, {q: 640, p: "Rp 110.000"}, {q: 720, p: "Rp 456.000"}, {q: 800, p: "Rp 478.000"}, {q: 880, p: "Rp 590.000"}, {q: 1000, p: "Rp 1.000.000"}, {q: 1790, p: "Rp 1.500.000"}, {q: 2000, p: "Rp 1.890.000"}, {q: 3400, p: "Rp 2.200.000"}, {q: 4900, p: "Rp 2.300.000"}, {q: 3100, p: "Rp 2.870.000"}, {q: 8900, p: "Rp 2.300.000"}, {q: 9800, p: "Rp 3.980.000"}, {q: "1jt", p: "Rp 10.000.000"}];
const daftarRank = [{q: "Killer", p: "Cek WA"}, {q: "Death", p: "Cek WA"}, {q: "Helper", p: "Cek WA"}, {q: "Lagend", p: "Cek WA"}, {q: "Water", p: "Cek WA"}, {q: "Lava", p: "Cek WA"}, {q: "Iron", p: "Cek WA"}, {q: "Gold", p: "Cek WA"}, {q: "Diamond", p: "Cek WA"}, {q: "VIP", p: "Cek WA"}, {q: "Admin", p: "Cek WA"}];
const hargaLain = [{q: 10, p: "Rp 4.000"}, {q: 20, p: "Rp 8.000"}, {q: 30, p: "Rp 12.000"}, {q: 40, p: "Rp 16.000"}, {q: 50, p: "Rp 20.000"}, {q: 100, p: "Rp 40.000"}, {q: 150, p: "Rp 60.000"}, {q: 200, p: "Rp 80.000"}, {q: 250, p: "Rp 100.000"}, {q: 300, p: "Rp 120.000"}, {q: 400, p: "Rp 160.000"}, {q: 500, p: "Rp 200.000"}, {q: 600, p: "Rp 240.000"}, {q: 700, p: "Rp 280.000"}, {q: 800, p: "Rp 320.000"}, {q: 900, p: "Rp 360.000"}, {q: 1000, p: "Rp 400.000"}, {q: 1500, p: "Rp 600.000"}, {q: 2000, p: "Rp 800.000"}, {q: 5000, p: "Rp 2.000.000"}];

let selectedNominal = "";
const urlParams = new URLSearchParams(window.location.search);
const gameName = urlParams.get('game') || "Free Fire";
const config = allGames[gameName] || { label: "Item", needsZone: false };

window.onload = () => {
    document.getElementById('gameTitle').innerText = "Top Up " + gameName;
    const inputUser = document.getElementById('userid');
    
    // LOGIKA HURUF VS ANGKA
    const lower = gameName.toLowerCase();
    if (lower.includes("roblox") || lower.includes("duriansma")) {
        inputUser.type = "text"; 
        inputUser.placeholder = "Masukkan Username (Huruf/Angka)";
    } else {
        inputUser.type = "number";
        inputUser.placeholder = "Masukkan Player ID (Angka)";
    }

    if (config.needsZone) document.getElementById('zoneid').style.display = "block";
    
    renderNominals();
};

function renderNominals() {
    const grid = document.getElementById('nominalGrid');
    if (!grid) return;
    
    grid.innerHTML = ""; // INI KUNCINYA BIAR GAK DOUBLE

    let list = hargaLain;
    if (gameName.includes("DurianSMA")) list = daftarRank;
    else if (gameName.includes("Free Fire")) list = hargaFF;
    else if (gameName.includes("Mobile Legend")) list = hargaML;
    else if (gameName.includes("Roblox")) list = hargaRoblox;

    list.forEach(item => {
        const card = document.createElement('div');
        card.className = 'nominal-item';
        card.onclick = function() {
            document.querySelectorAll('.nominal-item').forEach(i => i.classList.remove('active'));
            this.classList.add('active');
            selectedNominal = item.q;
        };
        card.innerHTML = `<div class="nom-qty"><b>${item.q}</b> ${gameName.includes("SMA") ? "" : config.label}</div><div class="nom-price">${item.p}</div>`;
        grid.appendChild(card);
    });
}

function gasOrder() {
    const userid = document.getElementById('userid').value;
    const payment = document.querySelector('input[name="payment"]:checked');
    if (!userid || !selectedNominal || !payment) return alert("Lengkapi data!");
    
    let pesan = `*ORDER ZEBS STORE*\n\nGame: ${gameName}\nID: ${userid}\nNominal: ${selectedNominal}\nBayar: ${payment.value}`;
    window.open(`https://wa.me/628984830064?text=${encodeURIComponent(pesan)}`);
}
