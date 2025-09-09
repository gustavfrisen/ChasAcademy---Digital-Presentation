const btnTheme = document.getElementById('btnTheme');

let savedTheme = localStorage.getItem('theme') || 'light';
applyTheme(savedTheme)

btnTheme.addEventListener('click', () => {
    let newTheme = (localStorage.getItem('theme') === 'dark') ? 'light' : 'dark';
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
});

function applyTheme(theme)
{
    if (theme == 'light') {
        document.documentElement.style.setProperty('--bgCol', 'rgba(255,255,255,1)');
        document.documentElement.style.setProperty('--textCol', 'black');
        document.documentElement.style.setProperty('--linkCol', 'blue');
        document.documentElement.style.setProperty('--borderCol', 'black');
    } else {
        document.documentElement.style.setProperty('--bgCol', 'rgba(255,255,255,0.1)');
        document.documentElement.style.setProperty('--textCol', 'white');
        document.documentElement.style.setProperty('--linkCol', 'lightblue');
        document.documentElement.style.setProperty('--borderCol', 'white');
    }
}

const modal = document.getElementById("imgModal");
const modalImg = document.getElementById("modalImg");
const galleryImages = document.querySelectorAll(".sec_gallery img");

galleryImages.forEach(img => {
      img.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImg.src = img.src;
      });
    });

    // Close modal when clicking outside the image
    modal.addEventListener("click", (e) => {
      if (e.target !== modalImg) {
        modal.style.display = "none";
      }
    });