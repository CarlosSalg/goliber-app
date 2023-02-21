import { types } from "../types/types"

let initialState = {
    actualBalance: 0,
    beforeBalance: 0,
}

export const balanceReducer = ( state = initialState, action ) => {

    switch ( action.type ) {
        case types.setActualBalance:
            return {
                ...state,
                actualBalance: action.payload.actualBalance,
            }
        case types.setBeforeBalance:
            return {
                ...state,
                beforeBalance: action.payload.beforeBalance,
            }
        default:
            return state;
    }

}