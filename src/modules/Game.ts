export default class Game {

    context: CanvasRenderingContext2D | null;
    cells: never[];

    constructor(canvas: HTMLCanvasElement) {
        canvas.width = 800;
        canvas.height = 600
        this.context = canvas.getContext('2d');
        this.cells = [];
        

        this.context!.fillStyle = '#000';
        this.context!.fillRect(0, 0, canvas.width, canvas.height);

        this.animate();
    }
    
    cells_init() {
        // Do something...
    }

    animate() {
        this.context!.beginPath();
        this.context!.fillStyle = '#fff';
        this.context!.arc(50, 50, 50, 0, Math.PI * 2);
        this.context!.fill();
        this.context!.closePath();
    }
}