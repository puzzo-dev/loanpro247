import React from "react";
import "../styles/Footer.css";
function Footer() {
  return (
    <footer id="footer" className="r-all r-load m-lg-5 p-lg-4 p-2">
      <div className="col-12 lh-2">
        <p className="text-start fs-6 text-muted">
          <small>
            247loanpros.com (the "website") is not an offer or solicitation to
            lend. The website only provides a service and is not an agent,
            representative, or broker of any lender and does not endorse or
            charge you for any loan or product. The website operators are not
            lenders, do not make loans of any type, and do not make credit
            decisions.
          </small>
        </p>
        <p className="text-start fs-6 text-muted">
          <small>
            The website collects personal information provided by you and
            forwards it to partners in our lender network. You are under no
            obligation to use this website or service to initiate, contact, nor
            apply for credit or any loan product with any service provider or
            lender. Loan amounts vary from $500 and $35,000 but not all lenders
            can provide up to $35,000. Providing your information on the website
            does not guarantee you will be approved for a loan or credit
            product.
          </small>
        </p>
        <p className="text-start fs-6 text-muted">
          <small>
            Cash transfer times may vary between lenders and may depend on your
            individual financial institution. In some circumstances faxing may
            be required. If you have any questions, contact your lender directly
            for details, questions, or concerns regarding your loan or credit
            product. Short-term cash loans are meant to provide you with
            short-term financing to solve immediate cash needs and should not be
            considered a long-term solution.
          </small>
        </p>
        <p className="text-start fs-6 text-muted">
          <small>
            This service and lenders are not available in all states. Lenders
            may perform credit checks with the three credit reporting bureaus:
            Experian, Equifax, or Trans Union or may perform alternative credit
            checks or consumer reports through alternative providers. By
            submitting your request, you acknowledge, agree, and authorize that
            (a) your information may be sent to lenders and/or third-party
            partners on your behalf, and (b) such lenders may obtain consumer
            reports and related information about you from one or more consumer
            reporting agencies, such as TransUnion, Experian and Equifax to
            evaluate your creditworthiness.
          </small>
        </p>
      </div>
      <div className="col-lg-5 text-start my-4 fs-6 text-muted">
        <small>
          247loanpros.site is run by DV Marketing Inc. Address: 759 Bloomfield
          Ave. Suite 244, West Caldwell, NJ 07006
          <p className="my-3">
            Telephone Number: (213) 348-loan <br /> Email Address:
            loans@247loanpro.site
          </p>
          Copyright © 2015 - 2023 247loanpros.site - all rights reserved
        </small>
      </div>
      <div className="text-center fs-6 text-muted p-lg-4">
        <ul className="nav justify-content-lg-around justify-content-center fw-bold text-dark">
          <li className="nav-item pe-3">
            <a href="def" className="text-decoration-none">
              Terms & Conditions
            </a>
          </li>
          <li className="nav-item p-lg-0 ps-3">
            <a href="def" className="text-decoration-none">
              Lending Policy
            </a>
          </li>
          <li className="nav-item">
            <a href="def" className="text-decoration-none">
              Do Not Sell My Personal Information
            </a>
          </li>
          <li className="nav-item p-lg-0 pe-3">
            <a href="def" className="text-decoration-none">
              Loan Rates & Fees
            </a>
          </li>
          <li className="nav-item p-lg-0 ps-3">
            <a href="def" className="text-decoration-none">
              Credit Authorization
            </a>
          </li>
          <li className="nav-item p-lg-0">
            <a href="def" className="text-decoration-none">
              Privacy Policy
            </a>
          </li>
        </ul>
        <p className="col-lg-12 text-center p-2 text-underline fs-6 fw-bold">
          <u>Unsubscribe</u>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
