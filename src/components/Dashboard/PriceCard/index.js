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
  const percentcolor = (item) => {
    return item < 0 ? "tomato" : "#87deae";
  };
  return (
    <div className="container-fluid p-0 m-0 ">
      <div className="row d-flex align-items-center justify-content-between w-100">
        <div className="col-5">
          <div className="d-flex align-items-center">
            <div
              className=""
              style={{
                width: 25,
                height: 25,
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
            className="d-flex align-items-center justify-content-end "
            style={{
              height: 40,
              width: 100,
            }}
          >
            <PriceChart
              sparkline={sparkline}
              color={price_change_percentage_7d_in_currency}
            />
          </div>
          <div className="d-flex align-items-center justify-content-end flex-column">
            <div
              className="price-value"
              style={{
                fontSize: 13,
              }}
            >
              ${current_price.toFixed(2)}
            </div>
            <div
              className="price-change text-end w-100 "
              style={{
                color: percentcolor(price_change_percentage_7d_in_currency),
                fontSize: 12,
              }}
            >
              {price_change_percentage_7d_in_currency.toFixed(2)}%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
