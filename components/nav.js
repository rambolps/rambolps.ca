class Nav extends HTMLElement {
    constructor() {
      super();
    }

  connectedCallback() {

    const page = this.getAttribute("page");
    
    let generatedHtml = "";

    generatedHtml += `
    <nav class="navbar is-black" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
        <a class="navbar-item" href="https://rambolps.ca/">
            <span class="logoImg">
                <img src="/images/logo.jpg" alt="">
            </span>
        </a>

        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true">Test</span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
        </a>
    </div>
    <div class="navbar-menu">
    `
    

    
    if (page == "home") {
            generatedHtml +=`
            <div class="navbar-start">
            <a class="navbar-item" href="https://rambolps.ca/">
                <strong>Home</strong>
            </a>

            <a class="navbar-item" href="/software.html">
                Software
            </a>

            <a class="navbar-item" href="/hardware.html">
                Hardware
            </a>
            </div>
            `
    }

    if (page == "software") {
        generatedHtml +=`
        <div class="navbar-start">
        <a class="navbar-item" href="https://rambolps.ca/">
            Home
        </a>

        <a class="navbar-item" href="/software.html">
            <strong>Software</strong>
        </a>

        <a class="navbar-item" href="/hardware.html">
            Hardware
        </a>
        </div>
        `
    }

    if (page == "hardware") {
        generatedHtml +=`
        <div class="navbar-start">
        <a class="navbar-item" href="https://rambolps.ca/">
            Home
        </a>

        <a class="navbar-item" href="/software.html">
            Software
        </a>

        <a class="navbar-item" href="/hardware.html">
            <strong>Hardware</strong>
        </a>
        </div>
        `
    }

    
    generatedHtml += `
        <div class="navbar-end">
            <div class="navbar-item">
                <div class="buttons">
                    <a class="button is-primary" href="/index.html">
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
