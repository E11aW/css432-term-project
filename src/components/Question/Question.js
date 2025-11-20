import './Question.scss';
import { Answer } from '../Answer/Answer';

/**
 * Question component that renders each question to the middle of the active game screen.
 * @component
 * @param {String} props.question - The question that is displayed and must be answered as true or false
 * @param {Boolean} props.answerTrue - Boolean value representing whether the answer is true (if true) or false (if false)
 * @returns {JSX.Element}
 */
export const Question = (props) => {
    return (
        <div className='question-and-answer'>
            <h2>{props.question}</h2>
            {props.answerTrue ? (
                <div className='answers'>
                    <Answer
                        type='true'
                        actualAnswer='true'
                    />
                    <Answer
                        type='false'
                        actualAnswer='false'
                    />
                </div>
            ) : (
                <div className='answers'>
                    <Answer
                        type='true'
                        actualAnswer='false'
                    />
                    <Answer
                        type='false'
                        actualAnswer='true'
                    />
                </div>
            )}
        </div>
    );
};