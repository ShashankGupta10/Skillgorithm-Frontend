import React from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();

  return (
    <div className="relative bg-floralwhite w-full h-[4200px] overflow-hidden text-left text-5xl text-gray-400 font-poppins">
      <div className="absolute top-[142px] left-[0px] w-[1920px] h-[326px]">
        <img
          className="absolute top-[0px] left-[0px] w-[1920px] h-[326px] object-cover"
          alt=""
          src="/rectangle-180@2x.png"
        />
        <div className="absolute top-[80px] left-[298px] w-[1324px] h-[166px]">
          <div className="absolute top-[0px] left-[5px] w-[1319px] h-[73px]">
            <div className="absolute top-[0px] left-[0px] rounded-3xs bg-whitesmoke-200 w-[1319px] h-[73px]" />
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[5px] left-[1130.25px] w-[183.16px] h-[63px]">
              <div className="absolute top-[0px] left-[0px] rounded-xl bg-mediumseagreen w-[183.16px] h-[63px]" />
              <b className="absolute top-[14px] left-[52.32px] text-5xl inline-block font-poppins text-white text-center w-[99.4px] h-[31px]">
                Search
              </b>
            </button>
            <input
              className="[border:none] text-left z-50 font-poppins text-xl bg-floralwhite absolute top-[13px] left-[34.62px] tracking-[0.04em] text-lightslategray px-4 py-2 rounded-4xl inline-block w-[1000px]"
              placeholder="Search your favourite course"
              type="text"
            />
          </div>
          <div className="absolute top-[93px] left-[0px] w-[170px] h-[73px]">
            <div className="absolute top-[0px] left-[0px] rounded-3xs bg-floralwhite w-[170px] h-[73px]" />
            <div className="absolute top-[22px] left-[137px] leading-[32px] inline-block w-[15px] h-8">
              -
            </div>
            <div className="absolute top-[18px] left-[18px] tracking-[0.04em] font-medium text-center inline-block w-[109px]">
              Subject
            </div>
          </div>
          <div className="absolute top-[93px] left-[190px] w-[170px] h-[73px]">
            <div className="absolute top-[0px] left-[0px] rounded-3xs bg-floralwhite w-[170px] h-[73px]" />
            <div className="absolute top-[22px] left-[137px] leading-[32px] inline-block w-[15px] h-8">
              -
            </div>
            <div className="absolute top-[18px] left-[18px] tracking-[0.04em] font-medium text-center inline-block w-[109px]">
              Partner
            </div>
          </div>
          <div className="absolute top-[93px] left-[380px] w-48 h-[73px]">
            <div className="absolute top-[0px] left-[0px] rounded-3xs bg-floralwhite w-48 h-[73px]" />
            <div className="absolute top-[16px] left-[18.28px] w-[156.99px] h-9">
              <div className="absolute top-[4px] left-[140.05px] leading-[32px] inline-block w-[16.94px] h-8">
                -
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
                -
              </div>
              <div className="absolute top-[0px] left-[0px] tracking-[0.04em] font-medium text-center inline-block w-[143.41px]">
                Language
              </div>
            </div>
          </div>
          <div className="absolute top-[93px] left-[821px] w-[216px] h-[73px]">
            <div className="absolute top-[0px] left-[0px] rounded-3xs bg-floralwhite w-[216px] h-[73px]" />
            <div className="absolute top-[22px] left-[183px] leading-[32px] inline-block w-[18px] h-8">
              -
            </div>
            <div className="absolute top-[18px] left-[18px] tracking-[0.04em] font-medium text-center inline-block w-[153px]">
              Abaliability
            </div>
          </div>
          <div className="absolute top-[93px] left-[1057px] w-[267px] h-[73px]">
            <div className="absolute top-[0px] left-[0px] rounded-3xs bg-floralwhite w-[267px] h-[73px]" />
            <div className="absolute top-[18px] left-[18.91px] w-[235.08px] h-9">
              <div className="absolute top-[4px] left-[211.88px] leading-[32px] inline-block w-[23.2px] h-8">
                -
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
          <div className="absolute top-[15px] left-[0px] tracking-[0.02em] hover:cursor-pointer" onClick={()=>{navigate('/dashboard')}}>
            Home
          </div>
          <div className="absolute top-[15px] left-[319px] tracking-[0.02em] hover:cursor-pointer" onClick={()=>{navigate('/explore')}}>
            Explore
          </div>
          <div className="absolute top-[15px] left-[147px] tracking-[0.02em] hover:cursor-pointer" onClick={()=>{navigate('/mycourse')}}>
            My Courses
          </div>
          <div className="absolute top-[15px] left-[490px] tracking-[0.02em] hover:cursor-pointer" onClick={()=>{navigate('/blogs')}}>
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
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[5px] left-[0px] w-[185px] h-[51.85px]">
          <b className="absolute top-[10px] left-[66px] text-5xl leading-[135%] font-caption text-gray-500 text-left">
            Skillgorithm
          </b>
          <img
            className="absolute h-full w-[31.78%] top-[0%] right-[68.22%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/group6.svg"
          />
        </button>
      </div>
      <div className="absolute top-[537px] left-[26.96px] w-[1866.07px] h-[1296px] overflow-hidden text-sm text-slategray">
        <div className="absolute top-[0px] left-[4.04px] w-[1862.04px] h-[1296px] overflow-hidden">
          <div className="absolute top-[0px] left-[89px] w-[1682px] h-[1296px]">
            <div className="absolute top-[280px] left-[1335px] w-[328px] h-7">
              <div className="absolute top-[0px] left-[0px] w-[93px] h-[22px]">
                <div className="absolute top-[0px] left-[31px] tracking-[0.02em] leading-[180%] font-medium inline-block w-[62px] h-[22px]">
                  Design
                </div>
                <div className="absolute top-[1px] left-[0px] w-[21px] h-[21px]">
                  <div className="absolute top-[0px] left-[0px] rounded-sm bg-gainsboro-200 box-border w-2.5 h-2.5 border-[1px] border-solid border-gainsboro-100" />
                  <div className="absolute top-[11px] left-[0px] rounded-sm bg-gainsboro-200 box-border w-2.5 h-2.5 border-[1px] border-solid border-gainsboro-100" />
                  <div className="absolute top-[11px] left-[11px] rounded-sm bg-gainsboro-200 box-border w-2.5 h-2.5 border-[1px] border-solid border-gainsboro-100" />
                  <div className="absolute top-[0px] left-[11px] rounded-sm bg-gainsboro-200 box-border w-2.5 h-2.5 border-[1px] border-solid border-gainsboro-100" />
                </div>
              </div>
              <div className="absolute top-[0px] left-[232px] w-24 h-7">
                <div className="absolute top-[2px] left-[34px] tracking-[0.02em] leading-[180%] font-medium inline-block w-[62px] h-[22px]">
                  3 Month
                </div>
                <div className="absolute top-[0px] left-[0px] text-5xl text-gainsboro-100">
                  
                </div>
              </div>
            </div>
            <div className="absolute top-[0px] left-[0px] w-[1682px] h-[1296px]">
              <div className="absolute top-[0px] left-[0px] w-[1682px] h-[617px] overflow-hidden">
                <div className="absolute top-[0px] left-[0px] w-[374px] h-[617px]">
                  <div className="absolute top-[0px] left-[0px] w-[374px] h-[617px] text-5xl text-gray-400">
                    <div className="absolute top-[0px] left-[0px] rounded-xl bg-whitesmoke-200 shadow-[0px_18.829999923706055px_47.08px_rgba(47,_50,_125,_0.1)] w-[374px] h-[617px]" />
                    <div className="absolute top-[20px] left-[20.98px] w-[334.02px] h-[501px]">
                      <div className="absolute top-[0px] left-[0px] w-[334.02px] h-[238.66px]">
                        <img
                          className="absolute top-[0px] left-[0px] rounded-xl w-[334px] h-[238.66px] object-cover"
                          alt=""
                          src="/rectangle-325@2x.png"
                        />
                        <div className="absolute top-[0px] left-[0.02px] rounded-xl bg-darkslateblue-300 w-[334px] h-[238.66px] opacity-[0.1]" />
                      </div>
                      <div className="absolute top-[301px] left-[6.02px] font-medium inline-block w-[324px] h-[77px]">
                        AWS Certified solutions Architect
                      </div>
                      <div className="absolute top-[399px] left-[6.02px] text-lg tracking-[0.02em] leading-[180%] text-slategray inline-block w-[328px] h-[102px]">
                        Lorem ipsum dolor sit amet, consectetur adipising elit,
                        sed do eiusmod tempor
                      </div>
                    </div>
                    <div className="absolute top-[538px] left-[26.63px] w-[328.37px] h-[44.25px] text-lg text-black1">
                      <div className="absolute top-[12.78px] left-[62.15px] tracking-[0.02em] font-medium inline-block w-[51.05px] h-[18.68px]">
                        Lina
                      </div>
                      <i className="absolute top-[22px] left-[221.37px] [text-decoration:line-through] tracking-[0.02em] flex font-light text-gray-900 items-center w-[42px] h-[19px]">
                        $100
                      </i>
                      <b className="absolute top-[22px] left-[277.37px] text-5xl tracking-[0.02em] flex text-mediumseagreen items-center w-[51px] h-[19px]">
                        $80
                      </b>
                      <div className="absolute top-[0px] left-[0px] w-[44.37px] h-[44.25px]">
                        <div className="absolute top-[0px] left-[0px] rounded-[22.12px] bg-gainsboro-100 w-11 h-[44.25px]" />
                        <img
                          className="absolute top-[0px] left-[0.37px] rounded-3xl w-11 h-11 object-cover"
                          alt=""
                          src="/image-122@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[279px] left-[27px] w-[93px] h-[22px]">
                    <div className="absolute top-[0px] left-[31px] tracking-[0.02em] leading-[180%] font-medium inline-block w-[62px] h-[22px]">
                      Design
                    </div>
                    <div className="absolute top-[1px] left-[0px] w-[21px] h-[21px]">
                      <div className="absolute top-[0px] left-[0px] rounded-sm bg-gainsboro-200 box-border w-2.5 h-2.5 border-[1px] border-solid border-gainsboro-100" />
                      <div className="absolute top-[11px] left-[0px] rounded-sm bg-gainsboro-200 box-border w-2.5 h-2.5 border-[1px] border-solid border-gainsboro-100" />
                      <div className="absolute top-[11px] left-[11px] rounded-sm bg-gainsboro-200 box-border w-2.5 h-2.5 border-[1px] border-solid border-gainsboro-100" />
                      <div className="absolute top-[0px] left-[11px] rounded-sm bg-gainsboro-200 box-border w-2.5 h-2.5 border-[1px] border-solid border-gainsboro-100" />
                    </div>
                  </div>
                  <div className="absolute top-[279px] left-[259px] w-24 h-7">
                    <div className="absolute top-[2px] left-[34px] tracking-[0.02em] leading-[180%] font-medium inline-block w-[62px] h-[22px]">
                      3 Month
                    </div>
                    <div className="absolute top-[0px] left-[0px] text-5xl text-gainsboro-100">
                      
                    </div>
                  </div>
                </div>
                <div className="absolute top-[0px] left-[436px] w-[374px] h-[617px]">
                  <div className="absolute top-[0px] left-[0px] w-[374px] h-[617px] text-5xl text-gray-400">
                    <div className="absolute top-[0px] left-[0px] rounded-xl bg-whitesmoke-200 shadow-[0px_18.829999923706055px_47.08px_rgba(47,_50,_125,_0.1)] w-[374px] h-[617px]" />
                    <div className="absolute top-[20px] left-[20.98px] w-[334.02px] h-[501px]">
                      <img
                        className="absolute top-[0px] left-[0px] rounded-xl w-[334px] h-[238.66px] object-cover"
                        alt=""
                        src="/rectangle-326@2x.png"
                      />
                      <div className="absolute top-[301px] left-[6.02px] font-medium inline-block w-[324px] h-[77px]">
                        AWS Certified solutions Architect
                      </div>
                      <div className="absolute top-[399px] left-[6.02px] text-lg tracking-[0.02em] leading-[180%] text-slategray inline-block w-[328px] h-[102px]">
                        Lorem ipsum dolor sit amet, consectetur adipising elit,
                        sed do eiusmod tempor
                      </div>
                    </div>
                    <div className="absolute top-[538px] left-[26.63px] w-[328.37px] h-[44.25px] text-lg text-black1">
                      <div className="absolute top-[12.78px] left-[62.15px] tracking-[0.02em] font-medium inline-block w-[51.05px] h-[18.68px]">
                        Lina
                      </div>
                      <i className="absolute top-[22px] left-[221.37px] [text-decoration:line-through] tracking-[0.02em] flex font-light text-gray-900 items-center w-[42px] h-[19px]">
                        $100
                      </i>
                      <b className="absolute top-[22px] left-[277.37px] text-5xl tracking-[0.02em] flex text-mediumseagreen items-center w-[51px] h-[19px]">
                        $80
                      </b>
                      <div className="absolute top-[0px] left-[0px] w-[44.37px] h-[44.25px]">
                        <div className="absolute top-[0px] left-[0px] rounded-[22.12px] bg-gainsboro-100 w-11 h-[44.25px]" />
                        <img
                          className="absolute top-[0px] left-[0.37px] rounded-3xl w-11 h-11 object-cover"
                          alt=""
                          src="/image-122@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[279px] left-[27px] w-[93px] h-[22px]">
                    <div className="absolute top-[0px] left-[31px] tracking-[0.02em] leading-[180%] font-medium inline-block w-[62px] h-[22px]">
                      Design
                    </div>
                    <div className="absolute top-[1px] left-[0px] w-[21px] h-[21px]">
                      <div className="absolute top-[0px] left-[0px] rounded-sm bg-gainsboro-200 box-border w-2.5 h-2.5 border-[1px] border-solid border-gainsboro-100" />
                      <div className="absolute top-[11px] left-[0px] rounded-sm bg-gainsboro-200 box-border w-2.5 h-2.5 border-[1px] border-solid border-gainsboro-100" />
                      <div className="absolute top-[11px] left-[11px] rounded-sm bg-gainsboro-200 box-border w-2.5 h-2.5 border-[1px] border-solid border-gainsboro-100" />
                      <div className="absolute top-[0px] left-[11px] rounded-sm bg-gainsboro-200 box-border w-2.5 h-2.5 border-[1px] border-solid border-gainsboro-100" />
                    </div>
                  </div>
                  <div className="absolute top-[279px] left-[259px] w-24 h-7">
                    <div className="absolute top-[2px] left-[34px] tracking-[0.02em] leading-[180%] font-medium inline-block w-[62px] h-[22px]">
                      3 Month
                    </div>
                    <div className="absolute top-[0px] left-[0px] text-5xl text-gainsboro-100">
                      
                    </div>
                  </div>
                </div>
                <div className="absolute top-[0px] left-[872px] w-[374px] h-[617px]">
                  <div className="absolute top-[0px] left-[0px] w-[374px] h-[617px] text-5xl text-gray-400">
                    <div className="absolute top-[0px] left-[0px] rounded-xl bg-whitesmoke-200 shadow-[0px_18.829999923706055px_47.08px_rgba(47,_50,_125,_0.1)] w-[374px] h-[617px]" />
                    <div className="absolute top-[20px] left-[20.98px] w-[334.02px] h-[501px]">
                      <img
                        className="absolute top-[0px] left-[0px] rounded-xl w-[334px] h-[238.66px] object-cover"
                        alt=""
                        src="/rectangle-327@2x.png"
                      />
                      <div className="absolute top-[301px] left-[6.02px] font-medium inline-block w-[324px] h-[77px]">
                        AWS Certified solutions Architect
                      </div>
                      <div className="absolute top-[399px] left-[6.02px] text-lg tracking-[0.02em] leading-[180%] text-slategray inline-block w-[328px] h-[102px]">
                        Lorem ipsum dolor sit amet, consectetur adipising elit,
                        sed do eiusmod tempor
                      </div>
                    </div>
                    <div className="absolute top-[538px] left-[26.63px] w-[328.37px] h-[44.25px] text-lg text-black1">
                      <div className="absolute top-[12.78px] left-[62.15px] tracking-[0.02em] font-medium inline-block w-[51.05px] h-[18.68px]">
                        Lina
                      </div>
                      <i className="absolute top-[22px] left-[221.37px] [text-decoration:line-through] tracking-[0.02em] flex font-light text-gray-900 items-center w-[42px] h-[19px]">
                        $100
                      </i>
                      <b className="absolute top-[22px] left-[277.37px] text-5xl tracking-[0.02em] flex text-mediumseagreen items-center w-[51px] h-[19px]">
                        $80
                      </b>
                      <div className="absolute top-[0px] left-[0px] w-[44.37px] h-[44.25px]">
                        <div className="absolute top-[0px] left-[0px] rounded-[22.12px] bg-gainsboro-100 w-11 h-[44.25px]" />
                        <img
                          className="absolute top-[0px] left-[0.37px] rounded-3xl w-11 h-11 object-cover"
                          alt=""
                          src="/image-122@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[279px] left-[27px] w-[93px] h-[22px]">
                    <div className="absolute top-[0px] left-[31px] tracking-[0.02em] leading-[180%] font-medium inline-block w-[62px] h-[22px]">
                      Design
                    </div>
                    <div className="absolute top-[1px] left-[0px] w-[21px] h-[21px]">
                      <div className="absolute top-[0px] left-[0px] rounded-sm bg-gainsboro-200 box-border w-2.5 h-2.5 border-[1px] border-solid border-gainsboro-100" />
                      <div className="absolute top-[11px] left-[0px] rounded-sm bg-gainsboro-200 box-border w-2.5 h-2.5 border-[1px] border-solid border-gainsboro-100" />
                      <div className="absolute top-[11px] left-[11px] rounded-sm bg-gainsboro-200 box-border w-2.5 h-2.5 border-[1px] border-solid border-gainsboro-100" />
                      <div className="absolute top-[0px] left-[11px] rounded-sm bg-gainsboro-200 box-border w-2.5 h-2.5 border-[1px] border-solid border-gainsboro-100" />
                    </div>
                  </div>
                  <div className="absolute top-[279px] left-[259px] w-24 h-7">
                    <div className="absolute top-[2px] left-[34px] tracking-[0.02em] leading-[180%] font-medium inline-block w-[62px] h-[22px]">
                      3 Month
                    </div>
                    <div className="absolute top-[0px] left-[0px] text-5xl text-gainsboro-100">
                      
                    </div>
                  </div>
                </div>
                <div className="absolute top-[0px] left-[1308px] w-[374px] h-[617px] text-5xl text-gray-400">
                  <div className="absolute top-[0px] left-[0px] rounded-xl bg-whitesmoke-200 shadow-[0px_18.829999923706055px_47.08px_rgba(47,_50,_125,_0.1)] w-[374px] h-[617px]" />
                  <div className="absolute top-[20px] left-[20.98px] w-[334.02px] h-[501px]">
                    <img
                      className="absolute top-[0px] left-[0px] rounded-xl w-[334px] h-[238.66px] object-cover"
                      alt=""
                      src="/rectangle-328@2x.png"
                    />
                    <div className="absolute top-[301px] left-[6.02px] font-medium inline-block w-[324px] h-[77px]">
                      AWS Certified solutions Architect
                    </div>
                    <div className="absolute top-[399px] left-[6.02px] text-lg tracking-[0.02em] leading-[180%] text-slategray inline-block w-[328px] h-[102px]">
                      Lorem ipsum dolor sit amet, consectetur adipising elit,
                      sed do eiusmod tempor
                    </div>
                  </div>
                  <div className="absolute top-[538px] left-[26.63px] w-[328.37px] h-[44.25px] text-lg text-black1">
                    <div className="absolute top-[12.78px] left-[62.15px] tracking-[0.02em] font-medium inline-block w-[51.05px] h-[18.68px]">
                      Lina
                    </div>
                    <i className="absolute top-[22px] left-[221.37px] [text-decoration:line-through] tracking-[0.02em] flex font-light text-gray-900 items-center w-[42px] h-[19px]">
                      $100
                    </i>
                    <b className="absolute top-[22px] left-[277.37px] text-5xl tracking-[0.02em] flex text-mediumseagreen items-center w-[51px] h-[19px]">
                      $80
                    </b>
                    <div className="absolute top-[0px] left-[0px] w-[44.37px] h-[44.25px]">
                      <div className="absolute top-[0px] left-[0px] rounded-[22.12px] bg-gainsboro-100 w-11 h-[44.25px]" />
                      <img
                        className="absolute top-[0px] left-[0.37px] rounded-3xl w-11 h-11 object-cover"
                        alt=""
                        src="/image-122@2x.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[590px] left-[1404px] w-[207px] h-[55px]">
                <div className="absolute top-[0px] left-[0px] rounded-77xl bg-mediumseagreen w-[207px] h-[55px]" />
                <div className="absolute top-[13px] left-[36px] text-6xl font-medium font-caption text-white text-left">
                  Join Course
                </div>
              </button>
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[590px] left-[962px] w-[207px] h-[55px]">
                <div className="absolute top-[0px] left-[0px] rounded-77xl bg-mediumseagreen w-[207px] h-[55px]" />
                <div className="absolute top-[13px] left-[36px] text-6xl font-medium font-caption text-white text-left">
                  Join Course
                </div>
              </button>
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[590px] left-[523px] w-[207px] h-[55px]">
                <div className="absolute top-[0px] left-[0px] rounded-77xl bg-mediumseagreen w-[207px] h-[55px]" />
                <div className="absolute top-[13px] left-[36px] text-6xl font-medium font-caption text-white text-left">
                  Join Course
                </div>
              </button>
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[590px] left-[86px] w-[207px] h-[55px]">
                <div className="absolute top-[0px] left-[0px] rounded-77xl bg-mediumseagreen w-[207px] h-[55px]" />
                <div className="absolute top-[13px] left-[36px] text-6xl font-medium font-caption text-white text-left hover:cursor-pointer" onClick={()=>{navigate('/explore/course')}}>
                  Join Course
                </div>
              </button>
              <div className="absolute top-[702px] left-[0px] w-[1682px] h-[617px] overflow-hidden">
                <div className="absolute top-[0px] left-[0px] w-[374px] h-[617px]">
                  <div className="absolute top-[0px] left-[0px] w-[374px] h-[617px] text-5xl text-gray-400">
                    <div className="absolute top-[0px] left-[0px] rounded-xl bg-whitesmoke-200 shadow-[0px_18.829999923706055px_47.08px_rgba(47,_50,_125,_0.1)] w-[374px] h-[617px]" />
                    <div className="absolute top-[20px] left-[20.98px] w-[334.02px] h-[501px]">
                      <img
                        className="absolute top-[0px] left-[0px] rounded-xl w-[334px] h-[238.66px] object-cover"
                        alt=""
                        src="/rectangle-329@2x.png"
                      />
                      <div className="absolute top-[301px] left-[6.02px] font-medium inline-block w-[324px] h-[77px]">
                        AWS Certified solutions Architect
                      </div>
                      <div className="absolute top-[399px] left-[6.02px] text-lg tracking-[0.02em] leading-[180%] text-slategray inline-block w-[328px] h-[102px]">
                        Lorem ipsum dolor sit amet, consectetur adipising elit,
                        sed do eiusmod tempor
                      </div>
                    </div>
                    <div className="absolute top-[538px] left-[26.63px] w-[328.37px] h-[44.25px] text-lg text-black1">
                      <div className="absolute top-[12.78px] left-[62.15px] tracking-[0.02em] font-medium inline-block w-[51.05px] h-[18.68px]">
                        Lina
                      </div>
                      <i className="absolute top-[22px] left-[221.37px] [text-decoration:line-through] tracking-[0.02em] flex font-light text-gray-900 items-center w-[42px] h-[19px]">
                        $100
                      </i>
                      <b className="absolute top-[22px] left-[277.37px] text-5xl tracking-[0.02em] flex text-mediumseagreen items-center w-[51px] h-[19px]">
                        $80
                      </b>
                      <div className="absolute top-[0px] left-[0px] w-[44.37px] h-[44.25px]">
                        <div className="absolute top-[0px] left-[0px] rounded-[22.12px] bg-gainsboro-100 w-11 h-[44.25px]" />
                        <img
                          className="absolute top-[0px] left-[0.37px] rounded-3xl w-11 h-11 object-cover"
                          alt=""
                          src="/image-122@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[279px] left-[27px] w-[93px] h-[22px]">
                    <div className="absolute top-[0px] left-[31px] tracking-[0.02em] leading-[180%] font-medium inline-block w-[62px] h-[22px]">
                      Design
                    </div>
                    <div className="absolute top-[1px] left-[0px] w-[21px] h-[21px]">
                      <div className="absolute top-[0px] left-[0px] rounded-sm bg-gainsboro-200 box-border w-2.5 h-2.5 border-[1px] border-solid border-gainsboro-100" />
                      <div className="absolute top-[11px] left-[0px] rounded-sm bg-gainsboro-200 box-border w-2.5 h-2.5 border-[1px] border-solid border-gainsboro-100" />
                      <div className="absolute top-[11px] left-[11px] rounded-sm bg-gainsboro-200 box-border w-2.5 h-2.5 border-[1px] border-solid border-gainsboro-100" />
                      <div className="absolute top-[0px] left-[11px] rounded-sm bg-gainsboro-200 box-border w-2.5 h-2.5 border-[1px] border-solid border-gainsboro-100" />
                    </div>
                  </div>
                  <div className="absolute top-[279px] left-[259px] w-24 h-7">
                    <div className="absolute top-[2px] left-[34px] tracking-[0.02em] leading-[180%] font-medium inline-block w-[62px] h-[22px]">
                      3 Month
                    </div>
                    <div className="absolute top-[0px] left-[0px] text-5xl text-gainsboro-100">
                      
                    </div>
                  </div>
                </div>
                <div className="absolute top-[0px] left-[436px] w-[374px] h-[617px]">
                  <div className="absolute top-[0px] left-[0px] w-[374px] h-[617px] text-5xl text-gray-400">
                    <div className="absolute top-[0px] left-[0px] rounded-xl bg-whitesmoke-200 shadow-[0px_18.829999923706055px_47.08px_rgba(47,_50,_125,_0.1)] w-[374px] h-[617px]" />
                    <div className="absolute top-[20px] left-[20.98px] w-[334.02px] h-[501px]">
                      <img
                        className="absolute top-[0px] left-[0px] rounded-xl w-[334px] h-[238.66px] object-cover"
                        alt=""
                        src="/rectangle-3210@2x.png"
                      />
                      <div className="absolute top-[301px] left-[6.02px] font-medium inline-block w-[324px] h-[77px]">
                        AWS Certified solutions Architect
                      </div>
                      <div className="absolute top-[399px] left-[6.02px] text-lg tracking-[0.02em] leading-[180%] text-slategray inline-block w-[328px] h-[102px]">
                        Lorem ipsum dolor sit amet, consectetur adipising elit,
                        sed do eiusmod tempor
                      </div>
                    </div>
                    <div className="absolute top-[538px] left-[26.63px] w-[328.37px] h-[44.25px] text-lg text-black1">
                      <div className="absolute top-[12.78px] left-[62.15px] tracking-[0.02em] font-medium inline-block w-[51.05px] h-[18.68px]">
                        Lina
                      </div>
                      <i className="absolute top-[22px] left-[221.37px] [text-decoration:line-through] tracking-[0.02em] flex font-light text-gray-900 items-center w-[42px] h-[19px]">
                        $100
                      </i>
                      <b className="absolute top-[22px] left-[277.37px] text-5xl tracking-[0.02em] flex text-mediumseagreen items-center w-[51px] h-[19px]">
                        $80
                      </b>
                      <div className="absolute top-[0px] left-[0px] w-[44.37px] h-[44.25px]">
                        <div className="absolute top-[0px] left-[0px] rounded-[22.12px] bg-gainsboro-100 w-11 h-[44.25px]" />
                        <img
                          className="absolute top-[0px] left-[0.37px] rounded-3xl w-11 h-11 object-cover"
                          alt=""
                          src="/image-122@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[279px] left-[27px] w-[93px] h-[22px]">
                    <div className="absolute top-[0px] left-[31px] tracking-[0.02em] leading-[180%] font-medium inline-block w-[62px] h-[22px]">
                      Design
                    </div>
                    <div className="absolute top-[1px] left-[0px] w-[21px] h-[21px]">
                      <div className="absolute top-[0px] left-[0px] rounded-sm bg-gainsboro-200 box-border w-2.5 h-2.5 border-[1px] border-solid border-gainsboro-100" />
                      <div className="absolute top-[11px] left-[0px] rounded-sm bg-gainsboro-200 box-border w-2.5 h-2.5 border-[1px] border-solid border-gainsboro-100" />
                      <div className="absolute top-[11px] left-[11px] rounded-sm bg-gainsboro-200 box-border w-2.5 h-2.5 border-[1px] border-solid border-gainsboro-100" />
                      <div className="absolute top-[0px] left-[11px] rounded-sm bg-gainsboro-200 box-border w-2.5 h-2.5 border-[1px] border-solid border-gainsboro-100" />
                    </div>
                  </div>
                  <div className="absolute top-[279px] left-[259px] w-24 h-7">
                    <div className="absolute top-[2px] left-[34px] tracking-[0.02em] leading-[180%] font-medium inline-block w-[62px] h-[22px]">
                      3 Month
                    </div>
                    <div className="absolute top-[0px] left-[0px] text-5xl text-gainsboro-100">
                      
                    </div>
                  </div>
                </div>
                <div className="absolute top-[0px] left-[872px] w-[374px] h-[617px]">
                  <div className="absolute top-[0px] left-[0px] w-[374px] h-[617px] text-5xl text-gray-400">
                    <div className="absolute top-[0px] left-[0px] rounded-xl bg-whitesmoke-200 shadow-[0px_18.829999923706055px_47.08px_rgba(47,_50,_125,_0.1)] w-[374px] h-[617px]" />
                    <div className="absolute top-[20px] left-[20.98px] w-[334.02px] h-[501px]">
                      <img
                        className="absolute top-[0px] left-[0px] rounded-xl w-[334px] h-[238.66px] object-cover"
                        alt=""
                        src="/rectangle-3211@2x.png"
                      />
                      <div className="absolute top-[301px] left-[6.02px] font-medium inline-block w-[324px] h-[77px]">
                        AWS Certified solutions Architect
                      </div>
                      <div className="absolute top-[399px] left-[6.02px] text-lg tracking-[0.02em] leading-[180%] text-slategray inline-block w-[328px] h-[102px]">
                        Lorem ipsum dolor sit amet, consectetur adipising elit,
                        sed do eiusmod tempor
                      </div>
                    </div>
                    <div className="absolute top-[538px] left-[26.63px] w-[328.37px] h-[44.25px] text-lg text-black1">
                      <div className="absolute top-[12.78px] left-[62.15px] tracking-[0.02em] font-medium inline-block w-[51.05px] h-[18.68px]">
                        Lina
                      </div>
                      <i className="absolute top-[22px] left-[221.37px] [text-decoration:line-through] tracking-[0.02em] flex font-light text-gray-900 items-center w-[42px] h-[19px]">
                        $100
                      </i>
                      <b className="absolute top-[22px] left-[277.37px] text-5xl tracking-[0.02em] flex text-mediumseagreen items-center w-[51px] h-[19px]">
                        $80
                      </b>
                      <div className="absolute top-[0px] left-[0px] w-[44.37px] h-[44.25px]">
                        <div className="absolute top-[0px] left-[0px] rounded-[22.12px] bg-gainsboro-100 w-11 h-[44.25px]" />
                        <img
                          className="absolute top-[0px] left-[0.37px] rounded-3xl w-11 h-11 object-cover"
                          alt=""
                          src="/image-122@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[279px] left-[27px] w-[93px] h-[22px]">
                    <div className="absolute top-[0px] left-[31px] tracking-[0.02em] leading-[180%] font-medium inline-block w-[62px] h-[22px]">
                      Design
                    </div>
                    <div className="absolute top-[1px] left-[0px] w-[21px] h-[21px]">
                      <div className="absolute top-[0px] left-[0px] rounded-sm bg-gainsboro-200 box-border w-2.5 h-2.5 border-[1px] border-solid border-gainsboro-100" />
                      <div className="absolute top-[11px] left-[0px] rounded-sm bg-gainsboro-200 box-border w-2.5 h-2.5 border-[1px] border-solid border-gainsboro-100" />
                      <div className="absolute top-[11px] left-[11px] rounded-sm bg-gainsboro-200 box-border w-2.5 h-2.5 border-[1px] border-solid border-gainsboro-100" />
                      <div className="absolute top-[0px] left-[11px] rounded-sm bg-gainsboro-200 box-border w-2.5 h-2.5 border-[1px] border-solid border-gainsboro-100" />
                    </div>
                  </div>
                  <div className="absolute top-[279px] left-[259px] w-24 h-7">
                    <div className="absolute top-[2px] left-[34px] tracking-[0.02em] leading-[180%] font-medium inline-block w-[62px] h-[22px]">
                      3 Month
                    </div>
                    <div className="absolute top-[0px] left-[0px] text-5xl text-gainsboro-100">
                      
                    </div>
                  </div>
                </div>
                <div className="absolute top-[0px] left-[1308px] w-[374px] h-[617px]">
                  <div className="absolute top-[0px] left-[0px] w-[374px] h-[617px] text-5xl text-gray-400">
                    <div className="absolute top-[0px] left-[0px] rounded-xl bg-whitesmoke-200 shadow-[0px_18.829999923706055px_47.08px_rgba(47,_50,_125,_0.1)] w-[374px] h-[617px]" />
                    <div className="absolute top-[20px] left-[20.98px] w-[334.02px] h-[501px]">
                      <img
                        className="absolute top-[0px] left-[0px] rounded-xl w-[334px] h-[238.66px] object-cover"
                        alt=""
                        src="/rectangle-3212@2x.png"
                      />
                      <div className="absolute top-[301px] left-[6.02px] font-medium inline-block w-[324px] h-[77px]">
                        AWS Certified solutions Architect
                      </div>
                      <div className="absolute top-[399px] left-[6.02px] text-lg tracking-[0.02em] leading-[180%] text-slategray inline-block w-[328px] h-[102px]">
                        Lorem ipsum dolor sit amet, consectetur adipising elit,
                        sed do eiusmod tempor
                      </div>
                    </div>
                    <div className="absolute top-[538px] left-[26.63px] w-[328.37px] h-[44.25px] text-lg text-black1">
                      <div className="absolute top-[12.78px] left-[62.15px] tracking-[0.02em] font-medium inline-block w-[51.05px] h-[18.68px]">
                        Lina
                      </div>
                      <i className="absolute top-[22px] left-[221.37px] [text-decoration:line-through] tracking-[0.02em] flex font-light text-gray-900 items-center w-[42px] h-[19px]">
                        $100
                      </i>
                      <b className="absolute top-[22px] left-[277.37px] text-5xl tracking-[0.02em] flex text-mediumseagreen items-center w-[51px] h-[19px]">
                        $80
                      </b>
                      <div className="absolute top-[0px] left-[0px] w-[44.37px] h-[44.25px]">
                        <div className="absolute top-[0px] left-[0px] rounded-[22.12px] bg-gainsboro-100 w-11 h-[44.25px]" />
                        <img
                          className="absolute top-[0px] left-[0.37px] rounded-3xl w-11 h-11 object-cover"
                          alt=""
                          src="/image-122@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[279px] left-[27px] w-[93px] h-[22px]">
                    <div className="absolute top-[0px] left-[31px] tracking-[0.02em] leading-[180%] font-medium inline-block w-[62px] h-[22px]">
                      Design
                    </div>
                    <div className="absolute top-[1px] left-[0px] w-[21px] h-[21px]">
                      <div className="absolute top-[0px] left-[0px] rounded-sm bg-gainsboro-200 box-border w-2.5 h-2.5 border-[1px] border-solid border-gainsboro-100" />
                      <div className="absolute top-[11px] left-[0px] rounded-sm bg-gainsboro-200 box-border w-2.5 h-2.5 border-[1px] border-solid border-gainsboro-100" />
                      <div className="absolute top-[11px] left-[11px] rounded-sm bg-gainsboro-200 box-border w-2.5 h-2.5 border-[1px] border-solid border-gainsboro-100" />
                      <div className="absolute top-[0px] left-[11px] rounded-sm bg-gainsboro-200 box-border w-2.5 h-2.5 border-[1px] border-solid border-gainsboro-100" />
                    </div>
                  </div>
                  <div className="absolute top-[279px] left-[259px] w-24 h-7">
                    <div className="absolute top-[2px] left-[34px] tracking-[0.02em] leading-[180%] font-medium inline-block w-[62px] h-[22px]">
                      3 Month
                    </div>
                    <div className="absolute top-[0px] left-[0px] text-5xl text-gainsboro-100">
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            className="absolute h-[13.66%] w-[9.02%] top-[45.6%] right-[0%] bottom-[40.74%] left-[90.98%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/group7.svg"
          />
          <img
            className="absolute h-[13.66%] w-[9.02%] top-[42.9%] right-[90.98%] bottom-[43.44%] left-[0%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/group8.svg"
          />
        </div>
      </div>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[1823px] left-[1524px] w-[207px] h-[55px]">
        <div className="absolute top-[0px] left-[0px] rounded-77xl bg-mediumseagreen w-[207px] h-[55px]" />
        <div className="absolute top-[13px] left-[36px] text-6xl font-medium font-caption text-white text-left">
          Join Course
        </div>
      </button>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[1823px] left-[1082px] w-[207px] h-[55px]">
        <div className="absolute top-[0px] left-[0px] rounded-77xl bg-mediumseagreen w-[207px] h-[55px]" />
        <div className="absolute top-[13px] left-[36px] text-6xl font-medium font-caption text-white text-left">
          Join Course
        </div>
      </button>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[1823px] left-[643px] w-[207px] h-[55px]">
        <div className="absolute top-[0px] left-[0px] rounded-77xl bg-mediumseagreen w-[207px] h-[55px]" />
        <div className="absolute top-[13px] left-[36px] text-6xl font-medium font-caption text-white text-left">
          Join Course
        </div>
      </button>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[1823px] left-[206px] w-[207px] h-[55px]">
        <div className="absolute top-[0px] left-[0px] rounded-77xl bg-mediumseagreen w-[207px] h-[55px]" />
        <div className="absolute top-[13px] left-[36px] text-6xl font-medium font-caption text-white text-left">
          Join Course
        </div>
      </button>
      <div className="absolute top-[1921px] left-[119px] w-[1682px] h-[539px] overflow-hidden text-lg text-black1 font-sp-paragraph-default">
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
                <div className="absolute top-[0px] left-[0px] rounded-[5.55px] bg-lightsteelblue [backdrop-filter:blur(11.09px)] w-[154.44px] h-[19.99px]" />
                <div className="absolute top-[2.73px] left-[17.26px] rounded-[5.55px] bg-dodgerblue w-[52.69px] h-[14.54px]" />
                <div className="absolute top-[3.02px] left-[78.13px] font-semibold inline-block w-[67.23px] h-[13.63px]">
                  Eveny Howard
                </div>
                <div className="absolute top-[3.63px] left-[23.62px] text-[10px] font-semibold inline-block w-[39.97px] h-[12.72px]">
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
                <div className="absolute top-[0px] left-[0px] rounded-[6.73px] bg-lightsteelblue [backdrop-filter:blur(13.47px)] w-[92.98px] h-[23.86px]" />
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
                <div className="absolute top-[0px] left-[0px] rounded-[5.55px] bg-lightsteelblue [backdrop-filter:blur(11.09px)] w-[88.17px] h-[19.65px]" />
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
                <div className="absolute top-[0px] left-[0px] rounded-[5.55px] bg-lightsteelblue [backdrop-filter:blur(11.09px)] w-[102.78px] h-[19.65px]" />
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
                <div className="absolute top-[0px] left-[0px] rounded-lg bg-lightsteelblue [backdrop-filter:blur(16px)] w-[144.63px] h-[28.34px]" />
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
      <div className="absolute top-[2453px] left-[57px] w-[1806px] h-[1281px] overflow-hidden text-11xl text-black1">
        <div className="absolute top-[0px] left-[0px] w-[1784.71px] h-[1281px] overflow-hidden">
          <div className="absolute top-[65px] left-[80px] w-[1646px] h-[536px]">
            <div className="absolute top-[0px] left-[3px] w-[1643px] h-[45px]">
              <div className="absolute top-[0px] left-[0px] tracking-[0.02em] font-medium">
                Classes tought by real creators
              </div>
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[8px] left-[1576px] text-xl font-bold font-poppins text-mediumseagreen text-left inline-block">
                See all
              </button>
            </div>
            <div className="absolute top-[95px] left-[0px] w-[1644px] h-[441px] text-lg text-slategray">
              <div className="absolute top-[0px] left-[0px] w-[516px] h-[441px]">
                <div className="absolute top-[138px] left-[0px] bg-whitesmoke-200 shadow-[2px_2px_10px_2px_rgba(0,_0,_0,_0.25)] w-[516px] h-[303px]" />
                <img
                  className="absolute top-[0px] left-[120px] w-[278px] h-[277px] object-cover"
                  alt=""
                  src="/image-10@2x.png"
                />
                <div className="absolute top-[348px] left-[69px] tracking-[0.02em] leading-[180%] inline-block w-[379px] h-[63px]">
                  Lorem ipsum dolor sit amet, consectetur adipising elit, sed do
                  eiusmod tempor
                </div>
                <div className="absolute top-[299px] left-[177px] text-5xl font-medium text-mediumseagreen inline-block w-[164px] h-7">
                  Jane Cooper
                </div>
              </div>
              <div className="absolute top-[0px] left-[564px] w-[516px] h-[441px]">
                <div className="absolute top-[138px] left-[0px] bg-whitesmoke-200 shadow-[2px_2px_10px_2px_rgba(0,_0,_0,_0.25)] w-[516px] h-[303px]" />
                <img
                  className="absolute top-[0px] left-[120px] w-[278px] h-[277px] object-cover"
                  alt=""
                  src="/image-101@2x.png"
                />
                <div className="absolute top-[348px] left-[69px] tracking-[0.02em] leading-[180%] inline-block w-[379px] h-[63px]">
                  Lorem ipsum dolor sit amet, consectetur adipising elit, sed do
                  eiusmod tempor
                </div>
                <div className="absolute top-[299px] left-[219px] text-5xl font-medium text-mediumseagreen inline-block w-[76px] h-7">
                  Adam
                </div>
              </div>
              <div className="absolute top-[0px] left-[1128px] w-[516px] h-[441px]">
                <div className="absolute top-[138px] left-[0px] bg-whitesmoke-200 shadow-[2px_2px_10px_2px_rgba(0,_0,_0,_0.25)] w-[516px] h-[303px]" />
                <img
                  className="absolute top-[0px] left-[120px] w-[278px] h-[277px] object-cover"
                  alt=""
                  src="/image-102@2x.png"
                />
                <div className="absolute top-[348px] left-[69px] tracking-[0.02em] leading-[180%] inline-block w-[379px] h-[63px]">
                  Lorem ipsum dolor sit amet, consectetur adipising elit, sed do
                  eiusmod tempor
                </div>
                <div className="absolute top-[297px] left-[215px] text-5xl font-medium text-mediumseagreen inline-block w-[105px] h-7">
                  Tomara
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[666px] left-[76px] w-[1646px] h-[615px] text-31xl text-floralwhite">
            <div className="absolute top-[115px] left-[0px] w-[1644px] h-[500px]">
              <div className="absolute top-[0px] left-[0px] shadow-[10px_13px_11px_rgba(0,_0,_0,_0.25)] w-[500px] h-[500px]">
                <img
                  className="absolute top-[0px] left-[0px] rounded-xl w-[500px] h-[500px] object-cover"
                  alt=""
                  src="/rectangle-187@2x.png"
                />
                <div className="absolute top-[45px] left-[45px] rounded-3xs bg-mediumseagreen w-[124px] h-[124px]" />
                <b className="absolute top-[70px] left-[52px]">50%</b>
                <div className="absolute top-[197px] left-[45px] w-[353px] h-[207px] text-9xl">
                  <b className="absolute top-[0px] left-[0px] inline-block w-[281px] h-11">
                    Lorem ipsum dolor
                  </b>
                  <div className="absolute top-[53px] left-[0px] text-xl tracking-[0.02em] leading-[180%] font-medium inline-block w-[353px] h-[154px]">
                    <p className="m-0">
                      Lorem ipsum dolor sit amet, consectetur adipising elit,
                      sed do eiusmod tempor
                    </p>
                    <p className="m-0">
                      Lorem ipsum dolor sit amet, consectetur adipising elit,
                      sed do eiusmod tempor
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute top-[0px] left-[572px] w-[500px] h-[500px]">
                <img
                  className="absolute top-[0px] left-[-1px] rounded-xl w-[522px] h-[500px] object-cover"
                  alt=""
                  src="/rectangle-188@2x.png"
                />
                <div className="absolute top-[45px] left-[45px] rounded-3xs bg-mediumseagreen w-[124px] h-[124px]" />
                <b className="absolute top-[70px] left-[60px]">10%</b>
                <div className="absolute top-[197px] left-[45px] w-[353px] h-[207px] text-9xl">
                  <b className="absolute top-[0px] left-[0px] inline-block w-[281px] h-11">
                    Lorem ipsum dolor
                  </b>
                  <div className="absolute top-[53px] left-[0px] text-xl tracking-[0.02em] leading-[180%] font-medium inline-block w-[353px] h-[154px]">
                    <p className="m-0">
                      Lorem ipsum dolor sit amet, consectetur adipising elit,
                      sed do eiusmod tempor
                    </p>
                    <p className="m-0">
                      Lorem ipsum dolor sit amet, consectetur adipising elit,
                      sed do eiusmod tempor
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute top-[0px] left-[1144px] shadow-[10px_13px_11px_rgba(0,_0,_0,_0.25)] w-[500px] h-[500px]">
                <img
                  className="absolute top-[0px] left-[0px] rounded-xl w-[500px] h-[500px] object-cover"
                  alt=""
                  src="/rectangle-189@2x.png"
                />
                <div className="absolute top-[45px] left-[45px] rounded-3xs bg-mediumseagreen w-[124px] h-[124px]" />
                <b className="absolute top-[70px] left-[53px]">50%</b>
                <div className="absolute top-[197px] left-[45px] w-[353px] h-[207px] text-9xl">
                  <b className="absolute top-[0px] left-[0px] inline-block w-[281px] h-11">
                    Lorem ipsum dolor
                  </b>
                  <div className="absolute top-[53px] left-[0px] text-xl tracking-[0.02em] leading-[180%] font-medium inline-block w-[353px] h-[154px]">
                    <p className="m-0">
                      Lorem ipsum dolor sit amet, consectetur adipising elit,
                      sed do eiusmod tempor
                    </p>
                    <p className="m-0">
                      Lorem ipsum dolor sit amet, consectetur adipising elit,
                      sed do eiusmod tempor
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-[0px] left-[0px] w-[1646px] h-[45px] overflow-hidden text-11xl text-black1">
              <div className="absolute top-[0px] left-[0px] tracking-[0.02em] font-medium inline-block w-[723px]">
                Top Education offers and deals are listed here
              </div>
              <b className="absolute top-[15px] left-[1579px] text-xl text-mediumseagreen">
                See all
              </b>
            </div>
          </div>
          <img
            className="absolute h-[6.02%] w-[4.37%] top-[53.08%] right-[31.86%] bottom-[40.9%] left-[63.76%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/group9.svg"
          />
          <img
            className="absolute h-[7.28%] w-[5.19%] top-[0%] right-[25.02%] bottom-[92.72%] left-[69.79%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/group10.svg"
          />
          <img
            className="absolute h-[7.31%] w-[5.94%] top-[5.39%] right-[39.37%] bottom-[87.31%] left-[54.69%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/group11.svg"
          />
          <img
            className="absolute h-[6.75%] w-[4.57%] top-[9.66%] right-[1.97%] bottom-[83.59%] left-[93.46%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/group12.svg"
          />
          <img
            className="absolute h-[9.13%] w-[5.24%] top-[42.62%] right-[1.62%] bottom-[48.25%] left-[93.14%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/group13.svg"
          />
          <img
            className="absolute h-[6.22%] w-[4.38%] top-[29%] right-[0%] bottom-[64.78%] left-[95.62%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/group14.svg"
          />
          <img
            className="absolute h-[10.16%] w-[6.74%] top-[47.46%] right-[72.47%] bottom-[42.38%] left-[20.79%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/group15.svg"
          />
          <img
            className="absolute h-[10.66%] w-[5.05%] top-[1.56%] right-[60.94%] bottom-[87.78%] left-[34.01%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/group16.svg"
          />
          <img
            className="absolute h-[9.41%] w-[4.99%] top-[47.62%] right-[95.01%] bottom-[42.97%] left-[0%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/group17.svg"
          />
          <img
            className="absolute h-[3.67%] w-[2.63%] top-[4.92%] right-[94.12%] bottom-[91.42%] left-[3.25%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector.svg"
          />
        </div>
      </div>
      <div className="absolute top-[3799px] left-[-5px] w-[1930px] h-[411px] overflow-hidden text-lgi text-dimgray-100 font-caption">
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
                src="/group18.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
