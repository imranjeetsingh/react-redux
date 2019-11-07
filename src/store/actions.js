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

export const saveResult = (res) =>{
    return {
        type : 'STORE_RESULT',
        counter : res
    }
}

export const storeResult = (res) =>{
    return dispatch =>{
        setTimeout ( () =>{
            dispatch(saveResult(res));
        },2000)
    }
}

export const deleteResult = (id) =>{
    return {
        type : 'DELETE_RESULT',
        resultElId : id
    }
}