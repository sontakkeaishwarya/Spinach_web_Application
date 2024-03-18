import React from 'react'
import './content.css'

function content() {
    const tableData = [
        { 
          col1: <>
          <div className="aline1">/01</div>
          <div className="aline2">Reseach first.</div>
          <div className='aline3'>Our research is designed to interview stakeholders, end-users, and decision-makers in order to grasp diverse needs. We incorporate findings into a comprehensive strategy that aligns with business goals, ensuring the Design system meets user expectations and industry standards</div>
          </>,
         col2: <>
          <div className="bline1">/02</div>
          <div className="bline2">Brand-centric DLS.</div>
          <div className="bline3">To reinforce the brand's visual identity, values and tone of voice, we build consistency in the use of brand colours, typography, and imagery, coupled with intuitive interactions to foster brand affinity and loyalty across all touchpoints.</div>
        </>
        },
        { col1: <div ></div>,
         col2: <div></div> }, 
        { col1: <div></div>, 
        col2:<div></div> },

        { col1:<><div className="cline1">/03</div>
       <div className="cline2">Design principles and guidelines.</div>
      <div className='cline3'>Based on design trends, research outcomes and brand essence, we identify core values, guidelines and themes that drive the design creation process and craft an experience that is unique to the brand for its users.</div>
    </>, 
    col2:<>
    <div className="dline1">/04</div>
    <div className="dline2">Modularity for multiple use-cases.</div>
    <div className='dline3'>We adopt a modular process of Design System creation. Based on use-cases and development prioritization we create components, patterns and templates that empower the design and dev teams to scale the sprint outcomes exponentially.</div>
  </>}, 
        { col1: <div></div>,
         col2: <div></div> },
        { col1: '', col2: '' }, 
        // Empty row
        { col1: <>
            <div className="eline1">/05</div>
            <div className="eline2">Cross-functional collaboration.</div>
            <div className='eline3'>Our Design System collaboration is characterized by an inclusive working approach, fostering outcomes that excel in scale, efficiency and cost-effectiveness. We drive results that go beyond expectations, ensuring a synergy of creativity and practicality for optimal Design System performance.</div>
          </>,
             col2: <>
             <div className="fline1">/06</div>
             <div className="fline2">Version control and documentation handover.</div>
             <div className='fline3'> We manage the handover process meticulously, with robust documentation and tight governance. Our processes ensure lasting consistency and quality, facilitating a seamless transition and nurturing the sustained success of the design system over time.</div>
           </> },
        { col1: '', col2: '' }, // Empty row
        
      ];
  return (
    <>
    
        <div className='heading'>
            <div id='first'>Design system process highlights:</div>
            <div id='Second'>A Design System redesign roadmap has to be delicately handled and marked out with much careful consideration rather than impulse.</div>
        </div>
        <div className='tab'>
        <table>
      <tbody>
      {tableData.map((row, index) => (
          <tr key={index} className={index % 3 === 0 ? 'custom-row-1' : 'custom-row-2'}>
            <td>{row.col1}</td>
            <td>{row.col2}</td>
          </tr>
        ))}
      </tbody>
    </table>
        </div>
    
    </>
  )
}

export default content