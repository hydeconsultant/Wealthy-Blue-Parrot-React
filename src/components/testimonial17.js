import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './testimonial17.css'

const Testimonial17 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial17-max-width thq-section-max-width">
        <div className="testimonial17-container10">
          <h2>
            {props.heading1 ?? (
              <Fragment>
                <h2 className="testimonial17-text34 thq-heading-2">
                  Testimonials
                </h2>
              </Fragment>
            )}
          </h2>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card1"
              >
                <div className="testimonial17-container12">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial17-image1"
                  />
                  <div className="testimonial17-container13">
                    <strong>
                      {props.author1Name ?? (
                        <Fragment>
                          <strong className="testimonial17-text25 thq-body-large">
                            John Smith
                          </strong>
                        </Fragment>
                      )}
                    </strong>
                    <span>
                      {props.author1Position ?? (
                        <Fragment>
                          <span className="testimonial17-text28 thq-body-small">
                            CEO, Tech Solutions Inc.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span>
                  {props.review1 ?? (
                    <Fragment>
                      <span className="testimonial17-text29 thq-body-small">
                        I highly recommend their services to any company looking
                        to stay ahead in today&apos;s competitive market.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card2"
              >
                <div className="testimonial17-container14">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial17-image2"
                  />
                  <div className="testimonial17-container15">
                    <strong>
                      {props.author2Name ?? (
                        <Fragment>
                          <strong className="testimonial17-text26 thq-body-large">
                            Emily Johnson
                          </strong>
                        </Fragment>
                      )}
                    </strong>
                    <span>
                      {props.author2Position ?? (
                        <Fragment>
                          <span className="testimonial17-text23 thq-body-small">
                            CTO, Innovate Now
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span>
                  {props.review2 ?? (
                    <Fragment>
                      <span className="testimonial17-text33 thq-body-small">
                        The ideation workshops were incredibly valuable for our
                        team. We were able to generate and test new ideas
                        quickly, leading to significant breakthroughs.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card3"
              >
                <div className="testimonial17-container16">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial17-image3"
                  />
                  <div className="testimonial17-container17">
                    <strong>
                      {props.author3Name ?? (
                        <Fragment>
                          <strong className="testimonial17-text32 thq-body-large">
                            Michael Lee
                          </strong>
                        </Fragment>
                      )}
                    </strong>
                    <span>
                      {props.author3Position ?? (
                        <Fragment>
                          <span className="testimonial17-text24 thq-body-small">
                            VP of Product Development, Global Tech Co.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span>
                  {props.review3 ?? (
                    <Fragment>
                      <span className="testimonial17-text27 thq-body-small">
                        Their competitor analysis provided us with key insights
                        that we had overlooked. It was a game-changer for our
                        product development strategy.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card4"
              >
                <div className="testimonial17-container18">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial17-image4"
                  />
                  <div className="testimonial17-container19">
                    <strong>
                      {props.author4Name ?? (
                        <Fragment>
                          <strong className="testimonial17-text30 thq-body-large">
                            Sarah Brown
                          </strong>
                        </Fragment>
                      )}
                    </strong>
                    <span>
                      {props.author4Position ?? (
                        <Fragment>
                          <span className="testimonial17-text31 thq-body-small">
                            Director of Innovation, Future Trends Ltd.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span>
                  {props.review4 ?? (
                    <Fragment>
                      <span className="testimonial17-text35 thq-body-small">
                        The R&amp;D project management training was instrumental
                        in improving our team&apos;s efficiency and output. We
                        saw immediate results in our processes.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial17.defaultProps = {
  author2Position: undefined,
  author3Position: undefined,
  author1Name: undefined,
  author2Name: undefined,
  author1Alt: 'Image of John Smith',
  review3: undefined,
  author2Alt: 'Image of Emily Johnson',
  author1Position: undefined,
  review1: undefined,
  author2Src:
    'https://images.unsplash.com/photo-1645378999496-33c8c2afe38d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzg2OTUxN3w&ixlib=rb-4.0.3&q=80&w=1080',
  author4Name: undefined,
  author4Position: undefined,
  author3Name: undefined,
  author1Src:
    'https://images.unsplash.com/photo-1525447153550-9b38670d8fcc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzg2OTUxN3w&ixlib=rb-4.0.3&q=80&w=1080',
  author3Src:
    'https://images.unsplash.com/photo-1508185140592-283327020902?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzg2OTUxOHw&ixlib=rb-4.0.3&q=80&w=1080',
  review2: undefined,
  heading1: undefined,
  author3Alt: 'Image of Michael Lee',
  author4Src:
    'https://images.unsplash.com/photo-1686585044008-1987be63fd92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzg2OTUxN3w&ixlib=rb-4.0.3&q=80&w=1080',
  author4Alt: 'Image of Sarah Brown',
  review4: undefined,
}

Testimonial17.propTypes = {
  author2Position: PropTypes.element,
  author3Position: PropTypes.element,
  author1Name: PropTypes.element,
  author2Name: PropTypes.element,
  author1Alt: PropTypes.string,
  review3: PropTypes.element,
  author2Alt: PropTypes.string,
  author1Position: PropTypes.element,
  review1: PropTypes.element,
  author2Src: PropTypes.string,
  author4Name: PropTypes.element,
  author4Position: PropTypes.element,
  author3Name: PropTypes.element,
  author1Src: PropTypes.string,
  author3Src: PropTypes.string,
  review2: PropTypes.element,
  heading1: PropTypes.element,
  author3Alt: PropTypes.string,
  author4Src: PropTypes.string,
  author4Alt: PropTypes.string,
  review4: PropTypes.element,
}

export default Testimonial17
