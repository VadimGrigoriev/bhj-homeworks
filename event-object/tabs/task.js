const tabs = Array.from(document.querySelectorAll('.tab'));
const tabContent = Array.from(document.querySelectorAll('.tab__content'));


function makeActive() {
   tabs.forEach(item => {
    item.addEventListener('click', () => {
      remove()
      item.classList.add('tab_active');
      let index = tabs.indexOf(item);
      console.log(index);
      tabContent[index].classList.add('tab__content_active');
    })
  })
}

function remove() {
  tabs.forEach((tab) => {
    tab.classList.remove('tab_active');
  });
  tabContent.forEach((elem) => {
    elem.classList.remove('tab__content_active');
  }); 
}

makeActive();

// console.log(tabs);