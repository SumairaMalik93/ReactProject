import React from 'react'
import ClientCard from '../../../global/components/client_card';
import ClientImg from '../../../assets/images/home/review_img.png'

const OurClients = () => {
    return (
        <div className="ourClients page_width">
            <div className="ClientHeader">
                <h2 className='global_title'>Our <span>Clients</span> </h2>
                <p>We make sure that your safety is never compromised. This is why we hire all the staff under the roof of Home Comfort, just for your satisfaction. Our goal is to become the largest and most famous online home services platform and provide our customers with the best of services and experience.</p>
            </div>
            <div className='clientCard_grid'>
                <ClientCard ClientImg={ClientImg} title="Alena Herwitz" />
                <ClientCard ClientImg={ClientImg} title="Alena Herwitz" />
                <ClientCard ClientImg={ClientImg} title="Alena Herwitz" />
                <ClientCard ClientImg={ClientImg} title="Alena Herwitz" />
                <ClientCard ClientImg={ClientImg} title="Alena Herwitz" />
                <ClientCard ClientImg={ClientImg} title="Alena Herwitz" />
            </div>
        </div>
    )
}

export default OurClients