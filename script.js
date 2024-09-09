// اظهار زر اضافة المانهوا
document.addEventListener("DOMContentLoaded", function () {
    // Check if the user is an admin (you can replace this with your own logic)
    const isAdmin = true; // تغيير دي حسب ما تحبي

    if (isAdmin) {
        document.getElementById("add-manhwa-button").style.display = "block";
    }
});
