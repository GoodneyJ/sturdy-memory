import React, { useState } from 'react'

import '../css/App.css'

export default function StaffCard(props) {

 
    const [bioArray, setBioArray] = useState(['Les Fields brings over 40 years of Stop Loss and Reinsurance Experience to the CCHI Re Team. His leadership, diversity, and creativity have been a hallmark of the medical stop-loss industry since 1986. He has also trained many very successful top professionals in the business. As a published author for Olympia Publishers (London), his books disclose Cold War secrets of the South Pacific during the 1980s and 90s.',
                                              `Tom Rich has been an Employee Benefits Consultant since 1978 receiving formal underwriting training from Liberty Mutual.  He later became head of sales and underwriting for four Western States.  

                                              During his lengthy tenure with self funding, he has consulted with a vast number of entities ranging from hospitals to a veterinary association to a school district.   He was involved in starting provider networks, both facilities based as well as physician based, for large public employers in California rural areas where he utilized his experience in contract negotiations for a positive outcome.  
                                              
                                              As a direct consultant he was instrumental in bringing self-funding to several large hospitals in the San Francisco Hospital affiliates when Blue Cross dominated all the hospitals in San Francisco through fully insured plans.  His creative ideas carved a plan to take advantage of the hospital’s services that were being provided to their employees through benefit incentives.  Over several years the hospitals saved millions of dollars by using their own goods and services along with a self-funded benefit program.
                                              
                                              After 20 plus years of positive financial results due to effective risk management protocols, Tom joined CCHI in 2013 as Managing Director to oversee plan management of existing and new clients.  In 2018  he formed a new company, CCHI Re, LLC with two other partners LLC as a Managing Member and Director bringing complete risk management services to brokers and consultants in self-funded space.
                                              
                                              Tom occasionally plays golf, snow and water skis, hikes and builds and flies model airplanes.
                                              `,
                                              `Austin is a tenured sales executive with experience in financial technology and software sales. He brings his business development expertise to drive revenue and relationships for the business. He is passionate about bringing a solution to the problem his clients face and building relationships with brokers. In his free time he enjoys hiking in the American River Canyon and reading.`,
                                              `John is the Controller and Plan Manager for CCHI Re. He has over twenty years of experience in Accounting and Finance having worked in a wide variety of industries. Prior to joining CCHI RE in 2018 as Assistant Controller, John was Assistant Controller for Triage Consulting Group, a Financial Healthcare firm in San Francisco and prior to that was Assistant Controller for Family Service Agency of San Francisco now known as the Felton Institute. John started his professional career as a sales representative and merchandiser for Trading Inns and began his Accounting career in 1994 with Mashonaland Holdings and then Consolidated Motors in Zimbabwe. John worked for the Avis Corporate office for 8 years prior to migrating to California in 2005 and consulted for numerous accounting and finance firms in the San Francisco Bay Area. John studied for a Bachelors’s degree with the University of Zimbabwe and specialized in Accounting and Bookkeeping with the City and Guilds of London Institute. Besides his professional work, John loves spending time with his kids, sports and has a passion for promoting music, dance, and art.`,
                                              `Lynda Thomas is an Account Manager at CCHI Re. She brings 25 years of executive-level business administration experience to the firm. Lynda is married with two stepsons. She is fond of music and has many hobbies including painting, photography, water/snow skiing, gardening, cooking, baking, and enjoys volunteering for animal rescue entities.`,
                                            `Nick Rich attended the Menlo School of Business and earned a degree in Entrepreneurship  He has been in the insurance business since 2018 and joined CCHI in 2021.   He played college baseball where he learned the necessity of teamwork.  His hobbies include white water rafting and hiking.`,
                                            `Dr. Olivia Fields, DACM, LAc, MTOM is a California and nationally licensed acupuncturist, a board-certified Chinese medicinal herbalist and acupuncturist, and national Diplomate in Acupuncture. 
 
                                            She studied Medical Anthropology at the University of Southern California, where she graduated Summa Cum Laude. She went on to obtain her Master’s degree in Traditional Oriental Medicine at Emperor’s College in Santa Monica, one of the leading acupuncture institutions in the US, where she also graduated Summa Cum Laude. She completed internships at the Disney Cancer Center in Burbank, CA and at the Venice Family Clinic. She completed her doctorate in Acupuncture and Chinese Medicine at Pacific College in San Diego, CA. Her doctoral work centered around healthcare systems and optimizing patient outcomes by integrating allopathic and complimentary healthcare modalities.
                                             
                                            In addition to her university-level training, she has apprenticed with several master healers and herbalists. She is a certified yoga, meditation and breathwork instructor. She also has advanced training in integrative nutrition, facial rejuvenation acupuncture and Acutonics (the stimulation of acupoints with sound rather than needles).
                                             
                                            Drawing from her extensive knowledge of Eastern medicine and complementary healing modalities in addition to Western Medicine, and her experience in clinical practice, Dr. Fields creates unique risk management strategies that not only save plans money, but also ensure that patients receive high quality healthcare.
                                            `
                                            ])
    const [lastClicked, setLastClicked] = useState('');


    let staffId;
    let staffIdCardParent;
    let bioDiv = document.createElement('DIV');
    bioDiv.id = "bio-div";
    let textNode = document.createTextNode(bioArray[0]);;

    const filterFunction = () => {
        
        if(props.name === "Les C. Fields" || props.name === "Tom R. Rich") {
            staffIdCardParent = document.getElementById('executive-staff-container');
            if(props.name === 'Les C. Fields') {
                if(textNode !== bioArray[0]) {
                    textNode = document.createTextNode(bioArray[0]);
                    bioDiv.appendChild(textNode);
                } else {
                    document.getElementById('bio-div').remove();
                }
            } else if(props.name === "Tom R. Rich") {
                if(textNode !== bioArray[1]) {
                    textNode = document.createTextNode(bioArray[1]);
                    bioDiv.appendChild(textNode);
                } else {
                    document.getElementById('bio-div').remove();
                }
            }
        } else if(props.name === "Austin Mullen" || props.name === "John Nyamuzuwe" || props.name === "Lynda Thomas") {
            staffIdCardParent = document.getElementById('key-staff-container');
            if(props.name === 'Austin Mullen') {
                if(textNode !== bioArray[2]) {
                    textNode = document.createTextNode(bioArray[2]);
                    bioDiv.appendChild(textNode);
                } else {
                    document.getElementById('bio-div').remove();
                }
            } else if(props.name === "John Nyamuzuwe") {
                if(textNode !== bioArray[3]) {
                    textNode = document.createTextNode(bioArray[3]);
                    bioDiv.appendChild(textNode);
                } else {
                    document.getElementById('bio-div').remove();
                }
            } else if(props.name === "Lynda Thomas") {
                if(textNode !== bioArray[4]) {
                    textNode = document.createTextNode(bioArray[4]);
                    bioDiv.appendChild(textNode);
                } else {
                    document.getElementById('bio-div').remove();
                }
            }
        } else if(props.name === "Nick Rich" || props.name === "Olivia Fields") {
            staffIdCardParent = document.getElementById('key-staff-container');
            if(props.name === "Nick Rich") {
                if(textNode !== bioArray[5]) {
                    textNode = document.createTextNode(bioArray[5]);
                    bioDiv.appendChild(textNode);
                } else {
                    document.getElementById('bio-div').remove();
                }
            } else if(props.name === "Olivia Fields") {
                if(textNode !== bioArray[6]) {
                    textNode = document.createTextNode(bioArray[6]);
                    bioDiv.appendChild(textNode);
                } else {
                    document.getElementById('bio-div').remove();
                }
            }
        }     
    }

    const handleClick = (e) => {
        console.log(e.target)
        console.log(lastClicked)

        if(document.getElementById('bio-div') == null) {
            console.log('true')
            bioDiv.classList.add('fadeIn')
            filterFunction();

        } else if(document.getElementById('bio-div') !== null) {
            bioDiv.classList.add('fadeIn')
            textNode.data = ''
            document.getElementById('bio-div').remove();
            filterFunction();
        }
        
            
        staffIdCardParent.appendChild(bioDiv);

    }

    return (
        <div id={`Staff-${props.id}`} key={props.id} onClick={handleClick} className={`staff-card-item-container Staff-${props.id}`}>
            <img  src={props.profileImg} height="175" width="175" className={`profile-image Staff-${props.id}`} onClick={handleClick}/>
            <h3 className={`profile-name Staff-${props.id}`}>{props.name}</h3>
            <h4 className={`profile-position Staff-${props.id}`}>{props.position}</h4>
            <p className={`profile-direct Staff-${props.id}`}>{props.direct}</p>
            <p className={`profile-email bold Staff-${props.id}`}>{props.email}</p>
        </div>
    )
}
