import Buyable from "./index";

export default class Moovie implements Buyable {
    id: number;
    name: string;
    nameEnglish: string;
    year: number;
    country: string;
    slogan: string;
    genre: string;
    time: string;
    price: number;

    constructor(id: number, name: string, nameEnglish: string, year: number, country: string, slogan: string, genre: string, time: string, price: number) {
        this.id = id;
        this.name = name;
        this.nameEnglish = nameEnglish;
        this.year = year;
        this.country = country;
        this.slogan = slogan;
        this.genre = genre;
        this.time = time;
        this.price = price;
    }
}