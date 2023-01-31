import {menu} from './app.js';

// Selectors
const list = document.querySelector('.section-center');
const buttons = document.querySelector('.btn-container');

// Buton Oluşturma

function btnFunciton (text = "All") {
  let btn = document.createElement('button');
  btn.classList.add("btn", "btn-outline-dark", "btn-item");
  btn.innerHTML = text;
  btn.onclick = changeList;
  buttons.appendChild(btn);
}

const menuTitle = menu.reduce((values,items)=>{
  if (!values.includes(items.category)){
    values.push(items.category);
  }
  return values;
},["All"]);

menuTitle.forEach((catItem)=>{
  btnFunciton(catItem);
});

// Elementleri Ekleme

const createElement = (element) => {
  let elements = `
  <div class="menu-items col-lg-6 col-sm-12">
      <img src=${element.img} alt=${element.title} class="photo">
        <div class="menu-info">
          <div class="menu-title">
            <h4>${element.title}</h4>
            <h4 class="price">${element.price}</h4>
          </div>
          <div class="menu-text">
          ${element.desc}
          </div>
        </div>
    </div>
  `
  return elements;
}

menu.forEach((menu)=>{
  list.innerHTML += createElement(menu);
})

function changeList () {
  list.innerHTML= "";
  if (this.innerHTML === "All") {
    menu.forEach(menu => {
      list.innerHTML += createElement(menu);
    })
  }
  else {
    let filter = menu.filter(element => element.category === this.innerHTML);
    filter.forEach(itemsName => {
      list.innerHTML += createElement(itemsName)
    })
  }
}

