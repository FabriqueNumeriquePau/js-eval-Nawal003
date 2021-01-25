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
console.log(arrows);


for (let i = 0; i < arrows.length; i++) {
    let arrow = arrows[i];
   

    arrow.addEventListener("click", () => {
        let arr =  arrow.parentNode.nextElementSibling;
        if (arr.style.visibility == 'hidden'){
            arrow.parentNode.nextElementSibling.style.visibility = "visible";
            arrow.parentNode.nextElementSibling.style.height = "auto";

        }else{
            arr.style.visibility = 'hidden';
            arr.style.height = '0';
        };

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
    
    //tableau principal , on met chaque element du tableau dans la nav qui est le conteneur principal
    data.principal.forEach(element=>{
        let menu = new Menu(element.nom, element.lien);
        navBar.appendChild(menu.create());
        
    });
    //pour acéder au sous-menu on crée une variable dans laquelle on met le chemin pour y accéder ici la variable li
    let li = data.principal[1];
    let s = document.querySelectorAll('a')[1];// on vise le 2e menu qui est  articles pour y incorporer les sous-menus
    
    //cje crée une div pour mettre les éléments du sous menu
    const div = document.createElement('div');
    div.classList.add('hidden');
    s.appendChild(div);
    
    //tableau sous menu, on met chaque element du sous menu dans dans la div précedemment créée
    li.sousmenus.forEach(ss =>{
        let ssMenus = new Menu(ss.nom, ss.lien);
        let container = s.appendChild(ssMenus.create());
        div.appendChild(container)
        
    });

    //on crée une nouvelle variable pour mettre un événement au click sur le menu "articles", puisque que c'est le seul qui a un sous menu  
    let list = document.querySelectorAll('a');
   
    let list1 = list[1];
    console.log(list);
    list1.addEventListener('click', ()=>{
        div.classList.replace('hidden', 'visible')
       
    });
 
  
  
    data.pied.forEach(el => {
        let footer = new Menu(el.nom, el.lien);
        footEr.appendChild(footer.create());
    })
};
load();

