export const APPLY_NUMBER = 'APPLY_NUMBER';
export const CHANGE_OPERATION = 'CHANGE_OPERATION';
export const ADD_TOTAL = "ADD_TOTAL";
export const CLEAR = "CLEAR"
export const SCREEN = "SCREEN";
export const ADD_FİRSTNUMBER = "ADD_FİRSTNUMBER";
//export const MEMORY_ADD = "MEMORY_ADD";
//export const MEMORY_CLEAR = "MEMORY_CLEAR";
//export const MEMORY_RECALL = "MEMORY_RECALL";


export const applyNumber = (number) => {
    return { type: APPLY_NUMBER, payload: Number(number) };
};

export const changeOperation = (operation) => {
    return { type: CHANGE_OPERATION, payload: operation };
};
export function createDigitAction(value) {
    return { type: ADD_TOTAL, payload: { value } };
}
export function clear() {
    return { type: CLEAR }
}
export function addFirstNumber() {
    return { type: ADD_FİRSTNUMBER }
}
/*export function memoryAdd() {
    return {
        type: MEMORY_ADD
    }
}
export function memoryClear() {
    return { type: MEMORY_CLEAR }
}
export function memoryRecall() {
    return { type: MEMORY_RECALL }
}*/