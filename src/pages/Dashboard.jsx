import axios from "axios";
import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import certificate from '../assets/certificate.jpeg'

const Dashboard = () => {
  const [visible,setvisible] = useState(false);
  // const [certificate, setCertificate] = useState(null)
  const navigate = useNavigate();
  const close = () => {
    setvisible(false);
  }
  const handleDownload = () => {
    if (certificate) {
      const downloadLink = document.createElement('a');
      downloadLink.href = profile;
      downloadLink.download = './certificate.jpg'; // Set the desired filename for the download
      downloadLink.click();
    }
  }
  const handleCert = () => {
    // console.log("first");
    // axios.post("http://localhost:3001/api/v1/user/cert", {
    //   name: "John Doe",
    //   course_name: "Analog Photography"
    // })
    
    // .then((res) => {
    //     setCertificate(res.data.message);
    //     setvisible(true);
    // })
    // .catch((err) => {
    //     console.log(err);
    // });
    // console.log("first");
    setvisible(true);
 
}

  return (
    <>
      {visible && (
        <div className="fixed top-[10%] left-[25%] w-[1000px] h-[800px] bg-white z-50 rounded-41xl">
          <button className="relative left-[90%] top-32 hover:cursor-pointer border-gray-600 border-2 p-2 rounded-md" onClick={close}>Close</button>
          <button className="relative left-[60%] top-32 hover:cursor-pointer border-gray-600 border-2 p-2 rounded-md z-50" onClick={handleDownload}>Download</button>

          <img src={certificate} alt="hjsdhi" className="relative top-[50px] overflow-hidden w-[800px] h-[600px]" />
        </div>
      )}
     <div className="relative bg-floralwhite w-full h-[4100px] overflow-hidden text-left text-3xl text-dimgray-200 font-poppins">
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
      <div className="absolute top-[58px] left-[1738px] text-lg tracking-[0.02em] font-medium text-black1">
        Pooja
      </div>
      <img
        className="absolute top-[143px] left-[0px] w-[1920px] h-[785px] opacity-[0.2] mix-blend-normal"
        alt=""
        src="/rectangle.svg"
      />
      <div className="absolute top-[40px] left-[1660px] w-[63px] h-[63px]">
        <div className="absolute top-[0px] left-[0px] rounded-41xl bg-gainsboro w-[63px] h-[63px]" />
        <img
          className="absolute top-[0px] left-[0px] rounded-41xl w-[63px] h-[63px] object-cover"
          alt=""
          src="/image-12@2x.png"
        />
      </div>
      <div className="absolute top-[193px] left-[120px] w-[1687px] h-[678px] text-5xl text-white font-font-awesome-5-free">
        <div className="absolute top-[628px] left-[1567px] w-[120px] h-[50px]">
          <img
            className="absolute top-[0px] left-[70px] rounded w-[50px] h-[50px]"
            alt=""
            src="/rectangle-86.svg"
          />
          <img
            className="absolute top-[0px] left-[0px] rounded w-[50px] h-[50px]"
            alt=""
            src="/rectangle-87.svg"
          />
          <div className="absolute top-[11px] left-[89px]">&gt;</div>
          <div className="absolute top-[11px] left-[19px]">&lt;</div>
        </div>
        <div className="absolute top-[0px] left-[0px] w-[1687px] h-[578px] text-17xl text-gray-400 font-poppins">
          <div className="absolute top-[0px] left-[0px] font-semibold inline-block w-[966px]">
            Welcome back, ready for your next lesson?
          </div>
          <div className="absolute top-[104px] left-[0px] w-[1687px] h-[474px] text-5xl">
            <div className="absolute top-[0px] left-[0px] w-[529px] h-[474px]">
              <div className="absolute top-[0px] left-[0px] w-[529px] h-[474px]">
                <div className="absolute top-[0px] left-[0px] rounded-xl bg-white shadow-[0px_18.829999923706055px_47.08px_rgba(47,_50,_125,_0.1)] w-[529px] h-[474px]" />
                <div className="absolute top-[19.6px] left-[20.73px] w-[487.27px] h-[318.4px]">
                  <div className="absolute top-[0px] left-[0px] w-[487.27px] h-[258.38px]">
                    <img
                      className="absolute top-[0px] left-[0.91px] rounded-xl w-[486.36px] h-[258.38px] object-cover"
                      alt=""
                      src="/rectangle-32@2x.png"
                    />
                    <div className="absolute top-[0px] left-[0px] rounded-xl bg-darkslateblue-300 w-[486.36px] h-[258.38px] opacity-[0.1]" />
                  </div>
                  <div className="absolute top-[270.4px] left-[4.27px] leading-[180%] font-medium inline-block w-[412px] h-12">
                    WEB DEV
                  </div>
                </div>
                <div className="absolute top-[354px] left-[82px] text-lg tracking-[0.02em] font-medium text-black1 inline-block w-[42.73px] h-[30.36px]">
                  Gouri
                </div>
                <div className="absolute top-[348px] left-[25px] w-[42px] h-[42px]">
                  <div className="absolute top-[0px] left-[0px] rounded-41xl bg-gainsboro w-[42px] h-[42px]" />
                  <img
                    className="absolute top-[0px] left-[0px] rounded-41xl w-[42px] h-[42px] object-cover"
                    alt=""
                    src="/image-121@2x.png"
                  />
                </div>
              </div>
              <div className="absolute top-[415px] left-[25px] w-[483px] h-2">
                <div className="absolute top-[0px] left-[0px] rounded-sm bg-gainsboro w-[483px] h-2" />
                <div className="absolute top-[0px] left-[0px] rounded-sm bg-mediumseagreen w-[400px] h-2" />
              </div>
              <div className="absolute top-[435px] left-[414px] text-sm tracking-[0.02em] font-semibold text-gray-900 inline-block w-[93px] h-[27px]">
                Lesson 6 of 7
              </div>
            </div>
            <div className="absolute top-[0px] left-[579px] w-[529px] h-[474px]">
              <div className="absolute top-[0px] left-[0px] w-[529px] h-[474px]">
                <div className="absolute top-[0px] left-[0px] rounded-xl bg-white shadow-[0px_18.829999923706055px_47.08px_rgba(47,_50,_125,_0.1)] w-[529px] h-[474px]" />
                <div className="absolute top-[19.6px] left-[21.64px] w-[486.36px] h-[318.4px]">
                  <div className="absolute top-[0px] left-[0px] w-[486.36px] h-[258.38px]">
                    <img
                      className="absolute top-[0px] left-[0px] rounded-xl w-[486.36px] h-[258.38px] object-cover"
                      alt=""
                      src="/rectangle-321@2x.png"
                    />
                  </div>
                  <div className="absolute top-[270.4px] left-[3.36px] leading-[180%] font-medium inline-block w-[412px] h-12">
                    UI/UX Complete Course
                  </div>
                </div>
                <div className="absolute top-[354px] left-[82px] text-lg tracking-[0.02em] font-medium text-black1 inline-block w-[42.73px] h-[30.36px]">
                  Alisha
                </div>
                <div className="absolute top-[348px] left-[25px] w-[42px] h-[42px]">
                  <div className="absolute top-[0px] left-[0px] rounded-41xl bg-gainsboro w-[42px] h-[42px]" />
                  <img
                    className="absolute top-[0px] left-[0px] rounded-41xl w-[42px] h-[42px] object-cover"
                    alt=""
                    src="/image-121@2x.png"
                  />
                </div>
              </div>
              <div className="absolute top-[415px] left-[25px] w-[483px] h-2">
                <div className="absolute top-[0px] left-[0px] rounded-sm bg-gainsboro w-[483px] h-2" />
                <div className="absolute top-[0px] left-[0px] rounded-sm bg-mediumseagreen w-[330px] h-2" />
              </div>
              <div className="absolute top-[435px] left-[414px] text-sm tracking-[0.02em] font-semibold text-gray-900 inline-block w-[93px] h-[27px]">
                Lesson 4 of 7
              </div>
            </div>
            <div className="absolute top-[0px] left-[1158px] w-[529px] h-[474px]">
              <div className="absolute top-[0px] left-[0px] w-[529px] h-[474px]">
                <div className="absolute top-[0px] left-[0px] rounded-xl bg-white shadow-[0px_18.829999923706055px_47.08px_rgba(47,_50,_125,_0.1)] w-[529px] h-[474px]" />
                <div className="absolute top-[19.6px] left-[21.64px] w-[486.36px] h-[318.4px]">
                  <div className="absolute top-[0px] left-[0px] w-[486.36px] h-[258.38px]">
                    <img
                      className="absolute top-[0px] left-[0px] rounded-xl w-[486.36px] h-[258.38px] object-cover"
                      alt=""
                      src="/rectangle-322@2x.png"
                    />
                  </div>
                  <div className="absolute top-[270.4px] left-[3.36px] leading-[180%] font-medium inline-block w-[412px] h-12">
                    Data Science
                  </div>
                </div>
                <div className="absolute top-[354px] left-[82px] text-lg tracking-[0.02em] font-medium text-black1 inline-block w-[42.73px] h-[30.36px]">
                  Parthvee
                </div>
                <div className="absolute top-[348px] left-[25px] w-[42px] h-[42px]">
                  <div className="absolute top-[0px] left-[0px] rounded-41xl bg-gainsboro w-[42px] h-[42px]" />
                  <img
                    className="absolute top-[0px] left-[0px] rounded-41xl w-[42px] h-[42px] object-cover"
                    alt=""
                    src="/image-121@2x.png"
                  />
                </div>
              </div>
              <div className="absolute top-[415px] left-[25px] w-[483px] h-2">
                <div className="absolute top-[0px] left-[0px] rounded-sm bg-gainsboro w-[483px] h-2" />
                <div className="absolute top-[0px] left-[0px] rounded-sm bg-mediumseagreen w-[372px] h-2" />
              </div>
              <div className="absolute top-[435px] left-[414px] text-sm tracking-[0.02em] font-semibold text-gray-900 inline-block w-[93px] h-[27px]">
                Lesson 5 of 7
              </div>
            </div>
          </div>
          <b className="absolute top-[18px] left-[1553px] text-xl text-mediumseagreen">
            View history
          </b>
        </div>
      </div>
      <div className="absolute top-[2049px] left-[0px] w-[1920px] h-[1022px] mix-blend-darken text-11xl text-black1">
        <img
          className="absolute top-[0px] left-[0px] w-[1920px] h-[1022px] opacity-[0.2] mix-blend-normal"
          alt=""
          src="/rectangle1.svg"
        />
        <div className="absolute top-[97px] left-[139px] w-[1646px] h-[712px]">
          <div className="absolute top-[0px] left-[0px] w-[1643px] h-12">
            <div className="absolute top-[0px] left-[0px] tracking-[0.02em] font-medium">
              Recommended for you
            </div>
            <b className="absolute top-[18px] left-[1576px] text-xl text-mediumseagreen">
              See all
            </b>
          </div>
          <div className="absolute top-[95px] left-[0px] w-[1646px] h-[617px] text-sm text-darkslateblue-100">
            <div className="absolute top-[0px] left-[0px] w-[374px] h-[617px]">
              <div className="absolute top-[0px] left-[0px] w-[374px] h-[617px] text-5xl text-gray-400">
                <div className="absolute top-[0px] left-[0px] w-[374px] h-[617px]">
                  <div className="absolute top-[0px] left-[0px] w-[374px] h-[617px]">
                    <div className="absolute top-[0px] left-[0px] rounded-xl bg-white shadow-[0px_18.829999923706055px_47.08px_rgba(47,_50,_125,_0.1)] w-[374px] h-[617px]" />
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
                      <div className="absolute top-[399px] left-[6.03px] text-lg tracking-[0.02em] leading-[180%] text-darkslateblue-100 inline-block w-[328px] h-[102px]">
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
                        <div className="absolute top-[0px] left-[0px] rounded-[22.12px] bg-darkslateblue-100 w-11 h-[44.25px]" />
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
                  <div className="absolute top-[0px] left-[0px] rounded-sm bg-darkslateblue-400 box-border w-2.5 h-2.5 border-[1px] border-solid border-darkslateblue-100" />
                  <div className="absolute top-[11px] left-[0px] rounded-sm bg-darkslateblue-400 box-border w-2.5 h-2.5 border-[1px] border-solid border-darkslateblue-100" />
                  <div className="absolute top-[11px] left-[11px] rounded-sm bg-darkslateblue-400 box-border w-2.5 h-2.5 border-[1px] border-solid border-darkslateblue-100" />
                  <div className="absolute top-[0px] left-[11px] rounded-sm bg-darkslateblue-400 box-border w-2.5 h-2.5 border-[1px] border-solid border-darkslateblue-100" />
                </div>
              </div>
              <div className="absolute top-[279px] left-[259px] w-24 h-7">
                <div className="absolute top-[2px] left-[34px] tracking-[0.02em] leading-[180%] font-medium inline-block w-[62px] h-[22px]">
                  3 Month
                </div>
                <div className="absolute top-[0px] left-[0px] text-5xl font-font-awesome-5-free">
                  
                </div>
              </div>
            </div>
            <div className="absolute top-[0px] left-[424px] w-[374px] h-[617px]">
              <div className="absolute top-[0px] left-[0px] w-[374px] h-[617px] text-5xl text-gray-400">
                <div className="absolute top-[0px] left-[0px] w-[374px] h-[617px]">
                  <div className="absolute top-[0px] left-[0px] w-[374px] h-[617px]">
                    <div className="absolute top-[0px] left-[0px] rounded-xl bg-white shadow-[0px_18.829999923706055px_47.08px_rgba(47,_50,_125,_0.1)] w-[374px] h-[617px]" />
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
                      <div className="absolute top-[399px] left-[6.03px] text-lg tracking-[0.02em] leading-[180%] text-darkslateblue-100 inline-block w-[328px] h-[102px]">
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
                        <div className="absolute top-[0px] left-[0px] rounded-[22.12px] bg-darkslateblue-100 w-11 h-[44.25px]" />
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
                  <div className="absolute top-[0px] left-[0px] rounded-sm bg-darkslateblue-400 box-border w-2.5 h-2.5 border-[1px] border-solid border-darkslateblue-100" />
                  <div className="absolute top-[11px] left-[0px] rounded-sm bg-darkslateblue-400 box-border w-2.5 h-2.5 border-[1px] border-solid border-darkslateblue-100" />
                  <div className="absolute top-[11px] left-[11px] rounded-sm bg-darkslateblue-400 box-border w-2.5 h-2.5 border-[1px] border-solid border-darkslateblue-100" />
                  <div className="absolute top-[0px] left-[11px] rounded-sm bg-darkslateblue-400 box-border w-2.5 h-2.5 border-[1px] border-solid border-darkslateblue-100" />
                </div>
              </div>
              <div className="absolute top-[279px] left-[259px] w-24 h-7">
                <div className="absolute top-[2px] left-[34px] tracking-[0.02em] leading-[180%] font-medium inline-block w-[62px] h-[22px]">
                  3 Month
                </div>
                <div className="absolute top-[0px] left-[0px] text-5xl font-font-awesome-5-free">
                  
                </div>
              </div>
            </div>
            <div className="absolute top-[0px] left-[848px] w-[374px] h-[617px]">
              <div className="absolute top-[0px] left-[0px] w-[374px] h-[617px] text-5xl text-gray-400">
                <div className="absolute top-[0px] left-[0px] w-[374px] h-[617px]">
                  <div className="absolute top-[0px] left-[0px] w-[374px] h-[617px]">
                    <div className="absolute top-[0px] left-[0px] rounded-xl bg-white shadow-[0px_18.829999923706055px_47.08px_rgba(47,_50,_125,_0.1)] w-[374px] h-[617px]" />
                    <div className="absolute top-[321px] left-[27px] w-[328px] h-[200px]">
                      <div className="absolute top-[0px] left-[0px] font-medium inline-block w-[324px] h-[77px]">
                        AWS Certified solutions Architect
                      </div>
                      <div className="absolute top-[98px] left-[0px] text-lg tracking-[0.02em] leading-[180%] text-darkslateblue-100 inline-block w-[328px] h-[102px]">
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
                        <div className="absolute top-[0px] left-[0px] rounded-[22.12px] bg-darkslateblue-100 w-11 h-[44.25px]" />
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
                  <div className="absolute top-[0px] left-[0px] rounded-sm bg-darkslateblue-400 box-border w-2.5 h-2.5 border-[1px] border-solid border-darkslateblue-100" />
                  <div className="absolute top-[11px] left-[0px] rounded-sm bg-darkslateblue-400 box-border w-2.5 h-2.5 border-[1px] border-solid border-darkslateblue-100" />
                  <div className="absolute top-[11px] left-[11px] rounded-sm bg-darkslateblue-400 box-border w-2.5 h-2.5 border-[1px] border-solid border-darkslateblue-100" />
                  <div className="absolute top-[0px] left-[11px] rounded-sm bg-darkslateblue-400 box-border w-2.5 h-2.5 border-[1px] border-solid border-darkslateblue-100" />
                </div>
              </div>
              <div className="absolute top-[279px] left-[259px] w-24 h-7">
                <div className="absolute top-[2px] left-[34px] tracking-[0.02em] leading-[180%] font-medium inline-block w-[62px] h-[22px]">
                  3 Month
                </div>
                <div className="absolute top-[0px] left-[0px] text-5xl font-font-awesome-5-free">
                  
                </div>
              </div>
            </div>
            <div className="absolute top-[0px] left-[1272px] w-[374px] h-[617px]">
              <div className="absolute top-[0px] left-[0px] w-[374px] h-[617px] text-5xl text-gray-400">
                <div className="absolute top-[0px] left-[0px] w-[374px] h-[617px]">
                  <div className="absolute top-[0px] left-[0px] w-[374px] h-[617px]">
                    <div className="absolute top-[0px] left-[0px] rounded-xl bg-white shadow-[0px_18.829999923706055px_47.08px_rgba(47,_50,_125,_0.1)] w-[374px] h-[617px]" />
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
                      <div className="absolute top-[399px] left-[6.03px] text-lg tracking-[0.02em] leading-[180%] text-darkslateblue-100 inline-block w-[328px] h-[102px]">
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
                        <div className="absolute top-[0px] left-[0px] rounded-[22.12px] bg-darkslateblue-100 w-11 h-[44.25px]" />
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
                  <div className="absolute top-[0px] left-[0px] rounded-sm bg-darkslateblue-400 box-border w-2.5 h-2.5 border-[1px] border-solid border-darkslateblue-100" />
                  <div className="absolute top-[11px] left-[0px] rounded-sm bg-darkslateblue-400 box-border w-2.5 h-2.5 border-[1px] border-solid border-darkslateblue-100" />
                  <div className="absolute top-[11px] left-[11px] rounded-sm bg-darkslateblue-400 box-border w-2.5 h-2.5 border-[1px] border-solid border-darkslateblue-100" />
                  <div className="absolute top-[0px] left-[11px] rounded-sm bg-darkslateblue-400 box-border w-2.5 h-2.5 border-[1px] border-solid border-darkslateblue-100" />
                </div>
              </div>
              <div className="absolute top-[279px] left-[259px] w-24 h-7">
                <div className="absolute top-[2px] left-[34px] tracking-[0.02em] leading-[180%] font-medium inline-block w-[62px] h-[22px]">
                  3 Month
                </div>
                <div className="absolute top-[0px] left-[0px] text-5xl font-font-awesome-5-free">
                  
                </div>
              </div>
            </div>
          </div>
          <img
            className="absolute top-[115px] left-[21px] rounded-xl w-[335px] h-[239px] object-cover"
            alt=""
            src="/rectangle-33@2x.png"
          />
          <img
            className="absolute top-[115px] left-[867px] rounded-xl w-[335px] h-[239px] object-cover"
            alt=""
            src="/rectangle-33@2x.png"
          />
        </div>
      </div>
      <div className="absolute top-[2908px] left-[1665px] w-[120px] h-[50px] text-5xl text-white font-font-awesome-5-free">
        <img
          className="absolute top-[0px] left-[70px] rounded w-[50px] h-[50px]"
          alt=""
          src="/rectangle-86.svg"
        />
        <img
          className="absolute top-[0px] left-[0px] rounded w-[50px] h-[50px]"
          alt=""
          src="/rectangle-86.svg"
        />
        <div className="absolute top-[11px] left-[89px]"></div>
        <div className="absolute top-[11px] left-[19px]"></div>
      </div>
      <div className="absolute top-[3145px] left-[120px] rounded-[37px] bg-darkslateblue-100 w-[1682px] h-[459px]" />
      <img
        className="absolute h-[2.66%] w-[8.75%] top-[49.37%] right-[80.94%] bottom-[47.97%] left-[10.31%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/group.svg"
      />
      <img
        className="absolute top-[3422px] left-[1405px] w-[141.64px] h-[135.1px] object-cover"
        alt=""
        src="/casuallife3didealamp-2@2x.png"
      />
      <div className="absolute top-[3379px] left-[-55px] rounded-[50%] bg-chocolate [filter:blur(254px)] w-[350px] h-[284px]" />
      <div className="absolute top-[3215px] left-[548px] text-17xl font-semibold text-white inline-block w-[827px]">
        Online coaching lessons for remote learning.
      </div>
      <div className="absolute top-[3299px] left-[332px] text-5xl tracking-[0.02em] leading-[180%] text-white text-center inline-block w-[1259px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do
        eiusmod tempor
      </div>
      <div className="absolute top-[3458px] left-[844px] w-[236px] h-[63px] text-base text-white">
        <div className="absolute top-[0px] left-[0px] rounded-xl bg-lightseagreen w-[236px] h-[63px]" />
        <b className="absolute top-[20px] left-[40px] inline-block w-[156px] h-[31px]">
          Start learning now
        </b>
      </div>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[45px] left-[145px] w-[185px] h-[51.85px]">
        <b className="absolute top-[10px] left-[66px] text-5xl leading-[135%] font-caption text-gray-500 text-left">
          Skillgorithm
        </b>
        <img
          className="absolute h-full w-[31.78%] top-[0%] right-[68.22%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/group1.svg"
        />
      </button>
      <div className="absolute top-[3071.96px] left-[1880.96px] rounded-[50%] box-border w-[233px] h-[233px] [transform:_rotate(90.24deg)] [transform-origin:0_0] border-[3px] border-solid border-white" />
      <div className="absolute top-[3125.12px] left-[1919.74px] rounded-[50%] box-border w-[233px] h-[233px] [transform:_rotate(90.24deg)] [transform-origin:0_0] border-[3px] border-solid border-white" />
      <footer className="absolute top-[3684px] left-[0px] bg-floralwhite w-[1920px] h-[411px]" />
      <footer className="absolute top-[3684px] left-[0px] bg-floralwhite w-[1920px] h-[411px]" />
      <div className="absolute top-[3729px] left-[0px] w-[1920px] h-[335px] text-lgi text-dimgray-100 font-caption">
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
            Contac Info
          </div>
        </div>
        <div className="absolute top-[291.5px] left-[-0.5px] box-border w-[1921px] h-px border-t-[1px] border-solid border-silver" />
      </div>
      <div className="absolute top-[3715px] left-[196px] w-[185px] h-[51.85px] text-5xl text-gray-500 font-caption">
        <b className="absolute top-[10px] left-[66px] leading-[135%]">
          Skillgorithm
        </b>
        <img
          className="absolute h-full w-[31.78%] top-[0%] right-[68.22%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/group2.svg"
        />
      </div>
      <div className="absolute top-[896px] left-[119px] w-[1137px] h-[1108px] text-5xl text-black font-caption">
        <div className="absolute top-[948.14px] left-[0px] w-[1137px] h-[159.86px]">
          <img
            className="absolute top-[0px] left-[0px] rounded-sm w-[1137px] h-[159.86px]"
            alt=""
            src="/rectangle-11.svg"
          />
          <div className="absolute top-[39.96px] left-[873.26px] rounded-lg box-border w-[220.06px] h-[79.93px] border-[2px] border-solid border-black" />
          <b className="absolute top-[65.05px] left-[917.41px] font-semibold inline-block w-[150.04px] h-[29.97px]">
            View course
          </b>
          <img
            className="absolute top-[15.99px] left-[15.59px] rounded-xl w-[117.37px] h-[127.89px]"
            alt=""
            src="/rectangle-20.svg"
          />
          <div className="absolute top-[39.33px] left-[176.97px] text-base font-caption-2 inline-block w-[276.91px] h-[51.95px]">
            Photoshop - Essence
          </div>
          <div className="absolute top-[93.29px] left-[176.97px] inline-block w-[159.55px] h-[29.97px] text-smi">
            by David Green
          </div>
          <div className="absolute top-[69.94px] left-[779.31px] inline-block w-[33.01px] h-[29.97px]">
            4,7
          </div>
          <div className="absolute top-[69.94px] left-[565.53px] inline-block w-[100.86px] h-[29.97px]">
            5h 35min
          </div>
          <img
            className="absolute top-[65.21px] left-[737.14px] w-[27.87px] h-[31.97px] overflow-hidden"
            alt=""
            src="/flame-8.svg"
          />
          <img
            className="absolute h-1/5 w-[2.58%] top-[42.04%] right-[51.54%] bottom-[37.96%] left-[45.87%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/group-36.svg"
          />
          <img
            className="absolute h-2/5 w-[5.29%] top-[30%] right-[90.82%] bottom-[30%] left-[3.89%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/group-40.svg"
          />
        </div>
        <div className="absolute top-[756.31px] left-[0px] w-[1137px] h-[159.86px]">
          <img
            className="absolute top-[0px] left-[0px] rounded-sm w-[1137px] h-[159.86px]"
            alt=""
            src="/rectangle-10.svg"
          />
          <div className="absolute top-[39.96px] left-[873.26px] rounded-lg box-border w-[220.06px] h-[79.93px] border-[2px] border-solid border-black "/>
          <div className="absolute top-[38.7px] left-[176.97px] font-caption-2 inline-block w-[238.4px] h-[51.95px]">
            Basics of drawing
          </div>
          <div className="absolute top-[92.65px] left-[176.97px] text-smi inline-block w-[135.71px] h-[29.97px]">
            by Jean Tate
          </div>
          <div className="absolute top-[69.3px] left-[779.31px] text-xl inline-block w-[33.01px] h-[29.97px]">
            4,8
          </div>
          <div className="absolute top-[69.3px] left-[565.53px] text-xl inline-block w-[113.7px] h-[29.97px]">
            11h 30min
          </div>
          <b className="absolute top-[65.05px] left-[917.41px] inline-block text-center w-[132.04px] h-[29.97px] hover:cursor-pointer" >
            Completed
          </b>
          <img
            className="absolute top-[16.72px] left-[15.59px] rounded-xl w-[117.37px] h-[127.89px]"
            alt=""
            src="/rectangle-324.svg"
          />
          <img
            className="absolute top-[64.58px] left-[737.14px] w-[27.87px] h-[31.97px] overflow-hidden"
            alt=""
            src="/flame-7.svg"
          />
          <img
            className="absolute h-1/5 w-[2.58%] top-[41.65%] right-[51.54%] bottom-[38.35%] left-[45.87%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/group-17.svg"
          />
          <img
            className="absolute h-2/5 w-[5.16%] top-[30.46%] right-[90.89%] bottom-[29.54%] left-[3.95%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/group-18.svg"
          />
        </div>
        <div className="absolute top-[564.48px] left-[0px] w-[1137px] h-[159.86px]">
          <img
            className="absolute top-[0px] left-[0px] rounded-sm w-[1137px] h-[159.86px]"
            alt=""
            src="/rectangle-9.svg"
          />
          <div className="absolute top-[39.96px] left-[873.26px] rounded-lg box-border w-[220.06px] h-[79.93px] border-[2px] border-solid border-black" />
          <div className="absolute top-[38.7px] left-[176.97px] font-caption-2 inline-block w-[238.4px] h-[51.95px]">
            Master Instagram
          </div>
          <div className="absolute top-[92.65px] left-[176.97px] text-smi inline-block w-[143.04px] h-[29.97px]">
            by Sophie Gill
          </div>
          <div className="absolute top-[67.77px] left-[780.8px] text-xl inline-block w-[33.01px] h-[29.97px]">
            4,6
          </div>
          <div className="absolute top-[67.77px] left-[567.01px] text-xl inline-block w-[100.86px] h-[29.97px]">
            7h 40min
          </div>
          <b className="absolute top-[65.05px] left-[917.41px] inline-block text-center w-[132.04px] h-[29.97px]">
            Completed
          </b>
          <img
            className="absolute top-[16.72px] left-[15.59px] rounded-xl w-[117.37px] h-[127.89px]"
            alt=""
            src="/rectangle-19.svg"
          />
          <img
            className="absolute top-[63.05px] left-[738.62px] w-[27.87px] h-[31.97px] overflow-hidden"
            alt=""
            src="/flame-6.svg"
          />
          <img
            className="absolute h-1/5 w-[2.58%] top-[40.69%] right-[51.41%] bottom-[39.31%] left-[46.01%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/group-16.svg"
          />
          <img
            className="absolute top-[48.69px] left-[44.93px] w-[58.68px] h-[63.94px] object-cover"
            alt=""
            src="/image-15@2x.png"
          />
        </div>
        <div className="absolute top-[372.65px] left-[0px] w-[1137px] h-[159.86px]">
          <img
            className="absolute top-[0px] left-[0px] rounded-sm w-[1137px] h-[159.86px]"
            alt=""
            src="/rectangle-8.svg"
          />
          <div className="absolute top-[39.96px] left-[873.26px] rounded-lg box-border w-[220.06px] h-[79.93px] border-[2px] border-solid border-black" />
          <div className="absolute top-[37.97px] left-[176.97px] font-caption-2 inline-block w-[275.08px] h-[51.95px]">
            Analog photography
          </div>
          <div className="absolute top-[91.92px] left-[176.97px] text-smi inline-block w-[201.73px] h-[29.97px]">
            by Gordon Norman
          </div>
          <div className="absolute top-[69.3px] left-[780.8px] text-xl inline-block w-[33.01px] h-[29.97px]">
            4,7
          </div>
          <div className="absolute top-[69.3px] left-[567.01px] text-xl inline-block w-[100.86px] h-[29.97px]">
            3h 15min
          </div>
          {/* main*/}
          <b className="absolute top-[65.05px] left-[917.41px] inline-block text-center w-[132.04px] h-[29.97px] hover:cursor-pointer" onClick={handleCert}>
            Completed
          </b>
          <img
            className="absolute top-[15.99px] left-[15.59px] rounded-xl w-[117.37px] h-[127.89px]"
            alt=""
            src="/rectangle-13.svg"
          />
          <img
            className="absolute top-[64.58px] left-[738.62px] w-[27.87px] h-[31.97px] overflow-hidden"
            alt=""
            src="/flame-5.svg"
          />
          <img
            className="absolute h-1/5 w-[2.58%] top-[41.65%] right-[51.41%] bottom-[38.35%] left-[46.01%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/group-15.svg"
          />
          <img
            className="absolute h-2/5 w-[5.16%] top-[30%] right-[90.89%] bottom-[30%] left-[3.95%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/group-21.svg"
          />
        </div>
        <div className="absolute top-[180.82px] left-[0px] w-[1137px] h-[159.86px]">
          <img
            className="absolute top-[0px] left-[0px] rounded-sm w-[1137px] h-[159.86px]"
            alt=""
            src="/rectangle-7.svg"
          />
          <img
            className="absolute top-[15.99px] left-[15.59px] rounded-xl w-[117.37px] h-[127.89px]"
            alt=""
            src="/rectangle-12.svg"
          />
          <div className="absolute top-[39.86px] left-[873.26px] rounded-lg box-border w-[220.06px] h-[79.93px] border-[2px] border-solid border-black" />
          <div className="absolute top-[37.86px] left-[176.97px] font-caption-2 inline-block w-[163.21px] h-[51.95px]">
            Learn Figma
          </div>
          <div className="absolute top-[91.81px] left-[176.97px] text-smi inline-block w-[242.07px] h-[29.97px]">
            by Christopher Morgan
          </div>
          <div className="absolute top-[68.67px] left-[782.29px] text-xl inline-block w-[33.01px] h-[29.97px]">
            4,9
          </div>
          <div className="absolute top-[68.67px] left-[568.5px] text-xl inline-block w-[100.86px] h-[29.97px]">
            6h 30min
          </div>
          <b className="absolute top-[64.94px] left-[923.41px] inline-block text-center w-[132.04px] h-[29.97px]">
            In Progress
          </b>
          <img
            className="absolute top-[63.94px] left-[740.11px] w-[27.87px] h-[31.97px] overflow-hidden"
            alt=""
            src="/flame-1.svg"
          />
          <img
            className="absolute top-[47.96px] left-[54.71px] w-[39.12px] h-[63.94px] overflow-hidden"
            alt=""
            src="/frame.svg"
          />
          <img
            className="absolute h-1/5 w-[2.58%] top-[41.25%] right-[51.28%] bottom-[38.75%] left-[46.14%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/group-14.svg"
          />
        </div>
        <div className="absolute top-[108.39px] left-[0px] font-caption-2 inline-block w-[150.38px] h-[51.95px]">
          All Courses
        </div>
        <div className="absolute top-[108.39px] left-[204.86px] font-caption-2 inline-block w-[157.71px] h-[51.95px] opacity-[0.3]">
          Completed
        </div>
        <div className="absolute top-[108.39px] left-[420.72px] font-caption-2 inline-block w-[133.87px] h-[51.95px] opacity-[0.3]">
          Ongoing
        </div>
        <div className="absolute top-[0px] left-[0px] text-21xl font-caption-2 inline-block w-[163.21px] h-[75.93px]">
          Courses
        </div>
      </div>
      <div className="absolute top-[987px] left-[1271px] w-[546.44px] h-[541px] text-xl text-black font-caption-2">
        <div className="absolute top-[71.81px] left-[422.94px] rounded-lg bg-grey w-[106.96px] h-[45.74px]" />
        <div className="absolute top-[78px] left-[0px] inline-block w-[165px] h-[37px]">
          Learning Hours
        </div>
        <div className="absolute top-[77.53px] left-[165.3px] inline-block w-[102.09px] h-[37.16px] opacity-[0.3]">
          My Courses
        </div>
        <b className="absolute top-[85px] left-[427px] inline-block font-caption w-[68px] h-[21px]">
          Weekly
        </b>
        <div className="absolute top-[0px] left-[0px] text-5xl inline-block w-[192.04px] h-[54.31px]">
          Your statistics
        </div>
        <img
          className="absolute h-[1.12%] w-[1.62%] top-[17.37%] right-[6.6%] bottom-[81.5%] left-[91.78%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/group-20.svg"
        />
        <div className="absolute top-[160.59px] left-[0px] w-[546.44px] h-[380.41px] text-smi font-caption">
          <div className="absolute top-[363.48px] left-[23.48px] inline-block w-[50.33px] h-[16.93px]">
            mon
          </div>
          <div className="absolute top-[321.07px] left-[0px] text-right inline-block w-[7.68px] h-[16.93px]">
            0
          </div>
          <div className="absolute top-[256.86px] left-[0px] text-right inline-block w-[7.68px] h-[16.93px]">
            1
          </div>
          <div className="absolute top-[192.64px] left-[0px] text-right inline-block w-[7.68px] h-[16.93px]">
            2
          </div>
          <div className="absolute top-[128.43px] left-[0px] text-right inline-block w-[7.68px] h-[16.93px]">
            3
          </div>
          <div className="absolute top-[64.21px] left-[0px] text-right inline-block w-[7.68px] h-[16.93px]">
            4
          </div>
          <div className="absolute top-[0px] left-[0px] text-right inline-block w-[7.68px] h-[16.93px]">
            5
          </div>
          <div className="absolute top-[363.48px] left-[111.01px] inline-block w-[26.82px] h-[16.93px]">
            tue
          </div>
          <div className="absolute top-[363.48px] left-[188.65px] inline-block w-[35.29px] h-[16.93px]">
            wed
          </div>
          <div className="absolute top-[363.48px] left-[274.77px] inline-block w-[26.82px] h-[16.93px]">
            thu
          </div>
          <div className="absolute top-[363.48px] left-[352.41px] inline-block w-[18.35px] h-[16.93px]">
            fri
          </div>
          <div className="absolute top-[363.48px] left-[421.59px] inline-block w-[26.82px] h-[16.93px]">
            sat
          </div>
          <div className="absolute top-[363.48px] left-[499.24px] inline-block w-[31.06px] h-[16.93px]">
            sun
          </div>
          <img
            className="absolute w-[calc(100%_-_71.22px)] top-[333.03px] right-[31.7px] left-[39.51px] max-w-full overflow-hidden h-px"
            alt=""
            src="/divider--graph--horizontal.svg"
          />
          <img
            className="absolute w-[calc(100%_-_71.22px)] top-[268.71px] right-[31.7px] left-[39.51px] max-w-full overflow-hidden h-px"
            alt=""
            src="/divider--graph--horizontal1.svg"
          />
          <img
            className="absolute w-[calc(100%_-_71.22px)] top-[204.4px] right-[31.7px] left-[39.51px] max-w-full overflow-hidden h-px"
            alt=""
            src="/divider--graph--horizontal2.svg"
          />
          <img
            className="absolute w-[calc(100%_-_47.26px)] top-[142.05px] right-[16.54px] left-[30.72px] max-w-full overflow-hidden h-[5.09px]"
            alt=""
            src="/divider--graph--horizontal3.svg"
          />
          <img
            className="absolute w-[calc(100%_-_47.26px)] top-[78.06px] right-[16.54px] left-[30.72px] max-w-full overflow-hidden h-[5.86px]"
            alt=""
            src="/divider--graph--horizontal4.svg"
          />
          <img
            className="absolute w-[calc(100%_-_47.26px)] top-[14.07px] right-[16.54px] left-[30.72px] max-w-full overflow-hidden h-[6.63px]"
            alt=""
            src="/divider--graph--horizontal5.svg"
          />
          <div className="absolute top-[182.43px] right-[390.34px] w-[63.36px] h-[62.1px] text-center text-sm font-caption-2">
            <img
              className="absolute top-[45.29px] right-[22.65px] w-[17.44px] h-[19.81px]"
              alt=""
              src="/circle-pointer-4.svg"
            />
            <div className="absolute top-[0px] right-[0px] w-[63.36px] h-[42.9px]">
              <img
                className="relative w-[94.34px] h-[71.47px] opacity-[0.3]"
                alt=""
                src="/sheet.svg"
              />
              <img
                className="relative w-[61px] h-[40.87px]"
                alt=""
                src="/sheet1.svg"
              />
              <div className="absolute h-[calc(100%_-_21.9px)] w-[calc(100%_-_26.36px)] top-[8px] left-[13px] tracking-[0.2px] leading-[20px] flex items-center justify-center">
                1,5h
              </div>
            </div>
          </div>
          <div className="absolute top-[120.33px] right-[308.46px] w-[63.36px] h-[62.1px] text-center text-sm font-caption-2">
            <img
              className="absolute top-[45.29px] right-[22.65px] w-[17.44px] h-[19.81px]"
              alt=""
              src="/circle-pointer-41.svg"
            />
            <div className="absolute top-[0px] right-[0px] w-[63.36px] h-[42.9px]">
              <img
                className="relative w-[94.34px] h-[71.47px] opacity-[0.3]"
                alt=""
                src="/sheet2.svg"
              />
              <img
                className="relative w-[61px] h-[40.87px]"
                alt=""
                src="/sheet3.svg"
              />
              <div className="absolute h-[calc(100%_-_21.9px)] w-[calc(100%_-_18.33px)] top-[8px] left-[8.98px] tracking-[0.2px] leading-[20px] flex items-center justify-center">
                2,5h
              </div>
            </div>
          </div>
          <div className="absolute top-[20.69px] right-[153.17px] w-[63.36px] h-[62.1px] text-center text-sm font-caption-2">
            <img
              className="absolute top-[45.29px] right-[22.65px] w-[17.44px] h-[19.81px]"
              alt=""
              src="/circle-pointer-42.svg"
            />
            <div className="absolute top-[0px] right-[0px] w-[63.36px] h-[42.9px]">
              <img
                className="relative w-[94.34px] h-[71.47px] opacity-[0.3]"
                alt=""
                src="/sheet4.svg"
              />
              <img
                className="relative w-[61px] h-[40.87px]"
                alt=""
                src="/sheet5.svg"
              />
              <div className="absolute h-[calc(100%_-_21.9px)] w-[calc(100%_-_26.36px)] top-[8px] left-[13px] tracking-[0.2px] leading-[20px] flex items-center justify-center">
                4h
              </div>
            </div>
          </div>
          <img
            className="absolute w-[calc(100%_-_70.73px)] top-[72.98px] right-[32.23px] left-[38.5px] max-w-full overflow-hidden h-[261.78px]"
            alt=""
            src="/today-graph.svg"
          />
          <div className="absolute top-[276.82px] right-[475.4px] w-[63.36px] h-[62.1px] text-center text-sm font-caption-2">
            <img
              className="absolute top-[45.29px] right-[22.65px] w-[17.44px] h-[19.81px]"
              alt=""
              src="/circle-pointer-43.svg"
            />
            <div className="absolute top-[0px] right-[0px] w-[63.36px] h-[42.9px]">
              <img
                className="relative w-[94.34px] h-[71.47px] opacity-[0.3]"
                alt=""
                src="/sheet6.svg"
              />
              <img
                className="relative w-[61px] h-[40.87px]"
                alt=""
                src="/sheet7.svg"
              />
              <div className="absolute h-[calc(100%_-_21.9px)] w-[calc(100%_-_26.36px)] top-[8px] left-[13px] tracking-[0.2px] leading-[20px] flex items-center justify-center">
                0h
              </div>
            </div>
          </div>
          <div className="absolute top-[215.7px] right-[226.58px] w-[63.36px] h-[62.1px] text-center text-sm font-caption-2">
            <img
              className="absolute top-[45.29px] right-[22.65px] w-[17.44px] h-[19.81px]"
              alt=""
              src="/circle-pointer-44.svg"
            />
            <div className="absolute top-[0px] right-[0px] w-[63.36px] h-[42.9px]">
              <img
                className="relative w-[94.34px] h-[71.47px] opacity-[0.3]"
                alt=""
                src="/sheet8.svg"
              />
              <img
                className="relative w-[61px] h-[40.87px]"
                alt=""
                src="/sheet9.svg"
              />
              <div className="absolute h-[calc(100%_-_21.9px)] w-[calc(100%_-_26.36px)] top-[8px] left-[13px] tracking-[0.2px] leading-[20px] flex items-center justify-center">
                1h
              </div>
            </div>
          </div>
          <div className="absolute top-[85.03px] right-[79.76px] w-[63.36px] h-[62.1px] text-center text-sm font-caption-2">
            <img
              className="absolute top-[45.29px] right-[22.65px] w-[17.44px] h-[19.81px]"
              alt=""
              src="/circle-pointer-45.svg"
            />
            <div className="absolute top-[0px] right-[0px] w-[63.36px] h-[42.9px]">
              <img
                className="relative w-[94.34px] h-[71.47px] opacity-[0.3]"
                alt=""
                src="/sheet10.svg"
              />
              <img
                className="relative w-[61px] h-[40.87px]"
                alt=""
                src="/sheet11.svg"
              />
              <div className="absolute h-[calc(100%_-_21.9px)] w-[calc(100%_-_26.36px)] top-[8px] left-[13px] tracking-[0.2px] leading-[20px] flex items-center justify-center">
                3h
              </div>
            </div>
          </div>
          <div className="absolute top-[151.09px] right-[0px] w-[63.36px] h-[62.1px] text-center text-sm font-caption-2">
            <img
              className="absolute top-[45.29px] right-[22.65px] w-[17.44px] h-[19.81px]"
              alt=""
              src="/circle-pointer-46.svg"
            />
            <div className="absolute top-[0px] right-[0px] w-[63.36px] h-[42.9px]">
              <img
                className="relative w-[94.34px] h-[71.47px] opacity-[0.3]"
                alt=""
                src="/sheet12.svg"
              />
              <img
                className="relative w-[61px] h-[40.87px]"
                alt=""
                src="/sheet13.svg"
              />
              <div className="absolute h-[calc(100%_-_21.9px)] w-[calc(100%_-_26.36px)] top-[8px] left-[13px] tracking-[0.2px] leading-[20px] flex items-center justify-center">
                2h
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Dashboard;
