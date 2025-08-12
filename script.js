function openLightbox(project) {
  const lightbox = document.getElementById("lightbox");
  const image = document.getElementById("lightbox-img");

  if (project === "project1") {
    image.src = "images/project1b.jpg";
  } else if (project === "project2") {
    image.src = "images/project2b.jpg";
  }

  lightbox.classList.remove("hidden");
}

function closeLightbox() {
  document.getElementById("lightbox").classList.add("hidden");
}
