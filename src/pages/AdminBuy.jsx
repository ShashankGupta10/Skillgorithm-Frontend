import React from "react";
import { useNavigate } from "react-router-dom";
import { useStripe, useElements, Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(
  "pk_test_51NSlpmSAmP8EhiPliGKO2MseZUvIDXD8Nr4eCL7WHbKLMuQRhwvberx5H3Tme554ka585BZMgT7M6iKCD4D4g80e00vxlu6jZW"
);
import axios from "axios";

const AdminBuy = () => {
  const navigate = useNavigate()
  const handlePayment = (id) => {
    axios
      .post("http://localhost:3001/api/v1/user/payment", {
        items: [{ id: id, quantity: 1 }],
      })
      .then((res) => {
        console.log(res.data.url);
        window.location = res.data.url;
      })
      .catch((err) => {
        console.log(err);
      });
    }
  return (
    <div className="relative bg-floralwhite w-full h-[2590px] overflow-hidden text-left text-xl text-slategray-100 font-poppins">
      <div className="absolute top-[142px] left-[0px] w-[1920px] h-[326px] text-center text-31xl text-color-white-white">
        <img
          className="absolute top-[0px] left-[0px] w-[1920px] h-[326px] object-cover"
          alt=""
          src="/rectangle-180@2x.png"
        />
        <div className="absolute top-[219px] left-[118px] leading-[180%] font-semibold">
          Buy Courses
        </div>
        <div className="absolute top-[53px] left-[298px] w-[1324px] h-[166px] text-left text-5xl text-gray-400">
          <div className="absolute top-[0px] left-[5px] w-[1319px] h-[73px]">
            <div className="absolute top-[0px] left-[0px] rounded-3xs bg-whitesmoke-200 w-[1319px] h-[73px]" />
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[5px] left-[1130.25px] w-[183.16px] h-[63px]">
              <div className="absolute top-[0px] left-[0px] rounded-xl bg-mediumseagreen w-[183.16px] h-[63px]" />
              <b className="absolute top-[14px] left-[52.32px] text-5xl inline-block font-poppins text-whitesmoke-200 text-left w-[99.4px] h-[31px]">
                Search
              </b>
            </button>
            <input
              className="[border:none] font-poppins text-xl bg-[transparent] absolute top-[21px] left-[34.62px] tracking-[0.04em] text-lightslategray-200 text-center inline-block w-[345.11px]"
              placeholder="Search your favourite course"
              type="text"
            />
          </div>
          <div className="absolute top-[93px] left-[0px] w-[170px] h-[73px]">
            <div className="absolute top-[0px] left-[0px] rounded-3xs bg-floralwhite w-[170px] h-[73px]" />
            <div className="absolute top-[22px] left-[137px] leading-[32px] inline-block w-[15px] h-8">
              
            </div>
            <div className="absolute top-[18px] left-[18px] tracking-[0.04em] font-medium text-center inline-block w-[109px]">
              Subject
            </div>
          </div>
          <div className="absolute top-[93px] left-[190px] w-[170px] h-[73px]">
            <div className="absolute top-[0px] left-[0px] rounded-3xs bg-floralwhite w-[170px] h-[73px]" />
            <div className="absolute top-[22px] left-[137px] leading-[32px] inline-block w-[15px] h-8">
              
            </div>
            <div className="absolute top-[18px] left-[18px] tracking-[0.04em] font-medium text-center inline-block w-[109px]">
              Partner
            </div>
          </div>
          <div className="absolute top-[93px] left-[380px] w-48 h-[73px]">
            <div className="absolute top-[0px] left-[0px] rounded-3xs bg-floralwhite w-48 h-[73px]" />
            <div className="absolute top-[16px] left-[18.28px] w-[156.99px] h-9">
              <div className="absolute top-[4px] left-[140.05px] leading-[32px] inline-block w-[16.94px] h-8">
                
              </div>
              <div className="absolute top-[0px] left-[0px] tracking-[0.04em] font-medium text-center inline-block w-[128.75px]">
                Program
              </div>
            </div>
          </div>
          <div className="absolute top-[93px] left-[592px] w-[209px] h-[73px]">
            <div className="absolute top-[0px] left-[0px] rounded-3xs bg-floralwhite w-[209px] h-[73px]" />
            <div className="absolute top-[18px] left-[18.99px] w-[176.76px] h-9">
              <div className="absolute top-[4px] left-[156.75px] leading-[32px] inline-block w-[20.01px] h-8">
                
              </div>
              <div className="absolute top-[0px] left-[0px] tracking-[0.04em] font-medium text-center inline-block w-[143.41px]">
                Language
              </div>
            </div>
          </div>
          <div className="absolute top-[93px] left-[821px] w-[216px] h-[73px]">
            <div className="absolute top-[0px] left-[0px] rounded-3xs bg-floralwhite w-[216px] h-[73px]" />
            <div className="absolute top-[22px] left-[183px] leading-[32px] inline-block w-[18px] h-8">
              
            </div>
            <div className="absolute top-[18px] left-[18px] tracking-[0.04em] font-medium text-center inline-block w-[153px]">
              Abaliability
            </div>
          </div>
          <div className="absolute top-[93px] left-[1057px] w-[267px] h-[73px]">
            <div className="absolute top-[0px] left-[0px] rounded-3xs bg-floralwhite w-[267px] h-[73px]" />
            <div className="absolute top-[18px] left-[18.91px] w-[235.08px] h-9">
              <div className="absolute top-[4px] left-[211.88px] leading-[32px] inline-block w-[23.2px] h-8">
                
              </div>
              <div className="absolute top-[0px] left-[0px] tracking-[0.04em] font-medium text-center inline-block w-[197.16px]">
                Learning Type
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[40px] left-[120px] w-[1680px] h-[63px] overflow-hidden text-3xl text-dimgray-200">
        <div className="absolute top-[0px] left-[749px] w-[931px] h-[63px]">
          <div className="absolute top-[15px] left-[400px] tracking-[0.02em] hover:cursor-pointer" onClick={()=>navigate('/admindash')}>
            Home
          </div>
          <div className="absolute top-[15px] left-[580px] tracking-[0.02em] hover:cursor-pointer">
            Blog
          </div>
          <div className="absolute top-[18px] left-[869px] text-lg tracking-[0.02em] font-medium text-black2">
            Admin
          </div>
          <div className="absolute top-[0px] left-[791px] w-[63px] h-[63px]">
            <div className="absolute top-[0px] left-[0px] rounded-41xl bg-gainsboro-100 w-[63px] h-[63px]" />
            <img
              className="absolute top-[0px] left-[0px] rounded-41xl w-[63px] h-[63px] object-cover"
              alt=""
              src="/image-12@2x.png"
            />
          </div>
        </div>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[5px] left-[0px] w-[185px] h-[51.85px]">
          <b className="absolute top-[10px] left-[66px] text-5xl leading-[135%] font-caption text-gray-500 text-left">
            Skillgorithm
          </b>
          <img
            className="absolute h-full w-[31.78%] top-[0%] right-[68.22%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/group3.svg"
          />
        </button>
      </div>
      <div className="absolute top-[2194px] left-[-5px] w-[1930px] h-[411px] overflow-hidden text-lgi text-dimgray-100 font-caption">
        <div className="absolute top-[0px] left-[0px] w-[1920px] h-[411px] overflow-hidden">
          <footer className="absolute top-[0px] left-[0px] bg-floralwhite w-[1920px] h-[411px]" />
          <footer className="absolute top-[0px] left-[0px] bg-floralwhite w-[1920px] h-[411px]" />
          <div className="absolute top-[45px] left-[0px] w-[1920px] h-[335px]">
            <div className="absolute top-[62px] left-[196px] leading-[31px] text-justify inline-block w-[318px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy a
              type specimen book.
            </div>
            <div className="absolute top-[0px] left-[632px] w-[131px] h-[227px]">
              <div className="absolute top-[58px] left-[0px]">About Us</div>
              <div className="absolute top-[107px] left-[0px]">
                How to work?
              </div>
              <div className="absolute top-[156px] left-[1px]">
                Populer Course
              </div>
              <div className="absolute top-[205px] left-[1px]">Service</div>
              <div className="absolute top-[0px] left-[0px] text-6xl font-semibold text-mediumseagreen">
                Company
              </div>
            </div>
            <div className="absolute top-[0px] left-[1185px] w-[100px] h-[225px]">
              <div className="absolute top-[58px] left-[0px]">FAQ</div>
              <div className="absolute top-[107px] left-[0px]">Help Center</div>
              <div className="absolute top-[155px] left-[1px]">Career</div>
              <div className="absolute top-[203px] left-[1px]">{`Privacy `}</div>
              <div className="absolute top-[0px] left-[0px] text-6xl font-semibold text-mediumseagreen">
                Support
              </div>
            </div>
            <div className="absolute top-[313px] left-[807px]">
              BookStore All Right Reserved, 2022
            </div>
            <div className="absolute top-[0px] left-[917px] w-[114px] h-[177px]">
              <div className="absolute top-[58px] left-[0px]">Categories</div>
              <div className="absolute top-[107px] left-[0px]">
                Ofline Course
              </div>
              <div className="absolute top-[155px] left-[1px]">
                Vidio Course
              </div>
              <div className="absolute top-[0px] left-[0px] text-6xl font-semibold text-mediumseagreen">
                Courses
              </div>
            </div>
            <div className="absolute top-[0px] left-[1439px] w-[233px] h-[200px]">
              <div className="absolute top-[58px] left-[0px]">
                +0913-705-3875
              </div>
              <div className="absolute top-[107px] left-[0px]">
                ElizabethJ@jourrapide.com
              </div>
              <div className="absolute top-[156px] left-[0px]">
                <p className="m-0">4808 Skinner Hollow Road</p>
                <p className="m-0">Days Creek, OR 97429</p>
              </div>
              <div className="absolute top-[0px] left-[0px] text-6xl font-semibold text-mediumseagreen">
                Contac Info
              </div>
            </div>
            <div className="absolute top-[291.5px] left-[-0.5px] box-border w-[1921px] h-px border-t-[1px] border-solid border-silver" />
            <div className="absolute top-[-3px] left-[196px] w-[185px] h-[51.85px] text-5xl text-gray-500">
              <b className="absolute top-[10px] left-[66px] leading-[135%]">
                Skillgorithm
              </b>
              <img
                className="absolute h-full w-[31.78%] top-[0%] right-[68.22%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/group4.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[562px] left-[117px] w-[743px] h-[747px]">
        <div className="absolute top-[0px] left-[0px] rounded-xl bg-whitesmoke-200 shadow-[13px_18.829999923706055px_26px_rgba(47,_50,_125,_0.1)] w-[743px] h-[747px]" />
        <div className="absolute top-[59.6px] left-[31.89px] w-[680.29px] h-[651.88px]">
          <div className="absolute top-[0px] left-[0px] w-[680.29px] h-[382.32px]">
            <img
              className="absolute top-[0px] left-[0px] rounded-xl w-[680.29px] h-[382.32px] object-cover"
              alt=""
              src="/rectangle-325@2x.png"
            />
            <div className="absolute top-[0px] left-[0px] rounded-xl bg-darkslateblue-300 w-[680.29px] h-[382.32px] opacity-[0.1]" />
          </div>
          <div className="absolute top-[394.69px] left-[0px] text-7xl leading-[180%] font-medium text-gray-400 inline-block w-[647.33px] h-[105.7px]">
            Python Introduction
          </div>
          <div className="absolute top-[457.46px] left-[0px] tracking-[0.02em] leading-[180%] inline-block w-[647.33px] h-[80.96px]">
            <p className="m-0">Mr. Micheal Johnson</p>
            <p className="m-0">Works at Google, Python Developer</p>
            <p>Duration: 46 hours</p>
            <p className="font-bold">Price: 15000/-</p>
          </div>
          <div className="absolute top-[611.4px] left-[0px] [text-decoration:underline] tracking-[0.02em] leading-[180%] inline-block w-[121.18px] h-[40.48px]">
            Read more
          </div>
        </div>
      </div>
      <div className="absolute top-[562px] left-[1050px] w-[743px] h-[747px]">
        <div className="absolute top-[0px] left-[0px] rounded-xl bg-whitesmoke-200 shadow-[13px_18.829999923706055px_26px_rgba(47,_50,_125,_0.1)] w-[743px] h-[747px]" />
        <div className="absolute top-[59.6px] left-[31.89px] w-[680.29px] h-[651.88px]">
          <div className="absolute top-[0px] left-[0px] w-[680.29px] h-[382.32px]">
            <img
              className="absolute top-[0px] left-[0px] rounded-xl w-[680.29px] h-[382.32px] object-cover"
              alt=""
              src="/rectangle-326@2x.png"
            />
            <div className="absolute top-[0px] left-[0px] rounded-xl bg-darkslateblue-300 w-[680.29px] h-[382.32px] opacity-[0.1]" />
          </div>
          <div className="absolute top-[394.4px] left-[0.11px] text-7xl leading-[180%] font-medium text-gray-400 inline-block w-[680px] h-[106px]">{`Introduction to Cybersecurity Tools &
Cyber Attacks`}</div>
          <div className="absolute top-[457.46px] left-[0px] tracking-[0.02em] leading-[180%] inline-block w-[647.33px] h-[80.96px]">
            <p className="m-0">Mr. Ram Gadkari</p>
            <p className="m-0">Cyber Expert</p>
            <p>Duration: 37 hours</p>
            <p className="font-bold">Price: 20000/-</p>
          </div>
          <div className="absolute top-[611.4px] left-[0px] [text-decoration:underline] tracking-[0.02em] leading-[180%] inline-block w-[121.18px] h-[40.48px]">
            Read more
          </div>
        </div>
      </div>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[1218px] left-[385px] w-[207px] h-[55px]">
        <div className="absolute top-[0px] left-[0px] rounded-77xl bg-mediumseagreen w-[207px] h-[55px]" />
        <div className="absolute top-[13px] left-[81px] text-6xl font-medium font-caption text-color-white-white text-left hover:" onClick={()=>handlePayment(2)}>
          Buy
        </div>
      </button>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[1226px] left-[1318px] w-[207px] h-[55px]">
        <div className="absolute top-[0px] left-[0px] rounded-77xl bg-mediumseagreen w-[207px] h-[55px]" />
        <div className="absolute top-[13px] left-[83px] text-6xl font-medium font-caption text-color-white-white text-left">
          Buy
        </div>
      </button>
      <div className="absolute top-[1403px] left-[122px] w-[743px] h-[747px]">
        <div className="absolute top-[0px] left-[0px] rounded-xl bg-whitesmoke-200 shadow-[13px_18.829999923706055px_26px_rgba(47,_50,_125,_0.1)] w-[743px] h-[747px]" />
        <div className="absolute top-[59.6px] left-[31.89px] w-[680.29px] h-[651.88px]">
          <div className="absolute top-[0px] left-[0px] w-[680.29px] h-[382.32px]">
            <img
              className="absolute top-[0px] left-[0px] rounded-xl w-[680.29px] h-[382.32px] object-cover"
              alt=""
              src="/rectangle-327@2x.png"
            />
            <div className="absolute top-[0px] left-[0px] rounded-xl bg-darkslateblue-300 w-[680.29px] h-[382.32px] opacity-[0.1]" />
          </div>
          <div className="absolute top-[394.69px] left-[0px] text-7xl leading-[180%] font-medium text-gray-400 inline-block w-[647.33px] h-[105.7px]">
            Meta Back-End Developer
          </div>
          <div className="absolute top-[457.46px] left-[0px] tracking-[0.02em] leading-[180%] inline-block w-[647.33px] h-[80.96px]">
            <p className="m-0">Mr. Micheal Johnson</p>
            <p className="m-0">Works at Google, Python Developer</p>
            <p>Duration: 20 hours</p>
            <p className="font-bold">Price: 30000/-</p>
          </div>
          <div className="absolute top-[611.4px] left-[0px] [text-decoration:underline] tracking-[0.02em] leading-[180%] inline-block w-[121.18px] h-[40.48px]">
            Read more
          </div>
        </div>
      </div>
      <div className="absolute top-[1403px] left-[1055px] w-[743px] h-[747px]">
        <div className="absolute top-[0px] left-[0px] rounded-xl bg-whitesmoke-200 shadow-[13px_18.829999923706055px_26px_rgba(47,_50,_125,_0.1)] w-[743px] h-[747px]" />
        <div className="absolute top-[59.6px] left-[31.89px] w-[680.29px] h-[651.88px]">
          <div className="absolute top-[0px] left-[0px] w-[680.29px] h-[382.32px]">
            <img
              className="absolute top-[0px] left-[0px] rounded-xl w-[680.29px] h-[382.32px] object-cover"
              alt=""
              src="/rectangle-328@2x.png"
            />
            <div className="absolute top-[0px] left-[0px] rounded-xl bg-darkslateblue-300 w-[680.29px] h-[382.32px] opacity-[0.1]" />
          </div>
          <div className="absolute top-[394.69px] left-[0px] text-7xl leading-[180%] font-medium text-gray-400 inline-block w-[647.33px] h-[105.7px]">
            Google UX Design
          </div>
          <div className="absolute top-[457.46px] left-[0px] tracking-[0.02em] leading-[180%] inline-block w-[647.33px] h-[80.96px]">
            <p className="m-0">Mr. Micheal Johnson</p>
            <p className="m-0">Works at Microsoft, Professional Designer</p>
            <p>Duration: 5 hours</p>
            <p className="font-bold">Price: 15000/-</p>
          </div>
          <div className="absolute top-[611.4px] left-[0px] [text-decoration:underline] tracking-[0.02em] leading-[180%] inline-block w-[121.18px] h-[40.48px]">
            Read more
          </div>
        </div>
      </div>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[2059px] left-[390px] w-[207px] h-[55px]">
        <div className="absolute top-[0px] left-[0px] rounded-77xl bg-mediumseagreen w-[207px] h-[55px]" />
        <div className="absolute top-[13px] left-[80px] text-6xl font-medium font-caption text-color-white-white text-left">
          Buy
        </div>
      </button>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[2067px] left-[1323px] w-[207px] h-[55px]">
        <div className="absolute top-[0px] left-[0px] rounded-77xl bg-mediumseagreen w-[207px] h-[55px]" />
        <div className="absolute top-[13px] left-[80px] text-6xl font-medium font-caption text-color-white-white text-left">
          Buy
        </div>
      </button>
    </div>
  );
};

export default AdminBuy;
