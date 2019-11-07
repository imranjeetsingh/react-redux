
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