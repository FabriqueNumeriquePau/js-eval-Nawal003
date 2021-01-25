class Menu{
  
    constructor(nom, lien){
        this.nom = nom;
        this.lien = lien;
       

    }
    create(){
       
        const name = document.createElement('a');
        name.textContent = this.nom;
        name.href = this.lien;

        
        return name;
    }
    // createSsMenus(){
    //     const name = document.createElement('a');
    //     name.textContent = this.nom;
    //     name.href = this.lien;
       

        
        

    //     return name;
        
    // }
}

export default Menu;

