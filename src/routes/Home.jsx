import { useState } from "react";

function Home() {
    const [randomJokeQuestion, setRandomJokeQuestion] = useState("");
    const [randomJokeAnswer, setRandomJokeAnswer] = useState("");
    const [isRandomJokeRevealed, setIsRandomJokeRevealed] = useState(false);

    const handleRandomJokeClick = () =>
        fetch(`${import.meta.env.VITE_API_BASE_URL}blagues/random`)
            .then((res) => res.json())
            .then((data) => {
                setRandomJokeQuestion(data.result.question);
                setRandomJokeAnswer(data.result.answer);
                setIsRandomJokeRevealed(false);
            })
            .catch((error) => console.error(error));
    
    const handleRandomJokeRevealClick = () => {
        if (randomJokeQuestion !== "" && !isRandomJokeRevealed) setIsRandomJokeRevealed(true);
    };
    

    return (
        <>
            <div className="card">
                <h2>Bienvenue sur Carambar & Co !</h2>
                <p>
                    Vous trouverez ici de nombreuses blagues Carambar. N'hésitez pas à les découvrir et à en profiter !
                </p>
                <p>
                    Les blagues Carambar se composent d'une question et d'une réponse. Tentez de devinez la réponse, puis cliquez sur la question pour voir si vous avez vu juste.
                </p>
            </div>
            <div className="card">
                <h3>Découvrez une blague au hasard !</h3>
                <p>
                    Vous voulez découvrir une blague au hasard ? Allez-y, <span onClick={handleRandomJokeClick}><strong>cliquez ici</strong></span> pour en découvrir une.
                </p>
                <p className="questionJoke" onClick={handleRandomJokeRevealClick}>{randomJokeQuestion}</p>
                <p className="answerJoke">{isRandomJokeRevealed ? randomJokeAnswer : ""}</p>
            </div>
        </>
    );
};

export default Home;
