export default class Game {

    canvas: HTMLCanvasElement
    context: CanvasRenderingContext2D | null
    grid_size: number

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas
        this.canvas.width = 400
        this.canvas.height = 600
        this.context = this.canvas.getContext('2d')

        this.grid_size = 25
        
        this.context!.fillStyle = 'black'
        this.context!.fillRect(0, 0, canvas.width, canvas.height)

        this.init()
    }
    
    init() {
        // Horizontal lines
        for (let i = 0; i < this.canvas.width; i += this.grid_size) {
            this.context?.beginPath()
            this.context!.strokeStyle = '#fff'
            this.context!.lineWidth = 1
            this.context?.moveTo(i, 0)
            this.context?.lineTo(i, this.canvas.height)
            this.context?.stroke()
            this.context?.closePath()
          }

        // Vertical lines
        for (let i = 0; i < this.canvas.height; i += this.grid_size) {
            this.context?.beginPath()
            this.context!.strokeStyle = '#fff'
            this.context!.lineWidth = 1
            this.context?.moveTo(0, i)
            this.context?.lineTo(this.canvas.width, i)
            this.context?.stroke()
            this.context?.closePath()
        }
    }
}