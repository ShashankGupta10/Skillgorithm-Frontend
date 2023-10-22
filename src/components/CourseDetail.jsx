import React from "react";
import { useNavigate } from "react-router-dom";
import { useStripe, useElements, Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(
  "pk_test_51NSlpmSAmP8EhiPliGKO2MseZUvIDXD8Nr4eCL7WHbKLMuQRhwvberx5H3Tme554ka585BZMgT7M6iKCD4D4g80e00vxlu6jZW"
);
import axios from "axios";
import dsa from '../assets/dsac.jpg'

const CourseDetail = () => {
  const navigate = useNavigate();
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
  };
  return (
    <div className="relative bg-floralwhite w-full h-[3050px] overflow-hidden text-left text-5xl text-white font-poppins">
      <div className="absolute top-[2233px] left-[139px]"></div>
      <div className="absolute top-[2077px] left-[186px] w-[1547px] h-[512px] text-slategray">
        <div className="absolute top-[51px] left-[0px] rounded-[50%] bg-mediumspringgreen w-[73px] h-[73px]" />
        <div className="absolute top-[210px] left-[25px] tracking-[0.02em] leading-[180%] text-black inline-block w-[730px]">
          TOTC’s school management software helps traditional and online schools
          manage scheduling, attendance, payments and virtual classrooms all in
          one secure cloud-based system.
        </div>
        <div className="absolute top-[412px] left-[25px] text-3xl [text-decoration:underline] leading-[180%]">
          Learn more
        </div>
        <div className="absolute top-[64px] left-[25px] text-17xl leading-[160%] font-medium inline-block w-[730px] text-darkslateblue-500">
          <span>{`Everything you can do in a physical classroom, `}</span>
          <span className="text-turquoise">you can do with Skillgorithm</span>
        </div>
        <div className="absolute top-[281px] left-[1316px] rounded-xl bg-mediumspringgreen w-[231px] h-[231px]" />
        <div className="absolute top-[0px] left-[802px] rounded-xl bg-darkslateblue-100 w-[138px] h-[138px]" />
        <img
          className="absolute top-[20px] left-[822px] w-[705px] h-[471.08px]"
          alt=""
          src="/group-171.svg"
        />
        <img
          className="absolute top-[283px] left-[716px] w-[30px] h-[30px]"
          alt=""
          src="/ellipse-13.svg"
        />
      </div>
      <img
        className="absolute top-[563px] left-[1457px] w-[190px] h-[190px]"
        alt=""
        src="/playbutton.svg"
      />
      <div className="absolute top-[887px] left-[1410px] text-lightseagreen">
        
      </div>
      <div className="absolute top-[40px] left-[-1px] w-[1921px] h-[1735px] text-3xl text-dimgray-200">
        <div className="absolute top-[0px] left-[870px] w-[931px] h-[63px]">
          <div
            className="absolute top-[15px] left-[0px] tracking-[0.02em] hover:cursor-pointer"
            onClick={() => {
              navigate("/dashboard");
            }}
          >
            Home
          </div>
          <div
            className="absolute top-[15px] left-[319px] tracking-[0.02em] hover:cursor-pointer"
            onClick={() => {
              navigate("/explore");
            }}
          >
            Explore
          </div>
          <div
            className="absolute top-[15px] left-[147px] tracking-[0.02em] hover:cursor-pointer"
            onClick={() => {
              navigate("/mycourse");
            }}
          >
            My Courses
          </div>
          <div
            className="absolute top-[15px] left-[490px] tracking-[0.02em] hover:cursor-pointer"
            onClick={() => {
              navigate("/blogs");
            }}
          >
            Blog
          </div>
          <div className="absolute top-[15px] left-[620px] tracking-[0.02em] hover:cursor-pointer" onClick={()=>{navigate('/redeem')}}>
            Redeem
          </div>
          <div className="absolute top-[18px] left-[869px] text-lg tracking-[0.02em] font-medium text-black1">
            Pooja
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
        <div className="absolute top-[105px] left-[0px] w-[1921px] h-[1630px] text-9xl text-black1">
          <div className="absolute top-[0px] left-[0px] w-[1921px] h-[653px]">
            <img
              className="absolute top-[1px] left-[1px] w-[1920px] h-[652px] object-cover"
              alt=""
              src={dsa}
            />
            <div className="absolute top-[0px] left-[1px] bg-gray-1000 w-[1920px] h-[652px]" />
          </div>
          <div className="absolute top-[329px] left-[1300px] w-[501px] h-[1301px]">
            <div className="absolute top-[0px] left-[0px] w-[501px] h-[1301px]">
              <div className="absolute top-[0px] left-[0px] w-[501px] h-[1301px]">
                <div className="absolute top-[0px] left-[0px] rounded-xl bg-whitesmoke-200 box-border w-[501px] h-[1301px] border-[30px] border-solid border-white" />
                <div className="absolute top-[1170.7px] left-[315px] w-8 h-[32.58px]" />
                <div className="absolute top-[30.54px] left-[29px] w-[443px] h-[272.82px]">
                  <img
                    className="absolute top-[0px] left-[0px] w-[443px] h-[272.82px] object-cover"
                    alt=""
                    src="/rectangle-771@2x.png"
                  />
                  <div className="absolute top-[0px] left-[0px] bg-gray-1000 w-[443px] h-[272.82px]" />
                </div>
                <div className="absolute top-[1220.58px] left-[30px] w-8 h-[32.58px]" />
              </div>
              <div className="absolute top-[321.69px] left-[30px] w-[442px] h-[488.13px]">
                <button
                  className="z-50 cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[172.31px] left-[12px] w-[417px] h-[60px] hover:cursor-pointer"
                  onClick={() => handlePayment(1)}
                >
                  <div className="absolute top-[0px] left-[0px] rounded-xl bg-mediumseagreen w-[417px] h-[60px]" />
                  <b className="absolute top-[12.96px] left-[164px] text-xl inline-block font-poppins text-white text-left w-[90px] h-[30.54px]">
                    Buy Now
                  </b>
                </button>
                <div className="absolute top-[0px] left-[8px] text-[45px] tracking-[0.02em] font-semibold inline-block w-[165px] h-[67.19px]">
                  ₹800
                </div>
                <div className="absolute top-[12.22px] left-[318px] tracking-[0.02em] font-semibold text-gray-900 inline-block w-[124px] h-[34.61px]">
                  50% Off
                </div>
                <div className="absolute top-[97.73px] left-[115px] text-xl tracking-[0.02em] font-semibold text-mediumseagreen inline-block w-[245px] h-[34.61px]">
                  11 hour left at this price
                </div>
                <div className="absolute top-[293.18px] left-[20px] text-11xl tracking-[0.02em] font-semibold inline-block w-[349px] h-[34.61px]">
                  This Course included
                </div>
                <div className="absolute top-[13.23px] left-[186px] [text-decoration:line-through] tracking-[0.02em] font-semibold text-gray-900 inline-block w-[109px] h-[41.74px]">
                  {" "}
                  $99.99
                </div>
                <img
                  className="absolute top-[261.63px] left-[0px] w-[442px] h-px"
                  alt=""
                  src="/line-18.svg"
                />
                <img
                  className="absolute top-[487.63px] left-[0px] w-[442px] h-px"
                  alt=""
                  src="/line-18.svg"
                />
              </div>
            </div>
            <div className="absolute top-[672px] left-[52px] w-[379px] h-[125px] text-sm text-gray-900">
              <div className="absolute top-[102px] left-[1px] w-[148px] h-[23px]">
                <div className="absolute top-[0px] left-[30px] tracking-[0.02em] font-semibold inline-block w-[118px] h-5">
                  32 Moduls
                </div>
                <div className="absolute top-[0px] left-[0px] text-xl text-mediumseagreen">
                  
                </div>
              </div>
              <div className="absolute top-[65px] left-[2px] w-[374px] h-[23px]">
                <div className="absolute top-[1px] left-[25px] tracking-[0.02em] font-semibold inline-block w-[349px] h-[21px]">
                  Certification of completion
                </div>
                <div className="absolute top-[0px] left-[0px] text-xl text-mediumseagreen">
                  
                </div>
              </div>
              <div className="absolute top-[32px] left-[0px] w-[379px] h-[23px]">
                <div className="absolute top-[1px] left-[30px] tracking-[0.02em] font-semibold inline-block w-[349px] h-[18px]">
                  Access on all devices
                </div>
                <div className="absolute top-[0px] left-[0px] text-xl text-mediumseagreen">
                  
                </div>
              </div>
              <div className="absolute top-[0px] left-[0px] w-[378px] h-[23px]">
                <div className="absolute top-[0px] left-[29px] tracking-[0.02em] font-semibold inline-block w-[349px] h-[21px]">
                  Money Back Guarantee
                </div>
                <div className="absolute top-[0px] left-[0px] text-xl text-mediumseagreen">
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[1291px] left-[1344px] w-[400px] h-[438px] text-right text-xl text-midnightblue">
        <div className="absolute top-[0px] left-[0px] w-[400px] h-[438px]">
          <div className="absolute top-[0px] left-[0px] rounded-3xs bg-whitesmoke-200 w-[400px] h-[438px]" />
          <div className="absolute top-[299.89px] left-[20px] w-[360px] h-[29.59px]">
            <div className="absolute top-[0px] left-[324px] font-semibold inline-block w-9 h-[29.59px]">
              Yes
            </div>
            <div className="absolute top-[0px] left-[0px] font-semibold text-dimgray-300 text-left inline-block w-[108px] h-[29.59px]">
              Certificate
            </div>
          </div>
          <div className="absolute top-[344.28px] left-[20px] w-[360px] h-[29.59px]">
            <div className="absolute top-[0px] left-[287px] font-semibold inline-block w-[73px] h-[29.59px]">
              English
            </div>
            <div className="absolute top-[0px] left-[0px] font-semibold text-dimgray-300 text-left inline-block w-[103px] h-[29.59px]">
              Language
            </div>
          </div>
          <div className="absolute top-[388.68px] left-[20px] w-[360px] h-[29.59px]">
            <div className="absolute top-[0px] left-[279px] font-semibold inline-block w-[81px] h-[29.59px]">
              Lifetime
            </div>
            <div className="absolute top-[0px] left-[0px] font-semibold text-dimgray-300 text-left inline-block w-[73px] h-[29.59px]">
              Access
            </div>
          </div>
          <div className="absolute top-[255.5px] left-[20px] w-[360px] h-[29.59px]">
            <div className="absolute top-[0px] left-[347px] font-semibold inline-block w-[13px] h-[29.59px]">
              5
            </div>
            <div className="absolute top-[0px] left-[0px] font-semibold text-dimgray-300 text-left inline-block w-[78px] h-[29.59px]">
              Quizzes
            </div>
          </div>
          <div className="absolute top-[211.11px] left-[20px] w-[360px] h-[29.59px]">
            <div className="absolute top-[0px] left-[335px] font-semibold inline-block w-[25px] h-[29.59px]">
              30
            </div>
            <div className="absolute top-[0px] left-[0px] font-semibold text-dimgray-300 text-left inline-block w-[81px] h-[29.59px]">
              Lessons
            </div>
          </div>
          <div className="absolute top-[166.72px] left-[20px] w-[360px] h-[29.59px]">
            <div className="absolute top-[0px] left-[284px] font-semibold inline-block w-[76px] h-[29.59px]">
              10 Days
            </div>
            <div className="absolute top-[0px] left-[0px] font-semibold text-dimgray-300 text-left inline-block w-[100px] h-[29.59px]">
              Durations
            </div>
          </div>
          <div className="absolute top-[122.32px] left-[20px] font-semibold text-dimgray-300 text-left inline-block w-[78px] h-[29.59px]">
            Ratings
          </div>
          <div className="absolute top-[77.93px] left-[20px] w-[360px] h-[29.59px]">
            <b className="absolute top-[0px] left-[217px] [text-decoration:underline] inline-block w-[143px] h-[29.59px]">
              Wade Warren
            </b>
            <div className="absolute top-[0px] left-[0px] font-semibold text-dimgray-300 text-left inline-block w-[100px] h-[29.59px]">
              Instructor
            </div>
          </div>
          <div className="absolute top-[29.59px] left-[20px] w-[360px] h-[35.51px] text-5xl text-mediumseagreen">
            <div className="absolute top-[0px] left-[273px] font-black inline-block w-[87px] h-[35.51px]">
              <p className="m-0">$49.65</p>
            </div>
            <div className="absolute top-[1.97px] left-[0px] text-xl font-semibold text-dimgray-300 text-left inline-block w-[51px] h-[29.59px]">
              Price
            </div>
          </div>
        </div>
        <img
          className="absolute h-[3.6%] w-[23%] top-[29.5%] right-[7%] bottom-[66.89%] left-[70%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/star.svg"
        />
      </div>
      <footer className="absolute top-[4614px] left-[0px] bg-floralwhite w-[1920px] h-[411px]" />
      <footer className="absolute top-[4614px] left-[0px] bg-floralwhite w-[1920px] h-[411px]" />
      <div className="absolute top-[2687px] left-[0px] w-[1920px] h-[335px] text-lgi text-dimgray-100 font-caption">
        <div className="absolute top-[62px] left-[196px] leading-[31px] text-justify inline-block w-[318px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy a type
          specimen book.
        </div>
        <div className="absolute top-[0px] left-[632px] w-[131px] h-[227px]">
          <div className="absolute top-[58px] left-[0px]">Redeem</div>
          <div className="absolute top-[107px] left-[0px]">How to work?</div>
          <div className="absolute top-[156px] left-[1px]">Populer Course</div>
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
          <div className="absolute top-[107px] left-[0px]">Ofline Course</div>
          <div className="absolute top-[155px] left-[1px]">Vidio Course</div>
          <div className="absolute top-[0px] left-[0px] text-6xl font-semibold text-mediumseagreen">
            Courses
          </div>
        </div>
        <div className="absolute top-[0px] left-[1439px] w-[233px] h-[200px]">
          <div className="absolute top-[58px] left-[0px]">+0913-705-3875</div>
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
        <div className="absolute top-[-3px] left-[196px] w-[185px] h-[51.85px] text-5xl text-gray-500 ">
          <div className="absolute top-[10px] left-[66px] leading-[135%] hover:cursor-pointer" onClick={()=>{navigate('/')}}>
            Skillgorithm
          </div>
          <img
            className="absolute h-full w-[31.78%] top-[0%] right-[68.22%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/group3.svg"
          />
        </div>
      </div>
      <div className="absolute top-[847px] left-[162px] w-[1116px] h-[1143px] text-9xl text-dimgray-300">
        <div className="absolute top-[829px] left-[0px] w-[872px] h-[314px] text-5xl text-midnightblue">
          <div className="absolute top-[65px] left-[0px] w-[815px] h-[39px]">
            <div className="absolute top-[0px] left-[27px] leading-[30px] inline-block w-[788px] h-[39px]">
            Introduction to B+ trees
            </div>
            <div className="absolute top-[7.72px] left-[0px] rounded-[50%] bg-tomato w-[13.29px] h-[13.22px]" />
          </div>
          <div className="absolute top-[116px] left-[0px] w-[732px] h-10">
            <div className="absolute top-[0px] left-[27px] leading-[30px] inline-block w-[705px] h-10">
            Insertion in B+ trees
            </div>
            <div className="absolute top-[9.61px] left-[0px] rounded-[50%] bg-tomato w-[13.29px] h-[13.22px]" />
          </div>
          <div className="absolute top-[169px] left-[0px] w-[872px] h-10">
            <div className="absolute top-[0px] left-[28px] leading-[30px] inline-block w-[844px] h-10">
            Deletion in B+ trees
            </div>
            <div className="absolute top-[9.5px] left-[0px] rounded-[50%] bg-tomato w-[14.21px] h-[13.22px]" />
          </div>
          <div className="absolute top-[222px] left-[0px] w-[749px] h-10">
            <div className="absolute top-[0px] left-[27px] leading-[30px] inline-block w-[722px] h-10">
            Searching in B+ Trees
            </div>
            <div className="absolute top-[9.39px] left-[0px] rounded-[50%] bg-tomato w-[13.29px] h-[13.22px]" />
          </div>
          <div className="absolute top-[274px] left-[0px] w-[724px] h-10">
            <div className="absolute top-[0px] left-[27px] leading-[30px] inline-block w-[697px] h-10">
            Algorithm and Analysis
            </div>
            <div className="absolute top-[10.28px] left-[0px] rounded-[50%] bg-tomato w-[13.29px] h-[13.22px]" />
          </div>
          <div className="absolute top-[0px] left-[0px] text-17xl font-semibold inline-block w-[608.49px] h-[39.67px]">
            What you'll learn in this course:
          </div>
        </div>
        <div className="absolute top-[582px] left-[0px] w-[1116px] h-[178.5px]">
          <div className="absolute top-[59.5px] left-[0px] leading-[40px] inline-block w-[1116px] h-[119px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis consectetur adipiscing elit.
          </div>
          <div className="absolute top-[0px] left-[0px] text-17xl font-semibold text-midnightblue inline-block w-[423.81px] h-[39.67px]">
            Who this course is for
          </div>
        </div>
        <div className="absolute top-[337px] left-[0px] w-[1116px] h-[178.67px]">
          <div className="absolute top-[59.67px] left-[0px] leading-[40px] inline-block w-[1116px] h-[119px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis consectetur adipiscing elit.
          </div>
          <div className="absolute top-[0px] left-[0px] text-21xl font-semibold text-midnightblue inline-block w-[348px] h-10">
            Certification
          </div>
        </div>
        <div className="absolute top-[0px] left-[0px] w-[1116px] h-[304.11px]">
          <div className="absolute top-[59.5px] left-[0px] leading-[42.5px] inline-block w-[1116px] h-[244.61px]">
            Master Algorithmic Programming Techniques. Advance your Software
            Engineering or Data Science Career by Learning Algorithms through
            Programming and Puzzle Solving. Ace coding interviews by
            implementing each algorithmic challenge in this Specialization.
            Apply the newly-learned algorithmic techniques to real-life
            problems, such as analyzing a huge social network or sequencing a
            genome of a deadly pathogen.
          </div>
          <div className="absolute top-[0px] left-[0px] text-21xl font-semibold text-midnightblue inline-block w-[335px] h-10">
            Course Details
          </div>
        </div>
      </div>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[36px] left-[162px] w-[185px] h-[51.85px]">
        <b className="absolute top-[10px] left-[66px] text-5xl leading-[135%] font-caption text-gray-500 text-left">
          Skillgorithm
        </b>
        <img
          className="absolute h-full w-[31.78%] top-[0%] right-[68.22%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/group4.svg"
        />
      </button>
      <img
        className=" absolute h-[57.21%] w-[90.71%] top-[26.89%] right-[4.27%] bottom-[15.9%] left-[5.02%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/group-356.svg"
      />
    </div>
  );
};

const StripeWrapper1 = () => {
  return (
    <Elements stripe={stripePromise}>
      <CourseDetail />
    </Elements>
  );
};
export default StripeWrapper1;
