import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday = "🎄" | "🎃" | "🦃" | "🎆" | "🪔";

let alphabetOrder: Holiday[] = ["🎄", "🪔", "🎃", "🎆", "🦃"];

let yearOrder: Holiday[] = ["🎆", "🪔", "🎃", "🦃", "🎄"];

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("🎆");

    function advanceAlphabetically(): void {
        let index: number = alphabetOrder.indexOf(holiday);
        let next: Holiday = alphabetOrder[(index + 1) % alphabetOrder.length];
        setHoliday(next);
    }

    function advanceByYear(): void {
        let index: number = yearOrder.indexOf(holiday);
        let next: Holiday = yearOrder[(index + 1) % yearOrder.length];
        setHoliday(next);
    }

    return (
        <div>
            <p>Holiday: {holiday}</p>
            <Button onClick={advanceAlphabetically}>Advance by Alphabet</Button>
            <Button onClick={advanceByYear}>Advance by Year</Button>
        </div>
    );
}
