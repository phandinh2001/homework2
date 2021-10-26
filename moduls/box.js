class Box {
   divBoxItems
   constructor() {
       this.divBoxItems = document.createElement("div");
       this.divBoxItems.setAttribute("class", "smallBox");
   }
   html () {
       return this.divBoxItems;
   }
   
}
export{Box}