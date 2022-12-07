import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'
import styles from '../styles/scroll.module.css'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const ScrollTriggerPage = () => {
  const squareRef = useRef<HTMLDivElement>(null)
  const square2Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.to(squareRef.current, {
      //x: 700,
      duration: 3,
      scrollTrigger: {
        trigger: squareRef.current,
        start: 'top 30% ',
        end: () => `+=${squareRef.current?.offsetHeight}`,
        markers: true,
        toggleClass: styles.red,
      },
    })
  }, [])
  return (
    <div>
      <div className={styles.div1}>div1</div>
      <div className={styles.div2}>
        <div className={styles.square} ref={squareRef}>
          square
        </div>
        <div className={styles.square_2} ref={square2Ref}>
          square2
        </div>
      </div>
    </div>
  )
}

export default ScrollTriggerPage
