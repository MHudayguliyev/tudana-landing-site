import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import logo from '../../../../public/assets/images/logos.png'
import ceo from '../../../../public/assets/images/ceo.jpg'

// react icons 
import {BsWhatsapp, BsInstagram,} from 'react-icons/bs'
import {BiPhoneCall} from 'react-icons/bi'
import {RxEnvelopeOpen} from 'react-icons/rx'
import {TbBrandTelegram} from 'react-icons/tb'
import {CiGlobe, CiLocationOn} from 'react-icons/ci'
import {RiUserAddLine} from 'react-icons/ri'

// styles
import styles from './contact.module.scss'

// https://mail.google.com/mail/?view=cm&to=${ceoEmail}&su=${encodeURIComponent("hello")}&body=${encodeURIComponent("hello body")

const ContactBatyr = () => {
  const ceoEmail = 'bravshanov@gmail.com'
  const ceoPhone = '+993 65 860504'

  const callCeo = () => {
    window.location.href = `tel:${ceoPhone}`;
  };

  return (
    <div>

      <Head>
        <title>Contact Batyr Ravshanov</title>
      </Head>

      <div className={styles.section1}>
        <div className={styles.header}>
            <div className={styles.logo}>
              <Image src={logo} width={40} height={50}/>
            </div>
            <div className={styles.header_txt}>
              <h1>Hilli gaplama</h1>
            </div>
          </div>

          <div className={styles.ceoImg__container}>
            <Image className={styles.ceo_img} src={ceo} width={110} height={140}/>
          </div>

          <div className={styles.ceo_name}>
            <h1>Batyr Ravshanov</h1>
            <span>(Co-founder & CEO)</span>
          </div>

          <div className={styles.job_name}>
            <h3>Chief Executive Officer</h3>
          </div>

          <div className={styles.contact__icons}>
              <a href='https://web.telegram.org/k/#929795384'><TbBrandTelegram size={30} /></a>
              <a href='https://instagram.com/bravshanov1986?igshid=Y2IzZGU1MTFhOQ=='><BsInstagram size={30}/></a>
              <a href='https://web.whatsapp.com/'><BsWhatsapp size={30}/></a>
          </div>
      </div>


      <div className={styles.section2}>

        <div className={styles.icon_plus_content}>
          <div className={styles.icon}>
            <BiPhoneCall size={30}/>
          </div>
          <div className={styles.content}>
            <h3 onClick={callCeo}>{ceoPhone}</h3>
            <span>WhatsApp phone number</span>
          </div>

        </div>
        <div className={styles.icon_plus_content}>
          <div className={styles.icon}>
            <RxEnvelopeOpen size={30}/>
          </div>
          <div className={styles.content}>
            <h3><a href={`https://mail.google.com/mail/?view=cm&to=${ceoEmail}&su=${encodeURIComponent("example")}`}>{ceoEmail}</a></h3>
            <span>Email</span>
          </div>    
        </div>
        <div className={styles.icon_plus_content}>
          <div className={styles.icon}>
              <CiGlobe size={30}/>
          </div>
          <div className={styles.content}>
            <h3><a href='http://tudana.com.tm'>tudana.com.tm</a></h3>
            <span>Official website</span>
          </div>    
        </div>
        <div className={styles.icon_plus_content}>
          <div className={`${styles.icon} ${styles.specific_target}`}>
              <CiLocationOn size={30}/>
          </div>
          <div className={styles.content}>
            <h3>
              Ýylgaý D.street, building "Saher" <br></br> 
              3rd floor, Ashgabat, Turkmenistan
            </h3>
            <span>Office</span>
          </div>    
        </div>

      </div>

      <div className={styles.footer}>
        <div className={styles.content} onClick={callCeo}>
          <RiUserAddLine size={30}/>
          <span>Contact</span>
        </div>
      </div>

    </div>
  )
}

export default ContactBatyr