import React, { useState } from "react";
import Frontpage from "./Frontpage";

function Content() {
  const [currentStep, setCurrentStep] = useState(0);
  const [checked, setChecked] = useState({});
  const isSelected = (value) => checked === value;
  // Save form values to localStorage

  const handleSelected = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setChecked((values) => ({ ...values, [name]: value }));
  };

  const nextBtn = (e) => {
    e.preventDefault();
    const currentStepInputs = steps[currentStep].props.children
      .map((child) => {
        if (
          child.props.children.type !== "label" &&
          child.props.children.type !== undefined
        ) {
          return child.props.children;
        } else if (
          child.props.children.type === "input"
        ) {
          return child.props.children.props.children[0];
        }
        return undefined;
      })
      .filter((value) => value !== undefined);

    // console.log(currentStepInputs);
    // console.log(currentStepInputs);

    const hasEmptyInput = currentStepInputs.some((element) => {
      return (element.props.type === "text" ||
        element.props.type === "password" ||
        element.props.type === "email" ||
        element.props.type === "tel" ||
        element.props.type === "date") &&
        element.props.value === "";
    });
    // console.log(hasEmptyInput);
    if (hasEmptyInput) {
      return; // Don't progress to the next step
    }

    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevBtn = (event) => {
    event.preventDefault();
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  // const handleFormData = () => {
  //   return <pre>{JSON.stringify(checked, null, 2)}</pre>;
  // };

  const steps = [
    <>
      <h3 className="text-center mt-1">
        <strong>What's the loan amount that works best for you?</strong>
      </h3>
      <div className="row mx-auto my-3">
        <p
          className="bg-white border p-3 mb-0 rounded mx-auto"
          style={{
            maxWidth: 400 + "px",
            position: "relative",
            lineHeight: 1.2,
          }}
        >
          <small>
            <strong>
              Choose an amount below or click "Enter Amount" from $100 -
              $35,000.
            </strong>
          </small>
          <a
            style={{
              color: "black !important",
              borderRadius: 50 + "px",
              padding: 1 + "px" + 10 + "px",
              position: "absolute",
              top: -12 + "px",
              right: -10 + "px",
              background: "white",
            }}
            // role="button"
            className="btn btn-outline-secondary"
            data-bs-container="body"
            data-bs-toggle="popover"
            data-bs-placement="bottom"
            data-bs-trigger="focus"
            data-bs-content="You may be presented with a loan amount from our network partner that is higher or lower than your requested loan amount."
            data-bs-original-title=""
            title=""
            href="none"
          >
            <small>?</small>
          </a>
        </p>
      </div>
      <div className="d-grid px-5 my-2">
        <input
          className="btn-check"
          type="radio"
          value="$1000"
          checked={isSelected("$1000")}
          onChange={handleSelected}
          name="loanAmount"
          id="1000"
          onClick={nextBtn}
        />
        <label
          htmlFor="1000"
          className="borer border-2 btn border-dark bg-white border-opacity-50 btn-lg w-100 mx-auto fs-6 p-3 fw-bold"
        >
          $1000
        </label>
      </div>
      <div className="d-grid px-5 my-1">
        <input
          className="btn-check"
          type="radio"
          checked={isSelected("$2000")}
          onChange={handleSelected}
          value="$2000"
          name="loanAmount"
          id="2000"
          onClick={nextBtn}
        />
        <label
          htmlFor="2000"
          className="borer border-2 btn border-dark bg-white border-opacity-50 btn-lg w-100 mx-auto fs-6 p-3 fw-bold"
        >
          $2000
        </label>
      </div>
      <div className="d-grid px-5 my-1">
        <input
          className="btn-check"
          type="radio"
          checked={isSelected("$3000")}
          onChange={handleSelected}
          value="$3000"
          name="loanAmount"
          id="3000"
          onClick={nextBtn}
        />
        <label
          htmlFor="3000"
          className="borer border-2 btn border-dark bg-white border-opacity-50 btn-lg w-100 mx-auto fs-6 p-3 fw-bold"
        >
          $3000
        </label>
      </div>
      <div className="d-grid px-5 my-1">
        <input
          className="btn-check"
          type="radio"
          checked={isSelected("$4000")}
          onChange={handleSelected}
          value="$4000"
          name="loanAmount"
          id="4000"
          onClick={nextBtn}
        />
        <label
          htmlFor="4000"
          className="borer border-2 btn border-dark bg-white border-opacity-50 btn-lg w-100 mx-auto fs-6 p-3 fw-bold"
        >
          $4000
        </label>
      </div>
      <div className="d-grid px-5 my-1">
        <input
          className="btn-check"
          type="radio"
          checked={isSelected("$5000 and over")}
          onChange={handleSelected}
          value="$5000 and over"
          name="loanAmount"
          id="5000"
          onClick={nextBtn}
        />

        <label
          htmlFor="5000"
          className="radio-options borer border-2 btn border-dark bg-white border-opacity-50 btn-lg w-100 mx-auto fs-6 p-3 fw-bold"
        >
          $5000 and over
        </label>
      </div>
    </>,
    <>
      <h3 className="text-center mt-3">
        <strong>What is your name?</strong>
      </h3>
      <div className="row container-fluid">
        <div className="text-start col col-2 p-0">
          <div id="icon">
            <img
              src="https://server1.jointdivisoncxvii.me/templates/success_head.svg"
              alt="SVG icon for pleasant user experience"
            />
            {/* <object
              title="SVG icon for pleasant user experience"
              type="image/svg+xml"
              role="presentation"
              data="https://server1.jointdivisoncxvii.me/templates/success_head.svg"
            ></object> */}
          </div>
        </div>
        <div className="col col-10">
          <div className="vip-tooltip bg-white border p-3 rounded-2">
            <p className="mb-0 text-start">
              Enter your full legal name, our lenders need to verify your
              identity.
            </p>
          </div>
        </div>
      </div>
      <div className="text-start">
        <label htmlFor="firstName">First Name</label>
      </div>
      <div className="d-grid my-1">
        <input
          className="form-control form-control-lg"
          type="text"
          onChange={handleSelected}
          name="firstName"
          value={checked.firstName || ""}
          required
        />
      </div>
      <div className="text-start">
        <label htmlFor="lastName">Last Name</label>
      </div>
      <div className="d-grid my-1">
        <input
          className="form-control form-control-lg"
          type="text"
          onChange={handleSelected}
          name="lastName"
          value={checked.lastName || ""}
          required
        />
      </div>
    </>,
    <>
      <h3 className="text-center mt-3">
        <strong>What is your email?</strong>
      </h3>
      <div className="row">
        <div className="text-start col-2 p-0">
          <div id="icon">
            <object
              title="SVG icon for pleasant user experience"
              type="image/svg+xml"
              role="presentation"
              data="https://server1.jointdivisoncxvii.me/templates/success_head.svg"
            ></object>
          </div>
        </div>
        <div className="col-10">
          <div className="vip-tooltip bg-white border p-3 rounded-2">
            <p className="mb-0 text-start">
              Provide the email address where you would like to receive your
              loan request <strong>confirmation</strong>
            </p>
          </div>
        </div>
      </div>
      <div className="text-start">
        <label className="text-start" htmlFor="email">
          Primary email address
        </label>
      </div>
      <div className="d-grid my-1">
        <input
          className="form-control form-control-lg"
          type="email"
          onChange={handleSelected}
          value={checked.email || ""}
          name="email"
          required
        />
      </div>
    </>,
    <>
      <h3 className="text-center mt-3">
        <strong>Excellent news {checked.firstName}</strong>
      </h3>
      <div className="row">
        <div className="text-start col col-2 p-0">
          <div id="icon">
            <object
              title="SVG icon for pleasant user experience"
              type="image/svg+xml"
              role="presentation"
              data="https://server1.jointdivisoncxvii.me/templates/success_head.svg"
            ></object>
          </div>
        </div>
        <div className="col col-10">
          <div className="vip-tooltip bg-white border p-3 rounded-2">
            <p className="mb-0 text-start">
              Our lending network shows that we may have located your file.
              Verify below to see the latest options available to you.
            </p>
          </div>
        </div>
      </div>
      <div className="text-start">
        <label htmlFor="ssn">Verify last 4 digits of SSN</label>
      </div>
      <div className="d-grid gap-1 my-1">
        <input
          className="form-control form-control-lg"
          type="password"
          onChange={handleSelected}
          name="l4ssn"
          value={checked.l4ssn || ""}
          required
        />
      </div>
    </>,
    <>
      <h3 className="text-center mt-3">
        <strong>Cell phone number</strong>
      </h3>
      <div className="row">
        <div className="text-start col col-2 p-0">
          <div id="icon">
            <object
              title="SVG icon for pleasant user experience"
              type="image/svg+xml"
              role="presentation"
              data="https://server1.jointdivisoncxvii.me/templates/success_head.svg"
            ></object>
          </div>
        </div>
        <div className="col col-10">
          <div className="vip-tooltip bg-white border p-3 rounded-2">
            <p className="mb-0 text-start">
              Your loan request may need final confirmation by phone before
              funding
            </p>
          </div>
        </div>
      </div>
      <div className="text-start">
        <label htmlFor="telNumber" className="text-start">
          Phone Number
        </label>
      </div>
      <div className="d-grid gap-1 my-1">
        <input
          className="form-control form-control-lg"
          type="tel"
          name="telNumber"
          onChange={handleSelected}
          value={checked.telNumber || ""}
          required
        />
      </div>
    </>,
    <>
      <h3 className="text-center mt-3">
        <strong>What is the best time to reach you?</strong>
      </h3>
      <div className="row">
        <div className="text-start col col-2 p-0">
          <div id="icon">
            <object
              title="SVG icon for pleasant user experience"
              type="image/svg+xml"
              role="presentation"
              data="https://server1.jointdivisoncxvii.me/templates/success_head.svg"
            ></object>
          </div>
        </div>
        <div className="col col-10">
          <div className="vip-tooltip bg-white border p-3 rounded-2">
            <p className="mb-0 text-start">
              Our lenders may contact you to verify your identity
            </p>
          </div>
        </div>
      </div>
      <div className="d-grid gap-1 my-1 px-5">
        <input
          className="btn-check"
          type="radio"
          checked={isSelected("Morning")}
          onChange={handleSelected}
          value="Morning"
          name="time2Call"
          id="Morning"
          onClick={nextBtn}
        />
        <label
          htmlFor="Morning"
          className="radio-options borer border-2 btn border-dark bg-white border-opacity-50 btn-lg w-100 mx-auto fs-6 p-3 fw-bold"
        >
          Morning
        </label>
      </div>
      <div className="d-grid gap-1 my-1 px-5">
        <label
          htmlFor="Noon"
          className="radio-options borer border-2 btn border-dark bg-white border-opacity-50 btn-lg w-100 mx-auto fs-6 p-3 fw-bold"
        >
          Noon
        </label>
        <input
          className="btn-check"
          type="radio"
          checked={isSelected("Noon")}
          onChange={handleSelected}
          value="Noon"
          name="time2Call"
          id="Noon"
          onClick={nextBtn}
        />
      </div>
      <div className="d-grid gap-1 px-5 my-1">
        <label
          htmlFor="Night"
          className="radio-options borer border-2 btn border-dark bg-white border-opacity-50 btn-lg w-100 mx-auto fs-6 p-3 fw-bold"
        >
          Night
        </label>
        <input
          className="btn-check"
          type="radio"
          checked={isSelected("Night")}
          onChange={handleSelected}
          value="Night"
          name="time2Call"
          id="Night"
          onClick={nextBtn}
        />
      </div>
    </>,
    <>
      <h3 className="text-center mt-3">
        <strong>What's your home address?</strong>
      </h3>
      <div className="row">
        <div className="text-start col col-2 p-0">
          <div id="icon">
            <object
              title="SVG icon for pleasant user experience"
              type="image/svg+xml"
              role="presentation"
              data="https://server1.jointdivisoncxvii.me/templates/success_head.svg"
            ></object>
          </div>
        </div>
        <div className="col col-10">
          <div className="vip-tooltip bg-white border p-3 rounded-2">
            <p className="mb-0 text-start">
              Lenders need to know where you live when requesting a loan.
            </p>
          </div>
        </div>
      </div>
      <div className="text-start">
        <label htmlFor="zipCode">Zip Code</label>
      </div>
      <div className="d-grid my-1">
        <input
          className="form-control form-control-lg"
          type="text"
          name="zipCode"
          onChange={handleSelected}
          placeholder="ZipCode"
          value={checked.zipCode || ""}
          required
        />
      </div>
      <div className="text-start">
        <label htmlFor="strAddress">Home Address</label>
      </div>
      <div className="d-grid my-1">
        <input
          className="form-control form-control-lg"
          type="text"
          name="strAddress"
          placeholder="Street Address"
          onChange={handleSelected}
          value={checked.strAddress || ""}
          required
        />
      </div>
      <div className="text-start">
        <label htmlFor="strAddress">Home City</label>
      </div>
      <div className="d-grid my-1">
        <input
          className="form-control form-control-lg"
          type="text"
          name="city"
          onChange={handleSelected}
          placeholder="City"
          value={checked.city || ""}
          required
        />
      </div>
      <div className="text-start">
        <label htmlFor="homeState">Home State</label>
      </div>
      <div className="d-grid my-1">
        <select
          className="form-control form-control-lg mb-3"
          type="select"
          name="homeState"
          onChange={handleSelected}
        >
          <option value="">Select One</option>
          <option value="AL">Alabama</option>
          <option value="AK">Alaska</option>
          <option value="AZ">Arizona</option>
          <option value="AR">Arkansas</option>
          <option value="CA">California</option>
          <option value="CO">Colorado</option>
          <option value="CT">Connecticut</option>
          <option value="DE">Delaware</option>
          <option value="FL">Florida</option>
          <option value="GA">Georgia</option>
          <option value="HI">Hawaii</option>
          <option value="ID">Idaho</option>
          <option value="IL">Illinois</option>
          <option value="IN">Indiana</option>
          <option value="IA">Iowa</option>
          <option value="KS">Kansas</option>
          <option value="KY">Kentucky</option>
          <option value="LA">Louisiana</option>
          <option value="ME">Maine</option>
          <option value="MD">Maryland</option>
          <option value="MA">Massachusetts</option>
          <option value="MI">Michigan</option>
          <option value="MN">Minnesota</option>
          <option value="MS">Mississippi</option>
          <option value="MO">Missouri</option>
          <option value="MT">Montana</option>
          <option value="NE">Nebraska</option>
          <option value="NV">Nevada</option>
          <option value="NH">New Hampshire</option>
          <option value="NJ">New Jersey</option>
          <option value="NM">New Mexico</option>
          <option value="NY">New York</option>
          <option value="NC">North Carolina</option>
          <option value="ND">North Dakota</option>
          <option value="OH">Ohio</option>
          <option value="OK">Oklahoma</option>
          <option value="OR">Oregon</option>
          <option value="PA">Pennsylvania</option>
          <option value="RI">Rhode Island</option>
          <option value="SC">South Carolina</option>
          <option value="SD">South Dakota</option>
          <option value="TN">Tennessee</option>
          <option value="TX">Texas</option>
          <option value="UT">Utah</option>
          <option value="VT">Vermont</option>
          <option value="VA">Virginia</option>
          <option value="WA">Washington</option>
          <option value="WV">West Virginia</option>
          <option value="WI">Wisconsin</option>
          <option value="WY">Wyoming</option>
        </select>
      </div>
    </>,
    <>
      <h3 className="text-center mt-3">
        <strong>What's your date of birth?</strong>
      </h3>
      <div className="row">
        <div className="text-start col col-2 p-0">
          <div id="icon">
            <object
              title="SVG icon for pleasant user experience"
              type="image/svg+xml"
              role="presentation"
              data="https://server1.jointdivisoncxvii.me/templates/info-icon-default.svg"
            ></object>
          </div>
        </div>
        <div className="col col-10">
          <div className="vip-tooltip bg-white border p-3 rounded-2">
            <p className="mb-0 text-start">
              Your date of birth is needed to verify your identity.
            </p>
          </div>
        </div>
      </div>
      <div className="text-start">
        <label htmlFor="dob">Date of birth</label>
      </div>
      <div className="d-grid gap-1 my-1">
        <input
          className="form-control form-control-lg"
          type="date"
          name="dob"
          onChange={handleSelected}
          value={checked.dob || ""}
          required
        />
      </div>
    </>,
    <>
      <h3 className="text-center mt-3">
        <strong>Do you have $10,000 or more in credit card debt?</strong>
      </h3>
      <div className="row">
        <div className="text-start col col-2 p-0">
          <div id="icon">
            <object
              title="SVG icon for pleasant user experience"
              type="image/svg+xml"
              role="presentation"
              data="https://server1.jointdivisoncxvii.me/templates/success_head.svg"
            ></object>
          </div>
        </div>
        <div className="col col-10">
          <div className="vip-tooltip bg-white border p-3 rounded-2">
            <p className="mb-0 text-start">
              Our lenders may contact you to verify your identity
            </p>
          </div>
        </div>
      </div>
      <div className="d-grid gap-1 px-5 my-1">
        <input
          className="btn-check"
          type="radio"
          checked={isSelected("Yes")}
          onChange={handleSelected}
          value="Yes"
          name="currentDebts"
          id="Yes"
          onClick={nextBtn}
        />
        <label
          htmlFor="Yes"
          className="radio-options borer border-2 btn border-dark bg-white border-opacity-50 btn-lg w-100 mx-auto fs-6 p-3 fw-bold"
        >
          Yes
        </label>
      </div>
      <div className="d-grid gap-1 px-5 my-1">
        <label
          htmlFor="No"
          className="radio-options borer border-2 btn border-dark bg-white border-opacity-50 btn-lg w-100 mx-auto fs-6 p-3 fw-bold"
        >
          No
        </label>
        <input
          className="btn-check"
          type="radio"
          checked={isSelected("No")}
          onChange={handleSelected}
          value="No"
          name="currentDebts"
          id="No"
          onClick={nextBtn}
        />
      </div>
    </>,
    <>
      <h3 className="text-center mt-3">
        <strong>Do you have a car registered in your name?</strong>
      </h3>
      <div className="row">
        <div className="text-start col col-2 p-0">
          <div id="icon">
            <object
              title="SVG icon for pleasant user experience"
              type="image/svg+xml"
              role="presentation"
              data="https://server1.jointdivisoncxvii.me/templates/success_head.svg"
            ></object>
          </div>
        </div>
        <div className="col col-10">
          <div className="vip-tooltip bg-white border p-3 rounded-2">
            <p className="mb-0 text-start">
              EXPAND your request to INCLUDE auto title loan options that may
              have better rates or terms.
            </p>
          </div>
        </div>
      </div>
      <div className="d-grid gap-1 px-5 my-1">
        <input
          className="btn-check"
          type="radio"
          checked={isSelected("Yes")}
          onChange={handleSelected}
          value="Yes"
          name="registeredVehicle"
          id="Yes"
          onClick={nextBtn}
        />
        <label
          htmlFor="Yes"
          className="radio-options borer border-2 btn border-dark bg-white border-opacity-50 btn-lg w-100 mx-auto fs-6 p-3 fw-bold"
        >
          Yes
        </label>
      </div>
      <div className="d-grid gap-1 px-5 my-1">
        <label
          htmlFor="No"
          className="radio-options borer border-2 btn border-dark bg-white border-opacity-50 btn-lg w-100 mx-auto fs-6 p-3 fw-bold"
        >
          No
        </label>
        <input
          className="btn-check"
          type="radio"
          checked={isSelected("No")}
          onChange={handleSelected}
          value="No"
          name="registeredVehicle"
          id="No"
          onClick={nextBtn}
        />
      </div>
    </>,
    <>
      <h3 className="text-center mt-3">
        <strong>How long have you lived at your home?</strong>
      </h3>
      <div className="row">
        <div className="text-start col col-2 p-0">
          <div id="icon">
            <object
              title="SVG icon for pleasant user experience"
              type="image/svg+xml"
              role="presentation"
              data="https://server1.jointdivisoncxvii.me/templates/success_head.svg"
            ></object>
          </div>
        </div>
        <div className="col col-10">
          <div className="vip-tooltip bg-white border p-3 rounded-2">
            <p className="mb-0 text-start">
              Tell us how long you have lived at your current residence.
            </p>
          </div>
        </div>
      </div>
      <div className="d-grid gap-1 px-5 my-1">
        <input
          className="btn-check"
          type="radio"
          checked={isSelected("5 Years or More")}
          onChange={handleSelected}
          value="5 Years or More"
          name="residenceHistory"
          id="5-Years-or-More"
          onClick={nextBtn}
        />
        <label
          htmlFor="5-Years-or-More"
          className="radio-options borer border-2 btn border-dark bg-white border-opacity-50 btn-lg w-100 mx-auto fs-6 p-3 fw-bold"
        >
          5 Years or More
        </label>
      </div>
      <div className="d-grid gap-1 px-5 my-1">
        <label
          htmlFor="4"
          className="radio-options borer border-2 btn border-dark bg-white border-opacity-50 btn-lg w-100 mx-auto fs-6 p-3 fw-bold"
        >
          4
        </label>
        <input
          className="btn-check"
          type="radio"
          checked={isSelected("4")}
          onChange={handleSelected}
          value="4"
          name="residenceHistory"
          id="4"
          onClick={nextBtn}
        />
      </div>
      <div className="d-grid gap-1 px-5 my-1">
        <label
          htmlFor="3"
          className="radio-options borer border-2 btn border-dark bg-white border-opacity-50 btn-lg w-100 mx-auto fs-6 p-3 fw-bold"
        >
          3
        </label>
        <input
          className="btn-check"
          type="radio"
          checked={isSelected("3")}
          onChange={handleSelected}
          value="3"
          name="residenceHistory"
          id="3"
          onClick={nextBtn}
        />
      </div>
      <div className="d-grid gap-1 px-5 my-1">
        <label
          htmlFor="2"
          className="radio-options borer border-2 btn border-dark bg-white border-opacity-50 btn-lg w-100 mx-auto fs-6 p-3 fw-bold"
        >
          2
        </label>
        <input
          className="btn-check"
          type="radio"
          checked={isSelected("2")}
          onChange={handleSelected}
          value="2"
          name="residenceHistory"
          id="2"
          onClick={nextBtn}
        />
      </div>
      <div className="d-grid gap-1 px-5 my-1">
        <label
          htmlFor="1-Year-or-Less"
          className="radio-options borer border-2 btn border-dark bg-white border-opacity-50 btn-lg w-100 mx-auto fs-6 p-3 fw-bold"
        >
          1 Year or Less
        </label>
        <input
          className="btn-check"
          type="radio"
          checked={isSelected("1 Year or Less")}
          onChange={handleSelected}
          value="1 Year or Less"
          name="residenceHistory"
          id="1-Year-or-Less"
          onClick={nextBtn}
        />
      </div>
    </>,
    <>
      <h3 className="text-center mt-3">
        <strong>Are you a home owner?</strong>
      </h3>
      <div className="row">
        <div className="text-start col col-2 p-0">
          <div id="icon">
            <object
              title="SVG icon for pleasant user experience"
              type="image/svg+xml"
              role="presentation"
              data="https://server1.jointdivisoncxvii.me/templates/success_head.svg"
            ></object>
          </div>
        </div>
        <div className="col col-10">
          <div className="vip-tooltip bg-white border p-3 rounded-2">
            <p className="mb-0 text-start">
              You maybe eligible for better rates &amp; terms!
            </p>
          </div>
        </div>
      </div>
      <div className="d-grid gap-1 px-5 my-1">
        <input
          className="btn-check"
          type="radio"
          checked={isSelected("Own")}
          onChange={handleSelected}
          value="Own"
          name="ownHome"
          id="Own"
          onClick={nextBtn}
        />
        <label
          htmlFor="Own"
          className="radio-options borer border-2 btn border-dark bg-white border-opacity-50 btn-lg w-100 mx-auto fs-6 p-3 fw-bold"
        >
          Own
        </label>
      </div>
      <div className="d-grid gap-1 px-5 my-1">
        <label
          htmlFor="rent"
          className="radio-options borer border-2 btn border-dark bg-white border-opacity-50 btn-lg w-100 mx-auto fs-6 p-3 fw-bold"
        >
          Rent
        </label>
        <input
          className="btn-check"
          type="radio"
          checked={isSelected("Rent")}
          onChange={handleSelected}
          value="Rent"
          name="ownHome"
          id="rent"
          onClick={nextBtn}
        />
      </div>
    </>,
    <>
      <h3 className="text-center mt-3">
        <strong>What's your gross monthly income?</strong>
      </h3>
      <div className="row">
        <div className="text-start col col-2 p-0">
          <div id="icon">
            <object
              title="SVG icon for pleasant user experience"
              type="image/svg+xml"
              role="presentation"
              data="https://server1.jointdivisoncxvii.me/templates/success_head.svg"
            ></object>
          </div>
        </div>
        <div className="col col-10">
          <div className="vip-tooltip bg-white border p-3 rounded-2">
            <p className="mb-0 text-start">
              Our lenders need your income <strong>before taxes</strong> to
              approve your loan.
              <a
                tabIndex="0"
                role="button"
                className="btn btn-outline-secondary"
                style={{
                  bordeRadius: 50 + "px",
                  padding: 1 + "px" + 10 + "px",
                }}
                data-bs-container="body"
                data-bs-toggle="popover"
                data-bs-placement="bottom"
                data-bs-trigger="focus"
                data-bs-content="List your total available income including wages, retirement, investments, and rental properties. You are not required to disclose income that is alimony, child support or separate maintenance unless you want to use that income to qualify for a loan. If applicable, include self-employment salary. For total compensation earning, provide an annual average. Increase non-taxable income/benefits by 25%"
                data-bs-original-title=""
                title=""
                href="/hfsd"
              >
                <small>?</small>
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="d-grid px-5 my-1">
        <input
          className="btn-check"
          type="radio"
          checked={isSelected("5000 or More")}
          onChange={handleSelected}
          value="5000 or More"
          name="monthlyIncome"
          id="5000-or-more"
          onClick={nextBtn}
        />
        <label
          htmlFor="5000-or-more"
          className="radio-options borer border-2 btn border-dark bg-white border-opacity-50 btn-lg w-100 mx-auto fs-6 p-3 fw-bold"
        >
          5000 or More
        </label>
      </div>
      <div className="d-grid px-5 my-1">
        <input
          className="btn-check"
          type="radio"
          checked={isSelected("4500 - 5000")}
          onChange={handleSelected}
          value="4500 - 5000"
          name="monthlyIncome"
          id="4500-5000"
          onClick={nextBtn}
        />
        <label
          htmlFor="4500-5000"
          className="radio-options borer border-2 btn border-dark bg-white border-opacity-50 btn-lg w-100 mx-auto fs-6 p-3 fw-bold"
        >
          4500 - 5000
        </label>
      </div>
      <div className="d-grid px-5 my-1">
        <label
          htmlFor="4000-4500"
          className="radio-options borer border-2 btn border-dark bg-white border-opacity-50 btn-lg w-100 mx-auto fs-6 p-3 fw-bold"
        >
          4000 - 4500
        </label>
        <input
          className="btn-check"
          type="radio"
          checked={isSelected("4000 - 4500")}
          onChange={handleSelected}
          value="4000 - 4500"
          name="monthlyIncome"
          id="4000-4500"
          onClick={nextBtn}
        />
      </div>
      <div className="d-grid px-5 my-1">
        <label
          htmlFor="3500-4000"
          className="radio-options borer border-2 btn border-dark bg-white border-opacity-50 btn-lg w-100 mx-auto fs-6 p-3 fw-bold"
        >
          3500 - 4000
        </label>
        <input
          className="btn-check"
          type="radio"
          checked={isSelected("3500 - 4000")}
          onChange={handleSelected}
          value="3500 - 4000"
          name="monthlyIncome"
          id="3500-4000"
          onClick={nextBtn}
        />
      </div>
      <div className="d-grid px-5 my-1">
        <label
          htmlFor="3000-3500"
          className="radio-options borer border-2 btn border-dark bg-white border-opacity-50 btn-lg w-100 mx-auto fs-6 p-3 fw-bold"
        >
          3000 - 3500
        </label>
        <input
          className="btn-check"
          type="radio"
          checked={isSelected("3000 - 3500")}
          onChange={handleSelected}
          value="3000 - 3500"
          name="monthlyIncome"
          id="3000-3500"
          onClick={nextBtn}
        />
      </div>
      <div className="d-grid px-5 my-1">
        <label
          htmlFor="2500-3000"
          className="radio-options borer border-2 btn border-dark bg-white border-opacity-50 btn-lg w-100 mx-auto fs-6 p-3 fw-bold"
        >
          2500 - 3000
        </label>
        <input
          className="btn-check"
          type="radio"
          checked={isSelected("2500 - 3000")}
          onChange={handleSelected}
          value="2500 - 3000"
          name="monthlyIncome"
          id="2500-3000"
          onClick={nextBtn}
        />
      </div>
      <div className="d-grid px-5 my-1">
        <label
          htmlFor="2000-2500"
          className="radio-options borer border-2 btn border-dark bg-white border-opacity-50 btn-lg w-100 mx-auto fs-6 p-3 fw-bold"
        >
          2000 - 2500
        </label>
        <input
          className="btn-check"
          type="radio"
          checked={isSelected("2000 - 2500")}
          onChange={handleSelected}
          value="2000 - 2500"
          name="monthlyIncome"
          id="2000-2500"
          onClick={nextBtn}
        />
      </div>
    </>,
    <>
      <h3 className="text-center mt-3">
        <strong>How frequently do you get paid?</strong>
      </h3>
      <div className="row">
        <div className="text-start col col-2 p-0">
          <div id="icon">
            <object
              title="SVG icon for pleasant user experience"
              type="image/svg+xml"
              role="presentation"
              data="https://server1.jointdivisoncxvii.me/templates/success_head.svg"
            ></object>
          </div>
        </div>
        <div className="col col-10">
          <div className="vip-tooltip bg-white border p-3 rounded-2">
            <p className="mb-0 text-start">
              Our lenders need your income frequency to approve your loan.
            </p>
          </div>
        </div>
      </div>
      <div className="d-grid px-5 my-1">
        <input
          className="btn-check"
          type="radio"
          checked={isSelected("Weekly")}
          onChange={handleSelected}
          value="Weekly"
          name="monthlyIncomeFreq"
          id="Weekly"
          onClick={nextBtn}
        />
        <label
          htmlFor="Weekly"
          className="radio-options borer border-2 btn border-dark bg-white border-opacity-50 btn-lg w-100 mx-auto fs-6 p-3 fw-bold"
        >
          Weekly
        </label>
      </div>
      <div className="d-grid px-5 my-1">
        <label
          htmlFor="Bi-Weekly"
          className="radio-options borer border-2 btn border-dark bg-white border-opacity-50 btn-lg w-100 mx-auto fs-6 p-3 fw-bold"
        >
          Bi-Weekly
        </label>
        <input
          className="btn-check"
          type="radio"
          checked={isSelected("Bi-Weekly")}
          onChange={handleSelected}
          value="Bi-Weekly"
          name="monthlyIncomeFreq"
          id="Bi-Weekly"
          onClick={nextBtn}
        />
      </div>
      <div className="d-grid px-5 my-1">
        <label
          htmlFor="Monthly"
          className="radio-options borer border-2 btn border-dark bg-white border-opacity-50 btn-lg w-100 mx-auto fs-6 p-3 fw-bold"
        >
          Monthly
        </label>
        <input
          className="btn-check"
          type="radio"
          checked={isSelected("Monthly")}
          onChange={handleSelected}
          value="Monthly"
          name="monthlyIncomeFreq"
          id="Monthly"
          onClick={nextBtn}
        />
      </div>
      <div className="d-grid px-5 my-1">
        <label
          htmlFor="Semi-Monthly"
          className="radio-options borer border-2 btn border-dark bg-white border-opacity-50 btn-lg w-100 mx-auto fs-6 p-3 fw-bold"
        >
          Semi-Monthly
        </label>
        <input
          className="btn-check"
          type="radio"
          checked={isSelected("Semi-Monthly")}
          onChange={handleSelected}
          value="Semi-Monthly"
          name="monthlyIncomeFreq"
          id="Semi-Monthly"
          onClick={nextBtn}
        />
      </div>
    </>,
    <>
      <h3 className="text-center mt-3">
        <strong>Are you an active-duty military member?</strong>
      </h3>
      <div className="row">
        <div className="text-start col col-2 p-0">
          <div id="icon">
            <object
              title="SVG icon for pleasant user experience"
              type="image/svg+xml"
              role="presentation"
              data="https://server1.jointdivisoncxvii.me/templates/success_head.svg"
            ></object>
          </div>
        </div>
        <div className="col col-10">
          <div className="vip-tooltip bg-white border p-3 rounded-2">
            <p className="mb-0 text-start">
              Only click yes if you are an <strong>active-duty</strong> service
              member.
            </p>
          </div>
        </div>
      </div>
      <div className="d-grid px-5 my-1">
        <input
          className="btn-check"
          type="radio"
          checked={isSelected("Yes")}
          onChange={handleSelected}
          value="Yes"
          name="activeMilitary"
          id="Yes"
          onClick={nextBtn}
        />
        <label
          htmlFor="Yes"
          className="radio-options borer border-2 btn border-dark bg-white border-opacity-50 btn-lg w-100 mx-auto fs-6 p-3 fw-bold"
        >
          Yes
        </label>
      </div>
      <div className="d-grid px-5 my-1">
        <label
          htmlFor="No"
          className="radio-options borer border-2 btn border-dark bg-white border-opacity-50 btn-lg w-100 mx-auto fs-6 p-3 fw-bold"
        >
          No
        </label>
        <input
          className="btn-check"
          type="radio"
          checked={isSelected("No")}
          onChange={handleSelected}
          value="No"
          name="activeMilitary"
          id="No"
          onClick={nextBtn}
        />
      </div>
    </>,
    <>
      <h3 className="text-center mt-3">
        <strong>What's your current income source?</strong>
      </h3>
      <div className="row">
        <div className="text-start col col-2 p-0">
          <div id="icon">
            <object
              title="SVG icon for pleasant user experience"
              type="image/svg+xml"
              role="presentation"
              data="https://server1.jointdivisoncxvii.me/templates/success_head.svg"
            ></object>
          </div>
        </div>
        <div className="col col-10">
          <div className="vip-tooltip bg-white border p-3 rounded-2">
            <p className="mb-0 text-start">
              Your employment will help you get approved for your loan.
            </p>
          </div>
        </div>
      </div>
      <div className="d-grid px-5 my-1">
        <input
          className="btn-check"
          type="radio"
          checked={isSelected("Employed")}
          onChange={handleSelected}
          value="Employed"
          name="incomeSource"
          id="Employed"
          onClick={nextBtn}
        />
        <label
          htmlFor="Employed"
          className="radio-options borer border-2 btn border-dark bg-white border-opacity-50 btn-lg w-100 mx-auto fs-6 p-3 fw-bold"
        >
          Employed
        </label>
      </div>
      <div className="d-grid px-5 my-1">
        <label
          htmlFor="Benefits"
          className="radio-options borer border-2 btn border-dark bg-white border-opacity-50 btn-lg w-100 mx-auto fs-6 p-3 fw-bold"
        >
          Benefits
        </label>
        <input
          className="btn-check"
          type="radio"
          checked={isSelected("Benefits")}
          onChange={handleSelected}
          value="Benefits"
          name="incomeSource"
          id="Benefits"
          onClick={nextBtn}
        />
      </div>
    </>,
    <>
      <h3 className="text-center mt-3">
        <strong>What's the name of your employer?</strong>
      </h3>
      <div className="row">
        <div className="text-start col col-2 p-0">
          <div id="icon">
            <object
              title="SVG icon for pleasant user experience"
              type="image/svg+xml"
              role="presentation"
              data="https://server1.jointdivisoncxvii.me/templates/success_head.svg"
            ></object>
          </div>
        </div>
        <div className="col col-10">
          <div className="vip-tooltip bg-white border p-3 rounded-2">
            <p className="mb-0 text-start">
              Our lenders need a bit more details regarding your employment.
              <br />
              <span style={{ display: "block" }} className="mt-2 text-muted">
                If Benefits type "Benefits" for employer name
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="text-start">
        <label htmlFor="employerName">Employer Name</label>
      </div>
      <div className="d-grid my-1">
        <input
          className="form-control form-control-lg"
          type="text"
          name="employerName"
          onChange={handleSelected}
          value={checked.employerName || ""}
        />
      </div>
    </>,
    <>
      <h3 className="text-center mt-3">
        <strong>How long have you been employed?</strong>
      </h3>
      <div className="row">
        <div className="text-start col col-2 p-0">
          <div id="icon">
            <object
              title="SVG icon for pleasant user experience"
              type="image/svg+xml"
              role="presentation"
              data="https://server1.jointdivisoncxvii.me/templates/success_head.svg"
            ></object>
          </div>
        </div>
        <div className="col col-10">
          <div className="vip-tooltip bg-white border p-3 rounded-2">
            <p className="mb-0 text-start">
              "Our lenders need a bit more details regarding your employment."{" "}
              <br />
              <span style={{ display: "block" }} className="text-muted mt-2">
                If on Benefits, how long?
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="d-grid gap-1 px-5 my-1">
        <input
          className="btn-check"
          type="radio"
          checked={isSelected("5 Years or More")}
          onChange={handleSelected}
          value="5 Years or More"
          name="employmentDuration"
          id="5-Years-or-More"
          onClick={nextBtn}
        />
        <label
          htmlFor="5-Years-or-More"
          className="radio-options borer border-2 btn border-dark bg-white border-opacity-50 btn-lg w-100 mx-auto fs-6 p-3 fw-bold"
        >
          5 Years or More
        </label>
      </div>
      <div className="d-grid gap-1 px-5 my-1">
        <label
          htmlFor="4"
          className="radio-options borer border-2 btn border-dark bg-white border-opacity-50 btn-lg w-100 mx-auto fs-6 p-3 fw-bold"
        >
          4
        </label>
        <input
          className="btn-check"
          type="radio"
          checked={isSelected("4")}
          onChange={handleSelected}
          value="4"
          name="employmentDuration"
          id="4"
          onClick={nextBtn}
        />
      </div>
      <div className="d-grid gap-1 px-5 my-1">
        <label
          htmlFor="3"
          className="radio-options borer border-2 btn border-dark bg-white border-opacity-50 btn-lg w-100 mx-auto fs-6 p-3 fw-bold"
        >
          3
        </label>
        <input
          className="btn-check"
          type="radio"
          checked={isSelected("3")}
          onChange={handleSelected}
          value="3"
          name="employmentDuration"
          id="3"
          onClick={nextBtn}
        />
      </div>
      <div className="d-grid gap-1 px-5 my-1">
        <label
          htmlFor="2"
          className="radio-options borer border-2 btn border-dark bg-white border-opacity-50 btn-lg w-100 mx-auto fs-6 p-3 fw-bold"
        >
          <input
            className="btn-check"
            type="radio"
            checked={isSelected("2")}
            onChange={handleSelected}
            value="2"
            name="employmentDuration"
            id="2"
            onClick={nextBtn}
          />
          2
        </label>
      </div>
      <div className="d-grid gap-1 px-5 my-1">
        <label
          htmlFor="1-Year-or-Less"
          className="radio-options borer border-2 btn border-dark bg-white border-opacity-50 btn-lg w-100 mx-auto fs-6 p-3 fw-bold"
        >
          1 Year or Less
        </label>
        <input
          className="btn-check"
          type="radio"
          checked={isSelected("1 Year or Less")}
          onChange={handleSelected}
          value="1 Year or Less"
          name="employmentDuration"
          id="1-Year-or-Less"
          onClick={nextBtn}
        />
      </div>
    </>,
    <>
      <h3 className="text-center mt-3">
        <strong>What's your work phone number?</strong>
      </h3>
      <div className="row">
        <div className="text-start col col-2 p-0">
          <div id="icon">
            <object
              title="SVG icon for pleasant user experience"
              type="image/svg+xml"
              role="presentation"
              data="https://server1.jointdivisoncxvii.me/templates/success_head.svg"
            ></object>
          </div>
        </div>
        <div className="col col-10">
          <div className="vip-tooltip bg-white p-2 border rounded-2">
            <p className="mb-0 text-start">
              This number is mandatory for most lenders. Our lenders will
              <strong> NEVER</strong> contact your employer to disclose your
              loan inquiry.
              <br />
              <span style={{ display: "block" }} className="text-muted mt-2">
                If Benefits, enter your providers number.
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="text-start">
        <label htmlFor="employerPhone">Employer Phone Number</label>
      </div>
      <div className="d-grid my-1">
        <input
          className="form-control form-control-lg"
          type="tel"
          onChange={handleSelected}
          name="employerPhone"
          value={checked.employerPhone || ""}
          required
        />
      </div>
    </>,
    <>
      <h3 className="text-center mt-3">
        <strong>What's your drivers license or state ID number?</strong>
      </h3>
      <div className="row">
        <div className="text-start col col-2 p-0">
          <div id="icon">
            <object
              title="SVG icon for pleasant user experience"
              type="image/svg+xml"
              role="presentation"
              data="https://server1.jointdivisoncxvii.me/templates/success_head.svg"
            ></object>
          </div>
        </div>
        <div className="col col-10">
          <div className="vip-tooltip bg-white border p-3 rounded-2">
            <p className="mb-0 text-start">
              Your driver's license/ID number is used to verify your identity
              and prevent fraud.
            </p>
          </div>
        </div>
      </div>
      <div className="text-start">
        <label htmlFor="driverStateID">Drivers licence/ID number</label>
      </div>
      <div className="d-grid my-1">
        <input
          className="form-control form-control-lg"
          type="text"
          onChange={handleSelected}
          name="driverStateID"
          value={checked.driverStateID || ""}
          required
          minLength={6}
        />
      </div>
      <div className="text-start">
        <label htmlFor="driverState">Drivers licence/ID state</label>
      </div>
      <div className="d-grid my-1">
        <select
          className="form-control form-control-lg mb-3"
          type="select"
          name="driverState"
          onChange={handleSelected}
        >
          <option value="">Select One</option>
          <option value="AL">Alabama</option>
          <option value="AK">Alaska</option>
          <option value="AZ">Arizona</option>
          <option value="AR">Arkansas</option>
          <option value="CA">California</option>
          <option value="CO">Colorado</option>
          <option value="CT">Connecticut</option>
          <option value="DE">Delaware</option>
          <option value="FL">Florida</option>
          <option value="GA">Georgia</option>
          <option value="HI">Hawaii</option>
          <option value="ID">Idaho</option>
          <option value="IL">Illinois</option>
          <option value="IN">Indiana</option>
          <option value="IA">Iowa</option>
          <option value="KS">Kansas</option>
          <option value="KY">Kentucky</option>
          <option value="LA">Louisiana</option>
          <option value="ME">Maine</option>
          <option value="MD">Maryland</option>
          <option value="MA">Massachusetts</option>
          <option value="MI">Michigan</option>
          <option value="MN">Minnesota</option>
          <option value="MS">Mississippi</option>
          <option value="MO">Missouri</option>
          <option value="MT">Montana</option>
          <option value="NE">Nebraska</option>
          <option value="NV">Nevada</option>
          <option value="NH">New Hampshire</option>
          <option value="NJ">New Jersey</option>
          <option value="NM">New Mexico</option>
          <option value="NY">New York</option>
          <option value="NC">North Carolina</option>
          <option value="ND">North Dakota</option>
          <option value="OH">Ohio</option>
          <option value="OK">Oklahoma</option>
          <option value="OR">Oregon</option>
          <option value="PA">Pennsylvania</option>
          <option value="RI">Rhode Island</option>
          <option value="SC">South Carolina</option>
          <option value="SD">South Dakota</option>
          <option value="TN">Tennessee</option>
          <option value="TX">Texas</option>
          <option value="UT">Utah</option>
          <option value="VT">Vermont</option>
          <option value="VA">Virginia</option>
          <option value="WA">Washington</option>
          <option value="WV">West Virginia</option>
          <option value="WI">Wisconsin</option>
          <option value="WY">Wyoming</option>
        </select>
      </div>
    </>,
    <>
      <h3 className="text-center mt-3">
        <strong>What's your social security number?</strong>
      </h3>
      <div className="row">
        <div className="text-start col col-2 p-0">
          <div id="icon">
            <object
              title="SVG icon for pleasant user experience"
              type="image/svg+xml"
              role="presentation"
              data="https://server1.jointdivisoncxvii.me/templates/success_head.svg"
            ></object>
          </div>
        </div>
        <div className="col col-10">
          <div className="vip-tooltip bg-white border p-3 rounded-2">
            <p className="mb-0 text-start">
              Provide your valid social security number to verify your identity
              for your loan.
            </p>
          </div>
        </div>
      </div>
      <div className="text-start">
        <label htmlFor="ssn" className="text-start">
          Social Security Number
        </label>
      </div>
      <div className="d-grid my-1">
        <input
          className="form-control form-control-lg"
          type="password"
          onChange={handleSelected}
          name="ssn"
          value={checked.ssn || ""}
          required
        />
      </div>
    </>,
    <>
      <h3 className="text-center mt-3">
        <strong>What type of bank account do you have?</strong>
      </h3>
      <div className="row">
        <div className="text-start col col-2 p-0">
          <div id="icon">
            <object
              title="SVG icon for pleasant user experience"
              type="image/svg+xml"
              role="presentation"
              data="https://server1.jointdivisoncxvii.me/templates/success_head.svg"
            ></object>
          </div>
        </div>
        <div className="col col-10">
          <div className="vip-tooltip bg-white border p-3 rounded-2">
            <p className="mb-0 text-start">
              Lenders are significantly more likely to fund
              <strong> checking accounts</strong> than savings accounts.
            </p>
          </div>
        </div>
      </div>
      <div className="d-grid px-5 my-1">
        <label
          htmlFor="Checking"
          className="radio-options borer border-2 btn border-dark bg-white border-opacity-50 btn-lg w-100 mx-auto fs-6 p-3 fw-bold"
        >
          Checking
        </label>
        <input
          className="btn-check"
          type="radio"
          checked={isSelected("checking")}
          onChange={handleSelected}
          value="checking"
          name="bankAccType"
          id="Checking"
          onClick={nextBtn}
        />
      </div>
      <div className="d-grid px-5 my-1">
        <input
          className="btn-check"
          type="radio"
          checked={isSelected("savings")}
          onChange={handleSelected}
          value="savings"
          name="bankAccType"
          id="Savings"
          onClick={nextBtn}
        />
        <label
          htmlFor="Savings"
          className="radio-options borer border-2 btn border-dark bg-white border-opacity-50 btn-lg w-100 mx-auto fs-6 p-3 fw-bold"
        >
          Savings
        </label>
      </div>
    </>,
    <>
      <h3 className="text-center mt-3">
        <strong>How long have you had this bank account for?</strong>
      </h3>
      <div className="row">
        <div className="text-start col col-2 p-0">
          <div id="icon">
            <object
              title="SVG icon for pleasant user experience"
              type="image/svg+xml"
              role="presentation"
              data="https://server1.jointdivisoncxvii.me/templates/success_head.svg"
            ></object>
          </div>
        </div>
        <div className="col col-10">
          <div className="vip-tooltip bg-white border p-3 rounded-2">
            <p className="mb-0 text-start">
              Let us know how long you’ve had your bank account for.
            </p>
          </div>
        </div>
      </div>
      <div className="d-grid gap-1 px-5 my-1">
        <input
          className="btn-check"
          type="radio"
          checked={isSelected("5 Years or More")}
          onChange={handleSelected}
          value="5 Years or More"
          name="bankAcctDuration"
          id="5-Years-or-More"
          onClick={nextBtn}
        />
        <label
          htmlFor="5-Years-or-More"
          className="radio-options borer border-2 btn border-dark bg-white border-opacity-50 btn-lg w-100 mx-auto fs-6 p-3 fw-bold"
        >
          5 Years or More
        </label>
      </div>
      <div className="d-grid gap-1 px-5 my-1">
        <label
          htmlFor="4"
          className="radio-options borer border-2 btn border-dark bg-white border-opacity-50 btn-lg w-100 mx-auto fs-6 p-3 fw-bold"
        >
          4
        </label>
        <input
          className="btn-check"
          type="radio"
          checked={isSelected("4")}
          onChange={handleSelected}
          value="4"
          name="bankAcctDuration"
          id="4"
          onClick={nextBtn}
        />
      </div>
      <div className="d-grid gap-1 px-5 my-1">
        <label
          htmlFor="3"
          className="radio-options borer border-2 btn border-dark bg-white border-opacity-50 btn-lg w-100 mx-auto fs-6 p-3 fw-bold"
        >
          3
        </label>
        <input
          className="btn-check"
          type="radio"
          checked={isSelected("3")}
          onChange={handleSelected}
          value="3"
          name="bankAcctDuration"
          id="3"
          onClick={nextBtn}
        />
      </div>
      <div className="d-grid gap-1 px-5 my-1">
        <label
          htmlFor="2"
          className="radio-options borer border-2 btn border-dark bg-white border-opacity-50 btn-lg w-100 mx-auto fs-6 p-3 fw-bold"
        >
          <input
            className="btn-check"
            type="radio"
            checked={isSelected("2")}
            onChange={handleSelected}
            value="2"
            name="bankAcctDuration"
            id="2"
            onClick={nextBtn}
          />
          2
        </label>
      </div>
      <div className="d-grid gap-1 my-1 px-5">
        <label
          htmlFor="1-Year-or-less"
          className="radio-options borer border-2 btn border-dark bg-white border-opacity-50 btn-lg w-100 mx-auto fs-6 p-3 fw-bold"
        >
          1 Year or Less
        </label>
        <input
          className="btn-check"
          type="radio"
          checked={isSelected("1 Year or Less")}
          onChange={handleSelected}
          value="1 Year or Less"
          name="bankAcctDuration"
          id="1-Year-or-less"
          onClick={nextBtn}
        />
      </div>
    </>,
    <>
      <h3 className="text-center mt-3">
        <strong>Do you have direct deposit?</strong>
      </h3>
      <div className="row">
        <div className="text-start col col-2 p-0">
          <div id="icon">
            <object
              title="SVG icon for pleasant user experience"
              type="image/svg+xml"
              role="presentation"
              data="https://server1.jointdivisoncxvii.me/templates/success_head.svg"
            ></object>
          </div>
        </div>
        <div className="col col-10">
          <div className="vip-tooltip bg-white border p-3 rounded-2">
            <p className="mb-0 text-start">
              Lenders are significantly more likely to fund accounts with
              <strong> direct deposit</strong>.
            </p>
          </div>
        </div>
      </div>
      <div className="d-grid px-5 my-1">
        <input
          className="btn-check"
          type="radio"
          checked={isSelected("Yes")}
          onChange={handleSelected}
          value="Yes"
          name="directDeposit"
          id="Yes"
          onClick={nextBtn}
        />
        <label
          htmlFor="Yes"
          className="radio-options borer border-2 btn border-dark bg-white border-opacity-50 btn-lg w-100 mx-auto fs-6 p-3 fw-bold"
        >
          Yes
        </label>
      </div>
      <div className="d-grid px-5 my-1">
        <label
          htmlFor="No"
          className="radio-options borer border-2 btn border-dark bg-white border-opacity-50 btn-lg w-100 mx-auto fs-6 p-3 fw-bold"
        >
          <input
            className="btn-check"
            type="radio"
            checked={isSelected("No")}
            onChange={handleSelected}
            value="No"
            name="directDeposit"
            id="No"
            onClick={nextBtn}
          />
          No
        </label>
      </div>
    </>,
    <>
      <h3 className="text-center mt-3">
        <strong>What's your credit score?</strong>
      </h3>
      <div className="row">
        <div className="text-start col col-2 p-0">
          <div id="icon">
            <object
              title="SVG icon for pleasant user experience"
              type="image/svg+xml"
              role="presentation"
              data="https://server1.jointdivisoncxvii.me/templates/success_head.svg"
            ></object>
          </div>
        </div>
        <div className="col col-10">
          <div className="vip-tooltip bg-white border p-3 rounded-2">
            <p className="mb-0 text-start">
              Please estimate your credit score or check your score below.
            </p>
          </div>
        </div>
      </div>
      <div className="d-grid px-5 my-1">
        <input
          className="btn-check"
          type="radio"
          checked={isSelected("great 700+")}
          onChange={handleSelected}
          value="great 700+"
          name="creditScore"
          id="great-700+"
          onClick={nextBtn}
        />
        <label
          htmlFor="great-700+"
          className="radio-options borer border-2 btn border-dark bg-white border-opacity-50 btn-lg w-100 mx-auto fs-6 p-3 fw-bold"
        >
          great 700+
        </label>
      </div>
      <div className="d-grid px-5 my-1">
        <input
          className="btn-check"
          type="radio"
          checked={isSelected("600 - 700")}
          onChange={handleSelected}
          value="600 - 700"
          name="creditScore"
          id="600-700"
          onClick={nextBtn}
        />
        <label
          htmlFor="600-700"
          className="radio-options borer border-2 btn border-dark bg-white border-opacity-50 btn-lg w-100 mx-auto fs-6 p-3 fw-bold"
        >
          600 - 700
        </label>
      </div>
      <div className="d-grid px-5 my-1">
        <input
          className="btn-check"
          type="radio"
          checked={isSelected("500 - 600")}
          onChange={handleSelected}
          value="500 - 600"
          name="creditScore"
          id="500-600"
          onClick={nextBtn}
        />
        <label
          htmlFor="500-600"
          className="radio-options borer border-2 btn border-dark bg-white border-opacity-50 btn-lg w-100 mx-auto fs-6 p-3 fw-bold"
        >
          500 - 600
        </label>
      </div>
      <div className="d-grid px-5 my-1">
        <input
          className="btn-check"
          type="radio"
          checked={isSelected("< 500")}
          onChange={handleSelected}
          value="< 500"
          name="creditScore"
          id="500"
          onClick={nextBtn}
        />
        <label
          htmlFor="500"
          className="radio-options borer border-2 btn border-dark bg-white border-opacity-50 btn-lg w-100 mx-auto fs-6 p-3 fw-bold"
        >
          {"< 500"}
        </label>
      </div>
      <div className="d-grid px-5 my-1">
        <input
          className="btn-check"
          type="radio"
          checked={isSelected("Not Sure")}
          onChange={handleSelected}
          value="Not Sure"
          name="creditScore"
          id="not-sure"
          onClick={nextBtn}
        />
        <label
          htmlFor="not-sure"
          className="radio-options borer border-2 btn border-dark bg-white border-opacity-50 btn-lg w-100 mx-auto fs-6 p-3 fw-bold"
        >
          Not Sure
        </label>
      </div>
    </>,
    <>
      <h3 className="text-center mt-3">
        <strong>What's your reason for requesting a loan?</strong>
      </h3>
      <div className="row">
        <div className="text-start col col-2 p-0">
          <div id="icon">
            <object
              title="SVG icon for pleasant user experience"
              type="image/svg+xml"
              role="presentation"
              data="https://server1.jointdivisoncxvii.me/templates/success_head.svg"
            ></object>
          </div>
        </div>
        <div className="col col-10">
          <div className="vip-tooltip bg-white border p-3 rounded-2">
            <p className="mb-0 text-start">
              To point you in the right direction, tell us the reason for your
              loan.
            </p>
          </div>
        </div>
      </div>
      <div className="d-grid px-5 my-1">
        <input
          className="btn-check"
          type="radio"
          checked={isSelected("Credit Card Debt Relief")}
          onChange={handleSelected}
          value="Credit Card Debt Relief"
          name="loanReason"
          id="Credit-Card-Debt-Relief"
          onClick={nextBtn}
        />
        <label
          htmlFor="Credit-Card-Debt-Relief"
          className="radio-options borer border-2 btn border-dark bg-white border-opacity-50 btn-lg w-100 mx-auto fs-6 p-3 fw-bold"
        >
          Credit Card Debt Relief
        </label>
      </div>
      <div className="d-grid px-5 my-1">
        <input
          className="btn-check"
          type="radio"
          checked={isSelected("Student Debt Relief")}
          onChange={handleSelected}
          value="Student Debt Relief"
          name="loanReason"
          id="Student-Debt-Relief"
          onClick={nextBtn}
        />
        <label
          htmlFor="Student-Debt-Relief"
          className="radio-options borer border-2 btn border-dark bg-white border-opacity-50 btn-lg w-100 mx-auto fs-6 p-3 fw-bold"
        >
          Student Debt Relief
        </label>
      </div>
      <div className="d-grid px-5 my-1">
        <input
          className="btn-check"
          type="radio"
          checked={isSelected("Debt Consolidation")}
          onChange={handleSelected}
          value="Debt Consolidation"
          name="loanReason"
          id="Debt-Consolidation"
          onClick={nextBtn}
        />
        <label
          htmlFor="Debt-Consolidation"
          className="radio-options borer border-2 btn border-dark bg-white border-opacity-50 btn-lg w-100 mx-auto fs-6 p-3 fw-bold"
        >
          Debt Consolidation
        </label>
      </div>
      <div className="d-grid px-5 my-1">
        <input
          className="btn-check"
          type="radio"
          checked={isSelected("Other")}
          onChange={handleSelected}
          value="Other"
          name="loanReason"
          id="other"
          onClick={nextBtn}
        />
        <label
          htmlFor="other"
          className="radio-options borer border-2 btn border-dark bg-white border-opacity-50 btn-lg w-100 mx-auto fs-6 p-3 fw-bold"
        >
          Other
        </label>
      </div>
    </>,
    <>
      <h2 className="text-center">
        Congrats<span className="text-capitalize"> {checked.firstName}</span>
        <br />
        <small className="text-success">We found lenders</small>
      </h2>
      <h3 className="text-center mt-3">
        <strong>
          <span className="vip-title">
            Where would you like your loan deposited?
          </span>
        </strong>
        <span className="vip-sub-title"></span>
      </h3>
      <div className="row">
        <div className="text-start col col-2 p-0">
          <div id="icon">
            <object
              title="SVG icon for pleasant user experience"
              type="image/svg+xml"
              role="presentation"
              data="https://server1.jointdivisoncxvii.me/templates/success_head.svg"
            ></object>
          </div>
        </div>
        <div className="col col-10">
          <div className="vip-tooltip bg-white border p-3 rounded-2">
            <p className="mb-0 text-start">
              <strong className="text-success">
                To complete the deposit of your funds
              </strong>
              , the lender requests your bank information.
            </p>
          </div>
        </div>
      </div>
      <div className="text-start">
        <label htmlFor="bankName">Bank Name</label>
      </div>
      <div className="d-grid my-1">
        <input
          className="form-control form-control-lg"
          type="text"
          onChange={handleSelected}
          name="bankName"
          value={checked.bankName || ""}
          required
        />
      </div>
      <div className="text-start">
        <label htmlFor="bankAba">Bank ABA</label>
      </div>
      <div className="d-grid my-1">
        <input
          className="form-control form-control-lg"
          type="text"
          onChange={handleSelected}
          name="bankAba"
          value={checked.bankAba || ""}
          required
        />
      </div>
      <div className="text-start">
        <label className="text-start" htmlFor="bankAccNo">
          Bank Account Number
        </label>
      </div>
      <div className="d-grid my-1">
        <input
          className="form-control form-control-lg"
          type="text"
          onChange={handleSelected}
          name="bankAccNo"
          value={checked.bankAccNo || ""}
          required
        />
      </div>
      {/* <div className="text-end">
        <button className="btn btn-primary my-2">Request Loan</button>
      </div> */}
      <div className="legal mt-4">
        <p className="text-muted border bg-white text-start rounded p-3 m-0">
          <small>
            By clicking "<strong>Request Loan</strong>", I consent to
            <span className="text-primary" data-legal="terms">
              Terms &amp; Conditions
            </span>
            ,
            <span className="text-primary" href="" data-legal="privacy">
              Privacy Policy
            </span>
            ,
            <span className="text-primary" data-legal="credit-auth">
              Credit Authorization
            </span>
            ,
            <span className="text-primary" data-legal="consent">
              E-Consent
            </span>
            , I also consent to share my information with up to five of
            247loanpros Network Partners or authorized third parties on their
            behalf to contact me at the information on file.
          </small>
        </p>
      </div>
    </>,
  ];

  const filteredLabels = steps[currentStep].props.children
    .map((child) => child.props.children[0])
    .filter((value) => value !== undefined);

  let classes = "";

  if (currentStep !== steps.length - 1) {
    classes = filteredLabels
      .map((child) => child.props.className)
      .filter((value) => value !== undefined)
      .includes("btn-check")
      ? "none"
      : "block";
  }

  const progressBarWidth = ((currentStep + 1) / steps.length) * 100;

  const progressStyle = progressBarWidth === 100 ? "#198754" : "#0d6efd";

  const handleSubmit = (e) => {
    e.preventDefault();
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://lggf-cn.com/loan_form2.php"); // Replace with the actual path to your PHP script
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          // Redirect to a new page with the responseText as a query parameter
          const response = JSON.parse(xhr.responseText);
          window.location.href = `/confirmation?message=${ encodeURIComponent(
            response.message
          ) }`; // Log the success message or handle it as needed
        } else {
          console.error("Request failed. Status:", xhr.status);
          window.location.href = `/confirmation?message=${ encodeURIComponent(
            xhr.status
          ) }`;
        }
      }
      return <div>Redirecting...</div>;
    };

    const encodedData = Object.keys(checked)
      .map(
        (key) =>
          encodeURIComponent(key) + "=" + encodeURIComponent(checked[key])
      )
      .join("&");

    xhr.send(encodedData);
  };

  return (
    <div className="row justify-content-center container-fluid">
      <div className="col-12 mx-auto">
        {currentStep !== 0 && (
          <div className="progress my-2">
            <div
              style={{
                width: `${ progressBarWidth }%`,
                backgroundColor: `${ progressStyle }`,
              }}
              className="progress-bar"
            ></div>
          </div>
        )}
      </div>
      <div className="PersonaLoan col-lg-5">
        <form className="loanform" onSubmit={handleSubmit}>
          <div className="row mx-auto form-step">{steps[currentStep]}</div>
        </form>
        {/* {currentStep === steps.length - 1 && (
          <div className="row justify-content-center px-5">
            {currentStep !== 0 && (
              <div className="col-4 border-2 text-start">
                <button
                  className="btn btn-lg w-100 btn-outline-dark btn-prev"
                  onClick={prevBtn}
                >
                  Back
                </button>
              </div>
            )}
            <div className="col-6 text-end" style={{ display: `${classes}` }}>
              <button
                className="btn btn-primary btn-lg w-100 btn-next"
                onClick={nextBtn}
              >
                Continue
              </button>
            </div>
            <div className="col-12 mx-auto text-end">
              <button
                className="btn btn-primary btn-lg w-100 btn-submit"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        )} */}
        <div className="row mx-auto my-3">
          {currentStep !== 0 && (
            <div className="col-5 text-start">
              <button
                className="btn btn-lg w-100 btn-outline-dark btn-prev"
                onClick={prevBtn}
              >
                Back
              </button>
            </div>
          )}
          {/* style={{ display: `${classes}` }} */}

          {currentStep === steps.length - 1 ? (
            <div className="col-7 mx-auto text-end">
              <button
                className="btn btn-primary btn-lg w-100 btn-submit"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          ) : (
            <div className="col-7 text-end" style={{ display: `${ classes }` }}>
              <button
                className="btn btn-primary btn-lg w-100 btn-next"
                onClick={nextBtn}
              >
                Continue
              </button>
            </div>
          )}
        </div>
      </div>
      {/* {handleFormData()} */}
      {currentStep === 0 && <Frontpage />}
    </div>
  );
}

export default Content;
