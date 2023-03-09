import { tetrominoes } from "./tetrominoes"

export default class Shape {
    constructor() {
        this.tetromino_colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange']
        this.x = 0
        this.y = 0
        this.size = 20
        this.color = this.tetromino_colors[Math.floor(Math.random() * this.tetromino_colors.length)]
        this.offset_x = 0
        this.coors = [] // Co-ordinates for each cell in a shape
        this.reached_bottom_lim = false
        
        // Controls
        window.addEventListener('keydown', e => {
            
            // Rotate
            if (e.key === 'ArrowUp' && !this.reached_bottom_lim) {
                this.rotate_shape()
            }
            
            // Left
            if (e.key === 'ArrowLeft' && !this.#on_left_edge()) {
                this.offset_x = -this.size * 0.5
            }
            
            // Right
            else if (e.key === 'ArrowRight' && !this.#on_right_edge()) {
                this.offset_x = this.size * 0.5
            }
            
        })
        
        window.addEventListener('keyup', e => {
            // Left
            if (e.key === 'ArrowLeft') {
                this.offset_x = 0
            }
            
            // Right
            else if (e.key === 'ArrowRight') {
                this.offset_x = 0
            }
            
        })
        
        this.destructure_shape()
    }
    
    
    get_shape() {
        return tetrominoes[Math.floor(Math.random() * tetrominoes.length)]
    }
    
    
    destructure_shape() {
        let s = this.get_shape()
        for (let i = 0; i < s.view.length; i++) {
            for (let j in s.view[i]) {
                if (s.view[i][j] === 'x') {
                    this.coors.push({
                        c_x: j * this.size,
                        c_y: i * this.size
                    })
                }
            }
        }
    }
    
    
    rotate_shape() {
        // Find the center of the shape
        let center = {
            x: 0,
            y: 0
        }
        
        this.coors.forEach(c => {
            center.x += c.c_x
            center.y += c.c_y
        })
        
        center.x /= this.coors.length
        center.y /= this.coors.length
        
        // Rotate each cell 90deg around the center
        this.coors.forEach(c => {
            let x = c.c_x - center.x
            let y = c.c_y - center.y
            c.c_x = -y + center.x
            c.c_y = x + center.y
        })
    }
    
    
    draw(context) {
        context.beginPath()
        context.fillStyle = this.color
        context.strokeStyle = '#000'
        
        this.coors.forEach(c => {
            context.fillRect(c.c_x, c.c_y, this.size, this.size)
            context.strokeRect(c.c_x, c.c_y, this.size, this.size)
        })
        context.closePath()
    }
    
    animate(context) {
        this.draw(context)
        if (!this.reached_bottom_lim) {
            this.coors.forEach(c => c.c_y += 3)
            this.coors.forEach(c => c.c_x += this.offset_x)
        }
        
        // Horizontal boundaries
        if (this.#on_left_edge() || this.#on_right_edge()) this.offset_x = 0
    }
    
    #on_left_edge() {
        let min_x = 9999;
        
        this.coors.forEach(c => {
            if (c.c_x < min_x) min_x = c.c_x
        })
        
        
        return min_x <= 0;
    }
    
    #on_right_edge() {
        let max_x = 0;
        
        this.coors.forEach(c => {
            if (c.c_x + this.size > max_x) max_x = c.c_x + this.size
        })
        
        
        return max_x >= 400;
    }
}