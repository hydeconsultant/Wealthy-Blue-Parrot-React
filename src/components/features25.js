import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

import './features25.css'

const Features25 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className="thq-section-padding">
      <div className="features25-container2 thq-section-max-width">
        <div className="features25-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="features25-tab-horizontal1"
          >
            <div className="features25-divider-container1">
              {activeTab === 0 && <div className="features25-container3"></div>}
            </div>
            <div className="features25-content1">
              <h2>
                {props.feature1Title ?? (
                  <Fragment>
                    <h2 className="features25-text3 thq-heading-2">
                      Customer-Driven Research &amp; Development
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.feature1Description ?? (
                  <Fragment>
                    <span className="features25-text1 thq-body-small">
                      Gain essential R&amp;D insights through customer-driven
                      research and development.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="features25-tab-horizontal2"
          >
            <div className="features25-divider-container2">
              {activeTab === 1 && <div className="features25-container4"></div>}
            </div>
            <div className="features25-content2">
              <h2>
                {props.feature2Title ?? (
                  <Fragment>
                    <h2 className="features25-text6 thq-heading-2">
                      Innovation &amp; Ideation Workshops
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.feature2Description ?? (
                  <Fragment>
                    <span className="features25-text4 thq-body-small">
                      Transform innovative concepts into actionable plans
                      through rapid prototyping in our workshops.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="features25-tab-horizontal3"
          >
            <div className="features25-divider-container3">
              {activeTab === 2 && <div className="features25-container5"></div>}
            </div>
            <div className="features25-content3">
              <h2>
                {props.feature3Title ?? (
                  <Fragment>
                    <h2 className="features25-text5 thq-heading-2">
                      R&amp;D Project Management
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.feature3Description ?? (
                  <Fragment>
                    <span className="features25-text2 thq-body-small">
                      Enhance R&amp;D project management skills and optimize
                      processes with Lean methodology implementation.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
        <div className="features25-image-container">
          {activeTab === 0 && (
            <img
              alt={props.feature1ImgAlt}
              src={props.feature1ImgSrc}
              className="features25-image1 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 1 && (
            <img
              alt={props.feature2ImgAlt}
              src={props.feature2ImgSrc}
              className="features25-image2 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.feature3ImgAlt}
              src={props.feature3ImgSrc}
              className="features25-image3 thq-img-ratio-16-9"
            />
          )}
        </div>
      </div>
    </div>
  )
}

Features25.defaultProps = {
  feature2ImgSrc:
    'https://images.unsplash.com/photo-1615983276036-8dd65aa005a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzg2OTUxOHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature3ImgSrc:
    'https://images.unsplash.com/photo-1527207680022-a9ecb15759a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzg2OTUxOHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1ImgSrc:
    'https://images.unsplash.com/photo-1670645948614-68607781936a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzg2OTUxN3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature1Description: undefined,
  feature1ImgAlt: 'Customer-Driven Research & Development Image',
  feature3Description: undefined,
  feature3ImgAlt: 'R&D Project Management Image',
  feature1Title: undefined,
  feature2Description: undefined,
  feature3Title: undefined,
  feature2ImgAlt: 'Innovation & Ideation Workshops Image',
  feature2Title: undefined,
}

Features25.propTypes = {
  feature2ImgSrc: PropTypes.string,
  feature3ImgSrc: PropTypes.string,
  feature1ImgSrc: PropTypes.string,
  feature1Description: PropTypes.element,
  feature1ImgAlt: PropTypes.string,
  feature3Description: PropTypes.element,
  feature3ImgAlt: PropTypes.string,
  feature1Title: PropTypes.element,
  feature2Description: PropTypes.element,
  feature3Title: PropTypes.element,
  feature2ImgAlt: PropTypes.string,
  feature2Title: PropTypes.element,
}

export default Features25
