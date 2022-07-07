const readingReducer = (state=false, action) =>{
    switch(action.type){
        case('DONE'):
            return true
        case('UNDONE'):
            return false
        default:
            return state
    }
}

export default readingReducer