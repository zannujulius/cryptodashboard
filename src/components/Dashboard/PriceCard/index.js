import { color } from "../../../constant/color";
import PriceChart from "../Chart/PriceChart";

const PriceCard = ({
  symbol,
  name,
  sparkline,
  image,
  current_price,
  price_change_percentage_7d_in_currency,
}) => {
  return (
    <div className="container-fluid ">
      <div className="row d-flex align-items-center justify-content-between w-100">
        <div className="col-5">
          <div className="d-flex align-items-center">
            <div
              className=""
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                background: `url(${image})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                borderRadius: "50%",
              }}
            ></div>
            <div className="mx-2">
              <div
                className="price-name"
                style={{
                  fontWeight: "510",
                }}
              >
                {name}
              </div>
              <div
                className="price-short"
                style={{
                  color: color.grey,
                }}
              >
                {symbol}
              </div>
            </div>
          </div>
        </div>
        <div className="col-7 d-flex align-items-center justify-content-end">
          <div
            className="d-flex align-items-center justify-content-center mx-3"
            style={{
              height: 50,
              width: 100,
            }}
          >
            <PriceChart sparkline={sparkline} />
          </div>
          <div className="d-flex align-items-center justify-content-end flex-column">
            <div className="price-value">${current_price}</div>
            <div
              className="price-change text-end w-100 "
              style={{
                color: "#87deae",
                fontWeight: "510",
              }}
            >
              {price_change_percentage_7d_in_currency.toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
