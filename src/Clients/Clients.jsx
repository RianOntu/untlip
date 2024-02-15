import React from 'react'
import FirstRow from '../FirstRow/FirstRow'
import ClientsSecondRow from './ClientsSecondRow/ClientsSecondRow'
import ClientsThirdRow from './ClientsThirdRow/ClientsThirdRow'
import FifthRow from '../FifthRow/FifthRow'
import Menus from './Menus'

function Clients() {
    return (
        <>
        <div className="m-8 mt-12">
        <FirstRow></FirstRow>
        <ClientsSecondRow></ClientsSecondRow>
        <ClientsThirdRow></ClientsThirdRow>
        <Menus></Menus>
        <FifthRow></FifthRow>
        
       
        </div>
        </>
    )
}

export default Clients
