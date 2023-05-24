//import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import {useRouter} from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter();
  return (
    <div>
    <h1>{router.query.name && router.query.place ?`Hello, ${router.query.name} from ${router.query.place}`:'I dont know your name or place'}</h1>
  </div>
);
}
