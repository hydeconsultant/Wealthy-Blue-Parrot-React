import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './steps2.css'

const Steps2 = (props) => {
  return (
    <div className="steps2-container1 thq-section-padding">
      <div className="steps2-max-width thq-section-max-width">
        <div className="steps2-container2 thq-grid-2">
          <div className="steps2-section-header">
            <h2 className="thq-heading-2">Services</h2>
            <p className="thq-body-large">
              Our consultancy services are designed to drive innovation and
              efficiency in your organization. We focus on customer-driven
              research, agile project management, and the implementation of Lean
              best practices to help you stay competitive and achieve your
              goals.
            </p>
            <div className="steps2-actions">
              <button className="thq-button-filled thq-button-animated steps2-button">
                <span className="thq-body-small">Main action</span>
              </button>
            </div>
          </div>
          <div className="steps2-container3">
            <div className="steps2-container4 thq-card">
              <h2>
                {props.step1Title ?? (
                  <Fragment>
                    <h2 className="steps2-text29 thq-heading-2">
                      Customer-Driven Research &amp; Development
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.step1Description ?? (
                  <Fragment>
                    <span className="steps2-text27 thq-body-small">
                      Gain essential R&amp;D insights by conducting
                      customer-driven research to understand market needs and
                      trends.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text15 thq-heading-3">01</label>
            </div>
            <div className="steps2-container5 thq-card">
              <h2>
                {props.step2Title ?? (
                  <Fragment>
                    <h2 className="steps2-text31 thq-heading-2">
                      Innovation &amp; Ideation Workshops
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.step2Description ?? (
                  <Fragment>
                    <span className="steps2-text28 thq-body-small">
                      Participate in our rapid prototyping workshops to test new
                      ideas quickly and turn them into actionable plans.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text18 thq-heading-3">02</label>
            </div>
            <div className="steps2-container6 thq-card">
              <h2>
                {props.step3Title ?? (
                  <Fragment>
                    <h2 className="steps2-text32 thq-heading-2">
                      Competitor Analysis
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.step3Description ?? (
                  <Fragment>
                    <span className="steps2-text26 thq-body-small">
                      Identify market opportunities through thorough competitor
                      analysis to stay ahead in the industry.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text21 thq-heading-3">03</label>
            </div>
            <div className="steps2-container7 thq-card">
              <h2>
                {props.step4Title ?? (
                  <Fragment>
                    <h2 className="steps2-text30 thq-heading-2">
                      R&amp;D Project Management
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.step4Description ?? (
                  <Fragment>
                    <span className="steps2-text25 thq-body-small">
                      Enhance your team&apos;s project management skills and
                      optimize processes using Lean methodology for efficient
                      R&amp;D projects.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text24 thq-heading-3">04</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Steps2.defaultProps = {
  step4Description: undefined,
  step3Description: undefined,
  step1Description: undefined,
  step2Description: undefined,
  step1Title: undefined,
  step4Title: undefined,
  step2Title: undefined,
  step3Title: undefined,
}

Steps2.propTypes = {
  step4Description: PropTypes.element,
  step3Description: PropTypes.element,
  step1Description: PropTypes.element,
  step2Description: PropTypes.element,
  step1Title: PropTypes.element,
  step4Title: PropTypes.element,
  step2Title: PropTypes.element,
  step3Title: PropTypes.element,
}

export default Steps2
