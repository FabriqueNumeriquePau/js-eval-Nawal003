// console.log("Go Chuck !");

//Étape 1

let aside = document.querySelector('aside');
let chuck = aside.firstElementChild;


chuck.addEventListener('mouseenter', () => {
    chuck.style.borderRadius = '0';

});
chuck.addEventListener('mouseleave', () => {
    chuck.style.borderRadius = '50%';
});



// Étape 2


// let pic = document.getElementsByClassName('picto');



// for (let i = 0; i < pic.length; i++){
//     pic.item(i).addEventListener('click', ()=>{
//         let article = pic.item(i).parentNode.nextSibling;
//       article.style.visibility = "visible"
//     });
// };

let arrows = document.getElementsByClassName("picto");


for (let i = 0; i < arrows.length; i++) {
    let arrow = arrows.item(i);

    arrow.addEventListener("click", () => {
        arrow.parentNode.nextElementSibling.style.visibility = "visible";
    });
};









// //Étape 3

import Menu from "/copieEvalJs/js2/classMenu.js";


const navBar = document.querySelector('nav');
const footEr = document.querySelector('footer');



async function load(){
    const response = await fetch('/copieEvalJs/data2/menu2.json');
    const data = await response.json();
    console.table(data);
    
    
    data.principal.forEach(element=>{
        let menu = new Menu(element.nom, element.lien);
        navBar.appendChild(menu.create());
        
    });
    
    let li = data.principal[1];

    let s = document.querySelectorAll('a')[1];
    
    
    const div = document.createElement('div');
    div.classList.add('hidden');
    s.appendChild(div);
    
    li.sousmenus.forEach(ss =>{
        let ssMenus = new Menu(ss.nom, ss.lien);
        let container = s.appendChild(ssMenus.createSsMenus());
        div.appendChild(container)
        
        
        
    });
    let list = document.querySelectorAll('a');
   
    let list1 = list[1];
    list1.addEventListener('click', ()=>{
        div.classList.replace('hidden', 'visible')
       
    });
 
  
  
    data.pied.forEach(el => {
        let footer = new Menu(el.nom, el.lien);
        footEr.appendChild(footer.create());
    })
};
load();

