let initialState = {
    animate: true
}

export function updateAnimate(animate){
    return {
        type: 'UPDATE_ANIMATE',
        payload: animate
    }
}

export default function reducer(state=initialState, action){
    let {type, payload} = action
    switch (type){
        case 'UPDATE_ANIMATE':
            return {...state, animate: payload}
        default: 
            return {...state}
    }
}