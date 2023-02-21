import { types } from '../types/types';

export const setActualBalance = (actualBalance) => {
    return {
        type: types.setActualBalance,
        payload: {
            actualBalance
        }
    }
}

export const setBeforeBalance = (beforeBalance) => {
    return {
        type: types.setBeforeBalance,
        payload: {
            beforeBalance
        }
    }
}
