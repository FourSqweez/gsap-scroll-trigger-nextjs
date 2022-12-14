import React, { useEffect, useRef } from 'react'
import styles from '../styles/timeline.module.css'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const TimelinePage = () => {
  const boxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // const tl = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: boxRef.current,
    //     markers: true,
    //     start: 'top 80%',
    //     end: 'top 30%',
    //     scrub: 1,
    //   },
    // })

    // tl.to(boxRef.current, {
    //   x: 500,
    //   duration: 2,
    // })
    //   .to(boxRef.current, { y: 200, duration: 3 })
    //   .to(boxRef.current, { x: 0, duration: 2 })

    ScrollTrigger.create({
      markers: true,
      start: 'top 80%',
      end: 'top 50%',
      trigger: boxRef.current,
      onUpdate: (self) => console.log(self),
      // onEnter: () => console.log('enter!'),
      // onLeave: () => console.log('leave!'),
      // onEnterBack: () => console.log('enterBack'),
      // onLeaveBack: () => console.log('leaveBack!'),
    })
  }, [])

  return (
    <>
      <div className={styles.panel}></div>
      <div className={styles.box} ref={boxRef}></div>
      <div className={styles.panel}></div>
    </>
  )
}

export default TimelinePage
