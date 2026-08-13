/* =====================================================
   MARI TÁ VIAJANDO
   JAVASCRIPT PRINCIPAL
   ===================================================== */


/* =========================
   MENU MOBILE
   ========================= */

const menuToggle =
    document.getElementById("menuToggle");

const menu =
    document.getElementById("menu");


if (menuToggle && menu) {

    menuToggle.addEventListener(
        "click",
        function () {

            menu.classList.toggle("active");

            const aberto =
                menu.classList.contains("active");

            menuToggle.setAttribute(
                "aria-expanded",
                aberto
            );

            menuToggle.textContent =
                aberto ? "✕" : "☰";

        }
    );


    /* Fecha o menu ao clicar em um link */

    const links =
        menu.querySelectorAll("a");


    links.forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                menu.classList.remove("active");

                menuToggle.textContent = "☰";

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }
        );

    });

}


/* =========================
   HEADER AO ROLAR
   ========================= */

const header =
    document.querySelector(".header");


if (header) {

    window.addEventListener(
        "scroll",
        function () {

            if (window.scrollY > 30) {

                header.style.boxShadow =
                    "0 5px 20px rgba(15,23,42,0.08)";

            } else {

                header.style.boxShadow =
                    "none";

            }

        }
    );

}


/* =========================
   ANIMAÇÃO DOS CARDS
   ========================= */

const animatedItems =
    document.querySelectorAll(
        ".article-card, .category-card"
    );


if ("IntersectionObserver" in window) {

    const observer =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(
                    function (entry) {

                        if (entry.isIntersecting) {

                            entry.target.style.opacity = "1";

                            entry.target.style.transform =
                                "translateY(0)";

                            observer.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.1
            }
        );


    animatedItems.forEach(
        function (item) {

            item.style.opacity = "0";

            item.style.transform =
                "translateY(15px)";

            item.style.transition =
                "opacity 0.5s ease, transform 0.5s ease";

            observer.observe(item);

        }
    );

}


/* =========================
   FORMULÁRIO DE CONTATO
   ========================= */

const contactForm =
    document.getElementById(
        "contactForm"
    );


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            alert(
                "Mensagem enviada! Em breve entraremos em contato."
            );

            contactForm.reset();

        }
    );

}


/* =========================
   NEWSLETTER
   ========================= */

const newsletterForm =
    document.querySelector(
        ".newsletter-form"
    );


if (newsletterForm) {

    newsletterForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            const email =
                newsletterForm.querySelector(
                    "input[type='email']"
                );


            if (
                email &&
                email.value.trim() !== ""
            ) {

                alert(
                    "Cadastro realizado com sucesso!"
                );

                newsletterForm.reset();

            }

        }
    );

}


/* =========================
   LINKS DE AFILIADOS
   ========================= */

const affiliateLinks =
    document.querySelectorAll(
        ".affiliate-link"
    );


affiliateLinks.forEach(
    function (link) {

        link.addEventListener(
            "click",
            function () {

                /*
                 * Os links reais de afiliado
                 * serão colocados posteriormente.
                 */

                if (
                    link.getAttribute("href") === "#"
                ) {

                    alert(
                        "O link desta oferta ainda será configurado."
                    );

                }

            }
        );

    }
);


/* =========================
   ANO AUTOMÁTICO
   ========================= */

const yearElements =
    document.querySelectorAll(
        ".current-year"
    );


yearElements.forEach(
    function (element) {

        element.textContent =
            new Date().getFullYear();

    }
);


/* =========================
   VOLTAR AO TOPO
   ========================= */

const backTop =
    document.querySelector(
        ".back-top"
    );


if (backTop) {

    window.addEventListener(
        "scroll",
        function () {

            if (window.scrollY > 500) {

                backTop.classList.add(
                    "show"
                );

            } else {

                backTop.classList.remove(
                    "show"
                );

            }

        }
    );


    backTop.addEventListener(
        "click",
        function () {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );

  }
