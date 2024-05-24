import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import mannotes from './images/mannotes.png'
const Slider2 = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 800,
        autoplaySpeed: 2000,
        cssEase: "linear",
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      };
  return (
    

  <div className=' '>
  <Slider {...settings}>

  <div className='lg:mt-[100px] grid justify-center gap-[50px] ml-[80px] lg:ml-[150px] md:ml-[130px] pb-10'>     {/*main*/}
<div className='grid gap-[19px] w-[686px]'>   {/*first*/}
  <h1 className='text-[36px] font-medium text-[#101D2E]'>Case Studies</h1>
  <h1 className='text-[16px] font-normal text-[#697587]'>Laoreet in volutpat elementum nisl at eget. Eu egestas scelerisque interdum id imperdiet viverra gravida sit scelerisque. Id consequat lorem praesent mauris. Dolor aenean eleifend etiam amet.</h1>
</div> <br/>
<div className='flex items-center lg:gap-[300px] md:gap-[100px] gap-[50px] lg:w-[1200px] md:w-[700px] w-[700px]'> {/*second*/}
<div className='grid gap-6'>  {/*left content*/}
<div className='grid gap-[16px] lg:w-[420px] md:w-[420px] w-[200px]'>
  <h1 className='text-[24px] font-medium text-[#101D2E]'>Title</h1>
  <h1 className='text-[16px] font-normal text-[#697587]'>Quis suscipit facilisis consectetur netus egestas. Orci semper rhoncus tortor suspendisse. Lacinia tincidunt elementum elit ut risus enim aliquam tincidunt. Condimentum sit risus sit non sit. Volutpat vitae nibh iaculis aliquam.</h1>
</div>
<div className='grid gap-[16px] lg:w-[420px] md:w-[420px] w-[200px]'>
  <h1 className='text-[24px] font-medium text-[#101D2E]'>Project highlights</h1>
           <div className='leading-6 w-[200px] md:w-[370px] lg:w-[370px]'>
  <h1 className='text-[16px] font-normal text-[#697587]'>• Quis integer non morbi eget non.</h1>
  <h1 className='text-[16px] font-normal text-[#697587]'>• At porta vestibulum consequat libero duis id justo. </h1>
  <h1 className='text-[16px] font-normal text-[#697587]'>• In urna at pulvinar adipiscing egestas neque. </h1>
  <h1 className='text-[16px] font-normal text-[#697587]'>• Et arcu sed sapien ligula ultricies nisl tincidunt  &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp;commodo.</h1>
  <h1 className='text-[16px] font-normal text-[#697587]'>• Consectetur nam mattis mollis proin.</h1>
           </div>
</div>
<button className='text-[14px] text-white font-medium bg-[#3D65FF] rounded-[100px] px-[24px] py-[12px] w-[201px] mt-[30px]'>Download CaseStudy</button>
</div>
<img className='h-[430px] w-[437px]' src={mannotes} alt='M'/> {/*right image*/}

</div>
</div>
<div className='lg:mt-[100px] grid justify-center gap-[50px] ml-[80px] lg:ml-[150px] md:ml-[130px] pb-10'>     {/*main*/}
<div className='grid gap-[19px] w-[686px]'>   {/*first*/}
  <h1 className='text-[36px] font-medium text-[#101D2E]'>Case Studies</h1>
  <h1 className='text-[16px] font-normal text-[#697587]'>Laoreet in volutpat elementum nisl at eget. Eu egestas scelerisque interdum id imperdiet viverra gravida sit scelerisque. Id consequat lorem praesent mauris. Dolor aenean eleifend etiam amet.</h1>
</div> <br/>
<div className='flex items-center lg:gap-[300px] md:gap-[100px] gap-[50px] lg:w-[1200px] md:w-[700px] w-[700px]'> {/*second*/}
<div className='grid gap-6'>  {/*left content*/}
<div className='grid gap-[16px] lg:w-[420px] md:w-[420px] w-[200px]'>
  <h1 className='text-[24px] font-medium text-[#101D2E]'>Title</h1>
  <h1 className='text-[16px] font-normal text-[#697587]'>Quis suscipit facilisis consectetur netus egestas. Orci semper rhoncus tortor suspendisse. Lacinia tincidunt elementum elit ut risus enim aliquam tincidunt. Condimentum sit risus sit non sit. Volutpat vitae nibh iaculis aliquam.</h1>
</div>
<div className='grid gap-[16px] lg:w-[420px] md:w-[420px] w-[200px]'>
  <h1 className='text-[24px] font-medium text-[#101D2E]'>Project highlights</h1>
           <div className='leading-6 w-[200px] md:w-[370px] lg:w-[370px]'>
  <h1 className='text-[16px] font-normal text-[#697587]'>• Quis integer non morbi eget non.</h1>
  <h1 className='text-[16px] font-normal text-[#697587]'>• At porta vestibulum consequat libero duis id justo. </h1>
  <h1 className='text-[16px] font-normal text-[#697587]'>• In urna at pulvinar adipiscing egestas neque. </h1>
  <h1 className='text-[16px] font-normal text-[#697587]'>• Et arcu sed sapien ligula ultricies nisl tincidunt  &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp;commodo.</h1>
  <h1 className='text-[16px] font-normal text-[#697587]'>• Consectetur nam mattis mollis proin.</h1>
           </div>
</div>
<button className='text-[14px] text-white font-medium bg-[#3D65FF] rounded-[100px] px-[24px] py-[12px] w-[201px] mt-[30px]'>Download CaseStudy</button>
</div>
<img className='h-[430px] w-[437px]' src={mannotes} alt='M'/> {/*right image*/}

</div>
</div>
<div className='lg:mt-[100px] grid justify-center gap-[50px] ml-[80px] lg:ml-[150px] md:ml-[130px] pb-10'>     {/*main*/}
<div className='grid gap-[19px] w-[686px]'>   {/*first*/}
  <h1 className='text-[36px] font-medium text-[#101D2E]'>Case Studies</h1>
  <h1 className='text-[16px] font-normal text-[#697587]'>Laoreet in volutpat elementum nisl at eget. Eu egestas scelerisque interdum id imperdiet viverra gravida sit scelerisque. Id consequat lorem praesent mauris. Dolor aenean eleifend etiam amet.</h1>
</div> <br/>
<div className='flex items-center lg:gap-[300px] md:gap-[100px] gap-[50px] lg:w-[1200px] md:w-[700px] w-[700px]'> {/*second*/}
<div className='grid gap-6'>  {/*left content*/}
<div className='grid gap-[16px] lg:w-[420px] md:w-[420px] w-[200px]'>
  <h1 className='text-[24px] font-medium text-[#101D2E]'>Title</h1>
  <h1 className='text-[16px] font-normal text-[#697587]'>Quis suscipit facilisis consectetur netus egestas. Orci semper rhoncus tortor suspendisse. Lacinia tincidunt elementum elit ut risus enim aliquam tincidunt. Condimentum sit risus sit non sit. Volutpat vitae nibh iaculis aliquam.</h1>
</div>
<div className='grid gap-[16px] lg:w-[420px] md:w-[420px] w-[200px]'>
  <h1 className='text-[24px] font-medium text-[#101D2E]'>Project highlights</h1>
           <div className='leading-6 w-[200px] md:w-[370px] lg:w-[370px]'>
  <h1 className='text-[16px] font-normal text-[#697587]'>• Quis integer non morbi eget non.</h1>
  <h1 className='text-[16px] font-normal text-[#697587]'>• At porta vestibulum consequat libero duis id justo. </h1>
  <h1 className='text-[16px] font-normal text-[#697587]'>• In urna at pulvinar adipiscing egestas neque. </h1>
  <h1 className='text-[16px] font-normal text-[#697587]'>• Et arcu sed sapien ligula ultricies nisl tincidunt  &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp;commodo.</h1>
  <h1 className='text-[16px] font-normal text-[#697587]'>• Consectetur nam mattis mollis proin.</h1>
           </div>
</div>
<button className='text-[14px] text-white font-medium bg-[#3D65FF] rounded-[100px] px-[24px] py-[12px] w-[201px] mt-[30px]'>Download CaseStudy</button>
</div>
<img className='h-[430px] w-[437px]' src={mannotes} alt='M'/> {/*right image*/}

</div>
</div>
<div className='lg:mt-[100px] grid justify-center gap-[50px] ml-[80px] lg:ml-[150px] md:ml-[130px] pb-10'>     {/*main*/}
<div className='grid gap-[19px] w-[686px]'>   {/*first*/}
  <h1 className='text-[36px] font-medium text-[#101D2E]'>Case Studies</h1>
  <h1 className='text-[16px] font-normal text-[#697587]'>Laoreet in volutpat elementum nisl at eget. Eu egestas scelerisque interdum id imperdiet viverra gravida sit scelerisque. Id consequat lorem praesent mauris. Dolor aenean eleifend etiam amet.</h1>
</div> <br/>
<div className='flex items-center lg:gap-[300px] md:gap-[100px] gap-[50px] lg:w-[1200px] md:w-[700px] w-[700px]'> {/*second*/}
<div className='grid gap-6'>  {/*left content*/}
<div className='grid gap-[16px] lg:w-[420px] md:w-[420px] w-[200px]'>
  <h1 className='text-[24px] font-medium text-[#101D2E]'>Title</h1>
  <h1 className='text-[16px] font-normal text-[#697587]'>Quis suscipit facilisis consectetur netus egestas. Orci semper rhoncus tortor suspendisse. Lacinia tincidunt elementum elit ut risus enim aliquam tincidunt. Condimentum sit risus sit non sit. Volutpat vitae nibh iaculis aliquam.</h1>
</div>
<div className='grid gap-[16px] lg:w-[420px] md:w-[420px] w-[200px]'>
  <h1 className='text-[24px] font-medium text-[#101D2E]'>Project highlights</h1>
           <div className='leading-6 w-[200px] md:w-[370px] lg:w-[370px]'>
  <h1 className='text-[16px] font-normal text-[#697587]'>• Quis integer non morbi eget non.</h1>
  <h1 className='text-[16px] font-normal text-[#697587]'>• At porta vestibulum consequat libero duis id justo. </h1>
  <h1 className='text-[16px] font-normal text-[#697587]'>• In urna at pulvinar adipiscing egestas neque. </h1>
  <h1 className='text-[16px] font-normal text-[#697587]'>• Et arcu sed sapien ligula ultricies nisl tincidunt  &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp;commodo.</h1>
  <h1 className='text-[16px] font-normal text-[#697587]'>• Consectetur nam mattis mollis proin.</h1>
           </div>
</div>
<button className='text-[14px] text-white font-medium bg-[#3D65FF] rounded-[100px] px-[24px] py-[12px] w-[201px] mt-[30px]'>Download CaseStudy</button>
</div>
<img className='h-[430px] w-[437px]' src={mannotes} alt='M'/> {/*right image*/}

</div>
</div>
<div className='lg:mt-[100px] grid justify-center gap-[50px] ml-[80px] lg:ml-[150px] md:ml-[130px] pb-10'>     {/*main*/}
<div className='grid gap-[19px] w-[686px]'>   {/*first*/}
  <h1 className='text-[36px] font-medium text-[#101D2E]'>Case Studies</h1>
  <h1 className='text-[16px] font-normal text-[#697587]'>Laoreet in volutpat elementum nisl at eget. Eu egestas scelerisque interdum id imperdiet viverra gravida sit scelerisque. Id consequat lorem praesent mauris. Dolor aenean eleifend etiam amet.</h1>
</div> <br/>
<div className='flex items-center lg:gap-[300px] md:gap-[100px] gap-[50px] lg:w-[1200px] md:w-[700px] w-[700px]'> {/*second*/}
<div className='grid gap-6'>  {/*left content*/}
<div className='grid gap-[16px] lg:w-[420px] md:w-[420px] w-[200px]'>
  <h1 className='text-[24px] font-medium text-[#101D2E]'>Title</h1>
  <h1 className='text-[16px] font-normal text-[#697587]'>Quis suscipit facilisis consectetur netus egestas. Orci semper rhoncus tortor suspendisse. Lacinia tincidunt elementum elit ut risus enim aliquam tincidunt. Condimentum sit risus sit non sit. Volutpat vitae nibh iaculis aliquam.</h1>
</div>
<div className='grid gap-[16px] lg:w-[420px] md:w-[420px] w-[200px]'>
  <h1 className='text-[24px] font-medium text-[#101D2E]'>Project highlights</h1>
           <div className='leading-6 w-[200px] md:w-[370px] lg:w-[370px]'>
  <h1 className='text-[16px] font-normal text-[#697587]'>• Quis integer non morbi eget non.</h1>
  <h1 className='text-[16px] font-normal text-[#697587]'>• At porta vestibulum consequat libero duis id justo. </h1>
  <h1 className='text-[16px] font-normal text-[#697587]'>• In urna at pulvinar adipiscing egestas neque. </h1>
  <h1 className='text-[16px] font-normal text-[#697587]'>• Et arcu sed sapien ligula ultricies nisl tincidunt  &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp;commodo.</h1>
  <h1 className='text-[16px] font-normal text-[#697587]'>• Consectetur nam mattis mollis proin.</h1>
           </div>
</div>
<button className='text-[14px] text-white font-medium bg-[#3D65FF] rounded-[100px] px-[24px] py-[12px] w-[201px] mt-[30px]'>Download CaseStudy</button>
</div>
<img className='h-[430px] w-[437px]' src={mannotes} alt='M'/> {/*right image*/}

</div>
</div>
<div className='lg:mt-[100px] grid justify-center gap-[50px] ml-[80px] lg:ml-[150px] md:ml-[130px] pb-10'>     {/*main*/}
<div className='grid gap-[19px] w-[686px]'>   {/*first*/}
  <h1 className='text-[36px] font-medium text-[#101D2E]'>Case Studies</h1>
  <h1 className='text-[16px] font-normal text-[#697587]'>Laoreet in volutpat elementum nisl at eget. Eu egestas scelerisque interdum id imperdiet viverra gravida sit scelerisque. Id consequat lorem praesent mauris. Dolor aenean eleifend etiam amet.</h1>
</div> <br/>
<div className='flex items-center lg:gap-[300px] md:gap-[100px] gap-[50px] lg:w-[1200px] md:w-[700px] w-[700px]'> {/*second*/}
<div className='grid gap-6'>  {/*left content*/}
<div className='grid gap-[16px] lg:w-[420px] md:w-[420px] w-[200px]'>
  <h1 className='text-[24px] font-medium text-[#101D2E]'>Title</h1>
  <h1 className='text-[16px] font-normal text-[#697587]'>Quis suscipit facilisis consectetur netus egestas. Orci semper rhoncus tortor suspendisse. Lacinia tincidunt elementum elit ut risus enim aliquam tincidunt. Condimentum sit risus sit non sit. Volutpat vitae nibh iaculis aliquam.</h1>
</div>
<div className='grid gap-[16px] lg:w-[420px] md:w-[420px] w-[200px]'>
  <h1 className='text-[24px] font-medium text-[#101D2E]'>Project highlights</h1>
           <div className='leading-6 w-[200px] md:w-[370px] lg:w-[370px]'>
  <h1 className='text-[16px] font-normal text-[#697587]'>• Quis integer non morbi eget non.</h1>
  <h1 className='text-[16px] font-normal text-[#697587]'>• At porta vestibulum consequat libero duis id justo. </h1>
  <h1 className='text-[16px] font-normal text-[#697587]'>• In urna at pulvinar adipiscing egestas neque. </h1>
  <h1 className='text-[16px] font-normal text-[#697587]'>• Et arcu sed sapien ligula ultricies nisl tincidunt  &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp;commodo.</h1>
  <h1 className='text-[16px] font-normal text-[#697587]'>• Consectetur nam mattis mollis proin.</h1>
           </div>
</div>
<button className='text-[14px] text-white font-medium bg-[#3D65FF] rounded-[100px] px-[24px] py-[12px] w-[201px] mt-[30px]'>Download CaseStudy</button>
</div>
<img className='h-[430px] w-[437px]' src={mannotes} alt='M'/> {/*right image*/}

</div>
</div>
<div className='lg:mt-[100px] grid justify-center gap-[50px] ml-[80px] lg:ml-[150px] md:ml-[130px] pb-10'>     {/*main*/}
<div className='grid gap-[19px] w-[686px]'>   {/*first*/}
  <h1 className='text-[36px] font-medium text-[#101D2E]'>Case Studies</h1>
  <h1 className='text-[16px] font-normal text-[#697587]'>Laoreet in volutpat elementum nisl at eget. Eu egestas scelerisque interdum id imperdiet viverra gravida sit scelerisque. Id consequat lorem praesent mauris. Dolor aenean eleifend etiam amet.</h1>
</div> <br/>
<div className='flex items-center lg:gap-[300px] md:gap-[100px] gap-[50px] lg:w-[1200px] md:w-[700px] w-[700px]'> {/*second*/}
<div className='grid gap-6'>  {/*left content*/}
<div className='grid gap-[16px] lg:w-[420px] md:w-[420px] w-[200px]'>
  <h1 className='text-[24px] font-medium text-[#101D2E]'>Title</h1>
  <h1 className='text-[16px] font-normal text-[#697587]'>Quis suscipit facilisis consectetur netus egestas. Orci semper rhoncus tortor suspendisse. Lacinia tincidunt elementum elit ut risus enim aliquam tincidunt. Condimentum sit risus sit non sit. Volutpat vitae nibh iaculis aliquam.</h1>
</div>
<div className='grid gap-[16px] lg:w-[420px] md:w-[420px] w-[200px]'>
  <h1 className='text-[24px] font-medium text-[#101D2E]'>Project highlights</h1>
           <div className='leading-6 w-[200px] md:w-[370px] lg:w-[370px]'>
  <h1 className='text-[16px] font-normal text-[#697587]'>• Quis integer non morbi eget non.</h1>
  <h1 className='text-[16px] font-normal text-[#697587]'>• At porta vestibulum consequat libero duis id justo. </h1>
  <h1 className='text-[16px] font-normal text-[#697587]'>• In urna at pulvinar adipiscing egestas neque. </h1>
  <h1 className='text-[16px] font-normal text-[#697587]'>• Et arcu sed sapien ligula ultricies nisl tincidunt  &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp;commodo.</h1>
  <h1 className='text-[16px] font-normal text-[#697587]'>• Consectetur nam mattis mollis proin.</h1>
           </div>
</div>
<button className='text-[14px] text-white font-medium bg-[#3D65FF] rounded-[100px] px-[24px] py-[12px] w-[201px] mt-[30px]'>Download CaseStudy</button>
</div>
<img className='h-[430px] w-[437px]' src={mannotes} alt='M'/> {/*right image*/}

</div>
</div>


 </Slider>
</div>



  )
}

export default Slider2;


    