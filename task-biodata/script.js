function toggleDarkMode() {
    const body = document.body;
    const isLight = body.classList.toggle("light-mode");
    localStorage.setItem("theme", isLight ? "light" : "dark");
}

document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("theme") === "light") {
        document.body.classList.add("light-mode");

        document.querySelectorAll('a').forEach(a => {
            a.classList.toggle("light-mode");
        });

        document.querySelectorAll('input').forEach(button => {
            button.classList.toggle("light-mode");
        });
        document.querySelectorAll('textarea').forEach(button => {
            button.classList.toggle("light-mode");
        });
    }else{
        document.body.classList.remove("light-mode");
        document.querySelectorAll('a').forEach(a => {
            a.classList.remove("light-mode");
        });

        document.querySelectorAll('input').forEach(button => {
            button.classList.remove("light-mode");
        });
        document.querySelectorAll('textarea').forEach(button => {
            button.classList.remove("light-mode");
        });
    }
});