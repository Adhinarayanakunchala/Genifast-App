import React from 'react';
import AboutLogo from '../../assets/images/about.png';
import './About.css';
const About=()=>{
return(
    <div className='aboutbody'>
    <div className='about-model'>
        <div className='Content'>
        <h1 id='about'>About Us</h1>
    <img src={AboutLogo} alt='About page'/>
    <p>Branded medicines sans multitudes of marketing strategies, gimmick and voila!...generic 
        medicines were born. Yes, the concept of generic medicines or drugs is that straightforward and simple, from the time it came into being almost 100 years ago</p>
        <p>We, at GeniFast, have a dream of becoming a pioneer in making generic drugs affordable,
             accessible, widely available & as popular as their branded versions if not more. Why? Because 
             we’ve seen & felt the suffering, pain and helplessness of those who can no longer afford the medication in a chronic condition…very closely.
              They just wish to die instead. And also because we know how important and difficult it is at the same time, for a nation of 130+ billion people to get quality & inexpensive health care.</p>
    </div>
    </div>
    </div>

)
};
export default About;