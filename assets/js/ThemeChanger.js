document.addEventListener("DOMContentLoaded", ()=>{
    const parent = document.querySelector(".content");
    const newElement = document.createElement("img");
    newElement.classList.add("button");
    const secondChild = parent.children[1];
    parent.insertBefore(newElement, secondChild);
    const button = document.querySelector(".button");
    var mode = localStorage.getItem("theme") || "system";
    if (mode === "light-theme") {
        toggleTheme("light-theme", true);
    } else if (mode === "dark-theme") {
        toggleTheme("dark-theme", true);
    } else {
        var mql = window.matchMedia('(prefers-color-scheme: dark)');
        if (mql.matches) {
            toggleTheme("dark-theme", true);
        }
        else {
            toggleTheme("light-theme", true)
        }
    }
    button.addEventListener("click", ()=>{
        if (document.body.classList.contains("light-theme")) {
            toggleTheme("dark-theme", false);
        } else {
            toggleTheme("light-theme", false);
        }
    }
    );
    document.querySelector(".content").style.transition = "all 0.148819171939s cubic-bezier(0, 0.18, 0.93, 0.21)";
    function toggleTheme(theme, isMql) {
        document.body.classList.remove("light-theme");
        document.body.classList.remove("dark-theme");
        document.body.classList.add(theme);
        button.classList.remove("light-btn");
        button.classList.remove("dark-btn");
        button.classList.add(theme === "light-theme" ? "dark-btn" : "light-btn");
        const content = document.querySelector('.content');
        content.style.backgroundColor = theme === "light-theme" ? "rgba(255, 255, 255, 0.8)" : "rgba(15, 15, 15, 0.8)";
        content.style.color = theme === "light-theme" ? "black" : "white";
        const el = document.querySelectorAll(".element");
        el.forEach(di=>{
            di.style.backgroundColor = theme === "light-theme" ? "rgba(0, 0, 0, 0.36)" : "rgba(255, 255, 255, 0.361264)"
        }
        );
        button.setAttribute("src", theme === "light-theme" ? "assets/img/dark.png" : "assets/img/light.png");
        switch (isMql) {
            case true:
                break;
            case false:
                localStorage.setItem("theme", theme);
                break;
        }
    }
}
)
