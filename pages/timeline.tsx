import React, { useEffect, useRef } from 'react'
import styles from '../styles/timeline.module.css'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const TimelinePage = () => {
  const boxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // gsap.to(boxRef.current, {
    //   x: 500,
    //   duration: 2,
    // })

    // gsap.to(boxRef.current, {
    //   y: 200,
    //   duration: 3,
    //   delay: 2,
    // })

    // gsap.to(boxRef.current, {
    //   x: 0,
    //   duration: 2,
    //   delay: 5,
    // })

    const tl = gsap.timeline()

    tl.to(boxRef.current, {
      x: 500,
      duration: 2,
    })
      .to(boxRef.current, { y: 200, duration: 3 })
      .to(boxRef.current, { x: 0, duration: 2 })
  }, [])

  return <div className={styles.box} ref={boxRef}></div>
}

export default TimelinePage
