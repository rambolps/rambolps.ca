class Footer extends HTMLElement {
    constructor() {
      super();
    }

  connectedCallback() {
    
    let generatedHtml = `
    
    <footer class="footer">
      <div class="content">
        <section class="section">
          <h2>Get In Touch</h2>
          <div>
          <a href="https://www.linkedin.com/in/ryan-rambali-0834061a2/"><span>Linkedin</span></a>
          <a href="https://github.com/rambolps/"><span>Github</span></a>
          <a href="mailto:ryan@rambolps.ca"><span>Mail</span></a>
          </div>
          <br>
          <p>&copy; Ryan Rambali</p>
        </section>
      </div>
    </footer>
    `;

    this.innerHTML = generatedHtml;
  }
}

  customElements.define('footer-component', Footer);
