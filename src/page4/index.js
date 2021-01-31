import React from 'react';
import { MdDateRange } from 'react-icons/md';
import ReactPaginate from 'react-paginate';
import {
	AiOutlineComment,
	AiOutlineArrowLeft,
	AiOutlineArrowRight,
	AiFillYoutube,
	AiFillFacebook,
	AiFillTwitterSquare
} from 'react-icons/ai';
import './style.scss';
const MainBlogPosts = ({ height, width, fontSize, imgSrc }) => {
	return (
		<div className="main-blog-posts" style={{ padding: '2px' }}>
			<img width={width} height={height} src={imgSrc} alt="source" />
			<div className="inside-hero-image1">
				<h5 style={{ backgroundColor: 'black', color: 'white', opacity: '80%' }}>Heading</h5>
				<div>
					<h2 style={{ fontSize: fontSize }}>
						Lorem Ipsum is simply dummy text <br /> of the printing
					</h2>
					<span>
						By : Someone <MdDateRange /> March 12,2017 <AiOutlineComment /> 4
					</span>
				</div>
			</div>
		</div>
	);
};

const FeaturedBlog = () => {
	return (
		<div className="">
			<div className="featured-card">
				<img
					width="100%"
					src="https://images.unsplash.com/photo-1611338522368-3fccf11b4afd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
					alt=" source"
				/>
				<div className="featured-card-overly">
					<p>Develop & design</p>
				</div>
			</div>
			<div style={{ padding: '5px' }}>
				<h3>Here is heading About the blog that is related to their topics</h3>
			</div>
			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<p style={{ fontWeight: 'bolder' }}>
					Steve Jobs <span style={{ fontWeight: 'lighter', fontSize: '10px' }}>August 17,2018</span>
				</p>
				<p style={{ backgroundColor: 'black', color: 'white', padding: '5px 15px' }}>1</p>
			</div>
			<p style={{ fontSize: '20px', color: 'gray' }}>
				Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
				industry's standard dummy text ever since the 1500s,
			</p>
		</div>
	);
};

const LatestBlog = () => {
	return (
		<div className="">
			<div className="featured-card">
				<img
					width="100%"
					src="https://images.unsplash.com/photo-1611338522368-3fccf11b4afd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
					alt=" source"
				/>
				<div className="featured-card-overly">
					<p>Develop & design</p>
				</div>
			</div>
			<div style={{ padding: '5px' }}>
				<h3>Here is heading About the blog that is related to their topics</h3>
			</div>
			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<p style={{ fontWeight: 'bolder' }}>
					Steve Jobs <span style={{ fontWeight: 'lighter', fontSize: '10px' }}>August 17,2018</span>
				</p>
				<p style={{ backgroundColor: 'black', color: 'white', padding: '5px 15px' }}>1</p>
			</div>
		</div>
	);
};

const DesignHouse = () => {
	return (
		<div className="">
			<div className="featured-card">
				<img
					width="100%"
					src="https://images.unsplash.com/photo-1611338522368-3fccf11b4afd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
					alt=" source"
				/>
				<div className="featured-card-overly">
					<p>Develop & design</p>
				</div>
			</div>
			<div style={{ padding: '5px' }}>
				<h3>Here is heading About the blog that is related to their topics</h3>
			</div>
			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<p style={{ fontWeight: 'bolder' }}>
					Steve Jobs <span style={{ fontWeight: 'lighter', fontSize: '10px' }}>August 17,2018</span>
				</p>
			</div>
		</div>
	);
};

const MostPopular = () => {
	return (
		<div className="most-popular mt-3 mb-5">
			<div>
				<img
					width="120px"
					height="100px"
					src="https://images.unsplash.com/photo-1611338522368-3fccf11b4afd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
					alt=" source"
				/>
			</div>
			<div>
				<p style={{ fontSize: '20px' }}>Here is heading about the post blog that is related to their blog</p>
				<span>August 9,2020</span>
			</div>
		</div>
	);
};

const SocialConnection = ({ Icon, sb, message }) => {
	return (
		<div style={{ display: 'flex', justifyContent: 'space-between' }}>
			<div>
				{Icon}
				<span style={{ marginLeft: '15px', fontWeight: 'bolder' }}>12,12133 {sb}</span>
			</div>
			<div style={{ marginTop: '20px', fontWeight: 'bold' }}>{message}</div>
		</div>
	);
};

