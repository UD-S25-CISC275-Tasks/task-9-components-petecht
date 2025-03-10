import React, { useState } from "react";
import { Button } from "react-bootstrap";

// Helper function: returns a random integer between 1 and 6
function d6(): number {
    return Math.floor(Math.random() * 6) + 1;
}

export function TwoDice(): React.JSX.Element {
    // Initial dice values must be different
    const [leftDie, setLeftDie] = useState<number>(() => {
        let first = d6();
        let second = d6();
        while (first === second) {
            second = d6();
        }
        return first;
    });
    const [rightDie, setRightDie] = useState<number>(() => {
        let second = d6();
        while (second === leftDie) {
            second = d6();
        }
        return second;
    });

    function leftRoll(): void {
        setLeftDie(d6());
    }

    function rightRoll(): void {
        setRightDie(d6());
    }

    const isWin = leftDie === rightDie && leftDie !== 1;
    const isLose = leftDie === 1 && rightDie === 1;

    return (
        <div>
            <span data-testid="left-die">{leftDie}</span>
            <span data-testid="right-die" style={{ marginLeft: "10px" }}>
                {rightDie}
            </span>
            <div>
                <Button onClick={leftRoll}>Roll Left</Button>
                <Button onClick={rightRoll}>Roll Right</Button>
            </div>
            {isLose && <p>You Lose!</p>}
            {!isLose && isWin && <p>You Win!</p>}
        </div>
    );
}
