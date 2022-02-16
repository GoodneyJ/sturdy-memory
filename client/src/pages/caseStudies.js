import React from 'react'

import CallToAction from '../components/callToAction.js';
import CaseStudyItem from '../components/caseStudyItem.js';
import Footer from '../components/footer.js';

import CaseStudiesCTA from '../IMAGES/caseStudiesCTA.jpg'

import studyOne from '../IMAGES/case-studies/studyOne.jpg';
import studyTwo from '../IMAGES/case-studies/studyTwo.jpg';
import studyThree from '../IMAGES/case-studies/studyThree.jpg';
import studyFourPartOne from '../IMAGES/case-studies/studyFourPartOne.jpg'
import studyFourPartTwo from '../IMAGES/case-studies/studyFourPartTwo.jpg'
import studyFivePartOne from '../IMAGES/case-studies/studyFivePartOne.jpg'
import studyFivePartTwo from '../IMAGES/case-studies/studyFivePartTwo.jpg'
import studySixPartOne from '../IMAGES/case-studies/studySixPartOne.jpeg'
import studySixPartTwo from '../IMAGES/case-studies/studySixPartTwo.jpeg'

import '../css/App.css';
import caseStudyItem from '../components/caseStudyItem.js';

export default function caseStudies(props) {
    return (
        <div id="case-studies-container">
            <CallToAction ctaImage={CaseStudiesCTA} title="Case Studies & Testimonials" subTitle=""/>
            
            <div id="case-study-info-container">
                <h2>Our goal is to deliver clients healthcare plan savings with a growing portfolio of risk management services and protocols.  Here area few case studies showing typical results for both the Plan and the Patient.
</h2>
                <h4>That can mean...</h4>
                <ul id="cost-saving-list">
                    <li>Negotiating a "global buyout" (a one-time payment that caps the client's costs) with an insurer.</li>
                    <li>Consultation as to the most cost-efficient plan of care that maintains quality of care.</li>
                    <li>Or an audit of claims already paid.</li>
                </ul>
                <h3>In many cases we are able to realize significant savings for our clients.</h3>
            </div>

            <div id="case-study-container">
                <h2 className="case-subheading">Stop Loss and Risk Management Cases</h2>
                <CaseStudyItem img={studyOne} title="CASE STUDY #1 Early Intervention. 35% Savings." text="The Early Intervention Program helps CCHI clients take charge of the  claims process before costs spiral out of control. That results in lower  costs, better patient outcomes, happier employers, and longer-term  business relationships. As an example, early intervention on a major  catastrophic case for a CCHI client allowed us to negotiate a global  buyout that resulted in 35% overall savings."/>
                <CaseStudyItem img={studyTwo} title="CASE STUDY #2 Global Buyout. 22% Savings." text="An existing client had some problems regarding an employee's  eligibility for benefits. We negotiated a global buyout to cover the  cost of inpatient care on the claim which did not reach a specific  deductible. Both the lifetime maximum benefit and continuity of care  were maintained. The result was a 22% savings."/>
                <CaseStudyItem img={studyThree} title="CASE STUDY #3 Claim Audit. 40% Savings." text="When a Third Party Administrator advised us of overpayment on a claim  CCHI took action. We audited the charges and identified quality of care  issues. Taking that information to the insurer resulted in a refund to  our client resulting in 40% savings. For more information on how CCHI helps clients better manage their  self-insured healthcare programs, increase positive patient outcomes,  and contain healthcare costs, please give us a call or drop us an email."/>
                <h2 className="case-subheading">Prescription Drug Risk Management Cases</h2>
                <div id="case-study-four" className="case-study-item-container case-study-pdf">
                    <img src={studyFourPartOne} alt="case-study-four-part-one" />
                    <img src={studyFourPartTwo} alt="case-study-four-part-one" />
                </div>
                <div id="case-study-five" className="case-study-item-container case-study-pdf">
                    <img src={studyFivePartOne} alt="case-study-four-part-one" />
                    <img src={studyFivePartTwo} alt="case-study-four-part-one" />
                </div>
                <div id="case-study-six" className="case-study-item-container case-study-pdf">
                    <img src={studySixPartOne} alt="case-study-four-part-one" />
                    <img src={studySixPartTwo} alt="case-study-four-part-one" />
                </div>
            </div>

            

            <Footer />

        </div>
    )
}
