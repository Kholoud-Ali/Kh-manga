document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menu-toggle");
    const sideMenu = document.getElementById("side-menu");
    const addManhwaButton = document.getElementById("add-manhwa-button");
    const uploadModal = document.getElementById("upload-modal");
    const closeModal = document.querySelector(".close");

    menuToggle.addEventListener("click", function() {
        sideMenu.classList.toggle("show");
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
});
