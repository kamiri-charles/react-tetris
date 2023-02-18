import Shape from "./Shape"

export default class Game {
    constructor(canvas) {
        this.canvas = canvas
        this.context = this.canvas.getContext('2d')
        this.shapes = []
        
        this.init()
        this.active_shape = this.shapes[this.shapes.length - 1]
        this.run()
    }

    init() {
        this.canvas.width = 400
        this.canvas.height = 600
        this.context.fillStyle = '#000'
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height)
        this.shapes.push(new Shape())

    }

    run() {
        this.context.fillStyle = 'rgba(0, 0, 0, 1)'
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height)
        this.shapes.forEach(shape => shape.animate(this.context))
        

       
        
        // Check if the current shape has reached the bottom limit
        this.active_shape.coors.forEach(c => {
            if (c.c_y + this.active_shape.size >= this.canvas.height) {
                this.active_shape.reached_bottom_lim = true
                this.active_shape = this.shapes[this.shapes.length - 1]
            }
        })
        

        requestAnimationFrame(() => this.run())
    }
}