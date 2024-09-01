import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact10.css'

const Contact10 = (props) => {
  return (
    <div className="contact10-container1 thq-section-padding">
      <div className="contact10-max-width thq-section-max-width">
        <div className="contact10-content1 thq-flex-row">
          <div className="contact10-content2">
            <h2>
              {props.heading1 ?? (
                <Fragment>
                  <h2 className="contact10-text17 thq-heading-2">Contact Us</h2>
                </Fragment>
              )}
            </h2>
            <p>
              {props.content1 ?? (
                <Fragment>
                  <p className="contact10-text20 thq-body-large">
                    Reach out to us for any inquiries or to schedule a
                    consultation.
                  </p>
                </Fragment>
              )}
            </p>
          </div>
        </div>
        <div className="contact10-content3 thq-flex-row">
          <div className="contact10-container2">
            <img
              alt={props.location1ImageAlt}
              src={props.location1ImageSrc}
              className="contact10-image1 thq-img-ratio-16-9"
            />
            <h3>
              {props.location1 ?? (
                <Fragment>
                  <h3 className="contact10-text21 thq-heading-3">
                    Headquarters
                  </h3>
                </Fragment>
              )}
            </h3>
            <p>
              {props.location1Description ?? (
                <Fragment>
                  <p className="contact10-text16 thq-body-large">
                    123 Consulting Street, Innovation City, USA
                  </p>
                </Fragment>
              )}
            </p>
            <div className="contact10-container3">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="thq-button-flat thq-body-small"
              >
                Get directions
              </a>
            </div>
          </div>
          <div className="contact10-container4">
            <img
              alt={props.location2ImageAlt}
              src={props.location2ImageSrc}
              className="contact10-image2 thq-img-ratio-16-9"
            />
            <h3>
              {props.location2 ?? (
                <Fragment>
                  <h3 className="contact10-text18 thq-heading-3">
                    Regional Office
                  </h3>
                </Fragment>
              )}
            </h3>
            <p>
              {props.location2Description ?? (
                <Fragment>
                  <p className="contact10-text19 thq-body-large">
                    456 Innovation Avenue, Growth Town, USA
                  </p>
                </Fragment>
              )}
            </p>
            <div className="contact10-container5">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="thq-button-flat thq-body-small"
              >
                Get directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Contact10.defaultProps = {
  location2ImageAlt: 'Regional Office Image',
  location1Description: undefined,
  heading1: undefined,
  location2: undefined,
  location2Description: undefined,
  location1ImageAlt: 'Headquarters Image',
  content1: undefined,
  location1: undefined,
  location1ImageSrc:
    'https://images.unsplash.com/photo-1531860317426-b612b5d3f8b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzg2OTUxN3w&ixlib=rb-4.0.3&q=80&w=1080',
  location2ImageSrc:
    'https://images.unsplash.com/photo-1702476555865-bc1beb7267e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzg2OTUxN3w&ixlib=rb-4.0.3&q=80&w=1080',
}

Contact10.propTypes = {
  location2ImageAlt: PropTypes.string,
  location1Description: PropTypes.element,
  heading1: PropTypes.element,
  location2: PropTypes.element,
  location2Description: PropTypes.element,
  location1ImageAlt: PropTypes.string,
  content1: PropTypes.element,
  location1: PropTypes.element,
  location1ImageSrc: PropTypes.string,
  location2ImageSrc: PropTypes.string,
}

export default Contact10
