import React from 'react';
import {useSpring, animated } from 'react-spring'



const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const Frontwards = () =>  {
    // const props = useSpring({
    //     to: [{opacity: 1, marginTop: '0px'}, {opacity: 1, marginTop: '-500px'}],
    //     from: {opacity: 0, marginTop: '-500px'}
    //   })
      const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
    return(
        <animated.div onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ transform: props.xys.interpolate(trans) }}> 
            <img src="../totally-lost.png" height="400px" alt="fbilthip"/>
            I'm totally lost
        </animated.div>)}

export default Frontwards;