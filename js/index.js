document.addEventListener('DOMContentLoaded', function () {
    const cardContainer = document.querySelector('.card-wrap');
    const cards = document.querySelectorAll('.card');
    let i = 0;

    function showNextCard() {
        cards.forEach(function(card) {
            card.style.display = 'none';
        }); // 先將所有卡片隱藏
        cards[i].style.display = 'block'; // 顯示當前卡片

        i= (i + 1) % cards.length; // 取餘數，餘數等於下一個卡片的鍵(i)，並且這樣i不會大於cards.length
    }

    // 計時器
    function startTimer() {
        setInterval(showNextCard, 4000);
    }

    startTimer(); // 啟動計時器
});