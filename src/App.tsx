import {Store} from "webext-redux";
import {Provider, useDispatch, useSelector} from "react-redux";
import React from "react";
import {decrement, increment, incrementByAmount, selectCount} from "@witch/counterSlice";


export default function App() {
    const count = useSelector(selectCount)
    const dispatch = useDispatch()
    return (
            <div>
                <h1>Counter</h1>
                <p>
                    <button onClick={() => dispatch(increment())}>+</button>
                    <button onClick={() => dispatch(decrement())}>-</button>
                </p>
                <p>
                    <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
                </p>
                <p>
                    Count: {count}
                </p>
            </div>
    )
}