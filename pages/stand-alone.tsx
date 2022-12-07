import React, { useEffect, useRef } from 'react'
import styles from '../styles/stand_alone.module.css'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const StandAlonePage = () => {
  const boxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    ScrollTrigger.create({
      trigger: boxRef.current,
      start: 'top 80%',
      end: 'top 50%',
      markers: true,
      toggleClass: styles.box_red,
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

export default StandAlonePage
