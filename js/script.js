var typed = new Typed(".typing", {
    strings: ["Web Developer", "Backend Developer", "Full Stack Developer", "API builder"],
    typeSpeed: 100,
    loop: true,
});

const nav = document.querySelector(".nav");
const navList = nav.querySelectorAll("li");
const allSection = document.querySelectorAll(".section");
const totalNavList = navList.length;
const totalSection = allSection.length;

for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function () {
        for (let j = 0; j < totalNavList; j++) {
            if (navList[j].querySelector("a").classList.contains("active")) {
                allSection[j].classList.add("back-section");
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active");
        showSection(this);
        if (window.innerWidth < 1200) {
            asideSectionTogglerBtn();
        }
    });
}

function showSection(element) {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active");
}

function updateNav(element) {
    for (let i = 0; i < totalNavList; i++) {
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
            navList[i].querySelector("a").classList.add("active");
        }
    }
}

const btnElements = document.querySelectorAll(".btn");
btnElements.forEach(function (btn) {
    if (btn.textContent === "Hire Me") {
        btn.addEventListener("click", function () {
            const sectionIndex = this.getAttribute("data-section-index");
            console.log(sectionIndex);
            showSection(this);
            updateNav(this);
        });
    }
});

const navTogglerBtn = document.querySelector(".nav-toggler");
const aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
    asideSectionTogglerBtn();
});

function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.toggle("open");
    }
}

emailjs.init("4LbIf0R9z_6Ari5qQ");

document.addEventListener("DOMContentLoaded", function () {
    const sendMessageButton = document.getElementById("sendMessageButton");

    sendMessageButton.addEventListener("click", function () {
        const name = document.querySelector('input[placeholder="Name"]').value;
        const email = document.querySelector('input[placeholder="Email"]').value;
        const subject = document.querySelector('input[placeholder="Subject"]').value;
        const message = document.querySelector('textarea[placeholder="Message"]').value;

        const statusMessage = document.getElementById("statusMessage");
        statusMessage.textContent = "Sending...";

        emailjs.send("service_5snpis9", "template_brrvugr", {
            name: name,
            email: email,
            subject: subject,
            message: message,
        }).then(
            function (response) {
                console.log("Email sent successfully:", response);
                statusMessage.textContent = "Sent!";
                alert("Message sent successfully!");
            },
            function (error) {
                console.error("Email sending failed:", error);
                statusMessage.textContent = "Sending failed. Please try again later.";
                alert("Message sending failed. Please try again later.");
            }
        );

        return false;
    });
});
