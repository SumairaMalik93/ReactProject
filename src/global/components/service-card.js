import React from 'react'

const ServiceCard = ({ service_Img, title }) => {
    return (
        <div className="service_card">
            <img src={service_Img} width='100%' alt="" />
            <div className="overlay">
                <div className="content">
                    <h2>{title}</h2>
                    <button>Book Now</button>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard