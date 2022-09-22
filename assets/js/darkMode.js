function init() {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.getElementById("colorMode").checked = true;
  }
}

document.getElementById("colorMode").addEventListener('click', (e) => {
  if (document.body.classList.contains('dark')) {
    document.body.classList.remove("dark");
  } else {
    document.body.classList.add("dark");
  }
})