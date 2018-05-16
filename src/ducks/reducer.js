const initialState ={
    greenInput: ''
}

// action
const INPUT_VALUE = "INPUT_VALUE";

//anonymous function
//state= initiatlState is a default input 
export default function reducer(state = initialState, action){
switch(action.type){
    case INPUT_VALUE:
    console.log(state.greenInput)
    return Object.assign({}, state, {greenInput: action.payload })
    
    //default output
    default:
    return state;
}
}

//action creators
export function handleInputValue(value){
    // console.log('you hit handleInputValue')
    return { 
        type: INPUT_VALUE,
        payload: value
    }
}