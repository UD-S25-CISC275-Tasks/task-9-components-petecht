import React, { useState } from "react";
import { Button } from "react-bootstrap";

// Dice roll helper (returns 1–6)
function d6(): number {
    return Math.floor(Math.random() * 6) + 1;
}

// Ensure two different initial values
function getTwoDifferentDice(): [number, number] {
    let left = d6();
    let right = d6();
    while (left === right) {
        right = d6();
    }
    return [left, right];
}

export function TwoDice(): React.JSX.Element {
    const [initialLeft, initialRight] = getTwoDifferentDice();
    const [leftDie, setLeftDie] = useState<number>(initialLeft);
    const [rightDie, setRightDie] = useState<number>(initialRight);

    const rollLeft = () => setLeftDie(d6());
    const rollRight = () => setRightDie(d6());

    const isWin = leftDie === rightDie && leftDie !== 1;
    const isLose = leftDie === 1 && rightDie === 1;

    return (
        <div>
            <span data-testid="left-die">{leftDie}</span>
            <span data-testid="right-die" style={{ marginLeft: "10px" }}>
                {rightDie}
            </span>
            <div>
                <Button onClick={rollLeft}>Roll Left</Button>
                <Button onClick={rollRight}>Roll Right</Button>
            </div>
            {isLose && <p>You Lose!</p>}
            {!isLose && isWin && <p>You Win!</p>}
        </div>
    );
}
