import React, { useEffect } from 'react'
import { ReactComponent as Money } from '../icons/money.svg'
import { useDispatch, useSelector } from 'react-redux'
import { finishLoading, startLoading } from '../../actions/ui'
import { getBalance } from '../../helpers/balance-helper'
import { setActualBalance, setBeforeBalance } from '../../actions/balance'
var currencyFormatter = require('currency-formatter');


export const DashboardScreen = () => {

    let dispatch = useDispatch()
    let { token } = useSelector( state => state.auth )

    let { actualBalance, beforeBalance } = useSelector( state => state.balance )

    useEffect(() => {
        const getData = async () => {
            dispatch( startLoading() )
            let resp = await getBalance( token )
            if(resp.ok){
                dispatch( setActualBalance(resp.balance.actualBalance) )
                dispatch( setBeforeBalance(resp.balance.beforeBalance) )
            }
            dispatch( finishLoading() )
        }
        getData()
        // eslint-disable-next-line
    }, [])
    
    return (
        <div>
            <div className='row'>
                <div className='col-md-3 col-12'>
                    <div className='card__dashboard'>
                        <div className='card__icon'>
                            <Money />
                        </div>
                        <div className='card__info'>
                            <p>Balance actual</p>
                            <h3>{currencyFormatter.format(actualBalance, { code: 'MXN' }) }</h3>
                        </div>
                    </div>
                </div>
                <div className='col-md-3 col-12 mt-md-0 mt-4'>
                    <div className='card__dashboard'>
                        <div className='card__icon'>
                            <Money />
                        </div>
                        <div className='card__info'>
                            <p>Balance anterior</p>
                            <h3>{currencyFormatter.format(beforeBalance, { code: 'MXN' }) }</h3>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
