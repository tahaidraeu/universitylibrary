/* script.js */

// تحديد الزر الذي يفتح القائمة
const menuButton = document.getElementById('menu-button');
// تحديد القائمة
const menu = document.getElementById('menu');

// وضع استماع لنقرات الزر لفتح أو إغلاق القائمة
menuButton.addEventListener('click', () => {
    // التحقق مما إذا كانت القائمة مخفية، ثم إظهارها، والعكس صحيح
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
});
// تحديد الشريط السفلي
const footer = document.getElementById("footer");

// إخفاء الشريط السفلي عند بدء التحميل
footer.style.bottom = "-50px";

// إضافة مستمع للتفاعل بالماوس
footer.addEventListener("mouseover", function() {
    footer.style.bottom = "0"; // إظهار الشريط السفلي عند التفاعل
});

// إضافة مستمع للخروج من التفاعل بالماوس
footer.addEventListener("mouseleave", function() {
    footer.style.bottom = "-50px"; // إخفاء الشريط السفلي بعد الخروج من التفاعل
});


