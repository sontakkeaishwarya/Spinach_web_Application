import React from 'react';
import './secondpage.css';
import SliderComponent from './slider';
import Content from './content';
import Group from './group';
import Carousal from './carousal';
import Frame from './frame';
import Webcontainer from './webcontainer';
import Footer from './footer';

function secondpage() {
  return (
    <div className='main'>
      <div className='sub-div1'>A design system for website & apps 
        is critical to resolve:
      </div>
      <div className='sub-div2'>
        <div className='sub-div2a'>
          <div className='section-A'>
            <div className='A1'><span id="a1">/01</span><span id="a2">Inconsistent user experience.</span></div><div id="a3"></div>
            <div className='A2'><span id="b1">/02</span><span id="b2">Design-led delays in go-to-market.</span></div><div id="b3"></div>
            <div className='A3'><span id="c1">/03</span><span id="c2">Disjointed digital brand image.</span></div><div id="c3"></div>
            <div className='A4'><span id="d1">/04</span><span id="d2">Disconnected dev-design sprints.</span></div>
          </div>
        </div>
        <div className='Section-B'>
          <div className='B1'>Our proven methodology for Design Systems.</div>
          <div className='B2'>Redesigning a design system is a densely strategised process that involves careful planning, collaboration, and iterative refinement.</div>
        </div>
      </div>
      <div className='sub-div3'><SliderComponent/></div>
      <div className='outer'><Content/></div>
      <div className=''><Group/></div>
      <div className='data'>Our previous experience</div>
      <div className='video'><Carousal/></div>
      <Frame/>
      <Webcontainer/>
      <Footer/>
    </div>
  );
}

export default secondpage;
