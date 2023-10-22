import React, { useState, useEffect } from "react";
import "./Rewards.css";
import McDonalds from "../assets/mcdonalds.svg";
import KFC from "../assets/kfc.svg";
import StarBucks from "../assets/starbucks.svg";
import Dominos from "../assets/dominos.svg";
import Amazon from "../assets/amazon.svg";
import Flipkart from "../assets/flipkart.svg";
import HandM from "../assets/h&m.svg";
import BurgerKing from "../assets/burgerking.svg";
import barcode from "../assets/barcode.svg";
import infoButton from "../assets/info.svg";
import shareIcon from "../assets/share.svg";
import wrong from "../assets/wrong.svg";
import { Navigate, useNavigate } from "react-router";

const Redeem_Coupon = () => {
  const navigate = useNavigate();
  const handleWrong = () => {
    document.querySelector(".modal").style.visibility = "hidden";
    document.querySelectorAll(".all-cards").forEach((ele) => {
      ele.style.filter = "none";
    });
  };

  const handleOpen = () => {
    document.querySelector(".modal").style.visibility = "visible";
    document.querySelectorAll(".all-cards").forEach((ele) => {
      ele.style.filter = "blur(4px)";
    });
  };

  // if (modal) {
  //   document.querySelectorAll(".all-cards").forEach((ele) => {
  //     ele.style.filter = "blur(4px)";
  //   });
  //   document.querySelector(".modal").style.visibility = "visible";
  //   document.querySelector("html").addEventListener("click", () => {

  //   });
  // }
  return (
    <>
      <div>
        {" "}
        <div className="bg-floralwhite justify-between flex h-24 w-[100vw] items-center">
          <button className="flex items-center gap-6 cursor-pointer bg-[transparent] ml-12">
            <img className=" overflow-hidden" alt="" src="/group1.svg" />
            <b className=" text-5xl leading-[135%] font-caption text-gray-500 text-left">
              Skillgorithm
            </b>
          </button>
          <div className="flex justify-around gap items-center h-6 w-full ml-[500px] mr-16 font-semibold text-lg">
            <div
              className="tracking-[0.02em] hover:cursor-pointer"
              onClick={() => {
                navigate("/dashboard");
              }}
            >
              Home
            </div>
            <div
              className="tracking-[0.02em] hover:cursor-pointer"
              onClick={() => {
                navigate("/explore");
              }}
            >
              Explore
            </div>
            <div
              className="tracking-[0.02em] hover:cursor-pointer"
              onClick={() => {
                navigate("/mycourse");
              }}
            >
              Courses
            </div>
            <div
              className="  tracking-[0.02em] hover:cursor-pointer"
              onClick={() => {
                navigate("/blogs");
              }}
            >
              Blog
            </div>
            <div className="w-32">About Us</div>

            <div className="flex items-center gap-6">
              <img
                className="rounded-41xl object-cover w-6"
                alt=""
                src="/image-12@2x.png"
              />
              <div className="text-lg tracking-[0.02em] font-medium text-black1">
                Pooja
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="all-cards ">
        <div
          className="card"
          onClick={handleOpen}
          style={{ cursor: "pointer" }}
        >
          <img src={McDonalds} alt="" className="company-img" />
          <div className="horizontal-line"></div>
          <div className="content">
            <h2 className="title">McDONALDS</h2>
            <p style={{ display: "inline-block" }}>
              <span
                style={{ fontSize: "30px", color: "grey", marginRight: "5px" }}
              >
                $
              </span>
              <span
                style={{
                  fontWeight: "600",
                  fontSize: "60px",
                  color: "rgba(0, 0, 0, 0.7)",
                }}
              >
                10
              </span>
              <span
                style={{ marginLeft: "10px", fontWeight: "800", color: "grey" }}
              >
                COUPON
              </span>
            </p>
            <p
              style={{
                marginTop: "5px",
                color: "rgba(0, 0, 0, 0.3)",
                fontWeight: "600",
              }}
            >
              Valid until 29 March, 2023
            </p>
          </div>
          <div className="circle-1"></div>
          <div className="circle-2"></div>
        </div>
        <div
          className="card"
          style={{ cursor: "pointer" }}
          onClick={handleOpen}
        >
          <img src={KFC} alt="" className="company-img" />
          <div className="horizontal-line"></div>
          <div className="content">
            <h2 className="title">KFC</h2>
            <p style={{ display: "inline-block" }}>
              <span
                style={{ fontSize: "30px", color: "grey", marginRight: "5px" }}
              >
                $
              </span>
              <span
                style={{
                  fontWeight: "600",
                  fontSize: "60px",
                  color: "rgba(0, 0, 0, 0.7)",
                }}
              >
                20
              </span>
              <span
                style={{ marginLeft: "10px", fontWeight: "800", color: "grey" }}
              >
                COUPON
              </span>
            </p>
            <p
              style={{
                marginTop: "5px",
                color: "rgba(0, 0, 0, 0.3)",
                fontWeight: "600",
              }}
            >
              Valid until 31 February, 2023
            </p>
          </div>
          <div className="circle-1"></div>
          <div className="circle-2"></div>
        </div>
      </div>
      <div className="all-cards">
        <div
          className="card"
          style={{ cursor: "pointer" }}
          onClick={handleOpen}
        >
          <img src={StarBucks} alt="" className="company-img" />
          <div className="horizontal-line"></div>
          <div className="content">
            <h2 className="title">STARBUCKS</h2>
            <p style={{ display: "inline-block" }}>
              <span
                style={{ fontSize: "30px", color: "grey", marginRight: "5px" }}
              >
                $
              </span>
              <span
                style={{
                  fontWeight: "600",
                  fontSize: "60px",
                  color: "rgba(0, 0, 0, 0.7)",
                }}
              >
                5
              </span>
              <span
                style={{ marginLeft: "10px", fontWeight: "800", color: "grey" }}
              >
                COUPON
              </span>
            </p>
            <p
              style={{
                marginTop: "5px",
                color: "rgba(0, 0, 0, 0.3)",
                fontWeight: "600",
              }}
            >
              Valid until 29 April, 2023
            </p>
          </div>
          <div className="circle-3"></div>
          <div className="circle-4"></div>
        </div>
        <div
          className="card"
          style={{ cursor: "pointer" }}
          onClick={handleOpen}
        >
          <img src={Amazon} alt="" className="company-img" />
          <div className="horizontal-line"></div>
          <div className="content">
            <h2 className="title">AMAZON</h2>
            <p style={{ display: "inline-block" }}>
              <span
                style={{ fontSize: "30px", color: "grey", marginRight: "5px" }}
              >
                $
              </span>
              <span
                style={{
                  fontWeight: "600",
                  fontSize: "60px",
                  color: "rgba(0, 0, 0, 0.7)",
                }}
              >
                10
              </span>
              <span
                style={{ marginLeft: "10px", fontWeight: "800", color: "grey" }}
              >
                COUPON
              </span>
            </p>
            <p
              style={{
                marginTop: "5px",
                color: "rgba(0, 0, 0, 0.3)",
                fontWeight: "600",
              }}
            >
              Valid until 29 March, 2023
            </p>
          </div>
          <div className="circle-5"></div>
          <div className="circle-6"></div>
        </div>
      </div>
      <div className="all-cards">
        <div
          className="card"
          style={{ cursor: "pointer" }}
          onClick={handleOpen}
        >
          <img src={Dominos} alt="" className="company-img" />
          <div className="horizontal-line"></div>
          <div className="content">
            <h2 className="title">DOMINO'S</h2>
            <p style={{ display: "inline-block" }}>
              <span
                style={{ fontSize: "30px", color: "grey", marginRight: "5px" }}
              >
                $
              </span>
              <span
                style={{
                  fontWeight: "600",
                  fontSize: "60px",
                  color: "rgba(0, 0, 0, 0.7)",
                }}
              >
                10
              </span>
              <span
                style={{ marginLeft: "10px", fontWeight: "800", color: "grey" }}
              >
                COUPON
              </span>
            </p>
            <p
              style={{
                marginTop: "5px",
                color: "rgba(0, 0, 0, 0.3)",
                fontWeight: "600",
              }}
            >
              Valid until 29 March, 2023
            </p>
          </div>
          <div className="circle-7"></div>
          <div className="circle-8"></div>
        </div>
        <div
          className="card"
          style={{ cursor: "pointer" }}
          onClick={handleOpen}
        >
          <img src={Flipkart} alt="" className="company-img" />
          <div className="horizontal-line"></div>
          <div className="content">
            <h2 className="title">FLIPKART</h2>
            <p style={{ display: "inline-block" }}>
              <span
                style={{ fontSize: "30px", color: "grey", marginRight: "5px" }}
              >
                $
              </span>
              <span
                style={{
                  fontWeight: "600",
                  fontSize: "60px",
                  color: "rgba(0, 0, 0, 0.7)",
                }}
              >
                25
              </span>
              <span
                style={{ marginLeft: "10px", fontWeight: "800", color: "grey" }}
              >
                COUPON
              </span>
            </p>
            <p
              style={{
                marginTop: "5px",
                color: "rgba(0, 0, 0, 0.3)",
                fontWeight: "600",
              }}
            >
              Valid until 29 June, 2023
            </p>
          </div>
          <div className="circle-9"></div>
          <div className="circle-10"></div>
        </div>
      </div>
      <div className="all-cards">
        <div
          className="card"
          style={{ cursor: "pointer" }}
          onClick={handleOpen}
        >
          <img src={HandM} alt="" className="company-img" />
          <div className="horizontal-line"></div>
          <div className="content">
            <h2 className="title">H&M</h2>
            <p style={{ display: "inline-block" }}>
              <span
                style={{ fontSize: "30px", color: "grey", marginRight: "5px" }}
              >
                $
              </span>
              <span
                style={{
                  fontWeight: "600",
                  fontSize: "60px",
                  color: "rgba(0, 0, 0, 0.7)",
                }}
              >
                25
              </span>
              <span
                style={{ marginLeft: "10px", fontWeight: "800", color: "grey" }}
              >
                COUPON
              </span>
            </p>
            <p
              style={{
                marginTop: "5px",
                color: "rgba(0, 0, 0, 0.3)",
                fontWeight: "600",
              }}
            >
              Valid until 29 July, 2023
            </p>
          </div>
          <div className="circle-11"></div>
          <div className="circle-12"></div>
        </div>
        <div
          className="card"
          style={{ cursor: "pointer" }}
          onClick={handleOpen}
        >
          <img src={BurgerKing} alt="" className="company-img" />
          <div className="horizontal-line"></div>
          <div className="content">
            <h2 className="title">BURGER KING</h2>
            <p style={{ display: "inline-block" }}>
              <span
                style={{ fontSize: "30px", color: "grey", marginRight: "5px" }}
              >
                $
              </span>
              <span
                style={{
                  fontWeight: "600",
                  fontSize: "60px",
                  color: "rgba(0, 0, 0, 0.7)",
                }}
              >
                10
              </span>
              <span
                style={{ marginLeft: "10px", fontWeight: "800", color: "grey" }}
              >
                COUPON
              </span>
            </p>
            <p
              style={{
                marginTop: "5px",
                color: "rgba(0, 0, 0, 0.3)",
                fontWeight: "600",
              }}
            >
              Valid until 29 March, 2023
            </p>
          </div>
          <div className="circle-13"></div>
          <div className="circle-14"></div>
        </div>
      </div>
      <div className="modal">
        <img src={wrong} alt="" className="wrong-btn" onClick={handleWrong} />
        <div className="modal-header">
          <img src={McDonalds} alt="" className="company-img-modal" />
          <div className="header-text">
            <p style={{ marginTop: "20px" }}>
              <span
                style={{
                  fontSize: "30px",
                  fontWeight: "800",
                  color: "rgba(0, 0, 0, 0.5",
                }}
              >
                McDONALDS
              </span>
            </p>
            <p style={{ display: "inline-block" }}>
              <span
                style={{ fontSize: "30px", color: "grey", marginRight: "5px" }}
              >
                $
              </span>
              <span
                style={{
                  fontWeight: "600",
                  fontSize: "60px",
                  color: "rgba(0, 0, 0, 0.7)",
                }}
              >
                10
              </span>
              <span
                style={{ marginLeft: "10px", fontWeight: "800", color: "grey" }}
              >
                COUPON
              </span>
            </p>
          </div>
        </div>
        <div className="middle-text">
          <p>Purchase Any McDonalds Meal</p>
          <p>AND Receive A Complimentary</p>
          <p>Second Meal</p>
        </div>
        <div className="middle-text-points">
          <ul>
            <li>
              <p>Redeemable at all facilities</p>
              <p>in India</p>
            </li>
            <li>
              <p>Not valid with any other discounts</p>
              <p>and promotions</p>
            </li>
            <li>
              <p>Valid for limited store items</p>
              <p>only</p>
            </li>

            <li>
              <p>No cash Value</p>
            </li>
          </ul>
        </div>
        <hr
          style={{
            marginTop: "40px",
            height: "3px",
            backgroundColor: "grey",
            width: "300px",
            marginLeft: "40px",
          }}
        />
        <div
          src={barcode}
          alt=""
          style={{
            width: "100%",
            height: "10%",
            marginTop: "30px",
            backgroundImage: `url(${barcode})`,
            backgroundSize: "cover",
          }}
        ></div>
        <p
          style={{
            marginTop: "5px",
            marginLeft: "19px",
            color: "rgba(0, 0, 0, 0.6)",
          }}
        >
          NO. 3366882386325
        </p>
        <div className="modal-bottom">
          <img
            src={shareIcon}
            alt=""
            className="info-button"
            style={{ cursor: "pointer" }}
          />
          <div>Valid until 05 April, 2024</div>
          <img
            src={infoButton}
            alt=""
            className="info-button"
            style={{ cursor: "pointer" }}
          />
        </div>
        <div className="circle-15"></div>
        <div className="circle-16"></div>
      </div>
    </>
  );
};

export default Redeem_Coupon;
