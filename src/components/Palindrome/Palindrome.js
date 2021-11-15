import React, {useState} from 'react';
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import styles from './Palindrome.module.scss';

const Palindrome = (props) => {
    const [word, setWord] = useState('');
    const [modal, setModal] = useState(false);
    const [result, setResult] = useState(false);

    const isPalindrome = (e) => {
        e.preventDefault();
        const wordLength = Math.floor(word.length / 2)
        for (var i = 0; i < wordLength; i++) {
            if (word[i] !== word[word.length - i - 1]) {
                console.log('answer')
                setResult(false);
                setModal(true)
                return;
            }
        }

        setResult(true);
        setModal(true);
    }
    const handleEntry = (e) => {
        setWord(e.target.value);
    }
    const handleClose = () => {
        setModal(false);
    }
    return (
        <div className={styles.palindrome}>
            <form onSubmit={isPalindrome} >
                <label htmlFor="palindrome">Check if the word is a Palindrome</label>
                <input id={'palindrome'} type="text" onChange={handleEntry}/>
                <Button type={'submit'} classStyle={'submit'} name={"Enter"}/>
                {modal && <Modal mode={'palindrome'} word={word} result={result} onClose={handleClose}/>}
            </form>
        </div>
    );
};

export default Palindrome;
