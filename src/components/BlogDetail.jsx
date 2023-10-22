import { useNavigate } from "react-router-dom";
const BlogDetail = () => {
  const navigate = useNavigate();
  return (
    <div className="relative bg-floralwhite w-full h-[3400px] overflow-hidden text-left text-3xl text-dimgray-200 font-poppins">
      <div className="absolute top-[55px] left-[869px] tracking-[0.02em] hover:cursor-pointer" onClick={()=>{navigate('/dashboard')}}>
        Home
      </div>
      <div className="absolute top-[55px] left-[1188px] tracking-[0.02em] hover:cursor-pointer" onClick={()=>{navigate('/explore')}}>
        Explore
      </div>
      <div className="absolute top-[55px] left-[1016px] tracking-[0.02em] hover:cursor-pointer" onClick={()=>{navigate('/mycourse')}}>
        Courses
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
        <div className="absolute top-[0px] left-[0px] rounded-41xl bg-gainsboro-100 w-[63px] h-[63px]" />
        <img
          className="absolute top-[0px] left-[0px] rounded-41xl w-[63px] h-[63px] object-cover"
          alt=""
          src="/image-12@2x.png"
        />
      </div>
      <div className="absolute top-[143px] left-[0px] w-[1920px] h-[652px]">
        <img
          className="absolute top-[0px] left-[0px] w-[1920px] h-[652px] object-cover"
          alt=""
          src="/rectangle-77@2x.png"
        />
        <div className="absolute top-[0px] left-[0px] bg-gray-1000 w-[1920px] h-[652px]" />
      </div>
      <div className="absolute top-[1090px] left-[120px] text-5xl tracking-[0.02em] leading-[180%] text-darkslateblue-100 inline-block w-[1681px]">
        <p className="m-0">
          TOTC is a platform that allows educators to create online classes
          whereby they can store the course materials online; manage
          assignments, quizzes and exams; monitor due dates; grade results and
          provide students with feedback all in one place.
        </p>
        <p className="m-0">
          TOTC is a platform that allows educators to create online classes
          whereby they can store the course materials online; manage
          assignments, quizzes and exams; monitor due dates; grade results and
          provide students with feedback all in one place.
        </p>
        <p className="m-0">{`TOTC is a platform `}</p>
      </div>
      <div className="absolute top-[1335px] left-[120px] text-5xl tracking-[0.02em] leading-[180%] text-darkslateblue-100 inline-block w-[1681px]">
        <p className="m-0">
          TOTC is a platform that allows educators to create online classes
          whereby they can store the course materials online; manage
          assignments, quizzes and exams; monitor due dates; grade results and
          provide students with feedback all in one place.
        </p>
        <p className="m-0">{`TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage `}</p>
      </div>
      <div className="absolute top-[875px] left-[120px] text-25xl leading-[180%] font-semibold text-mediumseagreen text-center">
        Why Swift UI Should Be on the Radar of Every Mobile Developer
      </div>
      <div className="absolute top-[1490px] left-[120px] w-[136px] h-[49px] text-base text-slategray-100">
        <div className="absolute top-[0px] left-[0px] rounded-17xl bg-lightseagreen-200 w-[136px] h-[49px]" />
        <div className="absolute top-[13px] left-[26px] inline-block w-[84px] h-6">{`affordable `}</div>
      </div>
      <div className="absolute top-[1490px] left-[291px] w-[136px] h-[49px] text-base text-slategray-100">
        <div className="absolute top-[0px] left-[0px] rounded-17xl bg-lightseagreen-200 w-[136px] h-[49px]" />
        <div className="absolute top-[13px] left-[36px]">Stunning</div>
      </div>
      <div className="absolute top-[1490px] left-[462px] w-[136px] h-[49px] text-base text-slategray-100">
        <div className="absolute top-[0px] left-[0px] rounded-17xl bg-lightseagreen-200 w-[136px] h-[49px]" />
        <div className="absolute top-[13px] left-[36px]">making</div>
      </div>
      <div className="absolute top-[1494px] left-[0px] w-[1920px] h-[1481px] text-base text-slategray-100">
        <div className="absolute top-[0px] left-[620px] rounded-17xl bg-lightseagreen-200 w-[136px] h-[44.47px]" />
        <div className="absolute top-[10.89px] left-[639px] inline-block w-[98px] h-[21.78px]">
          madbrawns
        </div>
        <div className="absolute top-[213px] left-[0px] w-[1920px] h-[1268px]">
          <div className="absolute top-[0px] left-[0px] bg-darkslateblue-100 w-[1920px] h-[1268px] opacity-[0.2] mix-blend-normal" />
        </div>
      </div>
      <div className="absolute top-[1600px] left-[120px] w-[162px] h-[77px] text-lg text-black2">
        <div className="absolute top-[38px] left-[97px] tracking-[0.02em] font-medium">
          Lina
        </div>
        <div className="absolute top-[14px] left-[97px] text-[12px] tracking-[0.02em] font-medium text-slategray-100">
          Written by
        </div>
        <div className="absolute top-[0px] left-[0px] w-[77px] h-[77px]">
          <div className="absolute top-[0px] left-[0px] rounded-md bg-gainsboro-100 w-[77px] h-[77px]" />
          <img
            className="absolute top-[0px] left-[0px] rounded-md w-[77px] h-[77px] object-cover"
            alt=""
            src="/image-123@2x.png"
          />
        </div>
      </div>
      <div className="absolute top-[1618px] left-[1555px] w-[232px] h-[49px] text-base text-mediumseagreen">
        <div className="absolute top-[0px] left-[0px] rounded-3xs bg-lightseagreen-300 box-border w-[232px] h-[49px] border-[1px] border-solid border-mediumseagreen" />
        <b className="absolute top-[12px] left-[91px]">Follow</b>
      </div>
      <div className="absolute top-[1786px] left-[116px] w-[1671.38px] h-[1109px] text-xl text-slategray-100">
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
            src="/rectangle-871.svg"
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
            <div className="absolute top-[609.4px] left-[0.27px] tracking-[0.02em] leading-[180%] inline-block w-[684.8px] h-[80.96px]">
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
            <div className="absolute top-[0px] left-[0px] rounded-41xl bg-gainsboro-100 w-[70.84px] h-[70.84px]" />
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
            <div className="absolute top-[0px] left-[0px] rounded-41xl bg-gainsboro-100 w-[70.88px] h-[70.88px]" />
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
      <div className="absolute top-[1569.75px] left-[119.75px] box-border w-[1681.5px] h-[0.5px] border-t-[0.5px] border-solid border-slategray-100" />
      <img
        className="absolute top-[1932px] left-[151px] rounded-xl w-[719px] h-[382px] object-cover"
        alt=""
        src="/rectangle-23@2x.png"
      />
      <div className="absolute top-[979px] left-[116px] text-5xl tracking-[0.02em] leading-[180%] text-darkslateblue-100 inline-block w-[1681px]">
        TOTC is a platform that allows educators to create online classes
        whereby they can store the course materials online; manage assignments,
        quizzes and exams; monitor due dates; grade results and provide students
        with feedback all in one place.
      </div>
      <div className="absolute top-[3036px] left-[0px] w-[1920px] h-[335px] text-lgi text-dimgray-100 font-caption">
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
            src="/group3.svg"
          />
        </div>
      </div>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[40px] left-[120px] w-[185px] h-[51.85px]">
        <b className="absolute top-[10px] left-[66px] text-5xl leading-[135%] font-caption text-gray-500 text-left">
          Skillgorithm
        </b>
        <img
          className="absolute h-full w-[31.78%] top-[0%] right-[68.22%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/group4.svg"
        />
      </button>
    </div>
  );
};

export default BlogDetail;
