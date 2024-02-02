import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Homebanner from './components/Homebanner'
import Abouthome from './components/Abouthome'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	return (
		<>
			<Homebanner />
			<section className="contain_wapper">
				<div className="home_wapper">
					<Abouthome />
				</div>
			</section>
		</>
	)
}
