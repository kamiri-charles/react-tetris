import { useEffect, useRef } from 'react'
import Game from '../modules/Game';
import './styles.scss'

const Canvas = () => {
    const canvas_ref = useRef()

    useEffect(() => {
        new Game(canvas_ref.current)
    })
    
    return (
        <>
            <h1>Tetris</h1>
            <canvas ref={canvas_ref}></canvas>
        </>
    )
};

export default Canvas;