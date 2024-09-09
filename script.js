// scripts.js

document.addEventListener('DOMContentLoaded', () => {

    console.log("JavaScript Loaded!");

    // ممكن تضيفي أكواد JavaScript هنا للتفاعل مع الموقع

});
// function للتحقق من المستخدم اللي فتح الصفحة
function checkUser() {
    // هنا هتتحققي من المستخدم عن طريق اسم المستخدم أو أي طريقة تحبيها
    const currentUser = "Kholoud"; // ده مجرد مثال

    // لو اسم المستخدم هو 'Kholoud'، خليه يظهر الزر
    if (currentUser === "Kholoud") {
        document.getElementById("add-manhwa-button").style.display = "block";
    }
}

// تشغيل function عند تحميل الصفحة
window.onload = checkUser;

// إضافة وظيفة زر الإضافة لإنشاء صفحة جديدة
document.getElementById("add-manhwa-button").addEventListener("click", function() {
    // هنا تقدري تضيفي أكواد لإنشاء صفحة HTML جديدة أو تحويل المستخدم لصفحة الإضافة
    alert("سيتم إضافة مانهوا جديدة!"); // مجرد تنبيه مؤقت
});
