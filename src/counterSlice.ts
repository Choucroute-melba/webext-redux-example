import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface State {
    count: number
}

const runtimeSlice = createSlice({
    name: "counter",
    initialState: {
        count: 0
    } as State,
    reducers: {
        increment(state) {
            state.count++
        },
        decrement(state) {
            state.count--
        },
        incrementByAmount(state, action: PayloadAction<number>) {
            state.count += action.payload
        }
    },
    selectors: {
        selectCount: (state: State) => state.count
    }
})

export default runtimeSlice.reducer
export const {
    increment,
    decrement,
    incrementByAmount
} = runtimeSlice.actions
export const {
    selectCount
} = runtimeSlice.selectors