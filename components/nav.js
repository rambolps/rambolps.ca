class Nav extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {

        const page = this.getAttribute("page");
        const logo = this.getAttribute("logo");

        let generatedHtml = "";

        generatedHtml += `
    <nav class="navbar is-black" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
        <a class="navbar-item" href="/">
            <span class="logoImg">
                <img src="${logo}" alt="">
            </span>
        </a>

        <a role="button"" id="navBarBurger" class="navbar-burger"aria-label="menu" aria-expanded="false" data-target="navbarBurgerMenu">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
        </a>
    </div>
    <div id="navbarBurgerMenu" class="navbar-menu">
    `



        if (page == "home") {
            generatedHtml += `
            <div class="navbar-start">
            <a class="navbar-item" href="/">
                <strong>Home</strong>
            </a>

            <a class="navbar-item" href="/software">
                Software
            </a>

            <a class="navbar-item" href="/hardware">
                Hardware
            </a>
            </div>
            `
        }

        if (page == "software") {
            generatedHtml += `
        <div class="navbar-start">
        <a class="navbar-item" href="/">
            Home
        </a>

        <a class="navbar-item" href="/software">
            <strong>Software</strong>
        </a>

        <a class="navbar-item" href="/hardware">
            Hardware
        </a>
        </div>
        `
        }

        if (page == "hardware") {
            generatedHtml += `
        <div class="navbar-start">
        <a class="navbar-item" href="/">
            Home
        </a>

        <a class="navbar-item" href="/software">
            Software
        </a>

        <a class="navbar-item" href="/hardware">
            <strong>Hardware</strong>
        </a>
        </div>
        `
        }


        generatedHtml += `
        <div class="navbar-end">
            <div class="navbar-item">
                <div class="buttons">
                    <a class="button is-primary" href="https://3d.rambolps.ca/">
                        <strong>View 3D</strong>
                    </a>
                </div>
            </div>
        </div>
    </div>
    </nav>
    `

        this.innerHTML = generatedHtml;
    }
}

customElements.define('nav-component', Nav);


document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {

            // Get the target from the "data-target" attribute
            const target = el.dataset.target;
            console.log(target);
            const $target = document.getElementById(target);

            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            el.classList.toggle('is-active');
            $target.classList.toggle('is-active');

        });
    });

});
