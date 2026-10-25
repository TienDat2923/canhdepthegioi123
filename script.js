
document.addEventListener("DOMContentLoaded", function () {
    const galleryImages = document.querySelectorAll(".gallery-grid img");

    galleryImages.forEach(function (image) {
        image.addEventListener("mouseenter", function () {
            image.setAttribute("data-active", "true");
        });

        image.addEventListener("mouseleave", function () {
            image.removeAttribute("data-active");
        });

        image.addEventListener("focus", function () {
            image.setAttribute("data-active", "true");
        });

        image.addEventListener("blur", function () {
            image.removeAttribute("data-active");
        });
    });

    document.addEventListener("keydown", function (event) {
        const currentImage = document.activeElement;

        if (!currentImage.matches(".gallery-grid img")) {
            return;
        }

        const images = Array.from(galleryImages);
        const currentIndex = images.indexOf(currentImage);
        let nextIndex = currentIndex;

        if (event.key === "ArrowRight" || event.key === "ArrowDown") {
            nextIndex = (currentIndex + 1) % images.length;
        } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
            nextIndex = (currentIndex - 1 + images.length) % images.length;
        } else {
            return;
        }

        event.preventDefault();
        images[nextIndex].focus();
    });
});
