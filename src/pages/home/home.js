import './home.scss';
import { Button } from '../../components/Button/Button';

export const Home = () => {
    return (
        <main className='home'>
            <h1>Home</h1>
            <Button
                buttonLink='/join-game'
                buttonText='Join a new game!'
            />
        </main>
    );
};