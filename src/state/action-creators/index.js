export const depositMoney =(amount)=>{
    return (dispatch)=>{
        dispatch({
            type:'deposit',
            payload:amount
        })
    }
}

export const withdrawMoney =(amount)=>{
    return (dispatch)=>{
        dispatch({
            type:'withdraw',
            payload:amount
        })
    }
}

export const switchToGA =()=>{
    return (dispatch)=>{
        dispatch({
            type:'google_Analytics',
        })
    }
};
export const switchToGoogle =()=>{
    return (dispatch)=>{
        dispatch({
            type:'google',
        })
    }
};