import { color } from "../../../constant/color";
import TokenChart from "../Chart/TokenChart";
import "./style.css";

const TokenCard = ({
  symbol,
  name,
  sparkline,
  image,
  current_price,
  price_change_percentage_7d_in_currency,
}) => {
  return (
    <div className="rounded-2 bg-white shadow-sm p-2 token-card">
      <div className="">
        <div className="d-flex align-items-center">
          <div
            className=""
            style={{
              width: 25,
              height: 25,
              background: `url(${image})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              borderRadius: "50%",
            }}
          >
            {/* img */}
          </div>
          <div className="mx-2">
            <div
              className="token-short"
              style={{
                fontSize: 14,
              }}
            >
              {symbol.toUpperCase()}
            </div>
            <div
              className=""
              style={{
                fontSize: 13,
                color: color.grey,
              }}
            >
              {name}
            </div>
          </div>
        </div>

        <div
          className="mt-2"
          style={{
            height: 100,
          }}
        >
          <TokenChart sparkline={sparkline} />
        </div>
        <div className="d-flex flex-column align-items-center justify-content-start mt-3">
          <div
            className="token-price"
            style={{
              fontSize: 13,
            }}
          >
            ${current_price}
          </div>
          <div
            className="token-change"
            style={{
              color: "#87deae",
              fontSize: 13,
            }}
          >
            {price_change_percentage_7d_in_currency.toFixed(2)}%
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenCard;
