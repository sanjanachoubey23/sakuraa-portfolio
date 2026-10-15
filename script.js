
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        // Replace this with your actual email address.
        const myEmail = "sanjanachoubey06@gmail.com.com";

        const body =
            `Name: ${name}\n` +
            `Sender email: ${email}\n\n` +
            `${message}`;

        const mailto =
            `mailto:${myEmail}` +
            `?subject=${encodeURIComponent(subject)}` +
            `&body=${encodeURIComponent(body)}`;

        document.getElementById("formMessage").textContent =
            "Opening your email app...";

        window.location.href = mailto;
    });
}


/* ===== FALLING SAKURA PETALS ===== */

const petalContainer = document.createElement("div");
petalContainer.className = "petal-container";
petalContainer.setAttribute("aria-hidden", "true");
document.body.appendChild(petalContainer);

function createPetal() {
    const petal = document.createElement("span");

    petal.className = "sakura-petal";
    petal.textContent = ["🌸", "🌸", "🌸", "✿"][
        Math.floor(Math.random() * 4)
    ];

    petal.style.left = Math.random() * 100 + "vw";
    petal.style.animationDuration = (6 + Math.random() * 5) + "s";
    petal.style.fontSize = (14 + Math.random() * 12) + "px";
    petal.style.setProperty(
        "--drift",
        (Math.random() * 160 - 80) + "px"
    );

    petalContainer.appendChild(petal);

    petal.addEventListener("animationend", () => petal.remove());
}

setInterval(() => {
    if (!document.hidden && petalContainer.childElementCount < 15) {
        createPetal();
    }
}, 400);

/* ===== MOBILE NAVIGATION ===== */

const menuToggle = document.getElementById("menuToggle");
const siteNav = document.getElementById("siteNav");

if (menuToggle && siteNav) {
    menuToggle.addEventListener("click", function () {
        const isOpen = siteNav.classList.toggle("open");

        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );

        menuToggle.textContent = isOpen ? "✕" : "☰";
    });

    siteNav.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            siteNav.classList.remove("open");
            menuToggle.textContent = "☰";
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );
        });
    });
}
