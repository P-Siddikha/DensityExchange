import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Greeting from '@/Components/Greeting'
import RotatingBoxes from '@/Components/motionIcons'
import ChangeDivSize from '@/Components/changingmobiledivsize'
import EQbeatsIQ from '@/Components/Eqbeatsiq'
import DoesThisSound from '@/Components/doesThisSound'
import SelfImprovement from '@/Components/SelfImprovement'
import BeTheBestEq from '@/Components/BetheBestEq'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
     <Greeting/>
     <RotatingBoxes/>
     <EQbeatsIQ/>
     <DoesThisSound/>
     <SelfImprovement/>
     <BeTheBestEq/>
     {/* <ChangeDivSize/> */}
    </>
  )
}
