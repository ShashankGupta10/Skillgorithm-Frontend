import { useNavigate } from "react-router-dom";
const BlogPage = () => {
  const navigate = useNavigate();
  return (
    <div className="relative bg-floralwhite w-full h-[3920px] overflow-hidden text-left text-3xl text-dimgray-200 font-poppins">
      <div className="absolute top-[4924px] left-[-5913px] w-[1920px] h-[593px] text-center text-lightsteelblue-100">
        <div className="absolute top-[0px] left-[0px] bg-gray-400 w-[1920px] h-[593px]" />
        <div className="absolute top-[520px] left-[781px] tracking-[0.04em]">{`© 2021 Class Technologies Inc. `}</div>
        <div className="absolute top-[252px] left-[740px] text-7xl tracking-[0.04em] font-medium">
          Subscribe to get our Newsletter
        </div>
        <div className="absolute top-[74px] left-[766px] w-[388px] h-[83px] text-left text-13xl text-floralwhite">
          <div className="absolute top-[0px] left-[0px] w-[114px] h-[83px]">
            <img
              className="absolute top-[0px] left-[0px] rounded-md w-[83px] h-[83px]"
              alt=""
              src="/polygon-2.svg"
            />
            <b className="absolute top-[17px] left-[22px] tracking-[0.04em]">
              TOTC
            </b>
          </div>
          <div className="absolute top-[-0.5px] left-[190.5px] box-border w-px h-[84px] border-r-[1px] border-solid border-slategray-200" />
          <div className="absolute top-[9px] left-[232px] text-3xl tracking-[0.04em] font-semibold inline-block w-[156px]">
            Virtual Class for Zoom
          </div>
        </div>
        <div className="absolute top-[467px] left-[678px] w-[564px] h-[33px]">
          <div className="absolute top-[7.5px] left-[112.5px] box-border w-px h-[18px] border-r-[1px] border-solid border-slategray-200" />
          <div className="absolute top-[7.5px] left-[313.5px] box-border w-px h-[18px] border-r-[1px] border-solid border-slategray-200" />
          <div className="absolute top-[0px] left-[0px] tracking-[0.04em]">
            Explore
          </div>
          <div className="absolute top-[0px] left-[133px] tracking-[0.04em]">
            Privacy Policy
          </div>
          <div className="absolute top-[0px] left-[334px] tracking-[0.04em]">{`Terms & Conditions`}</div>
        </div>
        <div className="absolute top-[311px] left-[661px] w-[599px] h-[60px] text-xl text-lightslategray-100">
          <div className="absolute top-[0px] left-[0px] rounded-[80px] box-border w-[400px] h-[60px] border-[1px] border-solid border-lightslategray-100" />
          <div className="absolute top-[15px] left-[30px] tracking-[0.04em]">
            Your Email
          </div>
          <div className="absolute top-[0px] left-[420px] w-[179px] h-[60px] text-left text-3xl text-floralwhite">
            <div className="absolute top-[30px] left-[12px] rounded-41xl bg-mediumslateblue [filter:blur(54px)] w-[151px] h-[29px] opacity-[0.5]" />
            <div className="absolute top-[0px] left-[0px] rounded-41xl bg-lightseagreen-100 w-[179px] h-[60px]" />
            <div className="absolute top-[14px] left-[34px] font-medium">
              Subscribe
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[55px] left-[869px] tracking-[0.02em] hover:cursor-pointer" onClick={()=>{navigate('/dashboard')}}>
        Home
      </div>
      <div className="absolute top-[55px] left-[1188px] tracking-[0.02em] hover:cursor-pointer" onClick={()=>{navigate('/explore')}}>
        Explore
      </div>
      <div className="absolute top-[55px] left-[1016px] tracking-[0.02em] hover:cursor-pointer" onClick={()=>{navigate('/mycourse')}}>
        My Courses
      </div>
      <div className="absolute top-[55px] left-[1359px] tracking-[0.02em] hover:cursor-pointer" onClick={()=>{navigate('/blogs')}}>
        Blog
      </div>
      <div className="absolute top-[55px] left-[1489px] tracking-[0.02em] hover:cursor-pointer" onClick={()=>{navigate('/redeem')}}>
        Redeem
      </div>
      <div className="absolute top-[58px] left-[1738px] text-lg tracking-[0.02em] font-medium text-black2">
        Pooja
      </div>
      <div className="absolute top-[40px] left-[1660px] w-[63px] h-[63px]">
        <div className="absolute top-[0px] left-[0px] rounded-41xl bg-floralwhite w-[63px] h-[63px]" />
        <img
          className="absolute top-[0px] left-[0px] rounded-41xl w-[63px] h-[63px] object-cover"
          alt=""
          src="/image-12@2x.png"
        />
      </div>
      <img
        className="absolute top-[145px] left-[0px] w-[1920px] h-[667px] opacity-[0.2] mix-blend-normal"
        alt=""
        src="/rectangle2.svg"
      />
      <div className="absolute top-[494px] left-[114px] text-5xl tracking-[0.02em] leading-[180%] text-slategray-100 inline-block w-[688px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do
        eiusmod tempor
      </div>
      <div className="absolute top-[222px] left-[114px] text-5xl inline-block w-[451px] text-black2">
        <span>{`By Themadbrains in `}</span>
        <b className="text-mediumseagreen">inspiration</b>
      </div>
      <div className="absolute top-[648px] left-[114px] w-[236px] h-[63px] text-base text-floralwhite">
        <div className="absolute top-[20px] left-[0px] rounded-xl bg-mediumseagreen w-[236px] h-[63px]" />
        <b className="absolute top-[40px] left-[40px] inline-block w-[156px] h-[31px] hover:cursor-pointer" onClick={()=>{navigate('/b')}}>
          Start learning now
        </b>
      </div>
      <div className="absolute top-[892px] left-[110px] w-[1652px] h-[398px] text-11xl text-gray-1100">
        <b className="absolute top-[0px] left-[10px] inline-block w-[286px]">
          Reading blog list
        </b>
        <div className="absolute top-[71px] left-[0px] w-[1652px] h-[327px] text-center text-5xl">
          <div className="absolute top-[0px] left-[0px] w-[356px] h-[327px] text-left">
            <div className="absolute top-[0px] left-[0px] w-[356px] h-[327px]">
              <div className="absolute top-[0px] left-[0px] w-[356px] h-[327px]">
                <img
                  className="absolute top-[0px] left-[0px] rounded-xl w-[356px] h-[327px] object-cover"
                  alt=""
                  src="/rectangle-34@2x.png"
                />
                <div className="absolute top-[0px] left-[0px] rounded-xl bg-darkslateblue-300 w-[356px] h-[327px] opacity-[0.1]" />
              </div>
              <div className="absolute top-[0px] left-[0px] w-[356px] h-[327px]">
                <img
                  className="absolute top-[0px] left-[0px] rounded-xl w-[356px] h-[327px] object-cover"
                  alt=""
                  src="/rectangle-34@2x.png"
                />
                <div className="absolute top-[0px] left-[0px] rounded-xl bg-darkslateblue-300 w-[356px] h-[327px] opacity-[0.1]" />
              </div>
              <div className="absolute top-[230px] left-[60px] rounded-xl bg-floralwhite w-[236px] h-[63px]" />
              <b className="absolute top-[246px] left-[141px] inline-block w-[75px] h-[31px]">
                UX/UI
              </b>
            </div>
          </div>
          <div className="absolute top-[0px] left-[1296px] w-[356px] h-[327px]">
            <div className="absolute top-[0px] left-[0px] w-[356px] h-[327px]">
              <div className="absolute top-[0px] left-[0px] w-[356px] h-[327px]">
                <img
                  className="absolute top-[0px] left-[0px] rounded-xl w-[356px] h-[327px] object-cover"
                  alt=""
                  src="/rectangle-34@2x.png"
                />
                <div className="absolute top-[0px] left-[0px] rounded-xl bg-darkslateblue-300 w-[356px] h-[327px] opacity-[0.1]" />
              </div>
              <div className="absolute top-[0px] left-[0px] w-[356px] h-[327px]">
                <img
                  className="absolute top-[0px] left-[0px] rounded-xl w-[356px] h-[327px] object-cover"
                  alt=""
                  src="/rectangle-341@2x.png"
                />
              </div>
              <div className="absolute top-[230px] left-[60px] rounded-xl bg-floralwhite w-[236px] h-[63px]" />
              <b className="absolute top-[246px] left-[100px] inline-block w-[156px] h-[31px]">
                JavaScript
              </b>
            </div>
          </div>
          <div className="absolute top-[0px] left-[864px] w-[356px] h-[327px]">
            <div className="absolute top-[0px] left-[0px] w-[356px] h-[327px]">
              <div className="absolute top-[0px] left-[0px] w-[356px] h-[327px]">
                <img
                  className="absolute top-[0px] left-[0px] rounded-xl w-[356px] h-[327px] object-cover"
                  alt=""
                  src="/rectangle-34@2x.png"
                />
                <div className="absolute top-[0px] left-[0px] rounded-xl bg-darkslateblue-300 w-[356px] h-[327px] opacity-[0.1]" />
              </div>
              <div className="absolute top-[0px] left-[0px] w-[356px] h-[327px]">
                <img
                  className="absolute top-[0px] left-[0px] rounded-xl w-[356px] h-[327px] object-cover"
                  alt=""
                  src="/rectangle-342@2x.png"
                />
              </div>
              <div className="absolute top-[230px] left-[60px] rounded-xl bg-floralwhite w-[236px] h-[63px]" />
              <b className="absolute top-[246px] left-[100px] flex items-center justify-center w-[156px] h-[31px]">
                PHP
              </b>
            </div>
          </div>
          <div className="absolute top-[0px] left-[432px] w-[356px] h-[327px]">
            <div className="absolute top-[0px] left-[0px] w-[356px] h-[327px]">
              <div className="absolute top-[0px] left-[0px] w-[356px] h-[327px]">
                <img
                  className="absolute top-[0px] left-[0px] rounded-xl w-[356px] h-[327px] object-cover"
                  alt=""
                  src="/rectangle-34@2x.png"
                />
                <div className="absolute top-[0px] left-[0px] rounded-xl bg-darkslateblue-300 w-[356px] h-[327px] opacity-[0.1]" />
              </div>
              <div className="absolute top-[0px] left-[0px] w-[356px] h-[327px]">
                <img
                  className="absolute top-[0px] left-[0px] rounded-xl w-[356px] h-[327px] object-cover"
                  alt=""
                  src="/rectangle-343@2x.png"
                />
              </div>
              <div className="absolute top-[230px] left-[60px] rounded-xl bg-floralwhite w-[236px] h-[63px]" />
              <b className="absolute top-[245px] left-[100px] inline-block w-[156px] h-[31px]">
                React
              </b>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[215px] left-[978px] w-[779px] h-[526.88px]">
        <img
          className="absolute top-[0px] left-[0px] rounded-xl w-[779px] h-[526.88px] object-cover"
          alt=""
          src="/rectangle-327@2x.png"
        />
        <img
          className="absolute top-[0px] left-[0px] rounded-xl w-[779px] h-[526.88px] opacity-[0.1]"
          alt=""
          src="/rectangle-381.svg"
        />
      </div>
      <div className="absolute top-[1370px] left-[0px] w-[1920px] h-[1268px] text-xl text-slategray-100">
        <div className="absolute top-[0px] left-[0px] bg-darkslateblue-100 w-[1920px] h-[1268px] opacity-[0.2] mix-blend-normal" />
        <div className="absolute top-[93px] left-[116px] w-[1671.38px] h-[1109px]">
          <div className="absolute top-[0px] left-[4px] text-11xl tracking-[0.02em] font-medium text-black2">{`Related Blog `}</div>
          <div className="absolute top-[1059px] left-[1547px] w-[120px] h-[50px] text-5xl text-floralwhite">
            <img
              className="absolute top-[0px] left-[70px] rounded w-[50px] h-[50px]"
              alt=""
              src="/rectangle-86.svg"
            />
            <img
              className="absolute top-[0px] left-[0px] rounded w-[50px] h-[50px]"
              alt=""
              src="/rectangle-872.svg"
            />
            <div className="absolute top-[11px] left-[89px]"></div>
            <div className="absolute top-[11px] left-[19px]"></div>
          </div>
          <b className="absolute top-[4px] left-[1583.31px] text-mediumseagreen">
            See all
          </b>
          <div className="absolute top-[86px] left-[0px] w-[786px] h-[899.57px]">
            <div className="absolute top-[0px] left-[0px] rounded-xl bg-floralwhite shadow-[0px_18.829999923706055px_47.08px_rgba(47,_50,_125,_0.1)] w-[786px] h-[899.57px]" />
            <div className="absolute top-[59.6px] left-[33.73px] w-[719.66px] h-[775.88px]">
              <div className="absolute top-[0px] left-[0px] w-[719.66px] h-[382.32px]">
                <img
                  className="absolute top-[0px] left-[0px] rounded-xl w-[719.66px] h-[382.32px] object-cover"
                  alt=""
                  src="/rectangle-325@2x.png"
                />
                <div className="absolute top-[0px] left-[0px] rounded-xl bg-darkslateblue-300 w-[719.66px] h-[382.32px] opacity-[0.1]" />
              </div>
              <div className="absolute top-[394.69px] left-[0px] text-7xl leading-[180%] font-medium text-gray-400 inline-block w-[684.8px] h-[105.7px]">
                Class adds $30 million to its balance sheet for a Zoom-friendly
                edtech solution
              </div>
              <div className="absolute top-[609.46px] left-[0px] tracking-[0.02em] leading-[180%] inline-block w-[684.8px] h-[80.96px]">
                Class, launched less than a year ago by Blackboard co-founder
                Michael Chasen, integrates exclusively...
              </div>
              <div className="absolute top-[735.4px] left-[628.58px] tracking-[0.02em] leading-[180%] inline-block w-[91.08px] h-[40.48px]">
                251,232
              </div>
              <div className="absolute top-[735.4px] left-[0px] [text-decoration:underline] tracking-[0.02em] leading-[180%] inline-block w-[128.19px] h-[40.48px]">
                Read more
              </div>
            </div>
            <div className="absolute top-[594.84px] left-[145.06px] text-lg tracking-[0.02em] font-medium text-black2 inline-block w-[42.73px] h-[30.36px]">
              Lina
            </div>
            <div className="absolute top-[574.6px] left-[57.35px] w-[70.84px] h-[70.84px]">
              <div className="absolute top-[0px] left-[0px] rounded-41xl bg-floralwhite w-[70.84px] h-[70.84px]" />
              <img
                className="absolute top-[0px] left-[0px] rounded-41xl w-[70.84px] h-[70.84px] object-cover"
                alt=""
                src="/image-124@2x.png"
              />
            </div>
            <div className="absolute top-[801.74px] left-[613.96px] text-mediumseagreen inline-block w-[25.86px] h-[25.86px]">
              
            </div>
          </div>
          <div className="absolute top-[86px] left-[885px] w-[786.38px] h-[900px]">
            <div className="absolute top-[0px] left-[0px] rounded-xl bg-floralwhite shadow-[0px_18.829999923706055px_47.08px_rgba(47,_50,_125,_0.1)] w-[786.38px] h-[900px]" />
            <div className="absolute top-[59.63px] left-[33.75px] w-[720px] h-[776.25px]">
              <div className="absolute top-[0px] left-[0px] w-[720px] h-[382.5px]">
                <img
                  className="absolute top-[0px] left-[0px] rounded-xl w-[720px] h-[382.5px] object-cover"
                  alt=""
                  src="/rectangle-326@2x.png"
                />
                <img
                  className="absolute top-[0px] left-[0px] rounded-xl w-[720px] h-[382.5px] opacity-[0.1]"
                  alt=""
                  src="/rectangle-38.svg"
                />
              </div>
              <div className="absolute top-[394.88px] left-[0px] text-7xl leading-[180%] font-medium text-gray-400 inline-block w-[685.13px] h-[105.75px]">
                Class adds $30 million to its balance sheet for a Zoom-friendly
                edtech solution
              </div>
              <div className="absolute top-[609.75px] left-[0px] tracking-[0.02em] leading-[180%] inline-block w-[685.13px] h-[81px]">
                Class, launched less than a year ago by Blackboard co-founder
                Michael Chasen, integrates exclusively...
              </div>
              <div className="absolute top-[735.75px] left-[628.88px] tracking-[0.02em] leading-[180%] inline-block w-[91.13px] h-[40.5px]">
                251,232
              </div>
              <div className="absolute top-[735.75px] left-[0px] [text-decoration:underline] tracking-[0.02em] leading-[180%] inline-block w-[128.25px] h-[40.5px]">
                Read more
              </div>
            </div>
            <div className="absolute top-[595.13px] left-[145.13px] text-lg tracking-[0.02em] font-medium text-black2 inline-block w-[42.75px] h-[30.38px]">
              Lina
            </div>
            <div className="absolute top-[574.88px] left-[57.38px] w-[70.88px] h-[70.88px]">
              <div className="absolute top-[0px] left-[0px] rounded-41xl bg-floralwhite w-[70.88px] h-[70.88px]" />
              <img
                className="absolute top-[0px] left-[0px] rounded-41xl w-[70.88px] h-[70.88px] object-cover"
                alt=""
                src="/image-125@2x.png"
              />
            </div>
            <div className="absolute top-[802.13px] left-[614.25px] text-mediumseagreen inline-block w-[25.88px] h-[25.88px]">
              
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[2718px] left-[120px] w-[1711px] h-[712px] text-11xl text-black2">
        <div className="absolute top-[0px] left-[0px] w-[1711px] h-[712px]">
          <div className="absolute top-[0px] left-[0px] w-[1711px] h-12">
            <div className="absolute top-[0px] left-[0px] tracking-[0.02em] font-medium">
              Marketing Articles
            </div>
            <b className="absolute top-[18px] left-[1644px] text-xl text-mediumseagreen">
              See all
            </b>
          </div>
          <div className="absolute top-[95px] left-[17px] w-[1646px] h-[617px] text-sm text-slategray-100">
            <div className="absolute top-[0px] left-[0px] w-[374px] h-[617px]">
              <div className="absolute top-[0px] left-[0px] w-[374px] h-[617px] text-5xl text-gray-400">
                <div className="absolute top-[0px] left-[0px] w-[374px] h-[617px]">
                  <div className="absolute top-[0px] left-[0px] w-[374px] h-[617px]">
                    <div className="absolute top-[0px] left-[0px] rounded-xl bg-floralwhite shadow-[0px_18.829999923706055px_47.08px_rgba(47,_50,_125,_0.1)] w-[374px] h-[617px]" />
                    <div className="absolute top-[20px] left-[20.97px] w-[334.03px] h-[501px]">
                      <div className="absolute top-[0px] left-[0px] w-[334.03px] h-[238.66px]">
                        <img
                          className="absolute top-[0px] left-[0px] rounded-xl w-[334px] h-[238.66px] object-cover"
                          alt=""
                          src="/rectangle-323@2x.png"
                        />
                        <div className="absolute top-[0px] left-[0.02px] rounded-xl bg-darkslateblue-300 w-[334px] h-[238.66px] opacity-[0.1]" />
                      </div>
                      <div className="absolute top-[301px] left-[6.03px] font-medium inline-block w-[324px] h-[77px]">
                        AWS Certified solutions Architect
                      </div>
                      <div className="absolute top-[399px] left-[6.03px] text-lg tracking-[0.02em] leading-[180%] text-slategray-100 inline-block w-[328px] h-[102px]">
                        Lorem ipsum dolor sit amet, consectetur adipising elit,
                        sed do eiusmod tempor
                      </div>
                    </div>
                    <div className="absolute top-[538px] left-[26.63px] w-[328.37px] h-[44.25px] text-lg text-black2">
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
                        <div className="absolute top-[0px] left-[0px] rounded-[22.12px] bg-floralwhite w-11 h-[44.25px]" />
                        <img
                          className="absolute top-[0px] left-[0.37px] rounded-3xl w-11 h-11 object-cover"
                          alt=""
                          src="/image-122@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-[279px] left-[27px] w-[93px] h-[22px]">
                <div className="absolute top-[0px] left-[31px] tracking-[0.02em] leading-[180%] font-medium inline-block w-[62px] h-[22px]">
                  Design
                </div>
                <div className="absolute top-[1px] left-[0px] w-[21px] h-[21px]">
                  <div className="absolute top-[0px] left-[0px] rounded-sm bg-gainsboro-200 box-border w-2.5 h-2.5 border-[1px] border-solid border-floralwhite" />
                  <div className="absolute top-[11px] left-[0px] rounded-sm bg-gainsboro-200 box-border w-2.5 h-2.5 border-[1px] border-solid border-floralwhite" />
                  <div className="absolute top-[11px] left-[11px] rounded-sm bg-gainsboro-200 box-border w-2.5 h-2.5 border-[1px] border-solid border-floralwhite" />
                  <div className="absolute top-[0px] left-[11px] rounded-sm bg-gainsboro-200 box-border w-2.5 h-2.5 border-[1px] border-solid border-floralwhite" />
                </div>
              </div>
              <div className="absolute top-[279px] left-[259px] w-24 h-7">
                <div className="absolute top-[2px] left-[34px] tracking-[0.02em] leading-[180%] font-medium inline-block w-[62px] h-[22px]">
                  3 Month
                </div>
                <div className="absolute top-[0px] left-[0px] text-5xl text-floralwhite">
                  
                </div>
              </div>
            </div>
            <div className="absolute top-[0px] left-[424px] w-[374px] h-[617px]">
              <div className="absolute top-[0px] left-[0px] w-[374px] h-[617px] text-5xl text-gray-400">
                <div className="absolute top-[0px] left-[0px] w-[374px] h-[617px]">
                  <div className="absolute top-[0px] left-[0px] w-[374px] h-[617px]">
                    <div className="absolute top-[0px] left-[0px] rounded-xl bg-floralwhite shadow-[0px_18.829999923706055px_47.08px_rgba(47,_50,_125,_0.1)] w-[374px] h-[617px]" />
                    <div className="absolute top-[20px] left-[20.97px] w-[334.03px] h-[501px]">
                      <div className="absolute top-[0px] left-[0px] w-[334.03px] h-[238.66px]">
                        <img
                          className="absolute top-[0px] left-[0px] rounded-xl w-[334px] h-[238.66px] object-cover"
                          alt=""
                          src="/rectangle-323@2x.png"
                        />
                        <div className="absolute top-[0px] left-[0.02px] rounded-xl bg-darkslateblue-300 w-[334px] h-[238.66px] opacity-[0.1]" />
                      </div>
                      <div className="absolute top-[301px] left-[6.03px] font-medium inline-block w-[324px] h-[77px]">
                        AWS Certified solutions Architect
                      </div>
                      <div className="absolute top-[399px] left-[6.03px] text-lg tracking-[0.02em] leading-[180%] text-slategray-100 inline-block w-[328px] h-[102px]">
                        Lorem ipsum dolor sit amet, consectetur adipising elit,
                        sed do eiusmod tempor
                      </div>
                    </div>
                    <div className="absolute top-[538px] left-[26.63px] w-[328.37px] h-[44.25px] text-lg text-black2">
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
                        <div className="absolute top-[0px] left-[0px] rounded-[22.12px] bg-floralwhite w-11 h-[44.25px]" />
                        <img
                          className="absolute top-[0px] left-[0.37px] rounded-3xl w-11 h-11 object-cover"
                          alt=""
                          src="/image-122@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-[279px] left-[27px] w-[93px] h-[22px]">
                <div className="absolute top-[0px] left-[31px] tracking-[0.02em] leading-[180%] font-medium inline-block w-[62px] h-[22px]">
                  Design
                </div>
                <div className="absolute top-[1px] left-[0px] w-[21px] h-[21px]">
                  <div className="absolute top-[0px] left-[0px] rounded-sm bg-gainsboro-200 box-border w-2.5 h-2.5 border-[1px] border-solid border-floralwhite" />
                  <div className="absolute top-[11px] left-[0px] rounded-sm bg-gainsboro-200 box-border w-2.5 h-2.5 border-[1px] border-solid border-floralwhite" />
                  <div className="absolute top-[11px] left-[11px] rounded-sm bg-gainsboro-200 box-border w-2.5 h-2.5 border-[1px] border-solid border-floralwhite" />
                  <div className="absolute top-[0px] left-[11px] rounded-sm bg-gainsboro-200 box-border w-2.5 h-2.5 border-[1px] border-solid border-floralwhite" />
                </div>
              </div>
              <div className="absolute top-[279px] left-[259px] w-24 h-7">
                <div className="absolute top-[2px] left-[34px] tracking-[0.02em] leading-[180%] font-medium inline-block w-[62px] h-[22px]">
                  3 Month
                </div>
                <div className="absolute top-[0px] left-[0px] text-5xl text-floralwhite">
                  
                </div>
              </div>
            </div>
            <div className="absolute top-[0px] left-[848px] w-[374px] h-[617px]">
              <div className="absolute top-[0px] left-[0px] w-[374px] h-[617px] text-5xl text-gray-400">
                <div className="absolute top-[0px] left-[0px] w-[374px] h-[617px]">
                  <div className="absolute top-[0px] left-[0px] w-[374px] h-[617px]">
                    <div className="absolute top-[0px] left-[0px] rounded-xl bg-floralwhite shadow-[0px_18.829999923706055px_47.08px_rgba(47,_50,_125,_0.1)] w-[374px] h-[617px]" />
                    <div className="absolute top-[20px] left-[20.97px] w-[334.03px] h-[501px]">
                      <div className="absolute top-[0px] left-[0px] w-[334.03px] h-[238.66px]">
                        <img
                          className="absolute top-[0px] left-[0px] rounded-xl w-[334px] h-[238.66px] object-cover"
                          alt=""
                          src="/rectangle-323@2x.png"
                        />
                        <div className="absolute top-[0px] left-[0.02px] rounded-xl bg-darkslateblue-300 w-[334px] h-[238.66px] opacity-[0.1]" />
                      </div>
                      <div className="absolute top-[301px] left-[6.03px] font-medium inline-block w-[324px] h-[77px]">
                        AWS Certified solutions Architect
                      </div>
                      <div className="absolute top-[399px] left-[6.03px] text-lg tracking-[0.02em] leading-[180%] text-slategray-100 inline-block w-[328px] h-[102px]">
                        Lorem ipsum dolor sit amet, consectetur adipising elit,
                        sed do eiusmod tempor
                      </div>
                    </div>
                    <div className="absolute top-[538px] left-[26.63px] w-[328.37px] h-[44.25px] text-lg text-black2">
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
                        <div className="absolute top-[0px] left-[0px] rounded-[22.12px] bg-floralwhite w-11 h-[44.25px]" />
                        <img
                          className="absolute top-[0px] left-[0.37px] rounded-3xl w-11 h-11 object-cover"
                          alt=""
                          src="/image-122@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-[279px] left-[27px] w-[93px] h-[22px]">
                <div className="absolute top-[0px] left-[31px] tracking-[0.02em] leading-[180%] font-medium inline-block w-[62px] h-[22px]">
                  Design
                </div>
                <div className="absolute top-[1px] left-[0px] w-[21px] h-[21px]">
                  <div className="absolute top-[0px] left-[0px] rounded-sm bg-gainsboro-200 box-border w-2.5 h-2.5 border-[1px] border-solid border-floralwhite" />
                  <div className="absolute top-[11px] left-[0px] rounded-sm bg-gainsboro-200 box-border w-2.5 h-2.5 border-[1px] border-solid border-floralwhite" />
                  <div className="absolute top-[11px] left-[11px] rounded-sm bg-gainsboro-200 box-border w-2.5 h-2.5 border-[1px] border-solid border-floralwhite" />
                  <div className="absolute top-[0px] left-[11px] rounded-sm bg-gainsboro-200 box-border w-2.5 h-2.5 border-[1px] border-solid border-floralwhite" />
                </div>
              </div>
              <div className="absolute top-[279px] left-[259px] w-24 h-7">
                <div className="absolute top-[2px] left-[34px] tracking-[0.02em] leading-[180%] font-medium inline-block w-[62px] h-[22px]">
                  3 Month
                </div>
                <div className="absolute top-[0px] left-[0px] text-5xl text-floralwhite">
                  
                </div>
              </div>
            </div>
            <div className="absolute top-[0px] left-[1272px] w-[374px] h-[617px]">
              <div className="absolute top-[0px] left-[0px] w-[374px] h-[617px] text-5xl text-gray-400">
                <div className="absolute top-[0px] left-[0px] w-[374px] h-[617px]">
                  <div className="absolute top-[0px] left-[0px] w-[374px] h-[617px]">
                    <div className="absolute top-[0px] left-[0px] rounded-xl bg-floralwhite shadow-[0px_18.829999923706055px_47.08px_rgba(47,_50,_125,_0.1)] w-[374px] h-[617px]" />
                    <div className="absolute top-[20px] left-[20.97px] w-[334.03px] h-[501px]">
                      <div className="absolute top-[0px] left-[0px] w-[334px] h-[238.66px]">
                        <img
                          className="absolute top-[0px] left-[0px] rounded-xl w-[334px] h-[238.66px] object-cover"
                          alt=""
                          src="/rectangle-323@2x.png"
                        />
                      </div>
                      <div className="absolute top-[301px] left-[6.03px] font-medium inline-block w-[324px] h-[77px]">
                        AWS Certified solutions Architect
                      </div>
                      <div className="absolute top-[399px] left-[6.03px] text-lg tracking-[0.02em] leading-[180%] text-slategray-100 inline-block w-[328px] h-[102px]">
                        Lorem ipsum dolor sit amet, consectetur adipising elit,
                        sed do eiusmod tempor
                      </div>
                    </div>
                    <div className="absolute top-[538px] left-[26.63px] w-[328.37px] h-[44.25px] text-lg text-black2">
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
                        <div className="absolute top-[0px] left-[0px] rounded-[22.12px] bg-floralwhite w-11 h-[44.25px]" />
                        <img
                          className="absolute top-[0px] left-[0.37px] rounded-3xl w-11 h-11 object-cover"
                          alt=""
                          src="/image-122@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-[279px] left-[27px] w-[93px] h-[22px]">
                <div className="absolute top-[0px] left-[31px] tracking-[0.02em] leading-[180%] font-medium inline-block w-[62px] h-[22px]">
                  Design
                </div>
                <div className="absolute top-[1px] left-[0px] w-[21px] h-[21px]">
                  <div className="absolute top-[0px] left-[0px] rounded-sm bg-gainsboro-200 box-border w-2.5 h-2.5 border-[1px] border-solid border-floralwhite" />
                  <div className="absolute top-[11px] left-[0px] rounded-sm bg-gainsboro-200 box-border w-2.5 h-2.5 border-[1px] border-solid border-floralwhite" />
                  <div className="absolute top-[11px] left-[11px] rounded-sm bg-gainsboro-200 box-border w-2.5 h-2.5 border-[1px] border-solid border-floralwhite" />
                  <div className="absolute top-[0px] left-[11px] rounded-sm bg-gainsboro-200 box-border w-2.5 h-2.5 border-[1px] border-solid border-floralwhite" />
                </div>
              </div>
              <div className="absolute top-[279px] left-[259px] w-24 h-7">
                <div className="absolute top-[2px] left-[34px] tracking-[0.02em] leading-[180%] font-medium inline-block w-[62px] h-[22px]">
                  3 Month
                </div>
                <div className="absolute top-[0px] left-[0px] text-5xl text-floralwhite">
                  
                </div>
              </div>
            </div>
          </div>
          <img
            className="absolute top-[115px] left-[38px] rounded-xl w-[335px] h-[239px] object-cover"
            alt=""
            src="/rectangle-33@2x.png"
          />
        </div>
        <div className="absolute top-[115px] left-[461px] w-[338px] h-[239px]">
          <div className="absolute top-[0px] left-[0px] w-[338px] h-[239px]">
            <div className="absolute top-[0px] left-[0px] w-[338px] h-[239px]">
              <img
                className="absolute top-[0px] left-[0px] rounded-xl w-[338px] h-[239px] object-cover"
                alt=""
                src="/rectangle-344@2x.png"
              />
              <div className="absolute top-[0px] left-[0px] rounded-xl bg-darkslateblue-300 w-[338px] h-[239px] opacity-[0.1]" />
            </div>
            <div className="absolute top-[0px] left-[0px] w-[338px] h-[239px]">
              <img
                className="absolute top-[0px] left-[0px] rounded-xl w-[338px] h-[239px] object-cover"
                alt=""
                src="/rectangle-344@2x.png"
              />
              <div className="absolute top-[0px] left-[0px] rounded-xl bg-darkslateblue-300 w-[338px] h-[239px] opacity-[0.1]" />
            </div>
          </div>
        </div>
        <img
          className="absolute top-[115px] left-[1310px] rounded-xl w-[335px] h-[239px] object-cover"
          alt=""
          src="/rectangle-42@2x.png"
        />
      </div>
      <img
        className="absolute top-[1609px] left-[150px] rounded-xl w-[719px] h-[382px] object-cover"
        alt=""
        src="/rectangle-23@2x.png"
      />
      <div className="absolute top-[282px] left-[118px] text-25xl font-semibold text-darkslateblue-500 inline-block w-[670px]">
        Why Swift UI Should Be on the Radar of Every Mobile Developer
      </div>
      <div className="absolute top-[3560px] left-[0px] w-[1920px] h-[335px] text-lgi text-dimgray-100 font-caption">
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
        <div className="absolute top-[-3px] left-[196px] w-[185px] h-[51.85px] text-5xl text-gray-500 hover:cursor-pointer" onClick={()=>{navigate('/')}}>
          <b className="absolute top-[10px] left-[66px] leading-[135%]">
            Skillgorithm
          </b>
          <img
            className="absolute h-full w-[31.78%] top-[0%] right-[68.22%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/group5.svg"
          />
        </div>
      </div>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[36px] left-[110px] w-[185px] h-[51.85px]">
        <b className="absolute top-[10px] left-[66px] text-5xl leading-[135%] font-caption text-gray-500 text-left">
          Skillgorithm
        </b>
        <img
          className="absolute h-full w-[31.78%] top-[0%] right-[68.22%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/group311.svg"
        />
      </button>
    </div>
  );
};

export default BlogPage;
