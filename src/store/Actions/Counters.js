export const increment = (val) =>{
    return {
        type : 'INCREMENT',
        value : val
    }
}

export const decrement = (val) =>{
    return {
        type : 'DECREMENT',
        value : val
    }
}

export const add = (val) =>{
    return {
        type : 'ADD',
        value : val
    }
}

export const subtract = (val) =>{
    return {
        type : 'SUBTRACT',
        value : val
    }
}
