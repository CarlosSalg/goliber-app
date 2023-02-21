import { types } from '../types/types';

export const startTransparentLoading = () => {
    return {
        type: types.startTransparentLoading,
    }
}

export const finishTransparentLoading = () => {
    return {
        type: types.finishTransparentLoading,
    }
}

export const startLoading = () => {
    return {
        type: types.startLoading,
    }
}

export const finishLoading = () => {
    return {
        type: types.finishLoading,
    }
}

export const showSpendModal = () => {
    return {
        type: types.showSpendModal,
    }
}

export const hideSpendModal = () => {
    return {
        type: types.hideSpendModal,
    }
}