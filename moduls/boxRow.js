import {Box} from "./box.js"
class BoxRow {
    divBoxRow;
    numberItems;
    myArr = [];
    constructor (num) {
        this.divBoxRow = document.createElement("div");
        this.divBoxRow.setAttribute("class", "rowBox");
        this.numberItems = num;
        for (let i = 0; i < this.numberItems; i++){
            this.myArr.push(new Box)
        }
        for (let j of this.myArr){
            this.divBoxRow.insertAdjacentElement("beforeend", j.html());
        }
        
    }
    html() {
        return this.divBoxRow
    }


}
export{BoxRow}