import Link from "next/link";
import Image from "next/image";
import {Homeaboutdata} from '@/pages/api/menu'

const Abouthome = () => {
	return (
		<div className="home_about_sec">
			<div className="container">
				<div className="home_about_inner">
					<div className="home_about_left">
						<div className="section_title">
							{Homeaboutdata.Homeaboutsubtitle &&
								<div className="sub_title">
									<h6>{Homeaboutdata.Homeaboutsubtitle}</h6>
								</div>
							}
							<h2>{Homeaboutdata.Homeabouttitle}</h2>
							<p>{Homeaboutdata.Homeaboutdetail}</p>
							{Homeaboutdata.Homeaboutbuttonlink && <div className="w3n_link_box">
								<Link href={Homeaboutdata.Homeaboutbuttonlink} className="w3n_link">{Homeaboutdata.Homeaboutbuttontext}</Link>
							</div>}
							
						</div>
					</div>
					<div className="home_about_center">
						<Image src={Homeaboutdata.Homeaboutmainimage} alt="" />
					</div>
					<div className="home_about_right">
						<div className="about_count_wrp counter_row">
							{Homeaboutdata.Homeaboutcounterdata.map((item , index) => <div key={index} className="about_count_box counter_box">
								<div className="about_count_top">
									<div className="about_count_icon"><Image src={item.Homeaboutcounterimage} alt="" /></div>
									<div className="about_count_number count_number"><span>{item.Homeaboutcounternumber}</span>{item.Homeaboutcounternumbersymbol}</div>
								</div>
								<p>{item.Homeaboutcounterdetail}</p>
							</div>)}
							
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Abouthome;