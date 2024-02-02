import Image from "next/image";
import Link from "next/link";
// import Homebannerdata from '@/pages/api/menu'
import { Homebannerdata } from "@/pages/api/menu";

const Homebanner = () => {
	console.log(Homebannerdata.HomeBannerheading);
	// let dataheading = '{Homebannerdata.HomeBannerheading}';
	return (
		<div className="banner_wapper home_banner_wapper">
			<div className="banner_image">
				<Image src={Homebannerdata.Bannerimage} className="d-md-block d-none" alt="" /> 
				<Image src={Homebannerdata.Bannerimagemobile} className="d-md-none" alt="" />
			</div>
			<div className="banner_image_patten">
				<Image src={Homebannerdata.Bannerpatern} alt="" />
			</div>
			<div className="home_banner_inner">
				<div className="container">
					<div className="home_banner_txt">
						{!Homebannerdata.HomeBannerheading ? null : <h1 dangerouslySetInnerHTML={{__html: Homebannerdata.HomeBannerheading}} /> }
						
						<p>{Homebannerdata.HomeBannerdetail}</p>
						{!Homebannerdata.HomeBannerbuttontext ? null : <div className="w3n_buttom_box">
							<Link href={Homebannerdata.HomeBannerbuttonlink} className="w3n_buttom">{Homebannerdata.HomeBannerbuttontext}</Link>
						</div>}
						
					</div>
				</div>
			</div>
		</div>
	)
}

export default Homebanner;