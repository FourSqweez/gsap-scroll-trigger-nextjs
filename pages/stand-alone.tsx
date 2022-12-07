import React, { useEffect, useRef } from 'react'
import styles from '../styles/stand_alone.module.css'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const StandAlonePage = () => {
  const boxRef = useRef<HTMLDivElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const navRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    ScrollTrigger.create({
      markers: true,
      start: 'top 6%',
      trigger: panelRef.current,
      toggleClass: { targets: navRef.current, className: styles.nav_active },
    })
  }, [])

  return (
    <>
      <nav className={styles.nav} ref={navRef}>
        <ul className={styles.ul}>
          <li className={styles.li}>Home</li>
          <li className={styles.li}>About</li>
          <li className={styles.li}>Contact</li>
        </ul>
      </nav>
      <div className={styles.panel} ref={panelRef}>
        <p className={styles.p}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, et
          praesentium officia consectetur cupiditate error asperiores in impedit
          incidunt accusantium vero, modi laboriosam ad molestiae? Voluptate,
          mollitia. Ipsam consequuntur, id dolorum explicabo numquam nobis quas?
          Laudantium itaque necessitatibus dolores ex? Lorem ipsum dolor, sit
          amet consectetur adipisicing elit. Id est, consequuntur harum culpa
          sapiente fugiat quidem autem accusamus nulla corrupti, optio labore
          ullam, laborum qui? Incidunt necessitatibus quidem veritatis suscipit
          dolor error voluptatem molestias, eligendi id similique ratione
          asperiores aliquam corrupti totam rem repellendus perferendis eos iure
          est saepe nihil commodi! Quisquam, recusandae quo quas, doloribus
          quasi, praesentium ipsa dignissimos animi quae adipisci excepturi?
          Nihil saepe quaerat quidem iste asperiores praesentium alias eveniet
          dolore, provident incidunt, vel, blanditiis impedit adipisci
          consequatur voluptas. Atque, quae voluptates necessitatibus illum
          obcaecati vel sequi fugiat rerum enim libero voluptatum recusandae
          placeat nihil officia corporis deleniti nisi, ad sapiente modi odit
          esse neque mollitia laudantium. Velit, tempora aperiam molestias,
          illum consequuntur deleniti ea reiciendis aliquid hic, quos assumenda
          praesentium consequatur. Eius a deserunt debitis quos, necessitatibus
          voluptas, doloribus, quas cumque ullam quaerat consectetur quod beatae
          itaque sapiente animi nostrum? Tenetur tempore incidunt quas aut
          possimus, ipsam debitis culpa eveniet accusamus deleniti est
          consectetur mollitia ut magnam placeat, saepe eligendi illum quisquam
          numquam quaerat laboriosam! Minima aliquid vitae numquam tempora
          dolorum? At excepturi aperiam pariatur accusamus, expedita eligendi
          impedit eum rem voluptatibus dignissimos voluptas! Quod ab excepturi
          cum molestiae, laudantium perferendis a! Esse, suscipit nihil!
          Consequuntur illum natus inventore veniam repellat doloremque
          consectetur voluptatibus modi placeat commodi voluptatum eius
          necessitatibus animi cumque praesentium architecto veritatis impedit
          quisquam eligendi pariatur tenetur, corporis, officia distinctio?
          Excepturi, provident autem ut facere deleniti expedita! Officia iure
          tenetur deserunt accusantium ut error, vel inventore quasi aperiam
          culpa beatae fuga? Excepturi modi beatae cupiditate tenetur nam
          dolorum fugiat aliquam doloribus vitae omnis, laboriosam hic, maxime
          minima illum consequuntur optio recusandae nihil eligendi pariatur
          iste quam. Dolores, officia! Quod, libero exercitationem! Eum in ipsum
          qui nesciunt laborum quo doloremque ab pariatur quia a, veniam
          repellat possimus eius iure, molestias consequuntur explicabo expedita
          quaerat earum voluptatem neque voluptatum velit! Nostrum explicabo ab
          quis non a voluptatibus corporis ducimus mollitia perspiciatis
          sapiente, assumenda labore optio rerum fugit atque numquam nihil
          inventore ex cumque laudantium esse laboriosam est pariatur! Quasi
          dolores vero, quibusdam corrupti distinctio doloremque fugit id ipsa
          autem debitis sit commodi delectus quisquam dolor saepe voluptatum
          necessitatibus. Quod suscipit ad rerum, praesentium repudiandae
          blanditiis similique eos aut tempora, voluptate, fugiat recusandae?
          Voluptatum minus vitae reprehenderit nulla ipsum amet perferendis
          maiores quas ducimus quia ab delectus asperiores recusandae
          accusantium quaerat dolorem, sequi possimus quo, odio harum ipsam sit.
          Neque dolorum ab rerum. Asperiores fugiat unde ipsa vitae rem
          consequatur eaque consequuntur iste earum recusandae corrupti, et, non
          sunt quidem, quae quibusdam ipsam rerum. Nam ducimus voluptatem quidem
          inventore modi incidunt veniam, distinctio adipisci praesentium
          impedit voluptate, sit porro placeat tempora vitae. Necessitatibus
          quia quibusdam dolor debitis tempore laboriosam iste laudantium ab
          accusantium, numquam quidem ipsa? Magni, ducimus non quisquam velit
          deserunt ipsum? Assumenda, neque placeat. Ab explicabo cupiditate
          minus molestias laborum, deleniti excepturi labore animi sed aut illo
          aliquid consequatur sequi corporis eius non fuga consequuntur, nisi
          vitae voluptatum libero? Repellendus omnis numquam praesentium culpa
          similique quo eligendi, dignissimos accusantium atque, autem veritatis
          temporibus. Nihil? Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Quae quibusdam modi et inventore eius neque? Quos praesentium
          omnis sunt, labore aspernatur impedit reprehenderit recusandae,
          aperiam architecto commodi provident. Voluptates, blanditiis voluptate
          ut harum eveniet et dicta voluptatum error odio ratione minus,
          corporis libero veniam molestias cum, illo sapiente facilis dolores
          odit excepturi similique possimus tenetur! Neque harum aspernatur
          aliquam, veritatis ut laborum fuga blanditiis similique in nam? In
          voluptatum sunt beatae id, repellendus quo cum vitae veritatis fuga
          quaerat molestias perspiciatis dolorum harum nemo earum officiis
          voluptate autem delectus vero consequuntur nam soluta laboriosam?
          Voluptatibus non reiciendis minima aliquam odio provident illum quis,
          nobis modi nulla mollitia at vero odit? Recusandae velit, nulla in,
          fugit accusantium odio sunt quisquam esse doloremque quasi doloribus
          ut voluptate earum, inventore obcaecati repudiandae? Quia eius a
          soluta, quis nisi similique dignissimos at, aliquam impedit quo, vitae
          dolores incidunt corrupti. Ratione rerum vitae, doloremque harum
          tempora eos eveniet sunt distinctio, quia dolorum quo enim autem
          commodi. Repellendus dolore natus molestias magni quis inventore!
          Harum sapiente magnam cupiditate rerum iste, ullam inventore explicabo
          facere optio ea veritatis a? Eveniet saepe dolore aspernatur tempora
          praesentium repellendus, id repudiandae rem unde quasi qui? Iste neque
          saepe vitae. Iste ab consequuntur magni iusto eius minus autem,
          corporis dolores error, labore alias excepturi! Placeat omnis iure
          ipsa illum culpa. Beatae repellat rem a optio exercitationem, qui
          sapiente cumque aliquam numquam eligendi! Commodi incidunt ullam magni
          error et porro repellat. Sequi, maiores eaque facere illum sit harum
          sint beatae molestias aspernatur excepturi unde, dicta similique ipsam
          id praesentium cum pariatur quaerat officiis placeat nihil sunt rerum
          laudantium? Eveniet debitis voluptate laudantium rem velit fuga?
          Adipisci, tempore ex a tenetur laudantium molestias fugit harum quam,
          necessitatibus alias assumenda sunt pariatur totam, quod ad temporibus
          repudiandae soluta debitis architecto illum. Maiores sapiente
          doloribus tenetur aspernatur totam incidunt, dolorem accusamus ullam
          est unde nobis ea architecto modi autem a reiciendis voluptatibus
          impedit eaque illum neque error dolor quisquam ut aliquam. Praesentium
          error itaque aperiam labore autem impedit perspiciatis deleniti nulla
          corrupti, nisi ex sit optio tempora omnis distinctio fugiat accusamus
          quibusdam esse, magni facilis recusandae ipsa. Soluta similique rem
          veniam provident amet saepe odio, tempore, aspernatur minus iusto
          dolore veritatis possimus recusandae enim. Quibusdam consectetur
          deleniti aliquam fugit nisi maiores atque non, iure dicta vel ipsam
          omnis itaque? Recusandae dolor vero sapiente libero! Eius,
          consequuntur quibusdam vero quae dolorum velit molestias, ipsam in
          libero hic sed commodi iusto porro! Voluptatem tempora nisi voluptates
          adipisci? Recusandae, sunt! Debitis alias doloremque delectus fugit,
          officiis exercitationem in eos at eius! Ipsa labore vitae nam dolores
          optio sunt tempore reprehenderit. Nobis quos sit ea nisi corporis
          itaque, soluta modi, molestias quae aliquam sunt porro dolores quaerat
          fugit neque perferendis commodi doloribus reiciendis beatae assumenda,
          quasi omnis. Vero mollitia ipsam itaque neque incidunt facere, beatae
          adipisci. Quod natus deleniti, officiis cumque voluptatibus tempora
          cum qui quis modi beatae quaerat sequi eligendi quasi consequatur
          dignissimos temporibus nulla tenetur! Vero alias sit libero iusto sed
          vel atque, quaerat officiis necessitatibus eos?
        </p>
      </div>
      <div className={styles.box} ref={boxRef}></div>
      <div className={styles.panel}></div>
    </>
  )
}

export default StandAlonePage
