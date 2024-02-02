import Link from "next/link";
import Image from "next/image";
// import Iinkdinicon from "@/images/linkdin-icon.svg";
// import Instagramicon from "@/images/instagram-icon.svg";
// import Twitericon from "@/images/twiter-icon.svg";
// import Facebookicon from "@/images/facebook-icon.svg";
import {HeaderData} from '@/pages/api/menu'

const Header = () => {
	// console.log(HeaderData);
	// return ''
	return(
		<header id="header">
			<div className="container">
				<div className="header_inner flxrow">
					<div className="logo flxrow">
						<Link href="#" className="flxrow">
							<Image src={HeaderData.logoUrl} alt="Headerlogo" className="defult_logo" />
							<Image src={HeaderData.stickyLogo} alt="Headerlogostiky" className="stiky_logo"/>
						</Link>
					</div>
					<nav className="navigation_main flxrow">
                        <ul className="main-menu flxrow">
							{HeaderData.menuItems.map((item , index) => (<li key={index}><Link href={item.menulink}>{item.menutitle}</Link></li>))}
                        </ul>
						<div className="menu_btn">
							<Link href={HeaderData.menuButtonlink}>{HeaderData.menuButtontext}</Link>
						</div>
						{/* <div className="f_social_wrap">
							<ul className="f_social">
								<li><Link href="#"><Image src={Iinkdinicon} alt="Iinkdinicon"/></Link></li>
								<li><Link href="#"><Image src={Instagramicon} alt="Instagramicon"/></Link></li>
								<li><Link href="#"><Image src={Twitericon} alt="Twitericon"/></Link></li>
								<li><Link href="#"><Image src={Facebookicon} alt="Facebookicon"/></Link></li>
							</ul>
						</div> */}
                    </nav>
				</div>
				<Link href="#" className="menu-btn">
					<span></span>
				</Link>
			</div>
		</header>
	)
}

export default Header;