class Project extends HTMLElement {
    constructor() {
      super();
    }

  connectedCallback() {

    const title = this.getAttribute("title");
    const desc = this.getAttribute("desc");
    const img = this.getAttribute("img");
    const link = this.getAttribute("link");

    
    let generatedHtml = `
    <div class="project">
    <a href="${link}">
    <div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img
        src="${img}"
        alt="Placeholder image"
      />
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-content">
        <p class="title is-4">${title}</p>
      </div>
    </div>

    <div class="content">
      ${desc}
    </div>
  </div>
</div>
</a>
</div>
    `;

    this.innerHTML = generatedHtml;
  }
}

  customElements.define('project-component', Project);
