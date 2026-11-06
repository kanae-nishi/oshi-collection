"use strict";
console.log('動いた！');
//document.querySelector('#site-title') .textContent = 'MADAMADA';
const title = document.querySelector('#site-title');
// style も触るので、門番を一段強くする（届いたか＋styleを持つ種類か）
if (title instanceof HTMLElement) {
    title.textContent = 'MADAMADA';
    title.style.color = '#fc0fc0';
}
const btn = document.querySelector('.submit-btn');
const message = document.querySelector('#form-message');
if (btn && message) {
    btn.addEventListener('click', () => {
        message.textContent = 'リアクションありがとうございます！';
    });
}
let count = 0;
const likeBtn = document.querySelector('#like-btn');
const likeCount = document.querySelector('#like-count');
if (likeBtn && likeCount) {
    likeBtn.addEventListener('click', () => {
        count++;
        likeCount.textContent = String(count);
        if (count === 10) {
            likeCount.textContent = '10いいね達成！ありがとうございます！';
        }
    });
}
const items = [
    { title: 'こころ', category: 'アイドル', description: 'MADAMADA' },
    { title: 'おとは', category: 'アイドル', description: 'MADAMADA' },
];

// ===== S8: Supabaseからデータを取ってくる =====
const SUPABASE_URL = "https://wwbpnkippvtwmbnowiwf.supabase.co";
const SUPABASE_KEY = "sb_publishable_A75pEqf_3EvdLC-OuHNXMw_jF3xpB0C";

async function loadItems() {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/items?select=*`, {
    headers: {
      apikey: SUPABASE_KEY
    }
  });
  const data = await res.json();
  renderItems(data);
}

function renderItems(items) {
  const list = document.getElementById("item-list");
  list.innerHTML = "";

  for (const item of items) {
    const card = document.createElement("div");
    card.className = "item-card";
    card.innerHTML = `
      <h3>${item.title}</h3>
      <p class="category">${item.category}</p>
      <p>${item.description ?? ""}</p>
    `;
    list.appendChild(card);
  }
}

loadItems();
