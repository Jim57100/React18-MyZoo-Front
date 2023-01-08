import React from 'react';
import monsteraLeftClear from '../../../assets/images/monstera_left_clear.png'
import monsteraLeftBlurred from '../../../assets/images/monstera_left_blurred.png'
import monsteraRightBlurred from '../../../assets/images/monstera_right_blurred.png'
import monsteraRightClear from '../../../assets/images/monstera_right_clear.png'
import { Parallax } from 'react-scroll-parallax'


const LeafParallax = () => {

  return (
    <>
      <Parallax
        translateY={['0px', '-1000px']}
        speed={500}
        style={{'position': 'absolute', 'z-index': '1', 'left': '-100px'}}
      >
        <img src={monsteraLeftClear} alt="monstera leaf" style={{ height: 500}}/>
      </Parallax>
      <Parallax
        translateY={['-200px', '-1000px']}
        speed={5}
        style={{'position': 'absolute', 'z-index': '1', 'left': '-100px'}}
      >
        <img src={monsteraLeftBlurred} alt="monstera leaf" style={{ height: 400}}/>
      </Parallax>
      <Parallax
        translateY={['-300px', '-1000px']}
        speed={5}
        style={{'position': 'absolute', 'z-index': '1', 'right': '-100px'}}
      >
        <img src={monsteraRightBlurred} alt="monstera leaf" style={{ height: 400}}/>
      </Parallax>
      <Parallax
        translateY={['-100px', '-500px']}
        speed={100}
        style={{'position': 'absolute', 'z-index': '1', 'right': '-100px'}}
      >
        <img src={monsteraRightClear} alt="monstera leaf" style={{ height: 500}}/>
      </Parallax>
    </>
  )
}

export default LeafParallax;