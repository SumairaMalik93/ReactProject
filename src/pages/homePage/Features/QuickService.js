import React from 'react'
import { ImPhone } from "react-icons/im";

const QuickService = () => {
    return (
        <div className="Quick_Service">
            <div className="quickContent">
                <h2>Quick Service On Emergency</h2>
                <div className="ContactNumber">
                    <div className="phoneImage">
                    <ImPhone color='#FFFFFF' size={48} />
                    </div>
                    <div className="phoneNumber">
                    <p>+971 58 67 47 123</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuickService