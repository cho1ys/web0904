function counterReducer(state,action){
    switch(action.type){
        case'BURGER':
            return parseInt(state)+action.value
        case'POTATO':
            return parseInt(state)+action.value
        case'COKE':
            return parseInt(state)+action.value
        default:
            return state
    }
}
export default counterReducer;