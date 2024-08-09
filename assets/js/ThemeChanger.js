"use strict";
const parent = document.querySelector(".content")
  , newElement = document.createElement("img");
newElement.classList.add("button");
const secondChild = parent.children[1];
parent.insertBefore(newElement, secondChild);
const button = document.querySelector(".button")
  , mode = localStorage.getItem("theme") || "system"
  , themes = {
    "light-theme": {
        bodyClass: "light-theme",
        buttonClass: "dark-btn",
        contentBgColor: "rgba(255, 255, 255, 0.4)",
        contentColor: "black",
        elementBgColor: "rgba(0, 0, 0, 0.36)",
        buttonSrc: "assets/img/dark.png",
        bgSrc: "assets/img/2024-08-09-06-31-35.png"
    },
    "dark-theme": {
        bodyClass: "dark-theme",
        buttonClass: "light-btn",
        contentBgColor: "rgba(15, 15, 15, 0.6)",
        contentColor: "white",
        elementBgColor: "rgba(255, 255, 255, 0.361264)",
        buttonSrc: "assets/img/light.png",
        bgSrc: "assets/img/2024-08-09-06-31-27.png"
    }
};
function toggleTheme(e, t) {
    const o = themes[e];
    const l = document.querySelector(".background");
    l.style.backgroundImage = `url(${o.bgSrc})`,
    document.body.classList.remove("light-theme", "dark-theme"),
    document.body.classList.add(o.bodyClass),
    button.classList.remove("light-btn", "dark-btn"),
    button.classList.add(o.buttonClass);
    const n = document.querySelector(".content");
    n.style.backgroundColor = o.contentBgColor,
    n.style.color = o.contentColor,
    console.log(o.bgSrc),
    console.log()
    document.querySelectorAll(".element").forEach(e=>{
        e.style.backgroundColor = o.elementBgColor
    }
    ),
    button.setAttribute("src", o.buttonSrc),
    t || localStorage.setItem("theme", e)
}
switch (mode) {
case "light-theme":
    toggleTheme("light-theme", !0);
    break;
case "dark-theme":
    toggleTheme("dark-theme", !0);
    break;
default:
    var mql = window.matchMedia("(prefers-color-scheme: dark)");
    mql.matches ? toggleTheme("dark-theme", !0) : toggleTheme("light-theme", !0)
}
button.addEventListener("click", ()=>{
    document.body.classList.contains("light-theme") ? toggleTheme("dark-theme", !1) : toggleTheme("light-theme", !1)
}
),
document.querySelector(".content").style.transition = "all 0.148819171939s cubic-bezier(0, 0.18, 0.93, 0.21)";