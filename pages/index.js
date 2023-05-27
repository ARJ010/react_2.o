import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import {useRouter} from 'next/router'
import {useState} from "react"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [place, setPlace] = useState("");
  return (
  <div>
    <br />
    <input type="text" onChange={(event) => setName(event.target.value)} placeholder = "Enter your name"/><br />
    <br />
    <input type="text" onChange={(event) => setPlace(event.target.value)} placeholder = "Enter your Place"/>
    <br />
    <h1>{name ?`Hai, I am ${name} `:'Hai, I am ____'}</h1>
    <h1>{place ?`and I am from ${place}`:'and I am from ____'}</h1>
  </div>
);
}
