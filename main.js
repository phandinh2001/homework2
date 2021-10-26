import {Time} from "./moduls/time.js"
import {BoxRow} from "./moduls/boxRow.js"

class ClolorQuiz {
    classTime = new Time();  
    numberBoxRow = 3;
    numberBoxColum = 3;
    listItem;
    color;
    color_light;

    paintBody() {
        // vẽ thẻ div bao quanh
        let body = document.querySelector("body");
        let divWrapper = document.createElement('div');
        divWrapper.setAttribute("id", "wrapper");
        body.insertAdjacentElement("beforeend", divWrapper);
        
        //vẽ thẻ div time
         let divTime = document.createElement("div");
         divTime.setAttribute("id", "boxTime");
         divWrapper.insertAdjacentElement("beforeend", divTime);

         //vẽ div box 
         let divBox = document.createElement("div");
         divBox.setAttribute("id", "box");
         divWrapper.insertAdjacentElement("beforeend", divBox);
    }
    paintDivTimer () {
        let divTime = document.getElementById("boxTime");
        divTime.insertAdjacentElement("beforeend", this.classTime.html());

    }
    paintDivRow () {
        let arrBoxRow = [];
        let divBoxRow = document.getElementById("box");
        for(let i = 0; i < this.numberBoxRow; i++ ){
            arrBoxRow.push(new BoxRow(this.numberBoxColum));
        }
        for(let j of arrBoxRow) {
            divBoxRow.insertAdjacentElement("beforeend", j.html());
        }
    }
    getListItem() {
        this.listItem = document.querySelectorAll(".smallBox");
    }
    evenItem() {
        for(let i = 0; i < this.listItem.length; i++){
            this.listItem[i].addEventListener("click",(e)=>{
                this.startgame(e);
            });
        }
    }
    startgame(e){
        if(e.target.style.backgroundColor == this.color){
            this.classTime.timeStop();
            alert("Lost");
        }
        else{
            this.random_Color_Game();
            this.classTime.timeStop();
            this.classTime.timeStart(this.color);
        }
    }
    random_Color_Game(){
        this.getRandomColor();
        let light = this.getRandomNumber();
        for(let i = 0; i < this.listItem.length; i++){
            if(light == i){
                this.listItem[i].style.backgroundColor = this.color_light;
            }
            else this.listItem[i].style.backgroundColor = this.color;
        }
    }
    getRandomColor(){
        let x,y,z;
        x = Math.floor(Math.random()*190);
        y = Math.floor(Math.random()*190);
        z = Math.floor(Math.random()*190);
        this.color = `rgb(${x}, ${y}, ${z})`;
        this.color_light = `rgb(${x+60}, ${y+60}, ${z+60})`;
    }
    getRandomNumber(){
        return Math.floor(Math.random() * (this.numberBoxRow*this.numberBoxColum));
    }
}
let game = new ClolorQuiz();
game.paintBody();
game.paintDivTimer();
game.paintDivRow();
game.getListItem();
game.evenItem();
game.random_Color_Game();
game.classTime.timeStart(game.color);