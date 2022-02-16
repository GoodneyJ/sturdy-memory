import React from 'react'


import CallToAction from '../components/callToAction.js';
import ArticleItem from '../components/articleItem.js';

import Footer from '../components/footer.js'

import HomeCTA from '../IMAGES/homeCTA.jpg';

import articleOne from '../IMAGES/article-images/articleOne.jpg'
import articleTwo from '../IMAGES/article-images/articleTwo.jpg'
import articleThree from '../IMAGES/article-images/articleThree.jpg'
import articleFour from '../IMAGES/article-images/articleFour.jpg'
import articleFive from '../IMAGES/article-images/articleFive.jpg'

export default function homepage(props) {
    
    document.title = "CCHI:RE | Home"

    return (
        <div id="homepage-container">
            <CallToAction ctaImage={HomeCTA} title="CCHI Re" subTitle="Providing brokers innovative risk managment since 1986"/>
            <div id="about-section">
                <h1 id="about-heading">About Us</h1>
                <div id="about-text-container">
                    <p id="about-text">Brokers know how difficult it is to manage their client self-funded healthcare plans.  At CCHI Re, we have a provided broker Medical Stop Loss and Risk Management Services since 1986.</p>
                    <p id="about-text-heading">Open your window of opportunity. Call CCHI.</p>
                </div>
            </div>

            <div id="articles-container">
                <ArticleItem
                    title={`CCHI Re RX ${'\u2120'}`}
                    text="The fix your self-funded plan has been waiting for. RX claims are drowning self-funded plans. This new approach is the life jacket your plan needs."
                    img={articleOne}
                    to="/home/article-one"
                />

                {/* <ArticleItem
                    title="Why you should self-fund your fully insured health plan"
                    text="There’s never been a more critical time to consider self-funding for fully insured groups over 50 lives."
                    img={articleTwo}
                    to="/home/article-two"
                /> */}

                <ArticleItem
                    title="Are you missing out on key medical stop loss markets?"
                    text="The experience that our stop loss team has with the carriers enables CCHI Re to negotiate exceptional rates for your clients. This service saves you time and enhances your bottom line."
                    img={articleThree}
                    to="/home/article-three"
                />

                <ArticleItem
                    title="Valuable strategies to lowering claims costs"
                    text={[<span className="bold">The I in CCHI stands for INNOVATION. </span>, `Since 1986 we have been designing strategies that cut claim costs and give us leverage in negotiating lower stop-loss rates.`]}
                    img={articleFour}
                    to="/home/article-four"
                />

                <ArticleItem
                    title="Our Early Intervention program saves money, maximizes patient care quality and retains clients."
                    text=''
                    img={articleFive}
                    to="/home/article-five"
                />
            </div>

            <Footer />

        </div>
    )
}
