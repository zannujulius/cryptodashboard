import Layout from "../../components/Layout";
import { color } from "../../constant/color";
import "./style.css";
import { TiMessages } from "react-icons/ti";
import TopCards from "../../components/Dashboard/TopCards";
import { Select } from "antd";
import React, { useState, useEffect } from "react";
import ActivityChart from "../../components/Dashboard/ActivityChart";
import ActivityCard from "../../components/Dashboard/ActvityCard";
import { sampleData } from "./data";
import { MdAdd, MdNotificationAdd, MdSearch, MdSettings } from "react-icons/md";
import { DatePicker, Space } from "antd";
import HistoryCard from "../../components/Dashboard/HistoryCard";
import TokenCard from "../../components/Dashboard/TokenCard";
import PriceCard from "../../components/Dashboard/PriceCard";
import axios from "axios";
import Skimmer from "../../components/Skimmer";
import { AiFillNotification, AiOutlineSearch } from "react-icons/ai";

const Dashboard = () => {
  const { Option } = Select;
  const [tab, setTab] = useState(1);
  const { RangePicker } = DatePicker;
  const [tabState, setTabState] = useState(1);
  const [data, setdata] = useState([]);

  const [coindata, setcoindata] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        let res = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2Cethereum&order=market_cap_desc&per_page=10&page=1&sparkline=true&price_change_percentage=7d"
        );
        setdata(res.data);
      } catch (err) {
        console.log(err);
      }
    })();
    return () => {};
  }, []);

  useEffect(() => {
    (async () => {
      try {
        let res = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2Cethereum%2Clitecoin%2Cbinancecoin%2Cluna%2Csolana%2Ctether&order=market_cap_desc&per_page=10&page=1&sparkline=true&price_change_percentage=7d"
        );
        setcoindata(res.data);
      } catch (err) {
        console.log(err);
      }
    })();
    return () => {};
  }, []);

  return (
    <Layout>
      <div className="container-fluid w-100">
        <div className="row">
          <div className="col-sm-12 col-md-9 col-lg-9 col-xl-9 col-xxl-9 bg-white h-100 ">
            <div className="dshb-left__cover bg-white" style={{}}>
              <div className="row mt-4 d-flex align-items-center justify-content-between ">
                <div className="col-4 d-flex align-items-center ">
                  <div className="dshb-img_cover d-flex align-items-center justify-content-center shadow-sm">
                    <img
                      className="image-fluid"
                      src="https://images.unsplash.com/photo-1667788383778-3795ae7fb418?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=900&q=60"
                      alt="dsh image"
                      loading="lazy"
                      width={"100%"}
                      height={"100%"}
                    />
                  </div>
                  <div className="mx-3 fw-bold fs-5">Good morning Wale</div>
                </div>
                <div className="col-3">
                  <div className="d-flex align-items-center justify-content-end">
                    <div class="mx-1">
                      <Select
                        style={{
                          width: 180,
                          borderRadius: 5,
                          background: "#f3f4f8",
                          fontSize: 14,
                        }}
                        allowClear
                        defaultValue={"Choose Account"}
                        size="middle"
                        bordered={false}
                      >
                        <Option>Value</Option>
                        <Option>Value 1</Option>
                      </Select>
                    </div>
                    <div
                      className="top-chat__icon rounded-1 d-flex align-items-center justify-content-center"
                      style={{
                        background: color.primary,
                      }}
                    >
                      <TiMessages color={color.white} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-4 pb-4 d-flex align-items-center justify-content-between">
                <div className="col-3 ">
                  <div
                    className=""
                    style={{
                      paddingLeft: 30,
                    }}
                  >
                    <div className="mb-4">
                      <TopCards
                        value="$12,300.98"
                        title={"Total earnings"}
                        bgColor={color.lightgreen}
                        type="inc"
                      />
                    </div>
                    <div className="">
                      <TopCards
                        value="$16,196.08"
                        title={"Goal for the Month"}
                        bgColor={color.khakigreen}
                        type={"month"}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-4 ">
                  <div className="card-img rounded-2 shadow-sm"></div>
                </div>
                <div className="col-4  ">
                  <div className="">
                    <div className="mb-4">
                      <TopCards
                        value="$2,397.98"
                        title={"Total spendings"}
                        bgColor={color.lightorange}
                        type={"exp"}
                      />
                    </div>
                    <div className="">
                      <TopCards
                        value="$2,084.27"
                        title={"Spending goals"}
                        bgColor={color.lightblue}
                        type={"goal"}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-section mt-3 py-2 d-flex align-items-center w-100">
                <div
                  className={"tab-btn mx-2 px-3 py-2"}
                  onClick={() => setTab(1)}
                  style={{
                    color: tab == 1 ? "black" : color.grey,
                  }}
                >
                  ACTIVITY SUMMARY
                </div>
                <div
                  className="tab-btn mx-2 px-3 py-2"
                  onClick={() => setTab(2)}
                  style={{
                    color: tab == 2 ? "black" : color.grey,
                  }}
                >
                  SPENDING SUMMARY
                </div>
                <div
                  className="tab-btn mx-2 px-3 py-2"
                  onClick={() => setTab(3)}
                  style={{
                    color: tab == 3 ? "black" : color.grey,
                  }}
                >
                  INCOME SUMMARY
                </div>
              </div>
              {tab == 1 && (
                <div className="tab-content d-flex row">
                  <div className="col-4">
                    <div
                      className="px-1"
                      style={{
                        borderRight: `1px solid #eee`,
                      }}
                    >
                      <ActivityChart />
                      <div className="d-none">
                        {sampleData.map((i, index) => (
                          <ActivityCard
                            title={i.title}
                            link={i.link}
                            key={i.id}
                            type={i.type}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="col-8">
                    <div className="row d-flex align-items-center justify-content-between mt-3">
                      <div className="col-7">
                        <div className="d-flex align-items-center tab-right_cover">
                          <div
                            className="tab-right_btn px-2 py-1 mx-2"
                            onClick={() => setTabState(1)}
                            style={{
                              color: tabState == 1 ? color.primary : "",
                              borderBottom:
                                tabState == 1
                                  ? `2px solid ${color.primary}`
                                  : "",
                            }}
                          >
                            History
                          </div>
                          <div
                            className="tab-right_btn px-2 py-1 mx-2"
                            onClick={() => setTabState(2)}
                            style={{
                              color: tabState == 2 ? color.primary : "",
                              borderBottom:
                                tabState == 2
                                  ? `2px solid ${color.primary}`
                                  : "",
                            }}
                          >
                            Upcoming
                          </div>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="d-flex align-items-center justify-content-end  ">
                          <div className="">
                            <RangePicker
                              style={{
                                width: 150,
                                borderRadius: 5,
                                background: "#f3f4f8",
                                fontSize: 14,
                              }}
                              bordered
                              showTime
                              allowClear
                              size={"middle"}
                            />
                          </div>
                          <div
                            className="d-flex align-items-center justify-content-center rounded-2 mx-3 p-2 "
                            style={{
                              background: "#eee",
                            }}
                          >
                            <div className="">
                              <MdSettings size={18} />
                            </div>
                          </div>
                          <div
                            className="d-flex align-items-center justify-content-center rounded-2 mx-1 p-2"
                            style={{
                              background: color.primary,
                            }}
                          >
                            <div className="">
                              <MdAdd color={color.white} size={18} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3">
                      {/* {Array.from(Array(6)).map((i, index) => (
                        <HistoryCard key={index} index={index} />
                      ))} */}
                      {Array.from(Array(6)).map((i, index) => (
                        <div className="my-3" key={index}>
                          <Skimmer width={"100%"} heigth={"40px"} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              {tab == 2 && <div className="tab-content">Content 2</div>}
              {tab == 3 && <div className="tab-content">Content 3</div>}
            </div>
          </div>
          <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
            <div className="row mt-3">
              <div className="col-6">
                <div className="dshb-card__title">Orizon crypto</div>
                <div className="dshb-card__caption">Increase your profit.</div>
              </div>
              <div className="col-6 d-flex align-items-center justify-content-end">
                <div
                  className="bg-white d-flex align-items-center justify-content-center shadow-sm"
                  style={{
                    borderRadius: "50%",
                    width: 35,
                    height: 35,
                  }}
                >
                  <div className="">
                    <AiOutlineSearch size={18} />
                  </div>
                </div>
                <div
                  className="d-flex mx-2 align-items-center justify-content-center bg-white shadow-sm"
                  style={{
                    borderRadius: "50%",
                    width: 35,
                    height: 35,
                  }}
                >
                  <div className="">
                    <AiFillNotification size={18} />
                  </div>
                </div>
              </div>
            </div>

            <div className="row mt-3 my-5 d-flex align-items-center">
              <div className="col-12 ">
                <div
                  className="card-bg rounded-2"
                  style={{
                    background: color.primary,
                  }}
                >
                  <div className="row">
                    <div className="col-6"></div>
                    <div className="col-6"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-2">
              <div className="d-flex align-items-center justify-content-between">
                <div
                  className="title"
                  style={{
                    color: color.primary,
                    fontSize: 14,
                  }}
                >
                  Favorites
                </div>
                <div
                  className="text-decoration-underline"
                  style={{
                    fontSize: 13,
                  }}
                >
                  See all
                </div>
              </div>
              <div
                className="row d-flex align-items-start "
                style={{
                  overflowX: "scroll",
                  overflowY: "hidden",
                }}
              >
                {/* {data.map((item, index) => (
                  <div className="col-6 my-2" key={item.id}>
                    <TokenCard
                      name={item.name}
                      symbol={item.symbol}
                      image={item.image}
                      current_price={item.current_price}
                      price_change_percentage_7d_in_currency={
                        item.price_change_percentage_7d_in_currency
                      }
                      sparkline={item.sparkline_in_7d.price}
                    />
                  </div>
                ))} */}
                {Array.from(Array(2)).map((i, index) => (
                  <div className="col-6 my-2" key={index}>
                    <div
                      className="rounded-2"
                      style={{
                        height: 200,
                      }}
                    >
                      <Skimmer width={"100%"} heigth={"100%"} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-2">
              <div className="d-flex align-items-center justify-content-between">
                <div
                  className="title"
                  style={{
                    color: color.primary,
                    fontSize: 14,
                  }}
                >
                  Live charts
                </div>
                <div
                  className="text-decoration-underline"
                  style={{
                    fontSize: 13,
                  }}
                >
                  See all
                </div>
              </div>
              <div className="row d-flex align-items-start ">
                {coindata.map((item, index) => (
                  <div className="col-12 my-2" key={item.id}>
                    <PriceCard
                      name={item.name}
                      symbol={item.symbol}
                      image={item.image}
                      current_price={item.current_price}
                      price_change_percentage_7d_in_currency={
                        item.price_change_percentage_7d_in_currency
                      }
                      sparkline={item.sparkline_in_7d.price}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
