import Shape from "./Shape"

export default class Game {
    constructor(canvas) {
        this.canvas = canvas
        this.context = this.canvas.getContext('2d')
        this.curr = new Shape()
        
        this.init()
        this.run()
    }

    init() {
        this.canvas.width = 400
        this.canvas.height = 600
        this.context.fillStyle = '#000'
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height)
    }

    run() {
        this.context.fillStyle = 'rgba(0, 0, 0, 1)'
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height)
        this.curr.animate(this.context)
        
        
        
        
        // Check if the shape has reached the bottom limit
        this.curr.coors.forEach(c => {
            if (c.c_y + this.curr.size >= this.canvas.height) {
                this.curr.reached_bottom_lim = true
            }
        })
        

        console.log("Hello")
        requestAnimationFrame(() => this.run())
    }
}