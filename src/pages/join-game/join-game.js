import './join-game.scss';
import { Button } from '../../components/Button/Button';

export const JoinGame = () => {
    return (
        <main className='join-game'>
            <h1>Join Game</h1>
            <Button
                buttonLink='/active-game'
                buttonText='Enter'
            />
        </main>
    );
};