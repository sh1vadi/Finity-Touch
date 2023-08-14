let center_li_1 = document.querySelectorAll('[data-name="center_li_1"]')
let center_li_2 = document.querySelectorAll('[data-name="center_li_2"]')
let center_li_3 = document.querySelectorAll('[data-name="center_li_3"]')
let center_li_4 = document.querySelectorAll('[data-name="center_li_4"]')
let center_li_5 = document.querySelectorAll('[data-name="center_li_5"]')
let center_li_6 = document.querySelectorAll('[data-name="center_li_6"]')
function addClickListener(center_li) {
  center_li[1].addEventListener('click', () => {
    center_li[0].classList.toggle('heighter');
    center_li[1].classList.toggle('img_up');
    center_li[2].classList.toggle('block');
  });
}

let centerLiData = [
  { name: 'center_li_1', elements: null },
  { name: 'center_li_2', elements: null },
  { name: 'center_li_3', elements: null },
  { name: 'center_li_4', elements: null },
  { name: 'center_li_5', elements: null },
  { name: 'center_li_6', elements: null }
];

centerLiData.forEach(item => {
  item.elements = document.querySelectorAll(`[data-name="${item.name}"]`);
  addClickListener(item.elements);
});
// console.log(center_li_1[1])
// center_li_1[1].addEventListener('click',()=>{
//   center_li_1[0].classList.toggle('heighter');
//   center_li_1[1].classList.toggle('img_up');
//   center_li_1[2].classList.toggle('block');
// })
// center_li_2[1].addEventListener('click',()=>{
//   center_li_2[0].classList.toggle('heighter');
//   center_li_2[1].classList.toggle('img_up');
//   center_li_2[2].classList.toggle('block');
// })
// center_li_3[1].addEventListener('click',()=>{
//   center_li_3[0].classList.toggle('heighter');
//   center_li_3[1].classList.toggle('img_up');
//   center_li_3[2].classList.toggle('block');
// })
// center_li_4[1].addEventListener('click',()=>{
//   center_li_4[0].classList.toggle('heighter');
//   center_li_4[1].classList.toggle('img_up');
//   center_li_4[2].classList.toggle('block');
// })
// center_li_5[1].addEventListener('click',()=>{
//   center_li_5[0].classList.toggle('heighter');
//   center_li_5[1].classList.toggle('img_up');
//   center_li_5[2].classList.toggle('block');
// })
// center_li_6[1].addEventListener('click',()=>{
//   center_li_6[0].classList.toggle('heighter');
//   center_li_6[1].classList.toggle('img_up');
//   center_li_6[2].classList.toggle('block');
// })
// console.log(center_li_2)
// let drop_text = document.querySelectorAll('.drop_text')
// let img_down = document.querySelectorAll('.img_down')
// console.log(center_li)
// console.log(drop_text)
// let img_downs = Array.from(img_down)
// console.log(Array.from(img_down))
// console.log(img_down)
// console.log(drop_text.closest('div'))
// img_down.forEach((button)=> {
//     button.addEventListener("click", ()=> {
//       let clickedElement = img_down.indexOf(button);
//       console.log("Нажат элемент:", clickedElement);
//     })
// })
// function take_down_up(){
//     center_2_li_2.classList.toggle('heighter')
//     drop_text.classList.toggle('block')
//     img_down.classList.toggle('img_up')
// }