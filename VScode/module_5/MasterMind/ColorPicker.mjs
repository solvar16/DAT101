"use strict";
import lib2d from "../../common/libs/lib2d_v2.mjs";
import libSprite from "../../common/libs/libSprite_v2.mjs";
import MastermindBoard from "./MastermindBoard.mjs";
import { GameProps } from "./Mastermind.mjs";

const Positions = MastermindBoard.ColorPicker;

export class TColorPicker extends libSprite.TSpriteDraggable{
    #spcvs;
    #spi;
    #color;
    #snapPos;
    #snapIndex;
    #hasMoved;
    constructor(spcvs, spriteInfo, color, index){
            super(spcvs, spriteInfo, Positions[color]);
            this.index = index;
            this.snapTo = GameProps.snapTo;
            this.#spcvs = spcvs;
            this.#spi = spriteInfo;
            this.#color = color;
            this.#snapPos = null;
            this.#hasMoved = false;
            this.#snapIndex = -1;
            
    }
    onCanDrop(){
        return false;
    }
    clone(){
        return new TColorPicker(
            this.#spcvs,
            this.#spi,
            this.#color,
            this.index
        )
    }
    onDrop(aDropPosition){
        GameProps.colorPickers.push(this.clone());
        this.#snapIndex = GameProps.snapTo.positions.indexOf(aDropPosition);
        this.#snapPos = new lib2d.TPoint();
        this.#snapPos.x = GameProps.snapTo.positions[this.#snapIndex].x;
        this.#snapPos.y = GameProps.snapTo.positions[this.#snapIndex].y;
        GameProps.snapTo.positions[this.#snapIndex] = null;
        this.#hasMoved = true;
        GameProps.playerAnswers[this.#snapIndex] = this;
        

    }
    onMouseDown(){
        super.onMouseDown();
        //få denne knappen til å være i det øverste laget
        const index = GameProps.colorPickers.indexOf(this);
        GameProps.colorPickers.splice(index, 1);
        GameProps.colorPickers.push(this);
        if(this.#snapPos !== null){
            GameProps.snapTo.positions[this.#snapIndex] = this.#snapPos;
            this.#snapPos = null;
            GameProps.playerAnswers[this.#snapIndex] = null;
            
        }
    }
    onCancelDrop(){
        //fjern denne knappen fra listen over knapper
        if(this.#hasMoved){
            const index = GameProps.colorPickers.indexOf(this);
            GameProps.colorPickers.splice(index, 1);
            this.spcvs.removeSpriteButton(this);

        }

    }
}
