import { useState } from "react";

function App() {
  const [input, setInput] = useState({
    slider: 2,
    discounted: false,
  });

  const priceAndStuff = [
    {
      views: "10K",
      price: 8,
    },
    {
      views: "50K",
      price: 12,
    },
    {
      views: "100K",
      price: 16,
    },
    {
      views: "500K",
      price: 24,
    },
    {
      views: "1M",
      price: 36,
    },
  ];

  function sliderChanged(event) {
    const sliderEl = document.querySelector("#slider");
    sliderEl.style.background = `linear-gradient(to right, var(--strong-cyan) ${
      event.target.value * 25
    }%, var(--light-grayish-blue-es) ${event.target.value * 25}%)`;

    setInput((oldInput) => ({
      ...oldInput,
      slider: event.target.value,
    }));
  }

  function toggleClicked(event) {
    event.target
      .closest(".form__top-things__side-options__toggle")
      .classList.toggle("clicked");

    setInput((oldInput) => ({
      ...oldInput,
      discounted: !oldInput.discounted,
    }));
  }

  return (
    <main>
      <h1>
        Simple, traffic-based pricing{" "}
        <span>Sign-up for our 30-day trial. No credit card required.</span>
      </h1>
      <div className="form">
        <div className="form__top-things">
          <div className="form__top-things__views-and-price">
            <div className="form__top-things__views-and-price__views">
              {priceAndStuff[input.slider].views} PAGEVIEWS
            </div>
            <div className="form__top-things__views-and-price__price">
              <span>
                $
                {input.discounted
                  ? (priceAndStuff[input.slider].price * 0.75).toFixed(2)
                  : priceAndStuff[input.slider].price.toFixed(2)}
              </span>{" "}
              / month
            </div>
            <input
              type="range"
              min="0"
              max="4"
              id="slider"
              value={input.slider}
              onChange={sliderChanged}
            />
          </div>

          <div className="form__top-things__side-options">
            <div className="form__top-things__side-options__option1">
              Monthly Billing
            </div>
            <div
              className="form__top-things__side-options__toggle"
              onClick={toggleClicked}
            >
              <div className="form__top-things__side-options__toggle__circle"></div>
            </div>
            <div className="form__top-things__side-options__option2">
              Yearly Billing
            </div>
            <div className="form__top-things__side-options__discount">
              25% <span>discount</span>
            </div>
          </div>
        </div>

        <div className="form__bottom-things">
          <ul>
            <li>Unlimited websites</li>
            <li>100% data ownership</li>
            <li>Email reports</li>
          </ul>
          <button>Start my trial</button>
        </div>
      </div>
    </main>
  );
}

export default App;
