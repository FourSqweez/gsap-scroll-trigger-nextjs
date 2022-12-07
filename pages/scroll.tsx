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
    console.log('Children : ', squareRef.current?.children)
    gsap.to(squareRef.current, {
      //   x: 1000,
      duration: 8,
      height: '100%',
      scrollTrigger: {
        trigger: squareRef.current,
        start: 'top center',
        end: 'top top',
        scrub: 4,
        toggleActions: 'restart none none none',
        markers: {
          startColor: 'purple',
          endColor: 'fuchsia',
          fontSize: '3rem',
        },
      },
    })

    // gsap.to((squareRef.current?.children), {
    //   opacity: 0,
    //   scrollTrigger: {
    //     trigger: squareRef.current,
    //     start: 'top 80% ',
    //     end: 'top 30%',
    //     scrub: 4,
    //     toggleActions: 'restart none none none',
    //   },
    // })

    gsap.to(squareTextRef.current, {
      opacity: 0,
      scrollTrigger: {
        trigger: squareRef.current,
        start: 'top 80% ',
        end: 'top 30%',
        scrub: 4,
        toggleActions: 'restart none none none',
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
