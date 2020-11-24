import { Character } from "./Character.interface";

export interface Characters {
    info:Info;
    results: Character[]
}

export interface Info{
    count:number;
    pages:number;
    next:string;
    prev:string;
}
