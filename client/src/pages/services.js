import React from 'react'

import CallToAction from '../components/callToAction.js'
import ServiceItem from '../components/serviceItem.js'
import Footer from '../components/footer.js';

import ServicesCTA from '../IMAGES/servicesCTA.jpg';
import sfPhotoOne from '../IMAGES/sfPhotoOne.jpg'
import sfPhotoTwo from '../IMAGES/sfPhotoTwo.jpg'
import '../css/App.css';

export default function services(props) {
    return (
        <div id="services-page-container">
            <CallToAction ctaImage={ServicesCTA} title="Services" subTitle="" />

            <div id="services-info-container">
                <h2 id="service-info-heading">From plan quote through risk management and account services — CCHI Re is there for you.</h2>
                <p id="service-info-text">CCHI Re’s comprehensive menu of Medical Stop Loss and Health Plan Risk Management Services is grounded in decades of experience and industry leadership.  As our portfolio of reinsurers and medical provider partners grows we will continue to deliver expertise to brokers and their clients.</p>
            </div>

            <div id="services-list-container">
                <ServiceItem
                    title='Medical Stop Loss Coverages and Services'
                    image={sfPhotoOne}
                    imageId={"sfPhotoOne"}
                    listId= {1}
                    serviceList={['Group Captive and Re-insurance Plans',
                                  'Specific & Aggregate Excess Contracts (run-in & run-out coverage)',
                                  'Variable Corridor Specific Excess',
                                  'Variable Premium Specific Excess',
                                  'Corporate Captive Buy-Down Specific Coverage',
                                  'Private Label Reinsurance Products',
                                  'Insurance Carrier Auditing & Premium Accounting Services',
                                  'Reinsurance for Jointly Managed Plans',
                                  'Industry Specific Reinsurance Pools']}
                />

                <ServiceItem
                    title="Risk Management and Patient Advocacy Services"
                    image={sfPhotoTwo}
                    imageId={"sfPhotoTwo"}
                    listId= {2}
                    serviceList={['Claim filing and ongoing management tracking is the heart of rapid carrier response to stop loss claims.  This relieves Plan Administrators of a costly burden which often slows insurer processing.',
                                  'Early Intervention (SM...once again, a service mark goes here) is the process of discovering potential claims prior to a large expenditure of Plan assets.  This opens a wide variety of cost and healthcare management options.',
                                  'Overlay Networks.  CCHI Re is not bound by insurer contracts with  single source medical vendors.  Or portfolio of organ transplant specialists, general medical networks, and other specialties saves both money and lives.',
                                  'CCHI Rx (SM service mark here as well).  By far the greatest challenge to controlling healthcare costs are pharmaceuticals.  Our management services have saved healthcare plans literally millions of dollars for identical drugs.  The case studies are remarkable.',
                                  'At CCHI Re we see claimants suffering extremely severe medical events.  They are often afraid of both cost, the impact to their family, and of course, their survival.  Our risk management philosophy never overlooks these circumstances.']}
                />

            </div>

            <Footer />
        </div>
    )
}
