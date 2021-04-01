import './App.css';
import logo from './images/alphastarlogo.svg';
import circle from './images/circle-divider.svg';
import left from './images/cog-left.svg';
import right from './images/cog-right.svg';
import factory from './images/factory.jpg';
import equipment from './images/equipment.jpg';
import team from './images/team.jpg';
import training from './images/training.jpg';
import { useEffect, useRef, useState } from 'react';
import { TweenMax, TimelineMax, Back, Linear } from 'gsap/all';

function App() {
	const ref = useRef(null);
	const [timeLine] = useState(new TimelineMax({ paused: true }));

	const handleOnMouseLeaveBurgerMenu = () => {
		const element = ref.current;
		TweenMax.to(element.querySelector('.burgerLine:first-child'), 0.2, {
			x: 0,
		});

		TweenMax.to(element.querySelector('.burgerLine:last-child'), 0.2, {
			x: 0,
		});
	};

	const handleOnMouseEnterBurgerMenu = () => {
		const element = ref.current;
		TweenMax.to(element.querySelector('.burgerLine:last-child'), 0.2, {
			x: 10,
		});

		TweenMax.to(element.querySelector('.burgerLine:first-child'), 0.2, {
			x: -10,
		});
	};

	const handleOnMouseEnterColumn = (className) => {
		const element = ref.current;
		TweenMax.to(element.querySelector(`.${className}`), 0.5, {
			y: -10,
			scale: 1.03,
			boxShadow: '0 0 20px 0px rgba(0, 0, 0, 0.35)',
		});
	};

	const handleOnMouseLeaveColumn = (className) => {
		const element = ref.current;
		TweenMax.to(element.querySelector(`.${className}`), 0.5, {
			y: 0,
			scale: 1,
			boxShadow: '0 0 20px 0px rgba(0, 0, 0, 0)',
		});
	};

	const handleOnMouseEnterServiceBox = (className) => {
		const element = ref.current;
		TweenMax.to(element.querySelector(`.serviceBox .${className}`), 0.5, {
			y: 0,
			opacity: 1,
		});
	};

	const handleOnMouseLeaveServiceBox = (className) => {
		const element = ref.current;
		TweenMax.to(element.querySelector(`.serviceBox .${className}`), 0.5, {
			y: 200,
			opacity: 0,
		});
	};

	const handleOnClickBurgerMenu = () => timeLine.play(0);

	const handleCloseBurgerMenu = () => timeLine.reverse(0);

	useEffect(() => {
		const element = ref?.current;

		timeLine
			.to(element.querySelector('nav'), 0.3, { autoAlpha: 1 })
			.staggerFromTo(
				element.querySelectorAll('nav li'),
				0.5,
				{
					y: -100,
					opacity: 0,
				},
				{ y: 0, opacity: 1 },
				0.1,
			);
	}, []);

	useEffect(() => {
		const element = ref.current;

		TweenMax.fromTo(
			element.querySelector('#hero h1'),
			0.6,
			{ y: 80, opacity: 0 },
			{ y: 0, opacity: 1, delay: 1 },
		);

		TweenMax.fromTo(
			element.querySelector('#hero .learnMoreButton'),
			0.6,
			{ y: 80, opacity: 0 },
			{ y: 0, opacity: 1, delay: 1.6, ease: Back.easeInOut },
		);
	}, []);

	useEffect(() => {
		const element = ref.current;

		TweenMax.set(element.querySelectorAll('.serviceBoxInner'), {
			y: 200,
			opacity: 0,
		});
	}, []);

	useEffect(() => {
		const element = ref.current;

		TweenMax.to(element.querySelectorAll('.cogLeft'), 7, {
			rotation: 360,
			repeat: -1,
			ease: Linear.easeNone,
		});

		TweenMax.to(element.querySelectorAll('.cogRight'), 7, {
			rotation: -360,
			repeat: -1,
			ease: Linear.easeNone,
		});
	}, []);

	return (
		<div className='App' ref={ref}>
			<header>
				<nav>
					<ul className='navMenu'>
						<li>
							<a href='#0'>Home</a>
						</li>
						<li>
							<a href='#0'>About us</a>
						</li>
						<li>
							<a href='#0'>Our services</a>
						</li>
						<li>
							<a href='#0'>The blog</a>
						</li>
						<li>
							<a href='#0'>Contact us</a>
						</li>
					</ul>
					<p className='closeButton' onClick={handleCloseBurgerMenu}>
						X
					</p>
				</nav>
				<div
					className='burgerIcon'
					onClick={handleOnClickBurgerMenu}
					onMouseLeave={handleOnMouseLeaveBurgerMenu}
					onMouseEnter={handleOnMouseEnterBurgerMenu}>
					<div className='burgerLine'></div>
					<div className='burgerLine'></div>
					<div className='burgerLine'></div>
				</div>
			</header>
			<section id='hero'>
				<img className='logo' src={logo} alt='' />
				<h1>We are AlphaStar</h1>
				<a href='#0' className='learnMoreButton'>
					Learn more
				</a>
				<img className='ovalDivider' src={circle} alt='' />
			</section>
			<section className='fourColSection'>
				<hgroup>
					<h2>Over 30 years experience</h2>
					<h3>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.
						Lorem dolor amet elit.{' '}
					</h3>
					<div className='blueDividerLine'></div>
				</hgroup>
				<div className='fourColContainer container'>
					<div
						className='fourColItem one'
						onMouseEnter={() => handleOnMouseEnterColumn('one')}
						onMouseLeave={() => handleOnMouseLeaveColumn('one')}>
						{' '}
						<img src={factory} alt='' />
						<div className='fourColText'>
							<h3>The Factory</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad.{' '}
							</p>{' '}
							<a href='#0' className='fourColButton'>
								Learn more
							</a>{' '}
						</div>
					</div>
					<div
						className='fourColItem two'
						onMouseEnter={() => handleOnMouseEnterColumn('two')}
						onMouseLeave={() => handleOnMouseLeaveColumn('two')}>
						{' '}
						<img src={equipment} alt='' />
						<div className='fourColText'>
							<h3>The Equipment</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad.{' '}
							</p>{' '}
							<a href='#0' className='fourColButton'>
								Learn more
							</a>{' '}
						</div>
					</div>
					<div
						className='fourColItem tree'
						onMouseEnter={() => handleOnMouseEnterColumn('tree')}
						onMouseLeave={() => handleOnMouseLeaveColumn('tree')}>
						{' '}
						<img src={team} alt='' />
						<div className='fourColText'>
							<h3>The Team</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad.{' '}
							</p>{' '}
							<a href='#0' className='fourColButton'>
								Learn more
							</a>{' '}
						</div>
					</div>
					<div
						className='fourColItem four'
						onMouseEnter={() => handleOnMouseEnterColumn('four')}
						onMouseLeave={() => handleOnMouseLeaveColumn('four')}>
						{' '}
						<img src={training} alt='' />
						<div className='fourColText'>
							<h3>The Training</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad.{' '}
							</p>{' '}
							<a href='#0' className='fourColButton'>
								Learn more
							</a>{' '}
						</div>
					</div>
				</div>
			</section>
			<section className='services'>
				<div
					className='serviceBox'
					onMouseLeave={() => handleOnMouseLeaveServiceBox('one')}
					onMouseEnter={() => handleOnMouseEnterServiceBox('one')}>
					<div className='serviceBoxInner one'>
						<h2>We are Dedicated</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
							impedit, nobis neque vitae rerum cumque.
						</p>
					</div>
				</div>
				<div
					className='serviceBox'
					onMouseLeave={() => handleOnMouseLeaveServiceBox('two')}
					onMouseEnter={() => handleOnMouseEnterServiceBox('two')}>
					<div className='serviceBoxInner two'>
						<h2>We are Responsive</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
							impedit, nobis neque vitae rerum cumque.
						</p>
					</div>
				</div>
				<div
					className='serviceBox'
					onMouseLeave={() => handleOnMouseLeaveServiceBox('tree')}
					onMouseEnter={() => handleOnMouseEnterServiceBox('tree')}>
					<div className='serviceBoxInner tree'>
						<h2>We are Dynamic</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
							impedit, nobis neque vitae rerum cumque.
						</p>
					</div>
				</div>
			</section>
			<section className='cogSection'>
				<hgroup>
					<h2>Our Cogs Never Stop Turning...</h2>
					<h3>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
						eiusmod tempor incididunt ut labore et
					</h3>
					<div className='blueDividerLine'></div>
				</hgroup>
				<div className='cogTwoCols container'>
					<div className='cogTextCol'>
						<h3 className='introText'>
							We strive for 100% customer satisfaction
						</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat.{' '}
						</p>
						<p>
							Duis aute irure dolor in reprehenderit in voluptate velit esse
							cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
							cupidatat non proident, sunt in culpa qui officia deserunt mollit
							anim id est laborum. Sed ut perspiciatis unde omnis iste natus
							error sit voluptatem accusantium doloremque laudantium, totam rem
							aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
							architecto beatae vitae dicta sunt explicabo.{' '}
						</p>
						<p>
							Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
							aut fugit.{' '}
						</p>
					</div>
					<div className='cogImageCol'>
						<img className='cogLeft' src={left} alt='' />
						<img className='cogRight' src={right} alt='' />
					</div>
				</div>
			</section>
		</div>
	);
}

export default App;
