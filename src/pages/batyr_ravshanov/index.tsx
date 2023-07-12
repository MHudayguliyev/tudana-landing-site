import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
import styles from './index.module.scss'
import img1 from '../../../public/assets/images/FRONT BR.png'
import img2 from '../../../public/assets/images/BACK SIDE HILLI GROUP BC.png'


const Logo = () => {
  return (

    <div className={styles.container}>
          <Head>
            <title>Batyr Ravshanov</title>
          </Head>

      <div className={styles.sub_container}>
        <Image src={img1} height={600}/>
        <Image src={img2} height={600} />
      </div>
    </div>
  )
}

export default Logo