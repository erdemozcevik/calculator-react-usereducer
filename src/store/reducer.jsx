
import { APPLY_NUMBER, CHANGE_OPERATION, CLEAR, ADD_TOTAL, ADD_FİRSTNUMBER } from './actions.jsx';

export const initialState = {
    total: 0,
    operation: '+',
    memory: 0,
    firstNumber: 0
};

const calculateResult = (num1, num2, operation) => {
    switch (operation) {
        case '+':
            return num1 + num2;
        case '*':
            return num1 * num2;
        case '-':
            return num1 - num2;
        case '/':
            return num1 / num2;
        default:
            return;
    }
};

const reducer = (state, action) => {
    switch (action.type) {
        case APPLY_NUMBER:
            return {
                ...state,
                total: calculateResult(Number(state.firstNumber), Number(state.total), state.operation),

            };

        case CHANGE_OPERATION:
            return {
                ...state,
                operation: action.payload,
                firstNumber: state.total,
                total: 0

            };
        case ADD_TOTAL:
            const digit = action.payload.value;

            if (state.total == "0") {
                return { ...state, total: digit };
            }

            return { ...state, total: state.total + digit };
        case ADD_FİRSTNUMBER:
            return { ...state, firstNumber: state.total }
        case CLEAR:
            return { ...state, total: 0, operation: "+" }
        /*case MEMORY_CLEAR:
            return { ...state, memory: 0 }
        case MEMORY_ADD:
            return { ...state, memory: state.total }        
        case MEMORY_RECALL:
            return { ...state, total: memory, memory: 0 } */

        default:
            return state;
    }
};

export default reducer;
