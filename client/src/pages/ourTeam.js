import React from 'react'

import CallToAction from '../components/callToAction.js'
import StaffCard from '../components/staffCard.js';
import Footer from '../components/footer.js';

import '../css/App.css';

import OurTeamCTA from '../IMAGES/ourTeamCTA.jpg';
import LesFields  from '../IMAGES/staff-profiles/LesFields.jpg';
import TomRich from '../IMAGES/staff-profiles/TomRich.jpg';
import JohnNyam from '../IMAGES/staff-profiles/JohnNyam.jpg';
import Austin from '../IMAGES/staff-profiles/AustinM.PNG';
import LyndaThomas from '../IMAGES/staff-profiles/LyndaThomas.jpg';
import NickRich from '../IMAGES/staff-profiles/NickRich.jpg'
import ToddRich from '../IMAGES/staff-profiles/ToddRich.jpg'
import OliviaFields from '../IMAGES/staff-profiles/OliviaFields.jpg'

export default function ourTeam(props) {
    document.title = "CCHI:RE | Our Team"

    return (
        <div id="our-team-page-container">
            <CallToAction ctaImage={OurTeamCTA} title="Our Team" subTitle=""/>
            <div id="staff-cards-container">
                <div id="executive-staff-container">
                    <h1 id="executive-staff" className="staff-heading">Executive Staff</h1>
                    <div id="staff-container-top" className="staff-item-container">
                        <StaffCard
                            profileImg={LesFields}
                            name="Les C. Fields"
                            position="CEO"
                            direct="415-785-0931"
                            email="LFields@cchi.com"
                            id="One"
                        />
                        <StaffCard
                            profileImg={TomRich}
                            name="Tom R. Rich"
                            position="Managing Director"
                            direct="650-796-2111"
                            email="trich@cchi.com"
                            id="Two"
                        />
                    </div>
                </div>

                <div id="key-staff-container">
                    <h2 id="key-staff" className="staff-heading">Key Staff</h2>
                    <div id="staff-container-middle" className="staff-item-container">
                        <StaffCard
                            profileImg={Austin}
                            name="Austin Mullen"
                            position="Vice President Business Development"
                            direct="530-979-6098"
                            email="amullen@cchi.com"
                            id="Three"
                        />
                        <StaffCard
                            profileImg={JohnNyam}
                            name="John Nyamuzuwe"
                            position="Executive Plan Manager"
                            direct="415-288-4123"
                            email="johnn@cchi.com"
                            id="Four"
                        />
                        <StaffCard
                            profileImg={LyndaThomas}
                            name="Lynda Thomas"
                            position="Senior Account Manager"
                            direct="650-242-2233"
                            email="lthomas@cchi.com"
                            id="Five"
                        />

                    </div>
                </div>

            <div id="staff-row-three" className="staff-item-container">
                <div id="staff-container-bottom" className="staff-item-container">
                        <StaffCard
                            profileImg={NickRich}
                            name="Nick Rich"
                            position="Senior Account Manager"
                            direct="650-930-0405"
                            email="lthomas@cchi.com"
                            id="Six"
                        />
                        <StaffCard
                            profileImg={OliviaFields}
                            name="Olivia Fields"
                            position="Director of Risk Management"
                            direct="310-948-1284"
                            email="lthomas@cchi.com"
                            id="Seven"
                        />
                        <StaffCard
                            profileImg={ToddRich}
                            name="Todd"
                            position="Senior Account Manager"
                            direct="650-339-2309"
                            email="lthomas@cchi.com"
                            id="Five"
                        />
                    </div>
                </div>

            <Footer />
            </div>
        </div>
    )
}
