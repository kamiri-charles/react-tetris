import { tetrominoes } from "./tetrominoes"

export default class Shape {
    constructor() {
        this.x = 0
        this.y = 0
        this.size = 20
        this.color = 'red'
        this.offset_x = 0
        this.coors = [] // Co-ordinates for each cell in a shape
        this.reached_bottom_lim = false

        // Controls
        window.addEventListener('keydown', e => {

            // Rotate
            if (e.key === 'ArrowUp') {
                this.rotate_shape()
            }
            // Left
            if (e.key === 'ArrowLeft') {
                this.offset_x = -1
            }

            // Right
            else if (e.key === 'ArrowRight') {
                this.offset_x = 1
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
            x: this.coors[0].c_x + this.size / 2,
            y: this.coors[0].c_y + this.size / 2
        }

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

        this.coors.forEach(c => (
            context.fillRect(c.c_x, c.c_y, this.size, this.size)
        ))
        context.closePath()
    }

    animate(context) {
        this.draw(context)
        if (!this.reached_bottom_lim) {
            this.coors.forEach(c => c.c_y += 1)
            this.coors.forEach(c => c.c_x += this.offset_x)
        }
    }
}