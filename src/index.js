// index.js
import "./styles.css";

import { createHomePageHtml } from "./Pages/home.js";
import { createContactPageHtml } from "./Pages/contact.js";
import { createMenuPageHtml } from "./Pages/menu.js";


const contentDiv = document.getElementById("content")
const homeButton = document.getElementById("btnHome");
const menuButton = document.getElementById("btnMenu");
const contactButton = document.getElementById("btnContact");

homeButton.addEventListener("click", () => {
    contentDiv.innerHTML = "";
    contentDiv.appendChild(createHomePageHtml())
});

menuButton.addEventListener("click", () => {
    contentDiv.innerHTML = "";
    contentDiv.appendChild(createMenuPageHtml())
});

contactButton.addEventListener("click", () => {
    contentDiv.innerHTML = "";
    contentDiv.appendChild(createContactPageHtml())
});



console.log(greeting);
