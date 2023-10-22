import { useNavigate } from "react-router";
const MyCourses = () => {
  const navigate = useNavigate();
  return (
    <div className="relative bg-floralwhite w-full h-[3220px] overflow-hidden text-left text-xl text-slategray-100 font-poppins">
      <div className="absolute top-[142px] left-[0px] w-[1920px] h-[326px] text-center text-31xl text-white">
        <img
          className="absolute top-[0px] left-[0px] w-[1920px] h-[326px] object-cover"
          alt=""
          src="/rectangle-180@2x.png"
        />
        <div className="absolute top-[219px] left-[128px] leading-[180%] font-semibold">
          My Courses
        </div>
      </div>
      <div className="absolute top-[40px] left-[120px] w-[1680px] h-[63px] overflow-hidden text-3xl text-dimgray-200">
        <div className="absolute top-[0px] left-[749px] w-[931px] h-[63px]">
          <div className="absolute top-[15px] left-[0px] tracking-[0.02em]  hover:cursor-pointer" onClick={()=>{navigate('/dashboard')}}>
            Home
          </div>
          <div className="absolute top-[15px] left-[319px] tracking-[0.02em]  hover:cursor-pointer" onClick={()=>{navigate('/explore')}}>
            Explore
          </div>
          <div className="absolute top-[15px] left-[147px] tracking-[0.02em]  hover:cursor-pointer" onClick={()=>{navigate('/mycourse')}}>
            My Courses
          </div>
          <div className="absolute top-[15px] left-[490px] tracking-[0.02em]  hover:cursor-pointer" onClick={()=>{navigate('/blogs')}}>
            Blog
          </div>
          <div className="absolute top-[15px] left-[620px] tracking-[0.02em] hover:cursor-pointer" onClick={()=>{navigate('/redeem')}}>
            Redeem
          </div>
          <div className="absolute top-[18px] left-[869px] text-lg tracking-[0.02em] font-medium text-black2">
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
      <div className="absolute top-[2214px] left-[122px] w-[1682px] h-[539px] overflow-hidden text-lg text-black1 font-sp-paragraph-default">
        <div className="absolute top-[0px] left-[0px] w-[1682px] h-[539px]">
          <div className="absolute top-[0px] left-[0px] rounded-xl bg-darkslateblue-100 w-[1682px] h-[539px] opacity-[0.2]" />
          <div className="absolute w-[calc(100%_-_1398px)] top-[212px] left-[169px] leading-[32px] flex items-center h-10">{`Free E-book, video & consolation`}</div>
          <div className="absolute w-[calc(100%_-_1387px)] top-[262px] left-[169px] leading-[32px] flex items-center h-10">
            Top instructors from around world
          </div>
          <div className="absolute w-[calc(100%_-_1387px)] top-[312px] left-[169px] leading-[32px] flex items-center h-10">
            Top courses from your team
          </div>
          <div className="absolute top-[99px] left-[133px] text-11xl font-semibold font-poppins text-gray-400 inline-block w-[331px] h-[88px]">
            Know about learning learning platform
          </div>
          <div className="absolute top-[377px] left-[133px] w-[309px] h-[63px] text-5xl text-floralwhite font-poppins">
            <div className="absolute top-[0px] left-[0px] rounded-xl bg-mediumseagreen w-[309px] h-[63px]" />
            <b className="absolute top-[16px] left-[39px] inline-block w-[231px] h-[31px]">
              Start learning now
            </b>
          </div>
          <div className="absolute top-[33px] left-[720px] w-[814px] h-[474.23px] text-[11.09px] text-floralwhite font-nunito-sans">
            <img
              className="absolute top-[0px] left-[0px] w-[711.34px] h-[438.8px]"
              alt=""
              src="/group-67.svg"
            />
            <div className="absolute top-[345.83px] left-[40.57px] w-[139.18px] h-[46.39px] text-[22.13px]">
              <div className="absolute top-[0px] left-[0px] rounded-[51.07px] bg-royalblue shadow-[0px_8.511263847351074px_20.43px_rgba(52,_101,_225,_0.3)] w-[139.18px] h-[46.39px]" />
              <b className="absolute top-[9.39px] left-[33.92px] inline-block w-[71.77px] h-[27.25px]">
                Present
              </b>
            </div>
            <div className="absolute top-[339.77px] left-[201.68px] w-[153.53px] h-[59.05px] text-[22.13px]">
              <div className="absolute top-[0px] left-[0px] rounded-[51.07px] bg-pink w-[153.53px] h-[59.05px]" />
              <div className="absolute top-[6.36px] left-[7.27px] rounded-[51.07px] bg-crimson shadow-[0px_8.511263847351074px_20.43px_rgba(202,_47,_93,_0.3)] w-[139.18px] h-[46.39px]" />
              <b className="absolute top-[16.35px] left-[69.9px] inline-block w-[37.89px] h-[27.06px]">
                Call
              </b>
              <img
                className="absolute top-[21.8px] left-[45.93px] w-[15.46px] h-[15.46px] overflow-hidden"
                alt=""
                src="/phone-1.svg"
              />
            </div>
            <div className="absolute top-[84.28px] left-[76.18px] w-[231.97px] h-[230.27px]">
              <img
                className="absolute top-[-27.1px] left-[-41.79px] w-[315.55px] h-[308.43px] object-cover"
                alt=""
                src="/mask-group@2x.png"
              />
              <img
                className="absolute top-[0px] left-[0px] w-[231.97px] h-[224.24px] object-cover"
                alt=""
                src="/mask-group1@2x.png"
              />
              <div className="absolute top-[196.44px] left-[7.39px] w-[154.44px] h-[19.99px]">
                <div className="absolute top-[0px] left-[0px] rounded-[5.55px] bg-lightsteelblue-200 [backdrop-filter:blur(11.09px)] w-[154.44px] h-[19.99px]" />
                <div className="absolute top-[2.73px] left-[17.26px] rounded-[5.55px] bg-dodgerblue w-[52.69px] h-[14.54px]" />
                <div className="absolute top-[3.02px] left-[78.13px] font-semibold inline-block w-[67.23px] h-[13.63px]">
                  Eveny Howard
                </div>
                <div className="absolute top-[3.63px] left-[23.62px] text-3xs font-semibold inline-block w-[39.97px] h-[12.72px]">
                  Instructor
                </div>
                <div className="absolute top-[6.55px] left-[5.04px] w-[6.55px] h-[7.05px]">
                  <div className="absolute top-[3.53px] left-[0px] rounded-[0.55px] bg-floralwhite w-[1.51px] h-[3.53px]" />
                  <div className="absolute top-[1.76px] left-[2.52px] rounded-[0.55px] bg-floralwhite w-[1.51px] h-[5.29px]" />
                  <div className="absolute top-[0px] left-[5.04px] rounded-[0.55px] bg-floralwhite w-[1.51px] h-[7.05px]" />
                </div>
              </div>
            </div>
            <div className="absolute top-[48.16px] left-[615.04px] shadow-[16.997844696044922px_16.997844696044922px_40px_rgba(13,_15,_28,_0.1)] w-[183.51px] h-[177.4px] text-[13.47px]">
              <img
                className="absolute top-[0px] left-[0px] w-[183.51px] h-[177.4px] object-cover"
                alt=""
                src="/mask-group2@2x.png"
              />
              <div className="absolute top-[143.75px] left-[9.79px] w-[92.98px] h-[23.86px]">
                <div className="absolute top-[0px] left-[0px] rounded-[6.73px] bg-lightsteelblue-200 [backdrop-filter:blur(13.47px)] w-[92.98px] h-[23.86px]" />
                <div className="absolute top-[3.67px] left-[20.18px] font-semibold inline-block w-[66.68px] h-[16.52px]">
                  Adam Levin
                </div>
                <div className="absolute top-[7.95px] left-[6.12px] w-[7.95px] h-[8.56px]">
                  <div className="absolute top-[4.28px] left-[0px] rounded-[0.67px] bg-floralwhite w-[1.84px] h-[4.28px]" />
                  <div className="absolute top-[2.14px] left-[3.06px] rounded-[0.67px] bg-floralwhite w-[1.84px] h-[6.42px]" />
                  <div className="absolute top-[0px] left-[6.12px] rounded-[0.67px] bg-floralwhite w-[1.84px] h-[8.56px]" />
                </div>
              </div>
            </div>
            <div className="absolute top-[84.28px] left-[414.05px] w-[151.15px] h-[146.11px]">
              <img
                className="absolute top-[0px] left-[0px] w-[151.15px] h-[146.11px] object-cover"
                alt=""
                src="/mask-group3@2x.png"
              />
              <div className="absolute top-[118.4px] left-[8.06px] w-[88.17px] h-[19.65px]">
                <div className="absolute top-[0px] left-[0px] rounded-[5.55px] bg-lightsteelblue-200 [backdrop-filter:blur(11.09px)] w-[88.17px] h-[19.65px]" />
                <div className="absolute top-[3.02px] left-[16.63px] font-semibold inline-block w-[66.51px] h-[13.6px]">
                  Tamara Clarke
                </div>
                <div className="absolute top-[6.55px] left-[5.04px] w-[6.55px] h-[7.05px]">
                  <div className="absolute top-[3.53px] left-[0px] rounded-[0.55px] bg-floralwhite w-[1.51px] h-[3.53px]" />
                  <div className="absolute top-[1.76px] left-[2.52px] rounded-[0.55px] bg-floralwhite w-[1.51px] h-[5.29px]" />
                  <div className="absolute top-[0px] left-[5.04px] rounded-[0.55px] bg-floralwhite w-[1.51px] h-[7.05px]" />
                </div>
              </div>
            </div>
            <div className="absolute top-[253.06px] left-[414.05px] w-[151.15px] h-[146.11px]">
              <img
                className="absolute top-[0px] left-[0px] w-[151.15px] h-[146.11px] object-cover"
                alt=""
                src="/mask-group4@2x.png"
              />
              <div className="absolute top-[118.4px] left-[8.06px] w-[102.78px] h-[19.65px]">
                <div className="absolute top-[0px] left-[0px] rounded-[5.55px] bg-lightsteelblue-200 [backdrop-filter:blur(11.09px)] w-[102.78px] h-[19.65px]" />
                <div className="absolute top-[3.02px] left-[16.63px] font-semibold inline-block w-[81.12px] h-[13.6px]">
                  Humbert Holland
                </div>
                <div className="absolute top-[6.55px] left-[5.04px] w-[6.55px] h-[7.05px]">
                  <div className="absolute top-[3.53px] left-[0px] rounded-[0.55px] bg-floralwhite w-[1.51px] h-[3.53px]" />
                  <div className="absolute top-[1.76px] left-[2.52px] rounded-[0.55px] bg-floralwhite w-[1.51px] h-[5.29px]" />
                  <div className="absolute top-[0px] left-[5.04px] rounded-[0.55px] bg-floralwhite w-[1.51px] h-[7.05px]" />
                </div>
              </div>
            </div>
            <div className="absolute top-[263.46px] left-[595.96px] shadow-[20px_20px_40px_rgba(13,_15,_28,_0.15)] w-[218.04px] h-[210.77px] text-base">
              <img
                className="absolute top-[0px] left-[0px] w-[218.04px] h-[210.77px] object-cover"
                alt=""
                src="/mask-group5@2x.png"
              />
              <div className="absolute top-[170.79px] left-[11.63px] w-[144.63px] h-[28.34px]">
                <div className="absolute top-[0px] left-[0px] rounded-lg bg-lightsteelblue-200 [backdrop-filter:blur(16px)] w-[144.63px] h-[28.34px]" />
                <div className="absolute top-[4.36px] left-[23.98px] font-semibold inline-block w-[113.38px] h-[19.62px]">
                  Patricia Mendoza
                </div>
                <div className="absolute top-[9.45px] left-[7.27px] w-[9.45px] h-[10.18px]">
                  <div className="absolute top-[5.09px] left-[0px] rounded-12xs-8 bg-floralwhite w-[2.18px] h-[5.09px]" />
                  <div className="absolute top-[2.54px] left-[3.63px] rounded-12xs-8 bg-floralwhite w-[2.18px] h-[7.63px]" />
                  <div className="absolute top-[0px] left-[7.27px] rounded-12xs-8 bg-floralwhite w-[2.18px] h-[10.18px]" />
                </div>
              </div>
            </div>
            <img
              className="absolute top-[205.85px] left-[331.39px] w-[152.49px] h-[152.49px]"
              alt=""
              src="/group-70.svg"
            />
          </div>
        </div>
        <img
          className="absolute top-[24px] left-[467px] w-[141.64px] h-[135.1px] object-cover"
          alt=""
          src="/casuallife3didealamp-1@2x.png"
        />
      </div>
      <div className="absolute top-[2817px] left-[-5px] w-[1930px] h-[411px] overflow-hidden text-lgi text-dimgray-100 font-caption">
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
              <div className="absolute top-[58px] left-[0px]">Redeem</div>
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
          <div className="absolute top-[394.69px] left-[0px] text-7xl leading-[180%] font-medium text-gray-400 inline-block w-[647.33px] h-[105.7px]">{`Python for Data Science, AI and Development `}</div>
          <div className="absolute top-[457.46px] left-[0px] tracking-[0.02em] leading-[180%] inline-block w-[647.33px] h-[80.96px]">
            <p className="m-0">
              <span className="font-medium font-poppins">{`Skills you'll gain: `}</span>
              <span>Computer Programming,</span>
            </p>
            <p className="m-0">Computer Programming Tools, Data Analysis,</p>
            <p className="m-0">Programming Principles, python Programming...</p>
          </div>
          <div className="absolute top-[611.4px] left-[518.11px] tracking-[0.02em] leading-[180%] inline-block w-[162px] h-10 opacity-[0.5]">
            50% completed
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
            <p className="m-0">
              <span className="font-medium font-poppins">
                Skills you'll gain:
              </span>
              <span> Computer Security Incident</span>
            </p>
            <p className="m-0">Management, Computer Security Models,</p>
            <p className="m-0">
              Cryptography, Cyberattacks, Network Security,...
            </p>
          </div>
          <div className="absolute top-[611.4px] left-[518.11px] tracking-[0.02em] leading-[180%] inline-block w-[162px] h-10 opacity-[0.5]">
            70% completed
          </div>
          <div className="absolute top-[611.4px] left-[0px] [text-decoration:underline] tracking-[0.02em] leading-[180%] inline-block w-[121.18px] h-[40.48px]">
            Read more
          </div>
        </div>
      </div>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[1218px] left-[385px] w-[207px] h-[55px]">
        <div className="absolute top-[0px] left-[0px] rounded-77xl bg-mediumseagreen w-[207px] h-[55px]" />
        <div onClick={()=>{navigate('/playcourse')}} className="absolute top-[13px] left-[36px] text-6xl font-medium font-caption text-white text-left">{`Continue  ->`} </div>
      </button>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[1226px] left-[1318px] w-[207px] h-[55px]">
        <div className="absolute top-[0px] left-[0px] rounded-77xl bg-mediumseagreen w-[207px] h-[55px]" />
        <div className="absolute top-[13px] left-[36px] text-6xl font-medium font-caption text-white text-left">{`Continue  ->`}</div>
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
            <p className="m-0">
              <span className="font-medium font-poppins">{`Skills you'll gain: `}</span>
              <span>Computer Programming,</span>
            </p>
            <p className="m-0">Python Programming, Computer Programming</p>
            <p className="m-0">Tools, Programming Principles, Software...</p>
          </div>
          <div className="absolute top-[611.4px] left-[518.11px] tracking-[0.02em] leading-[180%] inline-block w-[162px] h-10 opacity-[0.5]">
            10% completed
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
            <p className="m-0">
              <b className="font-poppins">Skills you'll gain:</b>
              <span> User Experience, User</span>
            </p>
            <p className="m-0">
              Experience Design, Human Computer Interaction,
            </p>
            <p className="m-0">Design and Product, Organizational. ..</p>
          </div>
          <div className="absolute top-[611.4px] left-[518.11px] tracking-[0.02em] leading-[180%] inline-block w-[162px] h-10 opacity-[0.5]">
            60% completed
          </div>
          <div className="absolute top-[611.4px] left-[0px] [text-decoration:underline] tracking-[0.02em] leading-[180%] inline-block w-[121.18px] h-[40.48px]">
            Read more
          </div>
        </div>
      </div>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[2059px] left-[390px] w-[207px] h-[55px]">
        <div className="absolute top-[0px] left-[0px] rounded-77xl bg-mediumseagreen w-[207px] h-[55px]" />
        <div className="absolute top-[13px] left-[36px] text-6xl font-medium font-caption text-white text-left">{`Continue  ->`}</div>
      </button>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[2067px] left-[1323px] w-[207px] h-[55px]">
        <div className="absolute top-[0px] left-[0px] rounded-77xl bg-mediumseagreen w-[207px] h-[55px]" />
        <div className="absolute top-[13px] left-[36px] text-6xl font-medium font-caption text-white text-left">{`Continue  ->`}</div>
      </button>
    </div>
  );
};

export default MyCourses;
