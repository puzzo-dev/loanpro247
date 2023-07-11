import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Footer from "../components/Footer";
import "../styles/frontpage.css";
// import HeroImg from "../";

const Frontpage = () => {
  return (
    <>
      <div className="container-fluid">
        <div>
          <div style={{ maxWidth: 400 + "px" }} className="mx-auto">
            <hr />
            <p className="text-center">
              <small>
                APR Ranges From <u>5.99% up to 35.99%</u> For Qualified
                Customers. 91 Day Minimum up to 72 Month Maximum Repayment
                Period.
              </small>
            </p>
          </div>
          <div
            id="ssl_icon"
            className="text-center mx-auto mt-2 r-all r-load"
            style={{ maxWidth: 120 + "px", display: "block" }}
          >
            <object
              title="SVG icon for pleasant user experience"
              type="image/svg+xml"
              role="presentation"
              data="https://server1.jointdivisoncxvii.me/templates/SSL.svg"
            ></object>
          </div>
          <p
            className="text-center r-all r-load"
            style={{ fontSize: 12 + "px", fontWeight: 100, display: "block" }}
          >
            We use 256 bit SSL technology to encrypt your data. <br />
            <span className="text-primary" data-legal="disclosers">
              Disclosures
            </span>
          </p>
        </div>
        <div
          id="content"
          className="r-all r-load pb-lg-5"
          style={{ display: "block" }}
        >
          <div className="mt-5 mb-2 pt-5">
            <div className="container">
              <div className="row text-center">
                <div className="col-12 col-md-6 order-md-1">
                  <div
                    className="card p-4 shadow-lg float-end w-75 mb-5 border border-0 mt-5"
                    role="alert"
                  >
                    <h5>
                      <strong>Fill out the form</strong>
                    </h5>
                    Our fast, safe and secure online form can be completed in
                    just 2 quick minutes.
                  </div>

                  <div
                    className="card shadow-lg p-4 w-75 mb-5 border border-0"
                    role="alert"
                  >
                    <h5>
                      <strong>All credit types accepted</strong>
                    </h5>
                    You can fill out our online form with any level of credit
                    rating, from no rating to excellent!
                  </div>

                  <div
                    className="card shadow-lg p-4 float-end w-75 border border-0"
                    role="alert"
                  >
                    <h5>
                      <strong>More lenders more options</strong>
                    </h5>
                    Our lenders will directly deposit funds to your account as
                    fast as the next business day.
                  </div>
                </div>
                <div className="col-12 col-md-6 order-md-2">
                  <h1 className="mb-0">
                    <span className="d-inline-block d-md-none">
                      <div
                        id="content_icon_animation"
                        className="d-inline-block"
                        style={{ width: 70 + "px" }}
                      >
                        <object
                          title="SVG icon for pleasant user experience"
                          type="image/svg+xml"
                          role="presentation"
                          style={{ maxHeight: 50 + "px" }}
                          data="https://server1.jointdivisoncxvii.me/templates/info-icon-default.svg"
                        ></object>
                      </div>
                    </span>
                    <strong className="p-md-0 pt-2 align-top d-inline-block">
                      We make it <span className="text-primary">easy</span>
                    </strong>
                  </h1>
                  <p className="text-muted">
                    Fast, easy &amp; secure online form
                  </p>
                  <span
                    className="d-none d-sm-block d-sm-none d-md-block"
                    id="content_animation"
                  >
                    <object
                      title="SVG icon for pleasant user experience"
                      type="image/svg+xml"
                      role="presentation"
                      data="https://server1.jointdivisoncxvii.me/templates/hero_content.svg"
                      style={{ maxHeight: 500 + "px" }}
                    ></object>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row bg-light">
          <h1 className="text-center my-5">
            <strong>
              Pay for what you need,
              <span className="text-primary">when you need to</span>
            </strong>
            <div className="row fs-5 m-lg-5">
              <div className="col col-12 col-md-4">
                <div
                  className="card text-center p-5 mb-5"
                  // onclick="scrollToTop();"
                >
                  <img
                    src="//img.emlasts.com/funnel/v1/img/icon-home-repair.png"
                    loading="lazy"
                    className="mx-auto img-fluid"
                    alt="Home improvement"
                    width="100"
                    height="100%"
                  />
                  <strong>Home improvement</strong>
                </div>
              </div>
              <div className="col col-12 col-md-4">
                <div
                  className="card text-center p-5 mb-5"
                  // onclick="scrollToTop();"
                >
                  <img
                    src="//img.emlasts.com/funnel/v1/img/icon-car-repair.png"
                    loading="lazy"
                    className="mx-auto img-fluid"
                    alt="Car repairs"
                    width="100"
                    height="100%"
                  />
                  <strong>Car repairs</strong>
                </div>
              </div>
              <div className="col col-12 col-md-4">
                <div
                  className="card text-center p-5 mb-5"
                  // onclick="scrollToTop();"
                >
                  <img
                    src="//img.emlasts.com/funnel/v1/img/icon-rental-deposit.png"
                    loading="lazy"
                    className="mx-auto img-fluid"
                    alt="Rental deposits"
                    width="100"
                    height="100%"
                  />
                  <strong>Rental deposits</strong>
                </div>
              </div>
            </div>
            <div className="row fs-5 m-lg-5">
              <div className="col col-12 col-md-4">
                <div
                  className="card text-center p-5 mb-5"
                  // onclick="scrollToTop();"
                >
                  <img
                    src="//img.emlasts.com/funnel/v1/img/icon-medical.png"
                    loading="lazy"
                    className="mx-auto img-fluid"
                    alt="Medical bills"
                    width="100"
                    height="100%"
                  />
                  <strong>Medical bills</strong>
                </div>
              </div>
              <div className="col col-12 col-md-4">
                <div
                  className="card text-center p-5 mb-5"
                  // onclick="scrollToTop();"
                >
                  <img
                    src="//img.emlasts.com/funnel/v1/img/icon-vacation.png"
                    loading="lazy"
                    className="mx-auto img-fluid"
                    alt="Vacations"
                    width="100"
                    height="100%"
                  />
                  <strong>Vacations</strong>
                </div>
              </div>
              <div className="col col-12 col-md-4">
                <div
                  className="card text-center p-5 mb-5"
                  // onclick="scrollToTop();"
                >
                  <img
                    src="//img.emlasts.com/funnel/v1/img/icon-expenses.png"
                    loading="lazy"
                    className="mx-auto img-fluid"
                    alt="Unexpected expenses"
                    width="100"
                    height="100%"
                  />
                  <strong>Unexpected expenses</strong>
                </div>
              </div>
            </div>
          </h1>
        </div>
        <div className="row m-lg-5 p-lg-4 my-3">
          <div className="row px-4 py-5 m-0 justify-content-center bg-light">
            <div className="col-lg-5 p-0 text-lg-start mb-lg-0 mb-4">
              <h3>
                <span className="text-primary">Frequently</span> asked question
              </h3>
              <p>
                When getting a loan you may have some simply questions about the
                process or regarding requirement. We have placed some of the
                most frequently asked questions you may have to make the loan
                process easier for you.
              </p>
              <button className="btn btn-primary">Request a Loan Today</button>
            </div>
            <div className="col-lg-5 text-start">
              <Accordion className="bg-light">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>What is a personal loan ?</Accordion.Header>
                  <Accordion.Body>
                    <small className="text-muted">
                      A personal loan is a way for an individual to receive up
                      to $35,000 in funding. It is a loan that can be used for
                      home enhancements, luxury item purchases, vehicle repairs
                      or large purchases. The length of the loan is called the
                      term and can range all the way up to 180 days, depending
                      on the lender. Our simple online form does not contain any
                      long questions. Instead, it asks for your basic
                      information and a location for where you would like the
                      loan to be sent to. It is that easy!
                    </small>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    What are the basic loan requirements ?
                  </Accordion.Header>
                  <Accordion.Body>
                    <small className="text-muted">
                      <ul>
                        <li>Must be at least 18 years old.</li>
                        <li>Must be a U.S. citizen of permanent resident.</li>
                        <li>Currently employed or receive steady income.</li>
                        <li>
                          Have a bank account to receive the funds ideally with
                          direct deposit.
                        </li>
                      </ul>
                    </small>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Are there any fees ?</Accordion.Header>
                  <Accordion.Body>
                    <small className="text-muted">
                      247loanpros services will always be provided free of
                      charge, but that is not to say that the lender will give
                      you a loan for free. Your lender will charge you fees
                      and/or interest and must provide you with full disclosure
                      of their loan terms upon approval. It is then your
                      responsibility to read through the terms before signing
                      your loan agreement.
                    </small>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    What are the repayment terms and the APR ?
                  </Accordion.Header>
                  <Accordion.Body>
                    <small className="text-muted">
                      Annual Percentage Rate (APR) is a measure of the cost of
                      credit, expressed as a nominal yearly rate. It relates to
                      the amount and timing of value received by the consumer to
                      the amount and timing of payments made. 247LoanPros cannot
                      guarantee any APR since we are not a lender ourselves.
                      Annual Percentage Rates (APR) start from 5.99% up to a
                      maximum of 35.99% for qualified users. Personal loans have
                      a 61-day minimum repayment period and a 72-month maximum
                      repayment period for qualified users. Before accepting a
                      loan from a lender within our network, please read the
                      loan agreement carefully as the APR and repayment terms
                      may differ from what is listed on this site.
                    </small>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>
                    How / When do i repay the loan ?
                  </Accordion.Header>
                  <Accordion.Body>
                    <small className="text-muted">
                      Please check the loan agreement from your lender for
                      specifics on this, as each loan may vary.
                    </small>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                  <Accordion.Header>
                    How do you protect my privacy and personal Information ?
                  </Accordion.Header>
                  <Accordion.Body>
                    <small className="text-muted">
                      We take privacy seriously, so we use industry-standard
                      encryption on our website so that third parties cannot
                      intercept your data. You can also look at our privacy
                      policy for more details on this.
                    </small>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
        <div className="row m-lg-5 p-lg-4">
          <h3 className="fw-semibold text-center text-muted">
            <small>Representative Example </small>
            <br />
            APR, Total Loan Costs & All Applicable Fees
          </h3>
          <div className="table-responsive">
            <table className="table table-bordered table-striped">
              <tbody>
                <tr className="text-center">
                  <td className="table-titles">Loan Amount</td>
                  <td>$1,000</td>
                  <td>$2,000</td>
                  <td>$5,000</td>
                  <td>$10,000</td>
                </tr>
                <tr className="text-center">
                  <td className="table-titles">Interest Rate</td>
                  <td>24%</td>
                  <td>19%</td>
                  <td>13%</td>
                  <td>8%</td>
                </tr>
                <tr className="text-center">
                  <td className="table-titles">Loan Term</td>
                  <td>12 Months</td>
                  <td>24 Months</td>
                  <td>48 Months</td>
                  <td>60 Months</td>
                </tr>
                <tr className="text-center">
                  <td className="table-titles">Fee</td>
                  <td>3%</td>
                  <td>5%</td>
                  <td>8%</td>
                  <td>10%</td>
                </tr>
                <tr className="text-center">
                  <td className="table-titles">Fee Cost</td>
                  <td>$30</td>
                  <td>$100</td>
                  <td>$400</td>
                  <td>$1,000</td>
                </tr>
                <tr className="text-center">
                  <td className="table-titles">Repayment</td>
                  <td>$94.56</td>
                  <td>$100.82</td>
                  <td>$131.67</td>
                  <td>$202.28</td>
                </tr>
                <tr className="text-center">
                  <td className="table-titles">APR</td>
                  <td>29.82%</td>
                  <td>24.12%</td>
                  <td>18.23%</td>
                  <td>9.20%</td>
                </tr>
                <tr className="text-center">
                  <td className="table-titles">Total Payments</td>
                  <td>$1,134.72</td>
                  <td>$2,419.68</td>
                  <td>$6,320.12</td>
                  <td>$12,136.80</td>
                </tr>
                <tr className="text-center">
                  <td className="table-titles">Total Costs</td>
                  <td>$164.72</td>
                  <td>$519.68</td>
                  <td>$1,720.12</td>
                  <td>$3,136.80</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Frontpage;
