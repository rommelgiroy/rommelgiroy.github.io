if (window.location.hash) {
  // Check if there is a hash in the URL
  var newURL = window.location.href.replace(window.location.hash, "");

  // Replace the current state in the history without triggering a page refresh
  history.replaceState({}, document.title, newURL);

  // Alternatively, you can use the following line to remove the hash without updating the URL in the browser
  // history.replaceState(null, null, window.location.pathname);
}

// toggle icon navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

// scroll sections

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      // active navbar Links
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });

      sec.classList.add("show-animate");
    } else {
      sec.classList.remove("show-animate");
    }
  });

  // sticky header
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  // remove toggle icon and navbar when click navbar Links (scroll)
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");

  // animation footer on scroll
  let footer = document.querySelector("footer");
  footer.classList.toggle(
    "show-animate",
    this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight
  );
  subsen;
};

//open modal popup and playe video

const videoPlayer = document.getElementById("videoPlayer");
const myVideo = document.getElementById("myVideo");

function stopVideo() {
  videoPlayer.style.display = "none";
}

function playVideo(file) {
  myVideo.src = file;
  videoPlayer.style.display = "block";
}