function PageFour() {
	return (
		<div className="container-fluid">
			<div style={{ display: 'flex' }}>
				<div className="">
					<MainBlogPosts
						width="780px"
						height="550px"
						imgSrc="https://images.unsplash.com/photo-1611564393146-2819eeb1f335?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=968&q=80"
					/>
				</div>
				<div>
					<div>
						<div>
							<MainBlogPosts
								width="100%"
								fontSize="25px"
								height="280px"
								imgSrc="https://images.unsplash.com/photo-1611564393146-2819eeb1f335?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=968&q=80"
							/>
						</div>
						<div style={{ display: 'flex' }}>
							<div>
								<MainBlogPosts
									width="100%"
									fontSize="20px"
									imgSrc="https://images.unsplash.com/photo-1611564393146-2819eeb1f335?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=968&q=80"
								/>
							</div>
							<div>
								<MainBlogPosts
									width="100%"
									fontSize="20px"
									imgSrc="https://images.unsplash.com/photo-1611564393146-2819eeb1f335?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=968&q=80"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="row mt-3">
				<div className="col-sm-12 col-md-8 col-lg-8">
					<div className="black-heading">
						<span style={{ backgroundColor: '#fcad03' }}>Don't Miss</span>
						<p>All</p>
						<p>Hunter</p>
						<p>Food</p>
						<p>Cock</p>
						<p>Technology</p>
						<p>Biology</p>
						<p>Chemistry</p>
						<p>More</p>
					</div>
					<hr
						style={{
							border: '2px solid #fcad03',
							backgroundColor: '#fcad03',
							padding: '0px',
							margin: '0px'
						}}
					/>
					<div className="row">
						<div className="col-sm-12 col-md-6 col-lg-6 mt-3">
							<FeaturedBlog height="300px" />
						</div>
						<div className="col-sm-12 col-md-6 col-lg-6">
							{[ 0, 1, 2, 3 ].map((item) => {
								return <MostPopular />;
							})}
						</div>
					</div>
				</div>
				<div className="col-sm-12 col-md-4 col-lg-4">
					<div className="black-heading">
						<span>STAY CONNECTED</span>
					</div>
					<hr
						style={{ border: '2px solid black', backgroundColor: 'black', padding: '0px', margin: '0px' }}
					/>
					<SocialConnection Icon={<AiFillFacebook size={64} color="#3b5998" />} sb="Fans" message="Likes" />
					<SocialConnection
						Icon={<AiFillTwitterSquare size={64} color="#00b9ff" />}
						sb="Followers"
						message="Follow"
					/>
					<SocialConnection
						Icon={<AiFillYoutube size={64} color="#FF0000" />}
						sb="Subscribers"
						message="Subscribe"
					/>

					<p style={{ textAlign: 'center' }}>Advertise Scripted</p>
				</div>
			</div>
			<div className="row">
				<div className="col-sm-12 col-md-8 col-lg-8">
					<div className="black-heading">
						<span style={{ backgroundColor: 'green' }}>Don't Miss</span>
						<p>All</p>
						<p>Recipe</p>
						<p>Food</p>
						<p>Travel</p>
						<p>Health & fitness</p>
						<p>Music</p>
					</div>
					<hr
						style={{
							border: '2px solid green',
							backgroundColor: 'green',
							padding: '0px',
							margin: '0px'
						}}
					/>

					<div className="row">
						<div className="col-sm-12 col-md-6 col-lg-6 mt-3">
							<FeaturedBlog height="300px" />
							{[ 0, 1 ].map((i) => <MostPopular />)}
						</div>
						<div className="col-sm-12 col-md-6 col-lg-6 mt-3">
							<FeaturedBlog height="300px" />
							{[ 0, 1 ].map((i) => <MostPopular />)}
						</div>
						<div className="col-sm-12 col-md-12 col-lg-12 mt-3">
							<div className="black-heading">
								<span style={{ backgroundColor: 'grey' }}>House Design</span>
							</div>
							<hr
								style={{
									border: '2px solid grey',
									backgroundColor: 'grey',
									padding: '0px',
									margin: '0px'
								}}
							/>
							<div className="row mt-3">
								<div className="col-sm-12 col-md-4 col-lg-4">
									<DesignHouse />
								</div>
								<div className="col-sm-12 col-md-4 col-lg-4">
									<DesignHouse />
								</div>
								<div className="col-sm-12 col-md-4 col-lg-4">
									<DesignHouse />
								</div>
							</div>
						</div>
						<div className="col-sm-12 col-md-12 col-lg-12 mt-3">
							<div className="black-heading">
								<span style={{ backgroundColor: 'black' }}>Latest Blog</span>
							</div>
							<hr
								style={{
									border: '2px solid black',
									backgroundColor: 'black',
									padding: '0px',
									margin: '0px'
								}}
							/>
							<div className="row mt-3">
								<div className="col-sm-12 col-md-6 col-lg-6">
									<LatestBlog />
								</div>
								<div className="col-sm-12 col-md-6 col-lg-6">
									<LatestBlog />
								</div>
								<div className="col-sm-12 col-md-6 col-lg-6">
									<LatestBlog />
								</div>
								<div className="col-sm-12 col-md-6 col-lg-6">
									<LatestBlog />
								</div>
								<div className="col-sm-12 col-md-12 col-lg-12 text-center">
									<ReactPaginate
										pageClassName="list-item"
										previousLabel={<AiOutlineArrowLeft size="17" color="white" />}
										previousClassName="previous-class"
										nextClassName="previous-class"
										breakLabel="..."
										nextLabel={<AiOutlineArrowRight size="17" color="white" />}
										activeClassName="active"
										pageCount="4"
										disabledClassName="disable-class"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-sm-12 col-md-4 col-lg-4">
					<div className="black-heading">
						<span>STAY CONNECTED</span>
					</div>
					<hr
						style={{ border: '2px solid black', backgroundColor: 'black', padding: '0px', margin: '0px' }}
					/>
					{[ 0, 1, 2, 3, 4, 5, 6, 7 ].map((i) => {
						return <MostPopular />;
					})}
				</div>
			</div>
		</div>
	);
}

export default PageFour;
