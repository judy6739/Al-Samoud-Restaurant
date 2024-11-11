document.addEventListener('DOMContentLoaded', () => {
    // تأثير التفاعل مع مرور الماوس على الأطباق (تكبير وتغيير الظل)
    document.querySelectorAll('.menu-item').forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.transform = 'scale(1.05)';
            item.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';
        });
        item.addEventListener('mouseout', () => {
            item.style.transform = 'scale(1)';
            item.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
        });
    });

    // إضافة تأثيرات العناصر عند التمرير (Fade in effect)
    const menuItems = document.querySelectorAll('.menu-item');

    function checkVisibility() {
        menuItems.forEach(item => {
            const rect = item.getBoundingClientRect();
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                item.classList.add('visible');
            } else {
                item.classList.remove('visible');
            }
        });
    }

    // إضافة التفاعل عند التمرير
    window.addEventListener('scroll', checkVisibility);

    // التحقق من العناصر عند تحميل الصفحة
    checkVisibility();

    // إضافة تأثير عند النقر على الأزرار في التنقل (لون الخلفية يتغير عند النقر)
    const navLinks = document.querySelectorAll('.navbar ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.forEach(nav => nav.style.backgroundColor = ''); // إزالة الخلفية السابقة
            link.style.backgroundColor = '#f39c12'; // إضافة خلفية جديدة عند النقر
        });
    });

    // تأثير التحريك عند التمرير للأطباق (انتقال العناصر للأعلى)
    items.forEach(item => {
        window.addEventListener('scroll', () => {
            const rect = item.getBoundingClientRect();
            if (rect.top >= 0 && rect.top <= window.innerHeight) {
                item.classList.add('fade-in');
            } else {
                item.classList.remove('fade-in');
            }
        });
    });

    // تغيير اللون عند التمرير على قسم الاتصال
    const contactSection = document.querySelector('.contact-section');

    contactSection.addEventListener('mouseenter', () => {
        contactSection.style.backgroundColor = '#f39c12';
    });

    contactSection.addEventListener('mouseleave', () => {
        contactSection.style.backgroundColor = '#34495e';
    });

    // تحريك الصور داخل عناصر القائمة
    document.querySelectorAll('.menu-item img').forEach(image => {
        image.addEventListener('mouseenter', () => {
            image.style.transform = 'scale(1.1)';
            image.style.transition = 'transform 0.3s ease';
        });
        image.addEventListener('mouseleave', () => {
            image.style.transform = 'scale(1)';
        });
    });
});
