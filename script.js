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
