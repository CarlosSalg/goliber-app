import { types } from "../types/types"

let initialState = {
    loading: false,
    transparentLoader: false,
    spendModal: false,
}

export const uiReducer = ( state = initialState, action ) => {

    switch ( action.type ) {
        case types.startLoading:
            return {
                ...state,
                loading: true,
            }
        case types.finishLoading:
            return {
                ...state,
                loading: false,
            }
        case types.startTransparentLoading:
            return {
                ...state,
                transparentLoader: true,
            }
        case types.finishTransparentLoading:
            return {
                ...state,
                transparentLoader: false,
            }
        case types.showSpendModal:
            return {
                ...state,
                spendModal: true,
            }
        case types.hideSpendModal:
            return {
                ...state,
                spendModal: false,
            }
        default:
            return state;
    }

}