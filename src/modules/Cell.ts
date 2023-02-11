export default class Cell {

    x: number;
    y: number;
    size: number;
    color: string;
    border_color: string;

    constructor() {
        this.x = 0;
        this.y = 0;
        this.size = 10;
        this.color = '#fff';
        this.border_color = '#000';
    }
}