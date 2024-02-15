import React from 'react'
import FirstRow from '../FirstRow/FirstRow'
import OrdersSecondRow from './OrdersSecondRow'
import OrdersThirdRow from './OrdersThirdRow'

function Orders() {
    return (
        <>
        <div className="m-8 mt-12">
        <FirstRow></FirstRow>
        <OrdersSecondRow></OrdersSecondRow>
        <OrdersThirdRow></OrdersThirdRow>

        </div>
        
        </>
    )
}

export default Orders
