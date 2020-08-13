import React from "react";

class Pricing extends React.Component {
  state = {
    priceInputValue: "1",
    priceInput: {
      0: "3",
      1: "5",
      2: "10",
      3: "15",
      4: "20",
      5: "25",
      6: "30",
      7: "50",
      8: "75",
      9: "100+",
    },
    priceOutput: {
      plan1: {
        0: ["$", "15", "/m"],
        1: ["$", "25", "/m"],
        2: ["$", "50", "/m"],
        3: ["$", "75", "/m"],
        4: ["$", "100", "/m"],
        5: ["$", "125", "/m"],
        6: ["$", "150", "/m"],
        7: ["$", "250", "/m"],
        8: ["$", "375", "/m"],
        9: ["", "Contact Us", ""],
      },
      plan2: {
        0: ["$", "12", "/m"],
        1: ["$", "20", "/m"],
        2: ["$", "40", "/m"],
        3: ["$", "60", "/m"],
        4: ["$", "80", "/m"],
        5: ["$", "100", "/m"],
        6: ["$", "120", "/m"],
        7: ["$", "200", "/m"],
        8: ["$", "300", "/m"],
        9: ["", "Contact Us", ""],
      },
    },
  };

  slider = React.createRef();
  sliderValue = React.createRef();

  componentDidMount() {
    this.slider.current.setAttribute("min", 0);
    this.slider.current.setAttribute(
      "max",
      Object.keys(this.state.priceInput).length - 1
    );
    this.thumbSize = parseInt(
      window
        .getComputedStyle(this.sliderValue.current)
        .getPropertyValue("--thumb-size"),
      10
    );
    this.handleSliderValuePosition(this.slider.current);
  }

  handlePricingSlide = (e) => {
    this.setState({ priceInputValue: e.target.value });
    this.handleSliderValuePosition(e.target);
  };

  handleSliderValuePosition = (input) => {
    const multiplier = input.value / input.max;
    const thumbOffset = this.thumbSize * multiplier;
    const priceInputOffset =
      (this.thumbSize - this.sliderValue.current.clientWidth) / 2;
    this.sliderValue.current.style.left =
      input.clientWidth * multiplier - thumbOffset + priceInputOffset + "px";
  };

  getPricingData = (obj, pos) => {
    return pos !== undefined
      ? obj[this.state.priceInputValue][pos]
      : obj[this.state.priceInputValue];
  };

  render() {
    return (
      <div className="pricing">
        <div className="pricing-slider center-content">
          <label className="form-slider">
            <span>How many users do you have?</span>
            <input
              type="range"
              ref={this.slider}
              defaultValue={this.state.priceInputValue}
              onChange={this.handlePricingSlide}
            />
          </label>
          <div ref={this.sliderValue} className="pricing-slider-value">
            {this.getPricingData(this.state.priceInput)}
          </div>
        </div>

        <div className="pricing-items">
          <div className="pricing-item">
            <div className="pricing-item-inner">
              <div className="pricing-item-content">
                <div className="pricing-item-header center-content">
                  <div className="pricing-item-title">Monthly</div>
                  <div className="pricing-item-price">
                    <span className="pricing-item-price-currency">
                      {this.getPricingData(this.state.priceOutput.plan1, 0)}
                    </span>
                    <span className="pricing-item-price-amount">
                      {this.getPricingData(this.state.priceOutput.plan1, 1)}
                    </span>
                    {this.getPricingData(this.state.priceOutput.plan1, 2)}
                  </div>
                </div>
                <div className="pricing-item-features">
                  <ul className="pricing-item-features-list">
                    <li className="is-checked">Time Tracking</li>
                    <li className="is-checked">Screenshot Storage</li>
                    <li className="is-checked">Keyboard & Mouse Activity</li>
                    <li className="is-checked">User Settings</li>
                    <li className="is-checked">Project and Task Managment</li>
                    <li className="is-checked">Keyboard & Mouse Activity</li>
                    <li className="is-checked">$5/User</li>
                  </ul>
                </div>
              </div>
              <div className="pricing-item-cta">
                <a
                  className="button"
                  href="https://office.hivedesk.com/freetrial/"
                >
                  Sign-up Now
                </a>
              </div>
            </div>
          </div>

          <div className="pricing-item">
            <div className="pricing-item-inner">
              <div className="pricing-item-content">
                <div className="pricing-item-header center-content">
                  <div className="pricing-item-title">Annual</div>
                  <div className="pricing-item-price">
                    <span className="pricing-item-price-currency">
                      {this.getPricingData(this.state.priceOutput.plan2, 0)}
                    </span>
                    <span className="pricing-item-price-amount">
                      {this.getPricingData(this.state.priceOutput.plan2, 1)}
                    </span>
                    {this.getPricingData(this.state.priceOutput.plan2, 2)}
                  </div>
                </div>
                <div className="pricing-item-features">
                  <ul className="pricing-item-features-list">
                    <li className="is-checked">Time Tracking</li>
                    <li className="is-checked">Screenshot Storage</li>
                    <li className="is-checked">Keyboard & Mouse Activity</li>
                    <li className="is-checked">User Settings</li>
                    <li className="is-checked">Project and Task Managment</li>
                    <li className="is-checked">Keyboard & Mouse Activity</li>
                    <li className="is-checked">$4/User</li>
                  </ul>
                </div>
              </div>
              <div className="pricing-item-cta">
                <a
                  className="button"
                  href="https://office.hivedesk.com/freetrial/"
                >
                  Sign-up Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Pricing;
