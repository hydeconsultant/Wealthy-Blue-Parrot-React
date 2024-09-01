import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

import './features24.css'

const Features24 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className="thq-section-padding">
      <div className="features24-container2 thq-section-max-width">
        <div className="features24-image-container">
          {activeTab === 0 && (
            <img
              alt={props.feature1ImgAlt}
              src={props.feature1ImgSrc}
              className="features24-image1 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 1 && (
            <img
              alt={props.feature2ImgAlt}
              src={props.feature2ImgSrc}
              className="features24-image2 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.feature3ImgAlt}
              src={props.feature3ImgSrc}
              className="features24-image3 thq-img-ratio-16-9"
            />
          )}
        </div>
        <div className="features24-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="features24-tab-horizontal1"
          >
            <div className="features24-divider-container1">
              {activeTab === 0 && <div className="features24-container3"></div>}
            </div>
            <div className="features24-content1">
              <h2>
                {props.feature1Title ?? (
                  <Fragment>
                    <h2 className="features24-text2 thq-heading-2">
                      Customer-Driven Research &amp; Development
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.feature1Description ?? (
                  <Fragment>
                    <span className="features24-text3 thq-body-small">
                      Gain essential R&amp;D insights through customer-driven
                      research and development to stay ahead in the market.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="features24-tab-horizontal2"
          >
            <div className="features24-divider-container2">
              {activeTab === 1 && <div className="features24-container4"></div>}
            </div>
            <div className="features24-content2">
              <h2>
                {props.feature2Title ?? (
                  <Fragment>
                    <h2 className="features24-text1 thq-heading-2">
                      Innovation &amp; Ideation Workshops
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.feature2Description ?? (
                  <Fragment>
                    <span className="features24-text6 thq-body-small">
                      Participate in rapid prototyping workshops to test new
                      ideas quickly and turn them into actionable plans.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="features24-tab-horizontal3"
          >
            <div className="features24-divider-container3">
              {activeTab === 2 && <div className="features24-container5"></div>}
            </div>
            <div className="features24-content3">
              <h2>
                {props.feature3Title ?? (
                  <Fragment>
                    <h2 className="features24-text4 thq-heading-2">
                      R&amp;D Project Management
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.feature3Description ?? (
                  <Fragment>
                    <span className="features24-text5 thq-body-small">
                      Enhance your team&apos;s R&amp;D project management skills
                      and optimize processes using Lean methodology to reduce
                      waste.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Features24.defaultProps = {
  feature3ImgSrc:
    'https://images.unsplash.com/photo-1541400117672-40497d39cee5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzg2OTUxN3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature2Title: undefined,
  feature1Title: undefined,
  feature2ImgSrc:
    'https://images.unsplash.com/photo-1680458841507-5bc5aba30a9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzg2OTUxOHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1Description: undefined,
  feature3Title: undefined,
  feature3ImgAlt: 'R&D Project Management Image',
  feature1ImgSrc:
    'https://images.unsplash.com/photo-1536483227150-9c0a50b89baf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzg2OTUxOHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature3Description: undefined,
  feature2ImgAlt: 'Innovation & Ideation Workshops Image',
  feature1ImgAlt: 'Customer-Driven Research & Development Image',
  feature2Description: undefined,
}

Features24.propTypes = {
  feature3ImgSrc: PropTypes.string,
  feature2Title: PropTypes.element,
  feature1Title: PropTypes.element,
  feature2ImgSrc: PropTypes.string,
  feature1Description: PropTypes.element,
  feature3Title: PropTypes.element,
  feature3ImgAlt: PropTypes.string,
  feature1ImgSrc: PropTypes.string,
  feature3Description: PropTypes.element,
  feature2ImgAlt: PropTypes.string,
  feature1ImgAlt: PropTypes.string,
  feature2Description: PropTypes.element,
}

export default Features24
