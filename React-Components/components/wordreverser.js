import { useState } from 'react';

export default function WordReverser({ initialWord }) {
    const [word, setWord] = useState(initialWord);

    function reverse() {
        setWord(word.split("").reverse().join(""));
    }

    return (
        <div>
            <input value={word} onChange={(e) => setWord(e.target.value)} />
            <button onClick={reverse}>Reverse</button>
            <p>{word}</p>
        </div>
    );
}
