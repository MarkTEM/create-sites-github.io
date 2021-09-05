function preloader() {
    $(() => {
        setInterval(() => {

          let p = $('.preloader');

          p.css('opacity', 0);

          setInterval(
            () => p.remove(),
            parseInt(p.css('--duration')) *1000
          );

        }, 1000);

    });
}

// preloader();

setInterval(() => preloader(), 0);



if (!localStorage.theme) localStorage.theme = "light"
document.body.className = localStorage.theme
DarkMode.innerText = document.body.classList.contains("dark") ? "Светлая тема" : "Тёмная тема"


DarkMode.onclick = () => {
    document.body.classList.toggle("dark")
    DarkMode.innerText = document.body.classList.contains("dark") ? "Светлая тема" : "Тёмная тема"
    localStorage.theme = document.body.className || "light"
}