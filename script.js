document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menu-toggle");
    const sideMenu = document.getElementById("side-menu");
    const addManhwaButton = document.getElementById("add-manhwa-button");
    const uploadModal = document.getElementById("upload-modal");
    const closeModal = document.querySelector(".close");
    const fileInput = document.getElementById("file-input");
    const uploadButton = document.getElementById("upload-button");
    const searchInput = document.getElementById("search-input");
    const searchButton = document.getElementById("search-button");
    const searchResults = document.getElementById("search-results");

    menuToggle.addEventListener("click", function() {
        sideMenu.classList.toggle("show");
        menuToggle.classList.toggle("active");
    });

    addManhwaButton.addEventListener("click", function() {
        uploadModal.style.display = "block";
    });

    closeModal.addEventListener("click", function() {
        uploadModal.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target === uploadModal) {
            uploadModal.style.display = "none";
        }
    });

    // التحقق من نوع الملف
    uploadButton.addEventListener("click", function() {
        const allowedExtensions = /(\.zip|\.rar|\.pdf|\.jpeg|\.png)$/i;
        const filePath = fileInput.value;

        if (!allowedExtensions.exec(filePath)) {
            alert('يرجى اختيار ملف بصيغة صحيحة: .zip, .rar, .pdf, .jpeg, .png');
            fileInput.value = ''; // مسح المدخلات
            return false;
        } else {
            alert('تم رفع الملف بنجاح!'); // هنا يتم رفع الملف للخادم الحقيقي
        }
    });

    // البحث والفلترة
    searchButton.addEventListener("click", function() {
        const query = searchInput.value.toLowerCase();
        // إضافة الأكواد لتصفية النتائج حسب البحث
        searchResults.innerHTML = `<p>نتائج البحث عن: ${query}</p>`; // يمكنك تحسين طريقة العرض كما تفضلين
    });
});

// بيانات المانهوا
const mangas = [
  { title: "Manga 1", description: "Description of Manga 1" },
  { title: "Manga 2", description: "Description of Manga 2" },
  // اضيفي هنا باقي المانهوا بتاعتك
];

// إعدادات البحث باستخدام Fuse.js
const options = {
  keys: ['title', 'description'], // البحث حسب العنوان والوصف
  threshold: 0.3 // درجة التشابه المطلوبة (0 = مطابق تمامًا، 1 = مطابق بسيط)
};

const fuse = new Fuse(mangas, options);

// تنفيذ البحث
function searchManga(query) {
  const result = fuse.search(query);
  // عرض النتائج
  console.log(result.map(res => res.item));
  return result.map(res => res.item);
}

// مثال للاستخدام
const searchInput = document.querySelector('#search-input');
searchInput.addEventListener('input', (event) => {
  const results = searchManga(event.target.value);
  // عرض النتائج في الصفحة
});
