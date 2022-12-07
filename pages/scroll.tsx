import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'
import styles from '../styles/scroll.module.css'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const ScrollTriggerPage = () => {
  const squareRef = useRef<HTMLDivElement>(null)
  const square2Ref = useRef<HTMLDivElement>(null)
  const squareTextRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.to(squareRef.current, {
      //   x: 1000,
      duration: 8,
      scrollTrigger: {
        trigger: square2Ref.current,
        start: 'top 80%',
        end: 'top 30%',
        scrub: 4,
        toggleActions: 'restart none none none',
        pin: squareRef.current,
        pinSpacing: true,
        markers: {
          startColor: 'purple',
          endColor: 'fuchsia',
          fontSize: '3rem',
        },
      },
    })
  }, [])

  return (
    <div>
      <div className={styles.div1}>div1</div>
      <div className={styles.div2}>
        <div className={styles.square} ref={squareRef}>
          <div ref={squareTextRef}>Square Text</div>
        </div>
        <div className={styles.square_2} ref={square2Ref}></div>
      </div>
    </div>
  )
}

export default ScrollTriggerPage
