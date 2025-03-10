import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [numAttempts, setAttempts] = useState<number>(4);

    const [progress, setProgress] = useState<boolean>(false);

    function startQuiz(): void {
        if (numAttempts > 0 && !progress) {
            setProgress(true);
            setAttempts((prev) => prev - 1);
        }
    }

    function stopQuiz(): void {
        setProgress(false);
    }

    function mulligan(): void {
        setAttempts((prev) => prev + 1);
    }

    return (
        <div>
            <p>Attempts left: {numAttempts}</p>
            <Button
                onClick={startQuiz}
                disabled={progress || numAttempts === 0}
            >
                Start Quiz
            </Button>
            <Button onClick={stopQuiz} disabled={!progress}>
                Stop Quiz
            </Button>
            <Button onClick={mulligan} disabled={progress}>
                Mulligan
            </Button>
        </div>
    );
}
