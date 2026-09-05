/* =========================================
   PHOTOS
========================================= */

const photos = [
   {
      src: "https://geoidstudycentre.pages.dev/Image%201.jpeg",
      title: "Teachers' Day 2026" },
   {
      src: "https://geoidstudycentre.pages.dev/Image%201.jpeg",
      title: "Teachers' Day 2026" },
   
    {
        src: "https://ik.imagekit.io/18itosdvc/P-1.jpeg",
        title: "Photo GSC"
    },

    {
        src: "https://ik.imagekit.io/18itosdvc/P%20-%202.jpeg",
        title: "Photo GSC"
    },

    {
        src: "https://ik.imagekit.io/18itosdvc/P-3.jpeg",
        title: "Photo GSC"
    },

    {
        src: "https://ik.imagekit.io/18itosdvc/P-4.jpeg",
        title: "Photo GSC"
    }

];


/* =========================================
   VIDEOS
========================================= */

const videos = [

    {
        src: "https://ik.imagekit.io/18itosdvc/1%20no.mp4",
        title: "Video GSC"
    },
];


/* =========================================
   PHOTO GALLERY
========================================= */

const photoGallery = document.getElementById("photoGallery");
const photoCount = document.getElementById("photoCount");

function loadPhotos() {

    photoGallery.innerHTML = "";

    photoCount.textContent =
        `${photos.length} ${photos.length === 1 ? "Photo" : "Photos"}`;

    if (photos.length === 0) {

        photoGallery.innerHTML = `
            <div class="empty-message">
                <i class="fa-regular fa-images"></i>
                <p>No photos available</p>
            </div>
        `;

        return;
    }


    photos.forEach((photo) => {

        const card = document.createElement("div");

        card.className = "photo-card";

        card.innerHTML = `
            <img
                src="${photo.src}"
                alt="${photo.title}"
                loading="lazy"
            >
        `;

        card.addEventListener("click", () => {

            openImage(
                photo.src,
                photo.title
            );

        });

        photoGallery.appendChild(card);

    });

}


/* =========================================
   VIDEO GALLERY
========================================= */

const videoGallery = document.getElementById("videoGallery");
const videoCount = document.getElementById("videoCount");

function loadVideos() {

    videoGallery.innerHTML = "";

    videoCount.textContent =
        `${videos.length} ${videos.length === 1 ? "Video" : "Videos"}`;

    if (videos.length === 0) {

        videoGallery.innerHTML = `
            <div class="empty-message">
                <i class="fa-solid fa-video-slash"></i>
                <p>No videos available</p>
            </div>
        `;

        return;
    }


    videos.forEach((video) => {

        const card = document.createElement("div");

        card.className = "video-card";

        card.innerHTML = `

            <div class="video-thumbnail">

                <video
                    src="${video.src}"
                    preload="metadata"
                ></video>

                <div class="play-button">
                    <i class="fa-solid fa-play"></i>
                </div>

            </div>

            <div class="video-title">
                ${video.title}
            </div>

        `;


        card.querySelector(".video-thumbnail")
            .addEventListener("click", () => {

                openVideo(
                    video.src,
                    video.title
                );

            });


        videoGallery.appendChild(card);

    });

}


/* =========================================
   TABS
========================================= */

const tabs = document.querySelectorAll(".tab");

const sections = document.querySelectorAll(".media-section");


tabs.forEach((tab) => {

    tab.addEventListener("click", () => {

        const target = tab.dataset.tab;


        tabs.forEach((item) => {

            item.classList.remove("active");

        });


        sections.forEach((section) => {

            section.classList.remove("active");

        });


        tab.classList.add("active");

        document
            .getElementById(target)
            .classList.add("active");

    });

});


/* =========================================
   IMAGE MODAL
========================================= */

const imageModal =
    document.getElementById("imageModal");

const modalImage =
    document.getElementById("modalImage");

const imageCaption =
    document.getElementById("imageCaption");


function openImage(src, title) {

    modalImage.src = src;

    imageCaption.textContent = title;

    imageModal.classList.add("show");

}


/* Close Image */

document
    .getElementById("closeImage")
    .addEventListener("click", () => {

        imageModal.classList.remove("show");

        modalImage.src = "";

    });


/* =========================================
   VIDEO MODAL
========================================= */

const videoModal =
    document.getElementById("videoModal");

const modalVideo =
    document.getElementById("modalVideo");

const videoCaption =
    document.getElementById("videoCaption");


function openVideo(src, title) {

    modalVideo.src = src;

    videoCaption.textContent = title;

    videoModal.classList.add("show");

    modalVideo.play();

}


/* Close Video */

document
    .getElementById("closeVideo")
    .addEventListener("click", closeVideo);


function closeVideo() {

    modalVideo.pause();

    modalVideo.src = "";

    videoModal.classList.remove("show");

}


/* =========================================
   CLOSE MODAL BY CLICKING OUTSIDE
========================================= */

imageModal.addEventListener("click", (e) => {

    if (e.target === imageModal) {

        imageModal.classList.remove("show");

        modalImage.src = "";

    }

});


videoModal.addEventListener("click", (e) => {

    if (e.target === videoModal) {

        closeVideo();

    }

});


/* =========================================
   ESC KEY
========================================= */

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        imageModal.classList.remove("show");

        modalImage.src = "";

        closeVideo();

    }

});


/* =========================================
   INITIAL LOAD
========================================= */

loadPhotos();

loadVideos();
