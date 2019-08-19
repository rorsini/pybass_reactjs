import React from 'react';
import Piano from './components/Piano';
import Bass from './components/Bass';
import ModeMenu from './components/ModeMenu';
import BassOptionsMenu from './components/BassOptionsMenu';
import {getMajorScale, getMinorScale, getMajorChord, getMinorChord} from './lib/Utils';
import './App.css';
import gotScales from 'got-scales'

const App = () => {

  const [bassMode, setBassMode] = React.useState('Ionian');
  const [bassNote, setBassNote] = React.useState('C');
  console.log("bassMode: " + bassMode);
  console.log("bassNote: " + bassNote);

  // console.log("How to use:");
  // How to use
  // var gMajorScale = gotScales.note('G');
  var aCustomScale = gotScales.note(bassNote);

  const fancyScale = aCustomScale.scale([...bassMode], true).sortedNotesArray;

  console.log("fancyScale");
  console.log(fancyScale);

  console.log("getMajorScale('A')");
  console.log(getMajorScale('A'));
  // console.log(aCustomScale.scale(bassMode, true).getNotes());


  // console.log(gMajorScale.scale('major').getNotes()); // ['G','A','B','C','D','E','F# / Gb','G']
  // console.log(aCustomScale.scale([0, 3, 7, 10, 11], true).getNotes()); // [ 'A', 'C', 'E', 'G', 'G# / Ab' ]

  // console.log("Chords:");
  // Chords
  // var cMajorChord = gotScales.chord('Cmaj'); // Can be 'C' or 'CMaj'
  // var aMinorChord = gotScales.chord('Am'); // Can be 'Am' or 'Amin'
  // console.log(cMajorChord.getNotes()); // ['C','E','G']
  // console.log(aMinorChord.getNotes()); // ['A','C','E']

  return (
    <div>
      <h4><code>fancyScale: {JSON.stringify(fancyScale)}</code></h4>
      <BassOptionsMenu setBassNote={setBassNote} setBassMode={setBassMode} />
      <ModeMenu />

      <Bass scale={getMajorScale('A')} display_style={'chord'} />
      <Bass scale={getMajorScale('A')} display_style={'degrees'} />

      <Piano scale={getMajorScale('G')} />
      <Piano scale={getMinorScale('A')} />
      <Piano scale={getMajorChord('E')} />
      <Piano scale={getMinorChord('Ab')} />
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
