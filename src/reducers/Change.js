const initialState = false;

const ChangeState = (state=initialState, action)=>{
    switch(action.type)
    {
        case "REVERSE": return !state;
        default: return state;
    }
}

export default ChangeState;
