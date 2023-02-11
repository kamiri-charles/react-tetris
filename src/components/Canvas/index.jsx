import { useEffect, useRef } from 'react';
import Game from '../../modules/Game.ts';
import './styles.scss';

const Canvas = () => {
    const canvas_ref = useRef()

    useEffect(() =>{
        const game = new Game(canvas_ref.current);
        console.log(game);
    })
    
    return (
        <canvas ref={canvas_ref}></canvas>
    )
};

export default Canvas;