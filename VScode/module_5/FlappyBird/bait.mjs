"use strict";

import lib2d from "../../common/libs/lib2d.mjs";
import libSprite from "../../common/libs/libSprite.mjs";
import { EGameStatus, GameProps } from "./FlappyBird.mjs";

export class TBait extends libSprite.TSprite{
    #speed;
    #sineWave;
    constructor(aSpriteCanvas, aSpriteInfo, aPosition){
        super(aSpriteCanvas, aSpriteInfo, aPosition);
        this.animateSpeed = 36;
        //generere tilfeldig hastighet mellom 0.5 og 1.5 med step på 10
        this.#speed = Math.ceil(Math.random() * 10 / 10 + 0.5)

        //generer en tilfeldig amplitude mellom 1 og 3
        const amplitude = Math.ceil(Math.random() * 3)  //ceil betyr å runde opp, hvis jeg brukte floor isteden måtte jeg også ha plusset på 1.
        this.#sineWave = new lib2d.TSineWave(amplitude, 1);
        this.posY = this.#sineWave.value;
    }
    update(){
        if(GameProps.status === EGameStatus.playing){
            this.translate(-this.#speed, this.#sineWave.value);
        }else{
            this.translate(this.#speed / 2, this.#sineWave.value);
        }
    }
    
}