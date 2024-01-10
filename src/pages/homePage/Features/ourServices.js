import React from 'react'
import ServiceCard from '../../../global/components/service-card'
import serviceImg from '../../../assets/images/home/service_img.png'

const OurServices = () => {
    return (
        <div className='ourServices page_width' >
            <h2 className='global_title'>Explore our <span>Services</span> </h2>
            <div className="card_grid">
                <ServiceCard service_Img={serviceImg} title="AC Service" />
                <ServiceCard service_Img="https://images.pexels.com/photos/4108807/pexels-photo-4108807.jpeg" title="Duct Cleaning" />
                <ServiceCard service_Img="https://images.pexels.com/photos/1249610/pexels-photo-1249610.jpeg" title="Handyman" />
                <ServiceCard service_Img="https://images.pexels.com/photos/7859953/pexels-photo-7859953.jpeg" title="Plumbing" />
                <ServiceCard service_Img="https://images.pexels.com/photos/7286002/pexels-photo-7286002.jpeg" title="Electrician" />
            </div>
        </div >
    )
}

export default OurServices