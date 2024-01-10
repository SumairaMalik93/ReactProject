import React from 'react'
import { IoStar } from "react-icons/io5";


const ClientCard = ({ ClientImg, title }) => {
    return (
        <div className="client_card">
            <div className="upper_content">
                <div className="clientImg">
                    <img src={ClientImg} alt="" />
                </div>
                <div className="ImgContent">
                    <h2>{title}</h2>
                    <div className="rating">
                        <small>3 months ago</small>
                        <div className="star">
                            <IoStar color='#FFB800' className='icons' size={24} />
                            <IoStar color='#FFB800' className='icons' size={24} />
                            <IoStar color='#FFB800' className='icons' size={24} />
                            <IoStar color='#FFB800' className='icons' size={24} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="lower_content">
                <p>We make sure that your safety is never compromised. This is why we hire all the staff under the roof of Home Comfort, just for your satisfaction.</p>
            </div>
        </div>
    )
}

export default ClientCard