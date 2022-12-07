import React, { useEffect } from 'react'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger)

const LabelsPage = () => {
  useEffect(() => {
    const tl = gsap.timeline()

    tl.to('.box', { x: 500, duration: 5 })
      .to('.box', { y: 500, duration: 5 })
      //.addLabel('rotate', 8)
      .to('.box', { rotate: 90, repeat: 2, ease: 'elastic' })

    tl.addLabel('rotate', 8)
    tl.play('rotate')

    // // ScrollTrigger.create({
    // //   animation: tl,
    // //   trigger: '.box',
    // //   start: 'top center',
    // // })
  }, [])

  return (
    <>
      {/* <div className="fullscreen"></div> */}
      <div className="box"></div>
      <div className="fullscreen"></div>
      <style jsx>
        {`
          .box {
            width: 100px;
            height: 100px;
            background-color: steelblue;
          }
          .fullscreen {
            height: 100vh;
          }
        `}
      </style>
    </>
  )
}

export default LabelsPage
