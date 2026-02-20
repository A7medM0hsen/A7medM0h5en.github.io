// استخدام Intersection Observer لمراقبة العناصر المخفية
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // لو العنصر ظهر في الشاشة
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

// تحديد كل العناصر اللي واخدة كلاس hidden
const hiddenElements = document.querySelectorAll('.hidden');

// تطبيق المراقبة على كل عنصر
hiddenElements.forEach((el) => observer.observe(el));