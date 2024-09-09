document.addEventListener("DOMContentLoaded", function () {
    // Check if the user is an admin (you can replace this with your own logic)
    const isAdmin = true; // تغيير دي حسب ما تحبي

    if (isAdmin) {
        document.getElementById("add-manhwa-button").style.display = "block";
    }

    // Event listener for the "إضافة مانهوا" button
    document.getElementById("add-manhwa-button").addEventListener("click", function() {
        document.getElementById("upload-form").style.display = "block";
    });

    // Event listener for the "رفع الملفات" button
    document.getElementById("submit-upload").addEventListener("click", function() {
        const fileInput = document.getElementById("file-input");
        const files = fileInput.files;
        if (files.length > 0) {
            alert("تم اختيار " + files.length + " ملف.");
            // هنا يمكنك إضافة كود لمعالجة الملفات إذا لزم الأمر
        } else {
            alert("يرجى اختيار ملف للرفع.");
        }
    });
});
