import React from 'react'

export default function serviceItem(props) {
    console.log(props.serviceList)
    return (
        <div className='service-item-container'>
            <h2 className="service-heading">{props.title}</h2>
            <div className="service-item-content">
                <img id={props.imageId} className="service-image" src={props.image} alt={`service-image-${props.listId}`} />
                <ul className="service-list">
                    {props.serviceList.map((item) => <li>{item}</li>)}
                </ul>
            </div>
        </div>
    )
}
