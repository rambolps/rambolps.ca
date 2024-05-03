class Footer extends HTMLElement {
    constructor() {
      super();
    }

  connectedCallback() {
    
    let generatedHtml = `
    
    <footer class="footer">
      <div class="content">
        <section class="section">
        <div class="container">
          <h2>Get In Touch</h2>
          <div>
          <a href="https://www.linkedin.com/in/ryan-rambali-0834061a2/"><span class="ConIcons"><img src="/images/icons/linkedin (Custom).png" alt="linkedin"></span></a>
          <a href="https://github.com/rambolps/"><span class="ConIcons"><img src="/images/icons/github (Custom).png" alt="GitHub"></span></a>
          <a href="mailto:ryan@rambolps.ca"><span class="ConIcons"><img src="/images/icons/mail (Custom).png" alt="Mail"></span></a>
          </div>
          <br>
          <p>&copy; Ryan Rambali</p>
          </div>
        </section>
      </div>
    </footer>
    `;

    this.innerHTML = generatedHtml;
  }
}

  customElements.define('footer-component', Footer);
