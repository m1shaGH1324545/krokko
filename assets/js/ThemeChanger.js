"use strict";
const parent = document.querySelector(".content")
    , newElement = document.createElement("div");
newElement.classList.add("button");
const secondChild = parent.children[1];
parent.insertBefore(newElement, secondChild);
const button = document.querySelector(".button")
    , mode = localStorage.getItem("theme") || "system"
    , themes = {
    "light-theme": {
        attribute: "light-theme",
        buttonClass: "dark-btn",
        contentBgColor: "rgba(255, 255, 255, 0.4)",
        contentColor: "black",
        elementBgColor: "rgba(0, 0, 0, 0.36)",
        innerHTML: "<svg version=\"1.0\" xmlns=\"http://www.w3.org/2000/svg\"\n" +
            " width=\"512.000000pt\" height=\"512.000000pt\" viewBox=\"0 0 512.000000 512.000000\"\n" +
            " preserveAspectRatio=\"xMidYMid meet\">\n" +
            "\n" +
            "<g transform=\"translate(0.000000,512.000000) scale(0.100000,-0.100000)\"\n" +
            "fill=\"#000000\" stroke=\"none\">\n" +
            "<path d=\"M2497 5000 c-47 -14 -98 -60 -118 -104 -16 -35 -19 -67 -19 -207 0\n" +
            "-155 2 -169 23 -210 73 -138 281 -138 354 0 21 41 23 56 23 210 0 153 -2 170\n" +
            "-22 211 -31 62 -89 100 -159 105 -29 3 -67 0 -82 -5z\"/>\n" +
            "<path d=\"M879 4327 c-90 -48 -131 -156 -95 -250 24 -63 236 -271 291 -286 74\n" +
            "-20 136 -7 191 41 62 55 85 129 64 208 -10 37 -33 66 -124 159 -63 65 -128\n" +
            "121 -151 132 -56 26 -122 24 -176 -4z\"/>\n" +
            "<path d=\"M4065 4331 c-23 -11 -88 -67 -151 -132 -91 -93 -114 -122 -124 -159\n" +
            "-21 -79 2 -153 64 -208 55 -48 117 -61 191 -41 55 15 267 223 291 286 64 166\n" +
            "-110 329 -271 254z\"/>\n" +
            "<path d=\"M2320 4045 c-631 -108 -1118 -576 -1250 -1200 -30 -143 -37 -358 -16\n" +
            "-507 55 -394 261 -752 571 -992 405 -315 930 -406 1415 -245 403 134 744 444\n" +
            "911 830 184 423 170 894 -38 1302 -197 387 -557 676 -973 782 -176 45 -452 58\n" +
            "-620 30z m460 -411 c414 -85 746 -398 857 -809 24 -91 27 -117 27 -280 1 -166\n" +
            "-1 -188 -27 -280 -30 -113 -115 -293 -177 -375 -139 -187 -347 -337 -558 -404\n" +
            "-230 -72 -454 -72 -684 0 -211 67 -419 217 -558 404 -62 82 -147 262 -177 375\n" +
            "-26 92 -28 114 -27 280 0 162 3 190 26 277 156 575 722 929 1298 812z\"/>\n" +
            "<path d=\"M220 2738 c-26 -14 -57 -41 -75 -66 -26 -38 -30 -52 -30 -112 0 -60\n" +
            "4 -74 30 -112 18 -25 49 -53 75 -66 43 -22 54 -23 221 -20 174 3 176 3 216 31\n" +
            "123 85 114 275 -16 344 -41 21 -56 23 -210 23 -153 0 -170 -2 -211 -22z\"/>\n" +
            "<path d=\"M4479 2737 c-29 -16 -54 -40 -74 -72 -61 -98 -27 -229 74 -282 41\n" +
            "-21 56 -23 210 -23 153 0 170 2 211 23 26 13 57 40 75 65 26 38 30 52 30 112\n" +
            "0 60 -4 74 -30 112 -18 25 -49 52 -75 66 -41 20 -58 22 -211 22 -154 0 -169\n" +
            "-2 -210 -23z\"/>\n" +
            "<path d=\"M1066 1325 c-50 -18 -250 -213 -277 -270 -57 -123 26 -270 160 -283\n" +
            "86 -8 123 14 253 146 95 96 118 125 128 162 21 79 -2 153 -64 208 -57 50 -128\n" +
            "63 -200 37z\"/>\n" +
            "<path d=\"M3916 1325 c-99 -35 -154 -142 -126 -245 10 -37 33 -66 124 -159 63\n" +
            "-65 128 -121 151 -132 161 -75 335 88 271 254 -24 63 -236 271 -291 286 -52\n" +
            "14 -81 13 -129 -4z\"/>\n" +
            "<path d=\"M2499 737 c-58 -22 -96 -54 -119 -102 -20 -41 -21 -57 -18 -218 3\n" +
            "-171 3 -174 31 -216 32 -49 110 -91 167 -91 57 0 135 42 167 91 28 42 28 45\n" +
            "31 218 3 169 2 178 -21 221 -43 82 -156 127 -238 97z\"/>\n" +
            "</g>\n" +
            "</svg>\n",
        bgSrc: "assets/img/2024-08-09-06-31-35.png"
    },
    "dark-theme": {
        attribute: "dark-theme",
        buttonClass: "light-btn",
        contentBgColor: "rgba(15, 15, 15, 0.6)",
        contentColor: "white",
        elementBgColor: "rgba(255, 255, 255, 0.361264)",
        innerHTML: `<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M2104 5105 c-283 -52 -650 -196 -894 -351 -545 -346 -935 -863 -1108
-1471 -223 -779 -70 -1602 417 -2248 380 -506 927 -849 1561 -980 1124 -233
2290 315 2819 1325 99 189 221 519 221 596 0 35 -42 74 -80 74 -34 0 -38 -4
-152 -131 -215 -244 -595 -463 -957 -553 -312 -78 -671 -80 -981 -6 -803 193
-1398 829 -1535 1640 -23 134 -31 404 -16 526 71 580 350 1076 793 1408 77 57
97 91 79 135 -13 29 -48 52 -79 50 -9 -1 -49 -7 -88 -14z m-280 -287 c-291
-300 -501 -729 -569 -1164 -22 -141 -30 -417 -16 -544 48 -425 192 -787 447
-1120 78 -103 282 -308 379 -382 401 -305 865 -462 1370 -462 218 0 346 16
553 69 282 72 567 212 790 387 35 27 65 48 67 46 2 -2 -18 -49 -45 -105 -274
-581 -781 -1033 -1395 -1245 -279 -97 -491 -132 -795 -132 -227 -1 -324 9
-525 51 -811 169 -1481 745 -1776 1530 -324 859 -105 1863 550 2521 220 221
488 404 768 523 110 47 221 87 243 88 8 1 -13 -27 -46 -61z"/>
</g>
</svg>
`,
        bgSrc: "assets/img/2024-08-09-06-31-27.png"
    }
};
function toggleTheme(e, t) {
    const o = themes[e];
    const l = document.querySelector(".background");
    l.style.backgroundImage = `url(${o.bgSrc})`,
        document.documentElement.removeAttribute("light-theme"),
        document.documentElement.removeAttribute("dark-theme"),
        document.documentElement.setAttribute(o.attribute, ""),
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
        button.innerHTML = o.innerHTML;
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
        document.documentElement.hasAttribute("light-theme") ? toggleTheme("dark-theme", !1) : toggleTheme("light-theme", !1)
    }
),
    document.querySelector(".content").style.transition = "all 0.148819171939s cubic-bezier(0, 0.18, 0.93, 0.21)";
