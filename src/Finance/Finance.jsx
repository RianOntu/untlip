import React from 'react'
import FirstRow from '../FirstRow/FirstRow'
import FinanceSecondRow from './FinanceSecondRow'
import FinanceThirdRow from './FinanceThirdRow'
import Menus from '../Clients/Menus'


function Finance() {
    return (
        <>
           <div className="m-8 mt-12">
        <FirstRow></FirstRow>
        <FinanceSecondRow></FinanceSecondRow>
        <FinanceThirdRow></FinanceThirdRow>
        <Menus></Menus>
       
        
        
        
       
        </div>
        </>
    )
}

export default Finance
