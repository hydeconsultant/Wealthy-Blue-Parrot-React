import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Pricing14 from '../components/pricing14'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Wealthy Blue Parrot</title>
        <meta property="og:title" content="Wealthy Blue Parrot" />
      </Helmet>
      <Navbar8
        link1={
          <Fragment>
            <span className="home-text100 thq-body-small thq-link">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text101 thq-body-small thq-link">
              Services
            </span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text102 thq-body-small thq-link">
              About Us
            </span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text103 thq-body-small thq-link">
              Contact
            </span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text104 thq-body-large">Page One</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text105 thq-body-large">Page Two</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text106 thq-body-large">Page Three</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text107 thq-body-large">Page Four</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text108">Main Action</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text109">Secondary Action</span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="home-text110 thq-body-small">
              Page One Description
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text111 thq-body-small">
              Page Two Description
            </span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text112 thq-body-small">
              Page Three Description
            </span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="home-text113 thq-body-small">
              Page Four Description
            </span>
          </Fragment>
        }
      ></Navbar8>
      <Hero17
        action1={
          <Fragment>
            <span className="home-text114 thq-body-small">Learn More</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text115 thq-body-small">Contact Us</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text116 thq-body-large">
              Highlighting your consulting expertise with customer-driven
              research and development insights. Let us help you identify market
              opportunities through competitor analysis.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text117 thq-heading-1">
              Expert Consulting Services for R&amp;D
            </span>
          </Fragment>
        }
      ></Hero17>
      <Features24
        feature1Title={
          <Fragment>
            <span className="home-text118 thq-heading-2">
              Customer-Driven Research &amp; Development
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text119 thq-heading-2">
              Innovation &amp; Ideation Workshops
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text120 thq-heading-2">
              R&amp;D Project Management
            </span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text121 thq-body-small">
              Gain essential R&amp;D insights through customer-driven research
              and development to stay ahead in the market.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text122 thq-body-small">
              Participate in rapid prototyping workshops to test new ideas
              quickly and turn them into actionable plans.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text123 thq-body-small">
              Enhance your team&apos;s R&amp;D project management skills and
              optimize processes using Lean methodology to reduce waste.
            </span>
          </Fragment>
        }
      ></Features24>
      <CTA26
        action1={
          <Fragment>
            <span className="home-text124">Schedule a Consultation</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text125 thq-body-large">
              Contact us today to schedule a consultation and see how we can
              help you achieve your innovation goals.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text126 thq-heading-2">
              Ready to take your R&amp;D to the next level?
            </span>
          </Fragment>
        }
      ></CTA26>
      <Features25
        feature1Title={
          <Fragment>
            <span className="home-text127 thq-heading-2">
              Customer-Driven Research &amp; Development
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text128 thq-heading-2">
              Innovation &amp; Ideation Workshops
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text129 thq-heading-2">
              R&amp;D Project Management
            </span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text130 thq-body-small">
              Gain essential R&amp;D insights through customer-driven research
              and development.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text131 thq-body-small">
              Transform innovative concepts into actionable plans through rapid
              prototyping in our workshops.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text132 thq-body-small">
              Enhance R&amp;D project management skills and optimize processes
              with Lean methodology implementation.
            </span>
          </Fragment>
        }
      ></Features25>
      <Pricing14
        plan1={
          <Fragment>
            <span className="home-text133 thq-body-large">Basic Plan</span>
          </Fragment>
        }
        plan2={
          <Fragment>
            <span className="home-text134 thq-body-large">Business plan</span>
          </Fragment>
        }
        plan3={
          <Fragment>
            <span className="home-text135 thq-body-large">Enterprise plan</span>
          </Fragment>
        }
        plan11={
          <Fragment>
            <span className="home-text136 thq-body-large">Basic plan</span>
          </Fragment>
        }
        plan21={
          <Fragment>
            <span className="home-text137 thq-body-large">Business plan</span>
          </Fragment>
        }
        plan31={
          <Fragment>
            <span className="home-text138 thq-body-large">Enterprise plan</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text139 thq-body-small">
              Choose the perfect plan for you
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="home-text140 thq-body-large">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text143 thq-heading-2">Pricing plan</span>
          </Fragment>
        }
        plan1Price={
          <Fragment>
            <span className="home-text144 thq-heading-3">$99/month</span>
          </Fragment>
        }
        plan2Price={
          <Fragment>
            <span className="home-text145 thq-heading-3">$29/mo</span>
          </Fragment>
        }
        plan3Price={
          <Fragment>
            <span className="home-text146 thq-heading-3">$49/mo</span>
          </Fragment>
        }
        plan1Action={
          <Fragment>
            <span className="home-text147 thq-body-small">Sign Up Now</span>
          </Fragment>
        }
        plan1Price1={
          <Fragment>
            <span className="home-text148 thq-heading-3">$199/month</span>
          </Fragment>
        }
        plan1Yearly={
          <Fragment>
            <span className="home-text149 thq-body-large">$999/year</span>
          </Fragment>
        }
        plan2Action={
          <Fragment>
            <span className="home-text150 thq-body-small">Get started</span>
          </Fragment>
        }
        plan2Price1={
          <Fragment>
            <span className="home-text151 thq-heading-3">$299/yr</span>
          </Fragment>
        }
        plan2Yearly={
          <Fragment>
            <span className="home-text152 thq-body-large">or $299 yearly</span>
          </Fragment>
        }
        plan3Action={
          <Fragment>
            <span className="home-text153 thq-body-small">Get started</span>
          </Fragment>
        }
        plan3Price1={
          <Fragment>
            <span className="home-text154 thq-heading-3">$499/yr</span>
          </Fragment>
        }
        plan3Yearly={
          <Fragment>
            <span className="home-text155 thq-body-large">or $499 yearly</span>
          </Fragment>
        }
        plan1Action1={
          <Fragment>
            <span className="home-text156 thq-body-small">Sign Up Now</span>
          </Fragment>
        }
        plan1Yearly1={
          <Fragment>
            <span className="home-text157 thq-body-large">$1999/year</span>
          </Fragment>
        }
        plan2Action1={
          <Fragment>
            <span className="home-text158 thq-body-small">Get started</span>
          </Fragment>
        }
        plan2Yearly1={
          <Fragment>
            <span className="home-text159 thq-body-large">or $29 monthly</span>
          </Fragment>
        }
        plan3Action1={
          <Fragment>
            <span className="home-text160 thq-body-small">Get started</span>
          </Fragment>
        }
        plan3Yearly1={
          <Fragment>
            <span className="home-text161 thq-body-large">or $49 monthly</span>
          </Fragment>
        }
        plan1Feature1={
          <Fragment>
            <span className="home-text162 thq-body-small">
              Customer-Driven R&amp;D Insights
            </span>
          </Fragment>
        }
        plan1Feature2={
          <Fragment>
            <span className="home-text163 thq-body-small">
              Competitor Analysis
            </span>
          </Fragment>
        }
        plan1Feature3={
          <Fragment>
            <span className="home-text164 thq-body-small">
              Innovation &amp; Ideation Workshops
            </span>
          </Fragment>
        }
        plan2Feature1={
          <Fragment>
            <span className="home-text165 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Feature2={
          <Fragment>
            <span className="home-text166 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Feature3={
          <Fragment>
            <span className="home-text167 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Feature4={
          <Fragment>
            <span className="home-text168 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature1={
          <Fragment>
            <span className="home-text169 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature2={
          <Fragment>
            <span className="home-text170 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature3={
          <Fragment>
            <span className="home-text171 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature4={
          <Fragment>
            <span className="home-text172 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature5={
          <Fragment>
            <span className="home-text173 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan1Feature11={
          <Fragment>
            <span className="home-text174 thq-body-small">
              R&amp;D Project Management
            </span>
          </Fragment>
        }
        plan1Feature21={
          <Fragment>
            <span className="home-text175 thq-body-small">
              Lean Methodology Implementation
            </span>
          </Fragment>
        }
        plan1Feature31={
          <Fragment>
            <span className="home-text176 thq-body-small">
              Optimize Processes &amp; Reduce Waste
            </span>
          </Fragment>
        }
        plan2Feature11={
          <Fragment>
            <span className="home-text177 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Feature21={
          <Fragment>
            <span className="home-text178 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Feature31={
          <Fragment>
            <span className="home-text179 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Feature41={
          <Fragment>
            <span className="home-text180 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature11={
          <Fragment>
            <span className="home-text181 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature21={
          <Fragment>
            <span className="home-text182 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature31={
          <Fragment>
            <span className="home-text183 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature41={
          <Fragment>
            <span className="home-text184 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature51={
          <Fragment>
            <span className="home-text185 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
      ></Pricing14>
      <Steps2
        step1Title={
          <Fragment>
            <span className="home-text186 thq-heading-2">
              <span>
                Customer-Driven
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>Research &amp; Development</span>
            </span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text190 thq-heading-2">
              Innovation &amp; Ideation Workshops
            </span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text191 thq-heading-2">
              Competitor Analysis
            </span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text192 thq-heading-2">
              R&amp;D Project Management
            </span>
          </Fragment>
        }
        step1Description={
          <Fragment>
            <span className="home-text193 thq-body-small">
              Gain essential R&amp;D insights by conducting customer-driven
              research to understand market needs and trends.
            </span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text194 thq-body-small">
              Participate in our rapid prototyping workshops to test new ideas
              quickly and turn them into actionable plans.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text195 thq-body-small">
              Identify market opportunities through thorough competitor analysis
              to stay ahead in the industry.
            </span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text196 thq-body-small">
              Enhance your team&apos;s project management skills and optimize
              processes using Lean methodology for efficient R&amp;D projects.
            </span>
          </Fragment>
        }
      ></Steps2>
      <Testimonial17
        review1={
          <Fragment>
            <span className="home-text197 thq-body-small">
              Hyde Consutants  have a wealth of practical knowledge and knowhow
              about start-ups. In addition, they are collaborative and are
              extremely generous with their time. They work extremely well as a
              team, offering a difference of perspective on the same knowledge.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text198 thq-body-small">
              Jacob has shown leadership in the Dunedin startup ecosystem.
              Helping entrepreneurs as the entrepreneur in resident for The
              Distiller. Jacob commits time throughout the week to catch up with
              entrepreneurs 1 on 1 and sets aside Friday&apos;s for
              entrepreneurs to drop in and ask questions on their business
              model, financial model and fundraising. Jacob has hosted workshops
              and lectured the entrepreneur community on fundraising and
              validation. Jacob has on multiple occasions mentored at Startup
              Weekend Dunedin - enthusiastically working with the teams and
              committing to the long weekend grind. Jacob has truly contributed
              to building the Dunedin startup ecosystem, and continues to do so.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text199 thq-body-small">
              <span>Casey Davies-Bell</span>
              <br></br>
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text202 thq-body-small">
              The R&amp;D project management training was instrumental in
              improving our team&apos;s efficiency and output. We saw immediate
              results in our processes.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text203 thq-heading-2">Testimonials</span>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <span className="home-text204 thq-body-large">Angela Howell</span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="home-text205 thq-body-large">
              Casey Davies-Bell
            </span>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <span className="home-text206 thq-body-large">Michael Lee</span>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <span className="home-text207 thq-body-large">Sarah Brown</span>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="home-text208 thq-body-small">
              Start up expert with over 20 years experience scaling businesses
            </span>
          </Fragment>
        }
        author2Position={
          <Fragment>
            <span className="home-text209 thq-body-small">
              CEO at Amplifier
            </span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text210 thq-body-small">
              VP of Product Development, Global Tech Co.
            </span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="home-text211 thq-body-small">
              Director of Innovation, Future Trends Ltd.
            </span>
          </Fragment>
        }
      ></Testimonial17>
      <Contact10
        content1={
          <Fragment>
            <span className="home-text212 thq-body-large">
              Reach out to us for any inquiries or to schedule a consultation.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text213 thq-heading-2">Contact Us</span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="home-text214 thq-heading-3">Australia</span>
          </Fragment>
        }
        location2={
          <Fragment>
            <span className="home-text215 thq-heading-3">New Zealand</span>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <span className="home-text216 thq-body-large">
              123 Consulting Street, Innovation City, USA
            </span>
          </Fragment>
        }
        location2Description={
          <Fragment>
            <span className="home-text217 thq-body-large">
              456 Innovation Avenue, Growth Town, USA
            </span>
          </Fragment>
        }
      ></Contact10>
      <Footer4
        link1={
          <Fragment>
            <span className="home-text218 thq-body-small">
              Customer-Driven Research &amp; Development
            </span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text219 thq-body-small">
              Innovation &amp; Ideation Workshops
            </span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text220 thq-body-small">
              R&amp;D Project Management
            </span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text221 thq-body-small">
              Competitor Analysis
            </span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="home-text222 thq-body-small">Contact Us</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text223 thq-body-small">
              Terms and Conditions
            </span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text224 thq-body-small">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text225 thq-body-small">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
