"use client";

import { useState } from "react";
import ServerComponent from "./ServerComponent";

export default function Counter() {
    const [count, setCount] = useState<number>(0);

    return (
        <div className="wrapper">
            <div className="counter">
                <button
                    className="count-down"
                    onClick={() => setCount(count - 1)}
                >
                    -
                </button>
                <span className="count-value">{count}</span>
                <button
                    className="count-up"
                    onClick={() => setCount(count + 1)}
                >
                    +
                </button>
            </div>

            <ServerComponent />
        </div>
    );
}
