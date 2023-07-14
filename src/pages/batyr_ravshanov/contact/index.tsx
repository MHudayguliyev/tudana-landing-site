import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import logo from '../../../../public/assets/images/logos.png'
import ceo from '../../../../public/assets/images/ceo.jpg'
import instagram from '../../../../public/assets/icons/instagram.png'
import telegram from '../../../../public/assets/icons/telegram.png'
import whatsApp from '../../../../public/assets/icons/whatsApp.png'


// react icons 
// import {BsWhatsapp, BsInstagram,} from 'react-icons/bs'
// import {TbBrandTelegram} from 'react-icons/tb'
import {BiPhoneCall} from 'react-icons/bi'
import {RxEnvelopeOpen} from 'react-icons/rx'
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
    <div className={styles.container}>

      <Head>
        <title>Contact Batyr Ravshanov</title>
      </Head>

      <div className={styles.section1}>
          <div className={styles.header}>
            <div className={styles.logo}>
              <Image src={logo} width={40} height={50}/>
            </div>
            <div className={styles.header_txt}>
              <h1>Hilli Group</h1>
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
            <a href='https://web.telegram.org/k/#929795384'><Image src={telegram} width={40} height={40} /></a>
            <a href='https://instagram.com/bravshanov1986?igshid=Y2IzZGU1MTFhOQ=='><Image src={instagram} width={40} height={40} /></a>
            <a href='https://web.whatsapp.com' className={styles.whatsApp}><Image src={whatsApp} height={40} width={60} /></a>
          </div>
      </div>


      <div className={styles.section2}>

        <div className={styles.sub__container}>


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
                <a href='https://www.google.com/maps/place/TUDANA/@37.9512001,58.4306312,21z/data=!4m20!1m13!4m12!1m4!2m2!1d58.4287506!2d37.9238172!4e1!1m6!1m2!1s0x3f6ffb2d18c63b37:0xd5291a583173133e!2sTUDANA!2m2!1d58.4307222!2d37.9512209!3m5!1s0x3f6ffb2d18c63b37:0xd5291a583173133e!8m2!3d37.9511651!4d58.4306751!16s%2Fg%2F11nmrm_f2m?entry=ttu'>
                  <CiLocationOn size={30}/>
                </a>
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

      </div>

      <footer className={styles.footer}>
        <div className={styles.content} onClick={callCeo}>
          <RiUserAddLine size={30}/>
          <span>Add Contact</span>
        </div>
      </footer>

    </div>
  )
}

export default ContactBatyr