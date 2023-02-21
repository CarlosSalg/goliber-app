import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Back } from '../icons/left.svg'

export const NavigateBack = ({back, setInitial}) => {

    useEffect(() => {
      if(back){
        handleBack()
      }
      // eslint-disable-next-line
    }, [ back ])
    

    const navigate = useNavigate();    
    const handleBack = () => {
        setInitial(false)
        setTimeout(() => {
            navigate(-1)
        }, 170);
    }

    return (
        <div  className="back__navigate" onClick={handleBack}>
            <Back/> <span>Regresar</span>
        </div>
    )
}