// ================= Load Header =================
fetch('header.html')
  .then(res => res.text())
  .then(html => {
    document.body.insertAdjacentHTML('afterbegin', html);
    initHeader(); // header load ہونے کے بعد init
  })
  .catch(err => console.error("Header load failed", err));

// ================= Load Footer =================
fetch('footer.html')
  .then(res => res.text())
  .then(html => document.body.insertAdjacentHTML('beforeend', html))
  .catch(err => console.error("Footer load failed", err));

// ================= Header Init =================
function initHeader() {
  const menuToggle = document.getElementById("menuToggle");
  const navBar = document.getElementById("navBar");
  const navLinks = document.querySelectorAll(".nav-bar a");

  // ---------- Hamburger toggle ----------
  if (menuToggle && navBar) {
    menuToggle.addEventListener("click", () => {
      menuToggle.classList.toggle("active");
      navBar.classList.toggle("active");
    });
  }

  // ---------- Active nav link ----------
  let currentPage = window.location.pathname.split("/").pop();
  if (!currentPage) currentPage = "index.html";

  navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }

    // click pe active
    link.addEventListener("click", () => {
      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    });
  });
}
