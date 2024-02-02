import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/style.css'
import '@/styles/responsive.css'

import Header from './components/layout/Header'
export default function App({ Component, pageProps }) {
	return (
		<>
			<div className='main-wapper'>
			<Header />
			<Component {...pageProps} />
			</div>
		</>
	)
}
