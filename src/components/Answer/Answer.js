import './Answer.scss';

/**
 * Answer component that renders an individual answer to the screen and tracks whether it is the correct answer or not.
 * @component
 * @param {String} props.type - Whether the answer is a true or false type
 * @param {Boolean} props.actualAnswer - Boolean value representing whether this answer is the correct answer for the question
 * @returns {JSX.Element}
 */
export const Answer = (props) => {
    return (
        <button className={props.type}>{props.type}</button>
    )
}