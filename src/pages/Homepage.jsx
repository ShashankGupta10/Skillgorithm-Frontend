import React from "react";
import {useNavigate} from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();

    return (
      <div className="relative bg-white w-[100vw] h-[5134px] overflow-hidden text-left text-xl text-mediumseagreen font-poppins">
        <section className="absolute top-[0px] left-[0px] bg-floralwhite w-[1920px] h-[1078px]" />
        <div className="absolute top-[2063px] left-[0px] bg-floralwhite w-[1920px] h-[636px]" />
        <footer className="absolute top-[4723px] left-[0px] bg-floralwhite w-[1920px] h-[411px]" />
        <footer className="absolute top-[4723px] left-[0px] bg-floralwhite w-[1920px] h-[411px]" />
        <div className="absolute top-[4768px] left-[0px] w-[1920px] h-[335px] text-lgi text-dimgray-100 font-caption">
          <div className="absolute top-[62px] left-[196px] leading-[31px] text-justify inline-block w-[318px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy a type
            specimen book.
          </div>
          <div className="absolute top-[0px] left-[632px] w-[131px] h-[227px]">
            <div className="absolute top-[58px] left-[0px]">About Us</div>
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
              Contact Info
            </div>
          </div>
          <div className="absolute top-[291.5px] left-[-0.5px] box-border w-[1921px] h-px border-t-[1px] border-solid border-silver" />
        </div>
        <div className="absolute top-[695px] left-[195px] w-[568px] h-[79px]">
          <div className="absolute top-[0px] left-[0px] rounded-77xl bg-white w-[568px] h-[79px]" />
          <img
            className="absolute top-[28px] left-[21px] w-6 h-6 overflow-hidden"
            alt=""
            src="/magnifyingglass-1.svg"
          />
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[5px] left-[399px] w-[158px] h-[69px]">
            <div className="absolute top-[0px] left-[0px] rounded-77xl bg-mediumseagreen w-[158px] h-[69px]" />
            <div className="absolute top-[20px] left-[29px] text-6xl font-medium font-caption text-white text-left">
              Continue
            </div>
          </button>
          <input
            className="[border:none] font-medium font-caption text-xl bg-[transparent] absolute top-[28px] left-[57px] text-darkslateblue-200 text-left"
            placeholder="Search Courses....."
            type="text"
          />
        </div>
        <div className="absolute h-[7.95%] w-[21.25%] top-[4.71%] right-[8.18%] bottom-[87.34%] left-[70.57%] rounded-[50%] box-border border-[50px] border-solid border-goldenrod" />
        <img
          className="absolute h-[10.6%] w-[46.36%] top-[6.15%] right-[10.39%] bottom-[83.25%] left-[43.25%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="objects.svg"
        />
        <nav className="m-0 absolute top-[70px] left-[924px] w-[550px] h-[21px] text-left text-lg text-gray-500 font-caption">
          <div className="absolute top-[0px] left-[0px] font-semibold hover:cursor-pointer" onClick={()=>{navigate('/')}}>Home</div>
          <div className="absolute top-[0px] left-[94px] font-semibold">
            About us
          </div>
          <div className="absolute top-[0px] left-[212px] font-semibold">
            Courses
          </div>
          <div className="absolute top-[0px] left-[324px] font-semibold">
            Our Service
          </div>
          <div className="absolute top-[0px] left-[463px] w-96 font-semibold">
            Contact us
          </div>
        </nav>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[47px] left-[1734px] w-[110px] h-[65px] hover:animate-[1s_ease_0s_1_normal_none_shadow-drop-bottom] hover:opacity-[1]">
          <div className="absolute top-[0px] left-[0px] rounded-[218px] bg-darkslateblue-100 w-[70px] h-[65px]" />
          <div className="absolute top-[18px] left-[27px] text-6xl font-medium font-caption text-white text-left hover:cursor-pointer" onClick={()=>navigate('/admin')} >
          A</div>
        </button>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[47px] left-[1534px] w-[191px] h-[65px] hover:animate-[1s_ease_0s_1_normal_none_shadow-drop-bottom] hover:opacity-[1]">
          <div className="absolute top-[0px] left-[0px] rounded-[218px] bg-mediumseagreen w-[191px] h-[65px]" />
          <div className="absolute top-[18px] left-[57px] text-6xl font-medium font-caption text-white text-left hover:cursor-pointer" onClick={()=>navigate('/auth')} >
            Sign In
          </div>
        </button>
        <div className="absolute top-[348px] left-[194px] w-[586px] h-[297px] flex flex-col items-center justify-start gap-[9px] text-50xl font-caption">
          <h1 className="m-0 relative text-inherit leading-[135%] font-extrabold font-inherit inline-block w-[586px]">
            <p className="m-0">
              <span className="text-gray-600">{`The `}</span>
              <span>Smart</span>
            </p>
            <p className="m-0 text-gray-600">
              <span>Choice For</span>
              <span className="text-mediumseagreen"> Future</span>
            </p>
          </h1>
          <div className="relative text-xl leading-[171%] font-medium text-gray-200 inline-block w-[586px]">
            Skillgorithm is a global training provider based across the globe that
            specialises in accredited and bespoke training courses. We crush the
            general ideology adn bring changes...
          </div>
        </div>
        <img
          className="absolute h-[14.78%] w-[93.14%] top-[3.36%] right-[2.65%] bottom-[81.86%] left-[4.22%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/group-327.svg"
        />
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[54px] left-[196px] w-[185px] h-[51.85px]">
          <b className="absolute top-[10px] left-[66px] text-5xl leading-[135%] font-caption text-gray-500 text-left">
            Skillgorithm
          </b>
          <img
            className="absolute h-full w-[31.78%] top-[0%] right-[68.22%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/group3.svg"
          />
        </button>
        <div className="absolute top-[948px] left-[244px] w-[1432px] h-[277px] text-9xl text-white font-caption">
          <div className="absolute top-[0px] left-[0px] rounded-sm bg-darkslateblue-100 w-[1432px] h-[277px]" />
          <div className="absolute top-[70px] left-[35px] w-[419px] h-[137px]">
            <div className="absolute top-[0px] left-[127px] w-[292px] h-[137px]">
              <b className="absolute top-[0px] left-[0px]">
                Learn The Latest Skills
              </b>
              <div className="absolute top-[49px] left-[0px] text-mini leading-[28px] font-medium text-gray-700 inline-block w-[292px] h-[88px]">
                Contrary to popular belief, Lorem Ipsum is not simply random text.
                It has roots in a BC, making it over 2000 years old.
              </div>
            </div>
            <div className="absolute top-[0px] left-[0px] rounded-4xl bg-gray-800 w-[102px] h-[101px]" />
          </div>
          <div className="absolute top-[70px] left-[504px] w-[419px] h-[137px]">
            <div className="absolute top-[0px] left-[127px] w-[292px] h-[137px]">
              <b className="absolute top-[0px] left-[0px]">
                Get Ready For a Career
              </b>
              <div className="absolute top-[49px] left-[0px] text-mini leading-[28px] font-medium text-gray-700 inline-block w-[292px] h-[88px]">
                Contrary to popular belief, Lorem Ipsum is not simply random text.
                It has roots in a BC, making it over 2000 years old.
              </div>
            </div>
            <div className="absolute top-[0px] left-[0px] rounded-4xl bg-gray-800 w-[102px] h-[101px]" />
          </div>
          <div className="absolute top-[70px] left-[973px] w-[419px] h-[137px]">
            <div className="absolute top-[0px] left-[127px] w-[292px] h-[137px]">
              <b className="absolute top-[0px] left-[0px]">Earn a Certificate</b>
              <div className="absolute top-[49px] left-[0px] text-mini leading-[28px] font-medium text-gray-700 inline-block w-[292px] h-[88px]">
                Contrary to popular belief, Lorem Ipsum is not simply random text.
                It has roots in a BC, making it over 2000 years old.
              </div>
            </div>
            <div className="absolute top-[0px] left-[0px] rounded-4xl bg-gray-800 w-[102px] h-[101px]" />
          </div>
        </div>
        <div className="absolute top-[4168px] left-[244px] w-[1432px] h-[429px] text-white">
          <div className="absolute top-[0px] left-[0px] rounded-sm bg-darkslateblue-100 w-[1432px] h-[429px]" />
          <div className="absolute top-[165px] left-[463px] font-medium inline-block w-[507px]">
            Lorem Ipsum is simply dummy text of the printing.
          </div>
          <div className="absolute top-[-65px] left-[-35px] rounded-[50%] box-border w-[233px] h-[233px] border-[3px] border-solid border-white" />
          <div className="absolute top-[-71.04px] left-[1463.96px] rounded-[50%] box-border w-[233px] h-[233px] [transform:_rotate(90.24deg)] [transform-origin:0_0] border-[3px] border-solid border-white" />
          <div className="absolute top-[-104px] left-[18px] rounded-[50%] box-border w-[233px] h-[233px] border-[3px] border-solid border-white" />
          <div className="absolute top-[-17.88px] left-[1502.74px] rounded-[50%] box-border w-[233px] h-[233px] [transform:_rotate(90.24deg)] [transform-origin:0_0] border-[3px] border-solid border-white" />
          <div className="absolute top-[94px] left-[411px] w-[610px] h-[222px] text-21xl">
            <div className="absolute top-[0px] left-[17px] tracking-[0.02em] leading-[144.5%] font-semibold">
              Subscribe to our newsletter
            </div>
            <div className="absolute top-[142px] left-[0px] w-[610px] h-20">
              <input
                className="[border:none] bg-white absolute top-[0px] left-[0px] rounded-43xl w-[610px] h-20"
                type="text"
              />
              <input
                className="[border:none] font-medium font-poppins text-xl bg-[transparent] absolute top-[26px] left-[40px] tracking-[0.02em] leading-[144.5%] text-darkgray text-left inline-block w-[153px] h-[26px]"
                placeholder="Email Address"
                type="text"
              />
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[7px] left-[406px] w-[197px] h-[66px]">
                <div className="absolute top-[0px] left-[0px] rounded-43xl bg-mediumseagreen w-[197px] h-[66px]" />
                <div className="absolute top-[19px] left-[71px] text-xl tracking-[0.02em] leading-[144.5%] font-medium font-poppins text-white text-left inline-block w-[55px] h-[23px]">
                  Send
                </div>
              </button>
            </div>
          </div>
        </div>
        <img
          className="absolute top-[1042px] left-[303px] w-[54px] h-[54px] object-cover"
          alt=""
          src="/onlinetest-1@2x.png"
        />
        <img
          className="absolute top-[1038px] left-[768px] w-[62px] h-[62px] object-cover"
          alt=""
          src="/exam-1@2x.png"
        />
        <img
          className="absolute top-[1039px] left-[1238px] w-[60px] h-[60px] object-cover"
          alt=""
          src="/certification-1@2x.png"
        />

         <div className="absolute top-[1452px] left-[180px] w-[490px] h-[489px] text-darkgray">
          <div className="absolute top-[0px] left-[0px] rounded-sm bg-white shadow-[0px_4px_25px_rgba(0,_0,_0,_0.1)] w-[490px] h-[500px]" />
          <img
            className="absolute top-[14px] left-[13px] w-[464px] h-[238px] object-cover"
            alt=""
            src="/group-339@2x.png"
          />
          <div className="absolute top-[297px] left-[13px] font-medium text-black1">
            UI/UX Design for Beginners
          </div>
          <div className="absolute top-[327px] left-[13px] font-semibold text-mediumseagreen">
            $98
          </div>
          <div className="absolute top-[270px] left-[13px] text-base font-medium">
            UI/UX Design
          </div>
          <div className="absolute top-[382px] left-[13px] w-[374px] h-7 text-base">
            <div className="absolute top-[2px] left-[0px] w-[116px] h-6">
              <div className="absolute top-[0px] left-[25px] font-medium">
                22hr 30min
              </div>
              <img
                className="absolute top-[3px] left-[0px] w-[19px] h-[19px] overflow-hidden"
                alt=""
                src="/timesvgrepocom-1.svg"
              />
            </div>
            <div className="absolute top-[0px] left-[130px] w-[126px] h-7">
              <div className="absolute top-[2px] left-[35px] font-medium">
                34 Courses
              </div>
              <img
                className="absolute top-[0px] left-[0px] w-7 h-7 overflow-hidden"
                alt=""
                src="/videosvgrepocom-1.svg"
              />
            </div>
            <div className="absolute top-[2px] left-[270px] w-[104px] h-6">
              <div className="absolute top-[0px] left-[27px] font-medium">
                250 Sales
              </div>
              <img
                className="absolute top-[3px] left-[0px] w-[18px] h-[18px] overflow-hidden"
                alt=""
                src="/downloadsvgrepocom-1.svg"
              />
            </div>
          </div>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[434px] left-[142px] w-[207px] h-[55px]">
            <div className="absolute top-[0px] left-[0px] rounded-77xl bg-mediumseagreen w-[207px] h-[55px]" />
            <div className="absolute top-[13px] left-[36px] text-6xl font-medium font-caption text-white text-left">
              Join Course
            </div>
          </button>
          <div className="absolute top-[365.5px] left-[12.5px] box-border w-[465px] h-px border-t-[1px] border-dashed border-darkgray" />
          <img
            className="absolute top-[274px] left-[389px] w-[88px] h-4"
            alt=""
            src="/group-345.svg"
          />
        </div>
        <div className="absolute top-[1452px] left-[715px] w-[490px] h-[485px] text-darkgray">
          <div className="absolute top-[0px] left-[0px] rounded-sm bg-white shadow-[0px_4px_25px_rgba(0,_0,_0,_0.1)] w-[490px] h-[500px]" />
          <img
            className="absolute top-[14px] left-[13px] w-[464px] h-[238px] object-cover"
            alt=""
            src="/group-338@2x.png"
          />
          <div className="absolute top-[293px] left-[14px] font-medium text-black1">
            UI/UX Design for Beginners
          </div>
          <div className="absolute top-[323px] left-[14px] font-semibold text-mediumseagreen">
            $98
          </div>
          <div className="absolute top-[266px] left-[14px] text-base font-medium">
            UI/UX Design
          </div>
          <div className="absolute top-[378px] left-[14px] w-[374px] h-7 text-base">
            <div className="absolute top-[2px] left-[0px] w-[116px] h-6">
              <div className="absolute top-[0px] left-[25px] font-medium">
                22hr 30min
              </div>
              <img
                className="absolute top-[3px] left-[0px] w-[19px] h-[19px] overflow-hidden"
                alt=""
                src="/timesvgrepocom-1.svg"
              />
            </div>
            <div className="absolute top-[0px] left-[130px] w-[126px] h-7">
              <div className="absolute top-[2px] left-[35px] font-medium">
                34 Courses
              </div>
              <img
                className="absolute top-[0px] left-[0px] w-7 h-7 overflow-hidden"
                alt=""
                src="/videosvgrepocom-1.svg"
              />
            </div>
            <div className="absolute top-[2px] left-[270px] w-[104px] h-6">
              <div className="absolute top-[0px] left-[27px] font-medium">
                250 Sales
              </div>
              <img
                className="absolute top-[3px] left-[0px] w-[18px] h-[18px] overflow-hidden"
                alt=""
                src="/downloadsvgrepocom-1.svg"
              />
            </div>
          </div>
          <div className="absolute top-[430px] left-[143px] w-[207px] h-[55px] text-6xl text-white font-caption">
            <div className="absolute top-[0px] left-[0px] rounded-77xl bg-mediumseagreen w-[207px] h-[55px]" />
            <div className="absolute top-[13px] left-[36px] font-medium">
              Join Course
            </div>
          </div>
          <div className="absolute top-[361.5px] left-[13.5px] box-border w-[465px] h-px border-t-[1px] border-dashed border-darkgray" />
          <img
            className="absolute top-[270px] left-[390px] w-[88px] h-4"
            alt=""
            src="/group-345.svg"
          />
        </div>
        <div className="absolute top-[1452px] left-[1235px] w-[490px] h-[489px] text-darkgray">
          <div className="absolute top-[0px] left-[0px] rounded-sm bg-white shadow-[0px_4px_25px_rgba(0,_0,_0,_0.1)] w-[490px] h-[500px]" />
          <img
            className="absolute top-[14px] left-[13px] w-[464px] h-[238px] object-cover"
            alt=""
            src="/group-339@2x.png"
          />
          <div className="absolute top-[297px] left-[13px] font-medium text-black1">
            UI/UX Design for Beginners
          </div>
          <div className="absolute top-[327px] left-[13px] font-semibold text-mediumseagreen">
            $98
          </div>
          <div className="absolute top-[270px] left-[13px] text-base font-medium">
            UI/UX Design
          </div>
          <div className="absolute top-[382px] left-[13px] w-[374px] h-7 text-base">
            <div className="absolute top-[2px] left-[0px] w-[116px] h-6">
              <div className="absolute top-[0px] left-[25px] font-medium">
                22hr 30min
              </div>
              <img
                className="absolute top-[3px] left-[0px] w-[19px] h-[19px] overflow-hidden"
                alt=""
                src="/timesvgrepocom-1.svg"
              />
            </div>
            <div className="absolute top-[0px] left-[130px] w-[126px] h-7">
              <div className="absolute top-[2px] left-[35px] font-medium">
                34 Courses
              </div>
              <img
                className="absolute top-[0px] left-[0px] w-7 h-7 overflow-hidden"
                alt=""
                src="/videosvgrepocom-1.svg"
              />
            </div>
            <div className="absolute top-[2px] left-[270px] w-[104px] h-6">
              <div className="absolute top-[0px] left-[27px] font-medium">
                250 Sales
              </div>
              <img
                className="absolute top-[3px] left-[0px] w-[18px] h-[18px] overflow-hidden"
                alt=""
                src="/downloadsvgrepocom-1.svg"
              />
            </div>
          </div>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[434px] left-[142px] w-[207px] h-[55px]">
            <div className="absolute top-[0px] left-[0px] rounded-77xl bg-mediumseagreen w-[207px] h-[55px]" />
            <div className="absolute top-[13px] left-[36px] text-6xl font-medium font-caption text-white text-left">
              Join Course
            </div>
          </button>
          <div className="absolute top-[365.5px] left-[12.5px] box-border w-[465px] h-px border-t-[1px] border-dashed border-darkgray" />
          <img
            className="absolute top-[274px] left-[389px] w-[88px] h-4"
            alt=""
            src="/group-345.svg"
          />
        </div>
        <div className="absolute top-[1288px] left-[833px] text-31xl leading-[140%] capitalize font-semibold font-jost inline-block w-[254px] h-[60px]">
          Our Tracks
        </div>
        <div className="absolute top-[1357px] left-[707px] font-medium text-gray-200 inline-block w-[507px]">
          Lorem Ipsum is simply dummy text of the printing.
        </div>
        <img
          className="absolute top-[3531px] left-[170px] w-[540px] h-[507px] object-cover"
          alt=""
          src="/group-349@2x.png"
        />
        <div className="absolute top-[3552px] left-[715px] w-[490px] h-[500px] text-lg text-black1">
          <div className="absolute top-[0px] left-[0px] rounded-sm bg-white shadow-[0px_4px_25px_rgba(0,_0,_0,_0.1)] w-[490px] h-[500px]" />
          <img
            className="absolute top-[14px] left-[13px] w-[464px] h-[238px] object-cover"
            alt=""
            src="/group-3381@2x.png"
          />
          <div className="absolute top-[267px] left-[14px] w-[464px] h-[171px]">
            <div className="absolute top-[0px] left-[0px] text-xl font-medium">
              Tracy D. Wright
            </div>
            <div className="absolute top-[140px] left-[0px] font-medium text-mediumseagreen">
              Engineering physics
            </div>
            <div className="absolute top-[29px] left-[0px] text-base font-medium text-gray-300">
              Professor @George Brown College
            </div>
            <div className="absolute top-[68px] left-[0px] leading-[137.5%] font-caption text-darkgray inline-block w-[451px]">
              <p className="m-0">
                Ut enim ad minim veniam, quis nost exercitation
              </p>
              <p className="m-0">ullamco laboris nisi ut allquip ex commodo.</p>
            </div>
            <div className="absolute top-[133px] left-[376px] w-[88px] h-[38px]">
              <div className="absolute top-[0px] left-[0px] bg-whitesmoke w-[38px] h-[38px]" />
              <div className="absolute top-[0px] left-[50px] bg-whitesmoke w-[38px] h-[38px]" />
              <img
                className="absolute top-[8px] left-[8px] w-[22px] h-[22px] object-cover"
                alt=""
                src="/instagram-logo-2016-1@2x.png"
              />
              <img
                className="absolute top-[8px] left-[58px] w-[22px] h-[22px] object-cover"
                alt=""
                src="/174857-1@2x.png"
              />
            </div>
          </div>
        </div>
        <div className="absolute top-[3552px] left-[1235px] w-[490px] h-[500px] text-lg text-black1">
          <div className="absolute top-[0px] left-[0px] rounded-sm bg-white shadow-[0px_4px_25px_rgba(0,_0,_0,_0.1)] w-[490px] h-[500px]" />
          <div className="absolute top-[267px] left-[13px] w-[464px] h-[171px]">
            <div className="absolute top-[0px] left-[0px] text-xl font-medium">
              Cynthia A. Nelson
            </div>
            <div className="absolute top-[140px] left-[0px] font-medium text-mediumseagreen">
              Engineering physics
            </div>
            <div className="absolute top-[29px] left-[0px] text-base font-medium text-gray-300">
              Professor @George Brown College
            </div>
            <div className="absolute top-[68px] left-[0px] leading-[137.5%] font-caption text-darkgray inline-block w-[451px]">
              <p className="m-0">
                Ut enim ad minim veniam, quis nost exercitation
              </p>
              <p className="m-0">ullamco laboris nisi ut allquip ex commodo.</p>
            </div>
            <div className="absolute top-[133px] left-[376px] w-[88px] h-[38px]">
              <div className="absolute top-[0px] left-[0px] bg-whitesmoke w-[38px] h-[38px]" />
              <div className="absolute top-[0px] left-[50px] bg-whitesmoke w-[38px] h-[38px]" />
              <img
                className="absolute top-[8px] left-[8px] w-[22px] h-[22px] object-cover"
                alt=""
                src="/instagram-logo-2016-1@2x.png"
              />
              <img
                className="absolute top-[8px] left-[58px] w-[22px] h-[22px] object-cover"
                alt=""
                src="/174857-1@2x.png"
              />
            </div>
          </div>
          <img
            className="absolute top-[14px] left-[13px] w-[464px] h-[238px] object-cover"
            alt=""
            src="/group-3391@2x.png"
          />
        </div>
        <div className="absolute top-[3388px] left-[833px] text-31xl leading-[140%] capitalize font-jost inline-block w-[300px] h-[60px]">
          Our Teachers
        </div>
        <div className="absolute top-[3457px] left-[707px] font-medium text-gray-200 inline-block w-[507px]">
          Lorem Ipsum is simply dummy text of the printing.
        </div>
        <div className="absolute top-[2829px] left-[751px] text-21xl tracking-[0.02em] leading-[167.5%] capitalize font-semibold inline-block w-[418px] h-[60px]">
          What student’s say
        </div>
        <div className="absolute top-[2898px] left-[707px] font-medium text-gray-200 inline-block w-[507px]">
          Lorem Ipsum is simply dummy text of the printing.
        </div>
       
        <img
          className="absolute h-[12.55%] w-[26.92%] top-[41.41%] right-[61.41%] bottom-[46.04%] left-[11.67%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/objects1.svg"
        />
        <div className="absolute top-[2142px] left-[887px] text-50xl leading-[135%] font-extrabold font-caption inline-block w-[586px]">
          <p className="m-0">
            <span className="text-gray-600">{`Premium `}</span>
            <span>Learning</span>
          </p>
          <p className="m-0 text-gray-600">Experience</p>
        </div>
        <div className="absolute top-[2374px] left-[887px] w-[711px] h-[101px] text-7xl text-gray-200 font-caption">
          <div className="absolute top-[57px] left-[125px] leading-[171%] font-medium inline-block w-[586px]">
            Learning Will fell Very Comfortable With Courslab.
          </div>
          <div className="absolute top-[3px] left-[125px] text-11xl leading-[171%] font-medium text-gray-600 inline-block w-[239px]">
            Easily Accessible
          </div>
          <div className="absolute top-[0px] left-[0px] rounded-4xl bg-darkslateblue-100 w-[102px] h-[101px]" />
        </div>
        <div className="absolute top-[2509px] left-[887px] w-[711px] h-[101px] text-7xl text-gray-200 font-caption">
          <div className="absolute top-[57px] left-[125px] leading-[171%] font-medium inline-block w-[586px]">
            Learning Will fell Very Comfortable With Courslab.
          </div>
          <div className="absolute top-[3px] left-[125px] text-11xl leading-[171%] font-medium text-gray-600 inline-block w-[239px]">
            Fun learning expe
          </div>
          <div className="absolute top-[0px] left-[0px] rounded-4xl bg-darkslateblue-100 w-[102px] h-[101px]" />
        </div>
        <img
          className="absolute h-[1.5%] w-[4.06%] top-[50.64%] right-[59.84%] bottom-[47.85%] left-[36.09%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/group4.svg"
        />
        <img
          className="absolute h-[1.84%] w-[4.83%] top-[41.42%] right-[81.66%] bottom-[56.74%] left-[13.52%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/group5.svg"
        />
        <img
          className="absolute h-[1.82%] w-[5.52%] top-[44.76%] right-[88.59%] bottom-[53.42%] left-[5.89%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/group6.svg"
        />
        <img
          className="absolute h-[1.68%] w-[4.25%] top-[41.8%] right-[60.05%] bottom-[56.52%] left-[35.7%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/group7.svg"
        />
        <img
          className="absolute h-[2.28%] w-[4.87%] top-[49.34%] right-[88.51%] bottom-[48.38%] left-[6.61%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/group8.svg"
        />
        <img
          className="absolute h-[1.55%] w-[4.15%] top-[47.85%] right-[58.01%] bottom-[50.6%] left-[37.84%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/group9.svg"
        />
        <img
          className="absolute top-[2399px] left-[912px] w-[52px] h-[52px] object-cover"
          alt=""
          src="/hearts-1@2x.png"
        />
        <img
          className="absolute top-[2534px] left-[912px] w-[52px] h-[52px] object-cover"
          alt=""
          src="/jigsaw-1@2x.png"
        />
        <div className="absolute top-[3819px] left-[208px] w-[464px] h-[171px] text-lg text-darkgray">
          <div className="absolute top-[68px] left-[0px] leading-[137.5%] font-caption inline-block w-[451px]">
            <p className="m-0">Ut enim ad minim veniam, quis nost exercitation</p>
            <p className="m-0">ullamco laboris nisi ut allquip ex commodo.</p>
          </div>
          <div className="absolute top-[0px] left-[0px] w-[275px] h-[53px] overflow-hidden text-xl text-black1">
            <div className="absolute top-[0px] left-[0px] font-medium">
              Matthew E. McNatt
            </div>
            <div className="absolute top-[29px] left-[0px] text-base font-medium text-gray-300">
              Professor @George Brown College
            </div>
          </div>
          <div className="absolute top-[133px] left-[0px] w-[464px] h-[38px] overflow-hidden text-mediumseagreen">
            <div className="absolute top-[7px] left-[0px] font-medium">
              Engineering physics
            </div>
            <div className="absolute top-[0px] left-[376px] w-[88px] h-[38px]">
              <div className="absolute top-[0px] left-[0px] bg-whitesmoke w-[38px] h-[38px]" />
              <div className="absolute top-[0px] left-[50px] bg-whitesmoke w-[38px] h-[38px]" />
              <img
                className="absolute top-[8px] left-[8px] w-[22px] h-[22px] object-cover"
                alt=""
                src="/instagram-logo-2016-1@2x.png"
              />
              <img
                className="absolute top-[8px] left-[58px] w-[22px] h-[22px] object-cover"
                alt=""
                src="/174857-1@2x.png"
              />
            </div>
          </div>
        </div>
        <div className="absolute top-[4754px] left-[196px] w-[185px] h-[51.85px] text-5xl text-gray-500 font-caption">
          <b className="absolute top-[10px] left-[66px] leading-[135%]">
            Skillgorithm
          </b>
          <img
            className="absolute h-full w-[31.78%] top-[0%] right-[68.22%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/group10.svg"
          />
        </div>
        <div className="absolute top-[2870px] left-[-628px] rounded-[50%] bg-chocolate [filter:blur(254px)] w-[960px] h-[778px]" />
        <div className="absolute top-[3067px] left-[1693px] rounded-[50%] bg-chocolate [filter:blur(254px)] w-[960px] h-[778px]" />
        <img
          className="absolute h-[3.45%] w-[8.75%] top-[62.87%] right-[85.05%] bottom-[33.68%] left-[6.2%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/group11.svg"
        />
        <img
          className="absolute h-[3.45%] w-[8.75%] top-[86.7%] right-[71.61%] bottom-[9.86%] left-[19.64%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/group12.svg"
        />
        <img
          className="absolute h-[3.45%] w-[8.75%] top-[23.98%] right-[1.2%] bottom-[72.58%] left-[90.05%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/group13.svg"
        />
        <img
          className="absolute top-[3317px] left-[1654px] w-[120px] h-[68px] object-cover"
          alt=""
          src="/casuallife3dorangeplanetwithdisk-1@2x.png"
        />
        <img
          className="absolute top-[1272px] left-[81px] w-[141.64px] h-[135.1px] object-cover"
          alt=""
          src="/casuallife3didealamp-2@2x.png"
        />
        <img
          className="absolute top-[4420px] left-[1378px] w-[141.64px] h-[135.1px] object-cover"
          alt=""
          src="/casuallife3didealamp-2@2x.png"
        />
        <div className="absolute top-[4383px] left-[195px] rounded-[50%] bg-chocolate [filter:blur(254px)] w-[350px] h-[284px]" />
        <div className="absolute top-[4429px] left-[1449px] rounded-[50%] bg-chocolate [filter:blur(254px)] w-[350px] h-[284px]" />
        <div className="absolute top-[2978px] left-[310px] w-[1300px] h-[352px] text-lgi text-darkgray font-caption">
          <img
            className="absolute top-[338px] left-[587px] w-[126px] h-3.5"
            alt=""
            src="/group-76.svg"
          />
          <div className="absolute top-[0px] left-[0px] w-[1300px] h-[258px] overflow-hidden">
            <div className="absolute top-[0px] left-[442px] w-[417px] h-[258px]">
              <div className="absolute top-[0px] left-[0px] bg-white shadow-[0px_4px_88px_rgba(0,_0,_0,_0.05)] w-[417px] h-[258px]" />
              <div className="absolute top-[0px] left-[0px] bg-white shadow-[0px_4px_88px_rgba(0,_0,_0,_0.05)] w-[416px] h-[255px]" />
              <div className="absolute top-[32px] left-[32px] tracking-[0.02em] leading-[156.5%]">
                <p className="m-0">“Complete account of the system and</p>
                <p className="m-0">expound the actual Contrary to popular</p>
                <p className="m-0">{`belief, Lorem Ipsum is not simply `}</p>
                <p className="m-0">random text. It has roots”</p>
              </div>
              <div className="absolute top-[176px] left-[32px] w-[237px] h-[47px] text-mid text-darkslategray">
                <img
                  className="absolute top-[0px] left-[0px] rounded-[50%] w-[47px] h-[47px] object-cover"
                  alt=""
                  src="/ellipse-34@2x.png"
                />
                <div className="absolute top-[0px] left-[63px] w-[174px] h-11">
                  <div className="absolute top-[0px] left-[0px] tracking-[0.02em] leading-[156.5%] font-medium">
                    Dannette P. Cervantes
                  </div>
                  <div className="absolute top-[24px] left-[0px] text-smi tracking-[0.02em] leading-[156.5%] text-gray-100">
                    Web Design
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-[0px] left-[883px] w-[417px] h-[258px]">
              <div className="absolute top-[0px] left-[0px] bg-white shadow-[0px_4px_88px_rgba(0,_0,_0,_0.05)] w-[417px] h-[258px]" />
              <div className="absolute top-[0px] left-[0px] bg-white shadow-[0px_4px_88px_rgba(0,_0,_0,_0.05)] w-[416px] h-[255px]" />
              <div className="absolute top-[32px] left-[27px] tracking-[0.02em] leading-[156.5%]">
                <p className="m-0">“There are many variations of passages</p>
                <p className="m-0"> of Lorem Ipsum available, but the majority</p>
                <p className="m-0"> have suffered alteration in some form,</p>
                <p className="m-0"> by injected humour”</p>
              </div>
              <div className="absolute top-[176px] left-[27px] w-[201px] h-[47px] text-mid text-darkslategray font-poppins">
                <img
                  className="absolute top-[0px] left-[0px] rounded-[50%] w-[47px] h-[47px] object-cover"
                  alt=""
                  src="/ellipse-341@2x.png"
                />
                <div className="absolute top-[1px] left-[62px] w-[139px] h-[45px]">
                  <div className="absolute top-[0px] left-[0px] tracking-[0.02em] leading-[156.5%] font-medium">
                    Clara R. Altman
                  </div>
                  <div className="absolute top-[25px] left-[0px] text-smi tracking-[0.02em] leading-[156.5%] text-gray-100">{`UI&UX Design`}</div>
                </div>
              </div>
            </div>
            <div className="absolute top-[0px] left-[0px] w-[417px] h-[258px]">
              <div className="absolute top-[0px] left-[0px] bg-white shadow-[0px_4px_88px_rgba(0,_0,_0,_0.05)] w-[417px] h-[258px]" />
              <div className="absolute top-[0px] left-[0px] bg-white shadow-[0px_4px_88px_rgba(0,_0,_0,_0.05)] w-[416px] h-[255px]" />
              <div className="absolute top-[32px] left-[32px] tracking-[0.02em] leading-[156.5%]">
                <p className="m-0">{`“Teachings of the great explore of truth, `}</p>
                <p className="m-0">{`the master-builder of human happiness. `}</p>
                <p className="m-0">{`no one rejects,dislikes, or avoids pleasure `}</p>
                <p className="m-0">itself, pleasure itself”</p>
              </div>
              <div className="absolute top-[176px] left-[32px] w-[161px] h-[47px] text-mid text-darkslategray">
                <img
                  className="absolute top-[0px] left-[0px] rounded-[50%] w-[47px] h-[47px] object-cover"
                  alt=""
                  src="/ellipse-342@2x.png"
                />
                <div className="absolute top-[0px] left-[63px] w-[98px] h-[46px]">
                  <div className="absolute top-[0px] left-[0px] tracking-[0.02em] leading-[156.5%] font-medium">
                    Finlay Kirk
                  </div>
                  <div className="absolute top-[26px] left-[0px] text-smi tracking-[0.02em] leading-[156.5%] text-gray-100">
                    Web Developper
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Homepage;
  