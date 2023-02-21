import React from 'react'

export const Message = ( {message, type, onlyText} ) => {

    if(onlyText === null) onlyText = false 

    return (
        <>
            {
                onlyText
                ?
                    <div className={type === 'error' && 'message__error'}>
                        { message }
                    </div>
                :
                    <div className={type === 'error' && 'message__box message__error'}>
                        { message }
                    </div>
            }
        </>
    )
}
