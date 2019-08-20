import React from 'react';
import Piano from './components/Piano';
import Bass from './components/Bass';
import BassOptionsMenu from './components/BassOptionsMenu';
import styled from 'styled-components';
import {modes} from './lib/Utils';
//import {getMajorScale, getMinorScale, getMajorChord, getMinorChord} from './lib/Utils';
import './App.css';
import gotScales from 'got-scales'

const App = () => {

  console.log("gotScales:");
  console.log(gotScales);

  const [bassMode, setBassMode] = React.useState('');
  const [bassNote, setBassNote] = React.useState('C');
  const [displayStyle, setDisplayStyle] = React.useState('notes');

  const scale = bassMode ? gotScales.note(bassNote).scale(bassMode.split(","), true).notes.map(s => {
    return s && s.substring(0, 2)
  }) : [];

  console.log("scale");
  console.log(scale);

  console.log("displayStyle:");
  console.log(displayStyle);


  return (
    <div>
      <h3>
        &nbsp;Choose some options:
        <BassOptionsMenu setBassNote={setBassNote} setBassMode={setBassMode} setDisplayStyle={setDisplayStyle}/>
      </h3>
      <Bass scale={scale} display_style={displayStyle}/>

      <center>
        <Piano scale={scale}/>
      </center>


      {/*<Piano scale={getMinorScale('A')} />*/}
      {/*<Piano scale={getMajorChord('E')} />*/}
      {/*<Piano scale={getMinorChord('Ab')} />*/}
    </div>
  );
};

//  <Set>    
//  {
//    data.map(function(ele,pos){
//      return (<Circle key={pos} x={ele.x} y={ele.y} r={ele.r} attr={ele.attr} animate={ele.animate}/>)
//    })
//  }
//  </Set>
//  <Set>
//    <Rect x={30} y={148} width={240} height={150} attr={{"fill":"#10a54a","stroke":"#f0c620","stroke-width":5}}/>
//    <Ellipse x={150} y={198} ry={40} rx={100} attr={{"fill":"#fff","stroke":"#e11032"}} glow={{width:10,fill:true,color:"#0b8ac9",opacity:1}}/>
//    <Image src="static/images/5circle.png" x={100} y={170} width={90} height={60} />
//    <Text x={150} y={258} text="同一个世界 同一个梦想" attr={{"fill":"#fff"}}/>
//    <Text x={150} y={273} text="One World One Dream" attr={{"fill":"#fff"}}/>
//    <Path d={["M150 287L150 287"]} animate={Raphael.animation({"path": ["M80 287L220 287"]},500,"<>")} attr={{"stroke":"#fff"}}/>
//    <Line x1={150} y1={290} x2={150} y2={290} animate={Raphael.animation({ x1:80, x2:220},500,"<>")} attr={{"stroke":"#fff"}}/>
//  </Set>

export default App;
