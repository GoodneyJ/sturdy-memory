import React, { useState } from 'react'

export default function StaffCard(props) {
    let staffId;
    let staffIdCardParent;
    let bioDiv = document.createElement('DIV');
    let textNode;
    
    const [bioArray, setBioArray] = useState(['Les Fields brings over 40 years of Stop Loss and Reinsurance Experience to the CCHI Re Team. His leadership, diversity, and creativity have been a hallmark of the medical stop-loss industry since 1986. He has also trained many very successful top professionals in the business. As a published author for Olympia Publishers (London), his books disclose Cold War secrets of the South Pacific during the 1980s and 90s.',
                                              `Tom Rich has been an Employee Benefits Consultant since 1978.  Tom received formal group insurance training from Liberty Mutual learning group medical insurance from the ground up.  His 6 months of intense training in the underwriting department in the home office led him to oversee the 4 western states in sales and underwriting.

                                              From Tom’s group experience he created benefit programs for the  California Veterinary Medical Association and built it up to $4,000,000  in premium.
                                         
                                              Tom’s education and creativity directed him to the most logical direction of high deductible benefit plans for employers through partial self-funding. 
                                         
                                              Tom provided many employer educational workshops to provide the employer and the broker with a better understanding of the self-funded alternative to a fully insured medical plan.
                                         
                                              Tom was instrumental as a direct consultant in bringing the financial measured results of self-funding to several large hospitals in the San  Francisco Hospital affiliates when Blue Cross dominated all the hospitals in San Francisco through fully insured plans.  His creative ideas carved a plan to take advantage of the hospital’s services that were being provided to their employees through benefit incentives.  Over several years the hospitals saved millions of dollars by using the partial self-funded program.
                                         
                                              Tom has written many articles on partial self-funding, never published but distributed to employer groups interested in the concept.  Over the last 20 years of positive financial results, and risk management protocols, Tom joined CCHI RE in 2018 as Managing Director to oversee plan management of existing and new clients.
                                         
                                              Sports and Hobbies enjoyed are play golf, Snow and Water Skiing, hiking and building, and flying model airplanes.`,
                                              `Vice President of Sales`,
                                              `John is the Controller and Plan Manager for CCHI Re. He has over twenty years of experience in Accounting and Finance having worked in a wide variety of industries. Prior to joining CCHI RE in 2018 as Assistant Controller, John was Assistant Controller for Triage Consulting Group, a Financial Healthcare firm in San Francisco and prior to that was Assistant Controller for Family Service Agency of San Francisco now known as the Felton Institute. John started his professional career as a sales representative and merchandiser for Trading Inns and began his Accounting career in 1994 with Mashonaland Holdings and then Consolidated Motors in Zimbabwe. John worked for the Avis Corporate office for 8 years prior to migrating to California in 2005 and consulted for numerous accounting and finance firms in the San Francisco Bay Area. John studied for a Bachelors’s degree with the University of Zimbabwe and specialized in Accounting and Bookkeeping with the City and Guilds of London Institute. Besides his professional work, John loves spending time with his kids, sports and has a passion for promoting music, dance, and art.`,
                                              `Lynda Thomas is an Account Manager at CCHI Re. She brings 25 years of executive-level business administration experience to the firm. Lynda is married with two stepsons. She is fond of music and has many hobbies including painting, photography, water/snow skiing, gardening, cooking, baking, and enjoys volunteering for animal rescue entities.`])


    const handleEnter = (e) => {
        staffId = e.target.id;
        staffIdCardParent = document.getElementById(staffId).parentNode.parentNode;
        bioDiv.id = "bio-div";
        
        switch(staffId) {
            case('Staff-One'):
                textNode = document.createTextNode(bioArray[0]);
                break;
            case('Staff-Two'):
                textNode = document.createTextNode(bioArray[1]);
                break;
            case('Staff-Three'):
                textNode = document.createTextNode(bioArray[2]);
                break;
            case('Staff-Four'):
                textNode = document.createTextNode(bioArray[3]);
                break;
            case('Staff-Five'):
                textNode = document.createTextNode(bioArray[4]);
                break;
        }

        bioDiv.appendChild(textNode);
        staffIdCardParent.appendChild(bioDiv);
        console.log(bioDiv)









    }

    const handleLeave = () => {
        console.log(staffIdCardParent.childNodes[2].remove())
    }

    return (
        <div id={`Staff-${props.id}`} key={props.id} onMouseEnter={handleEnter} onMouseLeave={handleLeave} className="staff-card-item-container">
            <img src={props.profileImg} height="175" width="175" className="profile-image"/>
            <h3 className="profile-name">{props.name}</h3>
            <h4 className="profile-position">{props.position}</h4>
            <p className="profile-direct">{props.direct}</p>
            <p className="profile-fax">{props.fax}</p>
            <p className="profile-email bold">{props.email}</p>
        </div>
    )
}
