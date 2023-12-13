// 在網頁載入完成後執行
document.addEventListener("DOMContentLoaded", function () {
    // 引入 header.html 到 body 的最前面
    fetch("header.html")
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML("afterbegin", data);

            // 引入 footer.html 到 body 的最後面
            return fetch("footer.html");
        })
        .then(response => response.text())
        .then(data => document.body.insertAdjacentHTML("beforeend", data));
    
    // 引入 Font Awesome 脚本
    const scriptElement = document.createElement('script');
    scriptElement.src = 'https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js';
    scriptElement.crossOrigin = 'anonymous';
    document.head.appendChild(scriptElement);
});

// 控制顯示"goToTopBtn"的時機(依照視口滾動)
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    var button = document.getElementById("goToTopBtn");

    // 在第一視口時隱藏，之後顯示
    if(window.scrollY >= window.innerHeight){
        button.style.display = "block";
    }else{
        button.style.display = "none";
    }
}