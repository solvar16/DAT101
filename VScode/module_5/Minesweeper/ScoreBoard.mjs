"use strict";
import lib2d from "../../common/libs/lib2d_v2.mjs";
import libSprite from "../../common/libs/libSprite_v2.mjs";
import { gameLevel, newGame, SpriteInfoList } from "./Minesweeper.mjs";



/*
lag en klasse med navnet TScoreBoard
klassen har tre private sprites; 
-øvre venstre hjørne (antall miner). TSpriteNumber
-øvre høyre hjørne (tid). TSpriteNumber
-øvre midten (smiley). TSpriteButton
konstruktørens parameter er : aSpriteCanvas
klassen trenger en draw metode som tegner alle sprites
*/

export class TScoreBoard{
    #mines
    #time
    #smiley
    #hndTime;
    #spcvs;
    constructor(aSpriteCanvas){
        this.#spcvs = aSpriteCanvas

        this.#mines = new libSprite.TSpriteNumber(aSpriteCanvas, SpriteInfoList.Numbers, new lib2d.TPoint(112, 22));
        this.#mines.justify = libSprite.ESpriteNumberJustifyType.Right;
        this.#mines.digits = 3;
        this.#mines.value = gameLevel.Mines;

        this.#time = new libSprite.TSpriteNumber(aSpriteCanvas, SpriteInfoList.Numbers, new lib2d.TPoint(470, 22));
        this.#time.justify = libSprite.ESpriteNumberJustifyType.Right;
        this.#time.digits = 3;
        this.#time.value = 0;

        this.#smiley = new libSprite.TSpriteButton(aSpriteCanvas, SpriteInfoList.ButtonSmiley, new lib2d.TPoint(230, 22));
        this.#smiley.onMouseDown = this.onSmileyMouseDown;
        this.#smiley.onMouseUp = this.onSmileyMouseUp;
        this.#smiley.onClick = this.onSmileyClick;
        this.#hndTime = setInterval(this.#increaseTime, 1000);
    }
    draw(){
        //this.#mines.number =0
        this.#mines.draw();
        this.#time.draw();
        this.#smiley.draw();
    }

    get smiley(){
        return this.#smiley;
      }
    
      //Vi må lage denne som pil-funksjon for å kunne bruke this
      #increaseTime = () => {
        if(this.#time.value < 999){
          this.#time.value++;
        }else{
          this.#time.value = 999;
        }
      };

      stopTime(){
        clearInterval(this.#hndTime);
      }
      onSmileyMouseDown = () =>{
        this.#smiley.index++;
      }
      onSmileyMouseUp = () => {
        this.#smiley.index--;
      }
      onSmileyClick = () => {
        this.#smiley.index = 0;
        newGame();
      }
      reset(){
        clearInterval(this.#hndTime);
        this.#time.value = 0;
        this.#mines.value = gameLevel.Mines;

        const pos = new lib2d.TPoint(112, 22);

        //justere posisjonen til smiley
        pos.x = (this.#spcvs.canvas.width / 2) - (SpriteInfoList.ButtonSmiley.width / 2);
        this.#smiley.x = pos.x;

        pos.x = this.#spcvs.canvas.width - 70;
        this.#time = new libSprite.TSpriteNumber(this.#spcvs, SpriteInfoList.Numbers, pos);
        this.#time.justify = libSprite.ESpriteNumberJustifyType.Right;
        this.#time.digits = 3;
        this.#time.value = 0;

        this.#hndTime = setInterval(this.#increaseTime, 1000);
      }

      get mineCounter(){
        return this.#mines.value;
      }
      set mineCounter(aValue){
        if(this.#mines.value = aValue) return;
      }


}//end of class TScoreBoard

