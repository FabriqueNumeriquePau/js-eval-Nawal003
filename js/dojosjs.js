console.log("Go Chuck !");

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

let navBar = document.querySelector('nav');
let footer = document.querySelector('footer');

// class Header {
//     principal;
//     nom;
//     lien;
//     sousmenus
//     constructor(principal, nom, lien, sousmenus){
//         this.principal = principal;
//         this.nom = nom;
//         this.lien = lien;
//         this.sousmenus = sousmenus;
//     }
//     balisesHead(){
//         const ul = document.createElement('ul');
//         const li = document.createElement('li');
//         const name = document.createElement('a');
//         name.innerText = this.nom;
//         const liens = document.createElement('href');
//         liens.innerText = this.lien;


//         ul.appendChild(li)
//         li.appendChild(name)
//         name.appendChild(liens)
//         return ul;
//     }
// }






// async function load() {
//     const response = await fetch('./data/menu.json');
//     const getJson = await response.json();

//     console.table(getJson);

//     getJson.forEach((element) =>{
//         let nav = new Header(element.nom, element.lien, element.sousmenus);
//         nav.appendChild(navBar.balisesHead());
//     });
// };
// load();



class Principal {
    constructor(nom, lien) {
        this.nom = nom;
        this.lien = lien;

    }
    balisesHtml() {
        const ul = document.createElement('ul');
        const li = document.createElement('li');
        const name = document.createElement('a');
        name.textContent = this.nom;
        name.href = this.lien;

    
        li.appendChild(name);
        ul.appendChild(li);
        return ul
    }
}


async function load() {
    const response = await fetch('./data/menu.json');
    const json = await response.json();

    console.table(json);

    // Object.keys(json).forEach(key => {
    //     console.log(key, json[key]);
    // });
    // for (const key of Object.keys(json)) {
    //     console.log(key, json[key]);
    // }
    

    // Object.entries(json).forEach(
    //     ([key, value]) => { new Principal(key.nom, value.nom)}
    // );
    json.principal.forEach(element =>{
        let nav = new Principal(element.nom, element.lien);
        navBar.appendChild(nav.balisesHtml());
    });



};
load();