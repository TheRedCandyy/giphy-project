class NavigationView {
  constructor() {
    const parentElement = document.querySelector('.navbar');
    const navbarItems = document.querySelectorAll('.navbar--item');
    const tabs = [
      document.querySelector('.random'),
      document.querySelector('.finder'),
      document.querySelector('.trending'),
    ];

    parentElement.addEventListener('click', function (e) {
      const navbarItem = e.target.closest('.navbar--item');

      if (!navbarItem) return;

      navbarItems.forEach(navbarItem =>
        navbarItem.classList.remove('navbar--item-active')
      );
      tabs.forEach(tab => tab.classList.remove('active'));

      navbarItem.classList.add('navbar--item-active');

      const activeTab = document.querySelector(`.${navbarItem.dataset.tab}`);

      activeTab.classList.add('active');
    });
  }
}

export default new NavigationView();
