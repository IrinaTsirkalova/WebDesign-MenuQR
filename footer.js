class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
<footer class="footer">
    <div class="d-flex footer-container flex-row justify-content-around  flex-grow-1">
      <div class="p-2 ">
        <img class="logo-img-header" src="resources/logo-footer.png" alt="Logo">
      </div>
      <div class="p-2 menu-footer">
        <a href="#home">Начало</a>
        <a href="#restaurants">Ресторанти</a>
        <a href="#menus">Менюта</a>
        <a href="#payments">Сметки</a>
      </div>
      <div class="p-2 copyright-txt">
        &copy; 2022 QRMENU Всички права запазени
      </div>
    </div>

  </footer>
  `;
    }
  }
  
  customElements.define('footer-menu', Footer);