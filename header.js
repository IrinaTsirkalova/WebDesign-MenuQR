class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <nav class="navbar navbar-expand-lg">
      <div class="d-flex flex-row justify-content-around flex-grow-1">
        <div class="p-2 ">
          <img class="logo-img-header" src="resources/logo-header.png" alt="Logo">
        </div>
        <div class="p-2 menu ">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="#home">Начало</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#restaurants">Ресторанти</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#menus">Менюта</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#payments">Сметки</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="p-2 logout-btn">
          <button type="button" class="btn btn-success">Изход</button>
        </div>
  
      </div>
    </nav>
      `;
    }
  }
  
  customElements.define('header-nav-menu', Header);