import React from "react";
import { useNavigate } from "react-router-dom";

const PlayCourse = () => {
  const navigate = useNavigate();
  const handleclickss = ()=>{
    const htmlFileUrl1 ="http://127.0.0.1:3000/";
    window.open(htmlFileUrl1, '_blank');
  }
  const handleclick = () => {
    const htmlFileUrl = 'http://127.0.0.1:5500/src/visualization/BPlusTree.html';
    window.open(htmlFileUrl, '_blank');
    
  }
  const handleclicks = () => {
    const htmlFileUrl = 'http://127.0.0.1:63483/src/HTML/quiz.html';
    window.open(htmlFileUrl, '_blank');
    
  }

  return (
    <div className="relative bg-floralwhite w-full h-[3450px] overflow-hidden text-left text-3xl text-black font-poppins">
      <div className="absolute top-[2366.7px] left-[126px] w-[1700px] h-[616.3px] text-5xl text-mediumseagreen">
        <div className="absolute top-[0px] left-[0px] w-[827px] h-[616.3px] overflow-hidden">
          <div className="absolute top-[137.14px] left-[0px] w-[827px] h-[479.16px]">
            <div className="absolute top-[346.16px] left-[0px] rounded-3xs bg-white w-[827px] h-[133px]" />
            <div className="absolute top-[435.16px] left-[270px] leading-[20px] font-black">
              $40.00
            </div>
            <img
              className="absolute h-[4.79%] w-[18.06%] top-[0%] right-[49.29%] bottom-[95.21%] left-[32.65%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/star.svg"
            />
            <div className="absolute top-[370.16px] left-[270px] leading-[20px] font-black text-midnightblue-100">
              DevOps
            </div>
            <img
              className="absolute top-[361.16px] left-[15px] rounded-3xs w-40 h-[103px] object-cover"
              alt=""
              src="/image@2x.png"
            />
          </div>
          <div className="absolute top-[0px] left-[0px] w-[827px] h-[453.3px]">
            <div className="absolute top-[320.3px] left-[0px] rounded-3xs bg-white shadow-[0px_50px_80px_rgba(0,_0,_0,_0.05)] w-[827px] h-[133px]" />
            <div className="absolute top-[372.3px] left-[743px] w-[53.72px] h-11">
              <div className="absolute top-[20px] left-[53.72px] rounded-md bg-mediumseagreen w-[53.72px] h-11 [transform:_rotate(180deg)] [transform-origin:0_0]" />
              <img
                className="absolute h-[78.2%] w-[72.6%] top-[-50%] right-[14.37%] bottom-[10.44%] left-[13.03%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/shopping-bag--24--outline.svg"
              />
            </div>
            <div className="absolute top-[409.3px] left-[270px] leading-[20px] font-black">
              $40.00
            </div>
            <img
              className="absolute h-[5.06%] w-[18.06%] top-[0%] right-[49.29%] bottom-[94.94%] left-[32.65%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/star1.svg"
            />
            <div className="absolute top-[344.3px] left-[270px] leading-[20px] font-black text-midnightblue-100">
              AWS Certification
            </div>
            <img
              className="absolute top-[335.3px] left-[15px] rounded-3xs w-40 h-[103px] object-cover"
              alt=""
              src="/image1@2x.png"
            />
          </div>
          <b className="absolute top-[225.3px] left-[0px] text-26xl leading-[55px] text-midnightblue-100">
            Similar Courses
          </b>
        </div>
        <div className="absolute top-[0px] left-[900px] w-[800px] h-[616.3px] overflow-hidden">
          <div className="absolute top-[0px] left-[0px] w-[800px] h-[453.3px]">
            <div className="absolute top-[320.3px] left-[0px] rounded-3xs bg-white w-[800px] h-[133px]" />
            <div className="absolute top-[409.3px] left-[270px] leading-[20px] font-black">
              $40.00
            </div>
            <img
              className="absolute h-[5.06%] w-[18.67%] top-[0%] right-[47.58%] bottom-[94.94%] left-[33.75%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/star1.svg"
            />
            <div className="absolute top-[344.3px] left-[270px] leading-[20px] font-black text-midnightblue-100">
              AI Model Training
            </div>
            <img
              className="absolute top-[335.3px] left-[15px] rounded-3xs w-40 h-[103px] object-cover"
              alt=""
              src="/image2@2x.png"
            />
          </div>
          <div className="absolute top-[137.14px] left-[0px] w-[800px] h-[479.16px]">
            <img
              className="absolute h-[4.79%] w-[18.67%] top-[0%] right-[48.21%] bottom-[95.21%] left-[33.13%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/star.svg"
            />
            <div className="absolute top-[346.16px] left-[0px] rounded-3xs bg-white w-[800px] h-[133px] overflow-hidden">
              <div className="absolute top-[89px] left-[270px] leading-[20px] font-black">
                $40.00
              </div>
              <div className="absolute top-[24px] left-[270px] leading-[20px] font-black text-midnightblue-100">
                MERN Stack Development
              </div>
              <img
                className="absolute top-[15px] left-[15px] rounded-3xs w-40 h-[103px] object-cover"
                alt=""
                src="/image3@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[2770px] left-[1788.72px] rounded-md bg-mediumseagreen w-[53.72px] h-11 [transform:_rotate(180deg)] [transform-origin:0_0]" />
      <img
        className="absolute h-[0.83%] w-[1.35%] top-[60.63%] right-[7.55%] bottom-[30.54%] left-[91.09%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/vector.svg"
      />
      <div className="absolute top-[2920px] left-[1788.72px] rounded-md bg-mediumseagreen w-[53.72px] h-11 [transform:_rotate(180deg)] [transform-origin:0_0]" />
      <img
        className="absolute h-[0.83%] w-[1.35%] top-[72.43%] right-[7.55%] bottom-[26.74%] left-[91.09%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/vector1.svg"
      />
      <div className="absolute top-[2892px] left-[869px] w-[53.72px] h-11">
        <div className="absolute top-[40px] left-[53.72px] rounded-md bg-mediumseagreen w-[53.72px] h-11 [transform:_rotate(180deg)] [transform-origin:0_0]" />
        <img
          className="absolute h-[78.2%] w-[72.6%] top-[11.36%] right-[14.37%] bottom-[10.44%] left-[13.03%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/shopping-bag--24--outline1.svg"
        />
      </div>
      <img
        className="absolute h-[0.83%] w-[1.35%] top-[72.43%] right-[52.66%] bottom-[26.74%] left-[45.99%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/vector1.svg"
      />
      <div className="absolute top-[867px] left-[111px] w-[1720px] h-[579px] text-5xl text-dimgray-300">
        <div className="absolute top-[459px] left-[0px] w-[1720px] h-[120px]">
          <div className="absolute top-[45px] left-[0px] leading-[37.5px] inline-block w-[1720px]">
            <p className="[margin-block-start:0] [margin-block-end:5px]">
              Have a doubt, you can always connect live with a teacher or
              mentor.
            </p>
            <p className="m-0">Try Here!</p>
          </div>
          <b className="absolute top-[0px] left-[0px] text-11xl inline-block text-midnightblue-100 w-[653.19px]">
            Connect to your Guide
          </b>
        </div>
        <div className="absolute top-[271px] left-[0px] w-[1720px] h-[83px]">
          <div className="absolute top-[45px] left-[0px] leading-[37.5px] inline-block w-[1720px]">
            The B-tree generalizes the binary search tree, allowing for nodes
            with more than two children.
          </div>
          <b className="absolute top-[0px] left-[0px] text-13xl inline-block text-midnightblue-100 w-[366.52px]">
            Test your Knowledge
          </b>
        </div>
        <div className="absolute top-[0px] left-[0px] w-[1720px] h-[238px]">
          <div className="absolute top-[45px] left-[0px] leading-[37.5px] inline-block w-[1720px]">
            <p className="[margin-block-start:0] [margin-block-end:5px]">
              The choice of a good data structure makes it possible to perform a
              variety of critical operations effectively. An efficient data
              structure also uses minimum memory space and execution time to
              process the structure. A data structure is not only used for
              organising the data. It is also used for processing, retrieving,
              and storing data.
            </p>
            <p className="m-0">
              There are different basic and advanced types of data structures
              that are used in almost every program or software system that has
              been developed. So we must have good knowledge of data structures.
            </p>
          </div>
          <b className="absolute top-[0px] left-[0px] text-13xl inline-block text-midnightblue-100 w-[434.1px]">
            Course Details
          </b>
        </div>
      </div>
      <div className="absolute top-[134px] left-[111px] w-[1720px] h-[696px] text-lg text-midnightblue-100">
        <div className="absolute top-[0px] left-[0px] rounded-xl bg-whitesmoke-200 shadow-[-6px_-6px_13px_rgba(0,_0,_0,_0.25),_6px_7px_13px_rgba(0,_0,_0,_0.25)] w-[1720px] h-[696px]" />
        <div className="absolute top-[18px] left-[1169px] w-[423px] h-[562px]">
          <div className="absolute top-[46.4px] left-[0px] w-[423px] h-[72.18px]">
            <div className="absolute top-[0px] left-[0px] rounded-3xs bg-white w-[423px] h-[72.18px]" />
            <div className="absolute top-[16.5px] left-[155.03px] leading-[20px] font-semibold inline-block w-[241.4px] h-[20.62px]">
              Introduction to B+ Trees
            </div>
            <div className="absolute top-[40.22px] left-[155.03px] text-sm font-medium text-mediumseagreen inline-block w-[28.79px] h-[21.66px]">
              1:57
            </div>
            <img
              className="absolute top-[10.31px] left-[11.07px] rounded-8xs w-[88.59px] h-[51.56px] object-cover"
              alt=""
              src="/image4@2x.png"
            />
          </div>
          <div className="absolute top-[312.45px] left-[0px] w-[423px] h-[72.18px]">
            <div className="absolute top-[0px] left-[0px] rounded-3xs bg-white w-[423px] h-[72.18px] opacity-[0.5]" />
            <div className="absolute top-[16.5px] left-[155.03px] leading-[20px] font-semibold inline-block w-[228.11px] h-[20.62px] opacity-[0.5]">
              Searching in B+ Trees..
            </div>
            <div className="absolute top-[40.22px] left-[155.03px] text-sm font-medium text-mediumseagreen inline-block w-[29.9px] h-[21.66px] opacity-[0.5]">
              6:10
            </div>
            <img
              className="absolute top-[10.31px] left-[11.07px] rounded-8xs w-[88.59px] h-[51.56px] object-cover opacity-[0.5]"
              alt=""
              src="/image5@2x.png"
            />
            <img
              className="absolute top-[26.81px] left-[45.4px] w-[19.93px] h-[18.56px]"
              alt=""
              src="/group-3237.svg"
            />
          </div>
          <div className="absolute top-[401.13px] left-[0px] w-[423px] h-[72.18px]">
            <div className="absolute top-[0px] left-[0px] rounded-3xs bg-white w-[423px] h-[72.18px] opacity-[0.5]" />
            <div className="absolute top-[16.5px] left-[155.03px] leading-[20px] font-semibold inline-block w-[246.93px] h-[20.62px] opacity-[0.5]">
              Algorithm and analysis..
            </div>
            <div className="absolute top-[40.22px] left-[155.03px] text-sm font-medium text-mediumseagreen inline-block w-[39.86px] h-[21.66px] opacity-[0.5]">
              10:00
            </div>
            <img
              className="absolute top-[10.31px] left-[11.07px] rounded-8xs w-[88.59px] h-[51.56px] object-cover opacity-[0.5]"
              alt=""
              src="/image6@2x.png"
            />
            <img
              className="absolute top-[26.81px] left-[45.4px] w-[19.93px] h-[18.56px]"
              alt=""
              src="/group-32371.svg"
            />
          </div>
          <div className="absolute top-[489.82px] left-[0px] w-[423px] h-[72.18px]">
            <div className="absolute top-[0px] left-[0px] rounded-3xs bg-white w-[423px] h-[72.18px] opacity-[0.5]" />
            <div className="absolute top-[16.5px] left-[155.03px] leading-[20px] font-semibold inline-block w-[174.96px] h-[20.62px] opacity-[0.5]">
              Code application
            </div>
            <div className="absolute top-[40.22px] left-[155.03px] text-sm font-medium text-mediumseagreen inline-block w-[32.11px] h-[21.66px] opacity-[0.5]">
              7:53
            </div>
            <img
              className="absolute top-[10.31px] left-[11.07px] rounded-8xs w-[88.59px] h-[51.56px] object-cover opacity-[0.5]"
              alt=""
              src="/image7@2x.png"
            />
            <img
              className="absolute top-[26.81px] left-[45.4px] w-[19.93px] h-[18.56px]"
              alt=""
              src="/group-32372.svg"
            />
          </div>
          <div className="absolute top-[135.09px] left-[0px] w-[423px] h-[72.18px]">
            <div className="absolute top-[0px] left-[0px] rounded-3xs bg-white shadow-[0px_50px_50px_rgba(0,_0,_0,_0.1)] w-[423px] h-[72.18px]" />
            <div className="absolute top-[16.5px] left-[155.03px] leading-[20px] font-semibold inline-block w-[213.71px] h-[20.62px]">
              Insertion in B+ Trees..
            </div>
            <div className="absolute top-[40.22px] left-[155.03px] text-sm font-medium text-mediumseagreen inline-block w-[33.22px] h-[21.66px]">
              5:43
            </div>
            <img
              className="absolute top-[10.31px] left-[11.07px] rounded-8xs w-[88.59px] h-[51.56px] object-cover"
              alt=""
              src="/image8@2x.png"
            />
          </div>
          <div className="absolute top-[135.09px] left-[0px] w-[423px] h-[72.18px]">
            <div className="absolute top-[0px] left-[0px] rounded-3xs bg-white shadow-[0px_50px_50px_rgba(0,_0,_0,_0.1)] w-[423px] h-[72.18px]" />
            <div className="absolute top-[16.5px] left-[155.03px] leading-[20px] font-semibold inline-block w-[213.71px] h-[20.62px]">
              Insertion in B+ Trees..
            </div>
            <div className="absolute top-[40.22px] left-[155.03px] text-sm font-medium text-mediumseagreen inline-block w-[33.22px] h-[21.66px]">
              5:43
            </div>
            <img
              className="absolute top-[10.31px] left-[11.07px] rounded-8xs w-[88.59px] h-[51.56px] object-cover"
              alt=""
              src="/image8@2x.png"
            />
          </div>
          <div className="absolute top-[224px] left-[0px] w-[423px] h-[72.18px]">
            <div className="absolute top-[0px] left-[0px] rounded-3xs bg-white shadow-[0px_50px_50px_rgba(0,_0,_0,_0.1)] w-[423px] h-[72.18px]" />
            <div className="absolute top-[16.5px] left-[155.03px] leading-[20px] font-semibold inline-block w-[213.71px] h-[20.62px]">
              Deletion in B+ Trees..
            </div>
            <div className="absolute top-[40.22px] left-[155.03px] text-sm font-medium text-mediumseagreen inline-block w-[33.22px] h-[21.66px]">
              8:11
            </div>
            <img
              className="absolute top-[10.31px] left-[11.07px] rounded-8xs w-[88.59px] h-[51.56px] object-cover"
              alt=""
              src="/image9@2x.png"
            />
          </div>
          <b className="absolute top-[0px] left-[0px] text-6xl inline-block text-mediumseagreen w-[228.11px] h-[39.19px]">
            Course Playlists
          </b>
        </div>
        <div className="absolute top-[68px] left-[45px] w-[962px] h-[598px] text-6xl text-mediumseagreen">
          <b className="absolute top-[560px] left-[1px] inline-block w-[603px]">
            Introduction to B+ Trees | Episode 1
          </b>
          <iframe
            className="absolute top-[0px] left-[0px] w-[962px] h-[535px]"
            src="https://www.youtube.com/embed/0IAPZzGSbME?rel=0"
            frameBorder="0"
            allowFullScreen
          />
        </div>
        <div className="absolute top-[22px] left-[44px] text-base tracking-[0.03em] font-medium text-midnightblue-200">
          <span>Home | Courses |</span>
          <span className="text-blueviolet">{` `}</span>
          <span className="text-mediumseagreen">Course Details</span>
        </div>
      </div>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[746px] left-[1376px] w-[207px] h-[54px]">
        <div className="absolute top-[0px] left-[0px] rounded-77xl bg-mediumseagreen w-[207px] h-[55px]" />
        <div className="absolute top-[13px] left-[49px] text-6xl font-medium font-caption text-white text-left hover:cursor-pointer" onClick={handleclick}>
          Try it Out
        </div>
      </button>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[1236px] left-[111px] w-[207px] h-[54px]">
        <div className="absolute top-[0px] left-[0px] rounded-77xl bg-mediumseagreen w-[207px] h-[55px]" />
        <div className="absolute top-[0px] left-[0px] rounded-77xl bg-mediumseagreen w-[207px] h-[55px]" />
        <div className="absolute top-[13px] left-[49px] text-6xl font-medium font-caption text-white text-left hover:cursor-pointer" onClick={handleclicks}>
          Take Quiz
        </div>
      </button>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[1488px] left-[111px] w-[207px] h-[54px]">
        <div className="absolute top-[0px] left-[0px] rounded-77xl bg-mediumseagreen w-[207px] h-[55px]" />
        <div className="absolute top-[0px] left-[0px] rounded-77xl bg-mediumseagreen w-[207px] h-[55px]" />
        <div className="absolute top-[13px] left-[33px] text-6xl font-medium font-caption text-white text-left" onClick={()=>{handleclickss}}>
          Connect Live
        </div>
      </button>
      <div className="absolute top-[3093px] left-[0px] w-[1920px] h-[335px] text-lgi text-dimgray-100 font-caption">
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
        <div className="absolute top-[-3px] left-[196px] w-[185px] h-[51.85px] text-5xl text-gray-500">
          <b className="absolute top-[10px] left-[66px] leading-[135%]">
            Skillgorithm
          </b>
          <img
            className="absolute h-full w-[31.78%] top-[0%] right-[68.22%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/group3.svg"
          />
        </div>
      </div>
      <div className="absolute top-[43px] left-[862px] tracking-[0.02em] hover:cursor-pointer" onClick={()=>{navigate('/dashboard')}}>
        Home
      </div>
      <div className="absolute top-[43px] left-[1181px] tracking-[0.02em] hover:cursor-pointer" onClick={()=>{navigate('/explore')}}>
        Explore
      </div>
      <div className="absolute top-[43px] left-[1009px] tracking-[0.02em] hover:cursor-pointer" onClick={()=>{navigate('/mycourse')}}>
        My Courses
      </div>
      <div className="absolute top-[43px] left-[1352px] tracking-[0.02em] hover:cursor-pointer" onClick={()=>{navigate('/blogs')}}>
        Blog
      </div>
      <div className="absolute top-[43px] left-[1482px] tracking-[0.02em] hover:cursor-pointer" onClick={()=>{navigate('/redeem')}}>
        Redeem
      </div>
      <div className="absolute top-[46px] left-[1731px] text-mid tracking-[0.02em] font-medium text-black2">
        Pooja
      </div>
      <div className="absolute top-[28px] left-[1653px] w-[63px] h-[63px]">
        <div className="absolute top-[0px] left-[0px] rounded-41xl bg-gainsboro-100 w-[63px] h-[63px]" />
        <img
          className="absolute top-[0px] left-[0px] rounded-41xl w-[63px] h-[63px] object-cover"
          alt=""
          src="/image-12@2x.png"
        />
      </div>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[33px] left-[138px] w-[185px] h-[51.85px]">
        <b className="absolute top-[10px] left-[66px] text-5xl leading-[135%] font-caption text-gray-500 text-left">
          Skillgorithm
        </b>
        <img
          className="absolute h-full w-[31.78%] top-[0%] right-[68.22%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/group311.svg"
        />
      </button>
      <img
        className="absolute h-[1%] w-[2.03%] top-[83.50%] right-[7%] bottom-[15.03%] left-[90.73%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/shopping-bag--24--outline2.svg"
      />
      <img
        className="absolute h-[1%] w-[2.03%] top-[79.25%] right-[6%] bottom-[19.47%] left-[90.73%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/shopping-bag--24--outline.svg"
      />
      <div className="absolute top-[1618px] left-[109px] w-[1707px] h-[921px] text-5xl text-white">
        <div className="absolute top-[0px] left-[0px] rounded-xl bg-darkslateblue-100 w-[1707px] h-[921px]" />
        <img
          className="absolute top-[60px] left-[90px] rounded-xl w-[462px] h-60"
          alt=""
          src="/rectangle-99.svg"
        />
        <img
          className="absolute h-[2.82%] w-[13.71%] top-[18.13%] right-[75.98%] bottom-[79.04%] left-[10.31%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector2.svg"
        />
        <div className="absolute top-[90px] left-[176px] text-11xl tracking-[0.02em] font-semibold text-gray-900 inline-block w-[289px] h-[46px]">
          4 out of 5
        </div>
        <div className="absolute top-[222px] left-[184px] text-xl tracking-[0.02em] text-gray-900 inline-block w-[217px] h-10">
          Top Raiting
        </div>
        <div className="absolute top-[60.27px] left-[632.49px] w-[984.67px] h-[39.78px] text-floralwhite">
          <div className="absolute top-[0px] left-[0px] tracking-[0.02em] inline-block w-[127.58px] h-[39.78px]">
            5 Stars
          </div>
          <div className="absolute top-[14.47px] left-[208.43px] w-[776.24px] h-[9.64px]">
            <div className="absolute top-[0px] left-[0px] rounded-sm bg-gainsboro-100 w-[776.24px] h-[9.64px]" />
            <div className="absolute top-[0px] left-[0px] rounded-sm bg-mediumseagreen w-[597.85px] h-[9.64px]" />
          </div>
        </div>
        <div className="absolute top-[114.52px] left-[634.29px] w-[984.67px] h-[39.78px]">
          <div className="absolute top-[0px] left-[0px] tracking-[0.02em] inline-block w-[127.58px] h-[39.78px]">
            4 Stars
          </div>
          <div className="absolute top-[14.47px] left-[208.43px] w-[776.24px] h-[10.01px]">
            <div className="absolute top-[0px] left-[0px] rounded-sm bg-gainsboro-100 w-[776.24px] h-[9.64px]" />
            <div className="absolute top-[0.01px] left-[0.28px] rounded-sm bg-mediumseagreen w-[393px] h-2.5" />
          </div>
        </div>
        <div className="absolute top-[169.98px] left-[634.29px] w-[984.67px] h-[39.78px]">
          <div className="absolute top-[0px] left-[0px] tracking-[0.02em] inline-block w-[127.58px] h-[39.78px]">
            3 Stars
          </div>
          <div className="absolute top-[14.02px] left-[208.43px] w-[776.24px] h-[9px]">
            <div className="absolute top-[0.44px] left-[0px] rounded-sm bg-gainsboro-100 w-[776.24px] h-[8.56px]" />
            <div className="absolute top-[0px] left-[0.28px] rounded-sm bg-mediumseagreen w-[524px] h-[9px]" />
          </div>
        </div>
        <div className="absolute top-[224.22px] left-[632.49px] w-[984.67px] h-[39.78px]">
          <div className="absolute top-[0px] left-[0px] tracking-[0.02em] inline-block w-[127.58px] h-[39.78px]">
            2 Stars
          </div>
          <div className="absolute top-[14.47px] left-[208.43px] w-[776.24px] h-[9.64px]">
            <div className="absolute top-[0px] left-[0px] rounded-sm bg-gainsboro-100 w-[776.24px] h-[9.64px]" />
            <div className="absolute top-[0.31px] left-[0.08px] rounded-sm bg-mediumseagreen w-[333px] h-[9px]" />
          </div>
        </div>
        <div className="absolute top-[278.47px] left-[632.49px] w-[984.67px] h-[39.78px]">
          <div className="absolute top-[0px] left-[0px] tracking-[0.02em] inline-block w-[127.58px] h-[39.78px]">
            1 Stars
          </div>
          <div className="absolute top-[14.47px] left-[208.43px] w-[776.24px] h-[10.06px]">
            <div className="absolute top-[0px] left-[0px] rounded-sm bg-gainsboro-100 w-[776.24px] h-[9.64px]" />
            <div className="absolute top-[0.06px] left-[0.08px] rounded-sm bg-mediumseagreen w-[108px] h-2.5" />
          </div>
        </div>
        <div className="absolute top-[397.81px] left-[86.87px] w-[1525.13px] h-[200.11px] text-xl">
          <div className="absolute top-[0px] left-[0px] w-[1524.89px] h-[200.11px]">
            <div className="absolute top-[113.32px] left-[2.97px] tracking-[0.02em] leading-[180%] inline-block w-[1521.93px] h-[86.8px]">
              Class, launched less than a year ago by Blackboard co-founder
              Michael Chasen, integrates exclusively...
            </div>
            <div className="absolute top-[3.19px] left-[148.13px] text-5xl tracking-[0.02em] font-medium inline-block w-[143px] h-[37px]">
              Pranav
            </div>
            <div className="absolute top-[0px] left-[0px] w-[90px] h-[90px]">
              <div className="absolute top-[0px] left-[0px] rounded-41xl bg-gainsboro-100 w-[90px] h-[90px]" />
              <img
                className="absolute top-[0px] left-[0px] rounded-41xl w-[90px] h-[90px] object-cover"
                alt=""
                src="/image-123@2x.png"
              />
            </div>
          </div>
          <div className="absolute top-[56.19px] left-[1359.58px] w-[165.54px] h-[36.64px] text-base">
            <div className="absolute top-[0px] left-[0px] w-[165.54px] h-[36.64px]">
              <div className="absolute top-[0px] left-[39.54px] tracking-[0.02em] leading-[180%] font-medium inline-block w-[126px] h-[27px]">
                3 Months ago
              </div>
              <div className="absolute top-[2.88px] left-[0px] text-5xl text-gainsboro-100 inline-block w-[43.12px] h-[33.75px]">
                
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[657px] left-[82.65px] w-[1524.89px] h-[200.11px] text-xl">
          <div className="absolute top-[0px] left-[0px] w-[1524.89px] h-[200.11px]">
            <div className="absolute top-[113.32px] left-[2.97px] tracking-[0.02em] leading-[180%] inline-block w-[1521.93px] h-[86.8px]">
              Class, launched less than a year ago by Blackboard co-founder
              Michael Chasen, integrates exclusively...
            </div>
            <div className="absolute top-[4px] left-[148.35px] text-5xl tracking-[0.02em] font-medium inline-block w-[219px] h-9">
              Shagga
            </div>
            <div className="absolute top-[0px] left-[0px] w-[90px] h-[90px]">
              <div className="absolute top-[0px] left-[0px] rounded-41xl bg-gainsboro-100 w-[90px] h-[90px]" />
              <img
                className="absolute top-[0px] left-[0px] rounded-41xl w-[90px] h-[90px] object-cover"
                alt=""
                src="/image-124@2x.png"
              />
            </div>
          </div>
          <div className="absolute top-[59.07px] left-[1359.58px] w-[156.76px] h-[33.75px] text-base">
            <div className="absolute top-[0px] left-[0px] w-[156.76px] h-[33.75px]">
              <div className="absolute top-[1.93px] left-[42.76px] tracking-[0.02em] leading-[180%] font-medium inline-block w-[114px] h-[27px]">
                3 Months ago
              </div>
              <div className="absolute top-[0px] left-[0px] text-5xl inline-block w-[43.12px] h-[33.75px]">
                
              </div>
            </div>
          </div>
        </div>
        <img
          className="absolute top-[620.63px] left-[95.21px] w-[1516.55px] h-[7.44px]"
          alt=""
          src="/line-21.svg"
        />
      </div>
      <img
        className="absolute h-[0.75%] w-[9.27%] top-[59.77%] right-[72.97%] bottom-[39.48%] left-[17.76%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/vector3.svg"
      />
      <img
        className="absolute h-[0.75%] w-[9.27%] top-[67.59%] right-[72.97%] bottom-[31.65%] left-[17.76%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/vector3.svg"
      />
    </div>
  );
};

export default PlayCourse;
