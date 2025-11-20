import './active-game.scss';
import { Question } from '../../components/Question/Question';

export const ActiveGame = () => {
    return (
        <main className='active-game'>
            <Question
                question='Test question?'
                answerTrue='true'
            />
        </main>
    );
};