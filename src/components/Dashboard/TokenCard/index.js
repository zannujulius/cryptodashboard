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
    <div className="rounded-2 bg-white shadow-sm p-3 token-card">
      <div className="">
        <div className="d-flex align-items-center ">
          <div
            className=""
            style={{
              width: 35,
              height: 35,
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
            <div className="token-short">{symbol.toUpperCase()}</div>
            <div
              className=""
              style={{
                fontSize: 14,
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
            height: 150,
          }}
        >
          <TokenChart sparkline={sparkline} />
        </div>
        <div className="d-flex align-items-center justify-content-between mt-3">
          <div className="token-price">${current_price}</div>
          <div
            className="token-change"
            style={{
              color: "#87deae",
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
