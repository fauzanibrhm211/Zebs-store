/* ZEBS STORE - FORM LOGIC (FIXED & ANTI-DOUBLE) */

// ... (Bagian 1 & 2: allGames dan Daftar Harga tetep pake punya abang, jangan diubah) ...

// 3. LOGIKA UTAMA
let selectedNominal = "";
const urlParams = new URLSearchParams(window.location.search);
const gameName = urlParams.get('game') || "Free Fire";
const config = allGames[gameName] || { label: "Item", needsZone: false };

window.onload = () => {
    const titleEl = document.getElementById('gameTitle');
    if (titleEl) titleEl.innerText = "Top Up " + gameName;

    const inputUser = document.getElementById('userid');
    const inputZone = document.getElementById('zoneid');

    if (inputUser) {
        const lowerName = gameName.toLowerCase();
        if (lowerName.includes("roblox") || lowerName.includes("duriansma")) {
            inputUser.setAttribute('type', 'text');
            inputUser.placeholder = "Username (Huruf/Angka)";
        } else {
            inputUser.setAttribute('type', 'number');
            inputUser.placeholder = "Masukkan Player ID";
        }
    }

    if (inputZone && config.needsZone) {
        inputZone.style.display = "block";
    }

    renderNominals();
};

function renderNominals() {
    const grid = document.getElementById('nominalGrid');
    if (!grid) return;

    grid.innerHTML = ""; // TETAP ADA: Biar aman kalo script kepanggil ulang

    let listPilihan;
    if (gameName.includes("DurianSMA")) listPilihan = daftarRank;
    else if (gameName.includes("Free Fire")) listPilihan = hargaFF;
    else if (gameName.includes("Mobile Legend")) listPilihan = hargaML;
    else if (gameName.includes("Roblox")) listPilihan = hargaRoblox;
    else listPilihan = hargaLain;

    listPilihan.forEach(item => {
        const card = document.createElement('div');
        card.className = 'nominal-item';
        card.onclick = function() {
            document.querySelectorAll('.nominal-item').forEach(i => i.classList.remove('active'));
            this.classList.add('active');
            selectedNominal = item.q;
        };
        card.innerHTML = `
            <div class="nom-qty"><b>${item.q}</b> ${gameName.includes("DurianSMA") ? "" : config.label}</div>
            <div class="nom-price">${item.p}</div>
        `;
        grid.appendChild(card);
    });
}

function gasOrder() {
    const userid = document.getElementById('userid').value;
    const zoneid = document.getElementById('zoneid').value; // Tambahin ini biar gak ilang Zone ID-nya
    const payment = document.querySelector('input[name="payment"]:checked');
    
    if (!userid || !selectedNominal || !payment) return alert("Lengkapi data dulu Bang!");

    // Gabungin ID dan Zone ID kalau game-nya butuh Zone (kayak ML)
    let userLengkap = userid + (zoneid ? " (" + zoneid + ")" : "");

    let pesan = `*ORDER ZEBS STORE*\n\n`;
    pesan += `🎮 Game: ${gameName}\n`;
    pesan += `🆔 ID: ${userLengkap}\n`;
    pesan += `💎 Nominal: ${selectedNominal} ${config.label}\n`;
    pesan += `💳 Bayar: ${payment.value}`;

    window.open(`https://wa.me/628984830064?text=${encodeURIComponent(pesan)}`);
}

