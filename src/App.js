import './App.css';

function App() {
	return (
		<div className='App'>
			<header>
				<nav>
					<ul class='navMenu'>
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
					<p class='closeButton'>X</p>
				</nav>
				<div class='burgerIcon'>
					<div class='burgerLine'></div>
					<div class='burgerLine'></div>
					<div class='burgerLine'></div>
				</div>
			</header>
			<section id='hero'>
				<img class='logo' src='images/alphastarlogo.svg' alt='' />
				<h1>We are AlphaStar</h1>
				<a href='#0' class='learnMoreButton'>
					Learn more
				</a>
				<img class='ovalDivider' src='images/circle-divider.svg' alt='' />
			</section>
			<section class='fourColSection'>
				<hgroup>
					<h2>Over 30 years experience</h2>
					<h3>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.
						Lorem dolor amet elit.{' '}
					</h3>
					<div class='blueDividerLine'></div>
				</hgroup>
				<div class='fourColContainer container'>
					<div class='fourColItem'>
						{' '}
						<img src='images/factory.jpg' alt='' />
						<div class='fourColText'>
							<h3>The Factory</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad.{' '}
							</p>{' '}
							<a href='#0' class='fourColButton'>
								Learn more
							</a>{' '}
						</div>
					</div>
					<div class='fourColItem'>
						{' '}
						<img src='images/equipment.jpg' alt='' />
						<div class='fourColText'>
							<h3>The Equipment</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad.{' '}
							</p>{' '}
							<a href='#0' class='fourColButton'>
								Learn more
							</a>{' '}
						</div>
					</div>
					<div class='fourColItem'>
						{' '}
						<img src='images/team.jpg' alt='' />
						<div class='fourColText'>
							<h3>The Team</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad.{' '}
							</p>{' '}
							<a href='#0' class='fourColButton'>
								Learn more
							</a>{' '}
						</div>
					</div>
					<div class='fourColItem'>
						{' '}
						<img src='images/training.jpg' alt='' />
						<div class='fourColText'>
							<h3>The Training</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad.{' '}
							</p>{' '}
							<a href='#0' class='fourColButton'>
								Learn more
							</a>{' '}
						</div>
					</div>
				</div>
			</section>
			<section class='services'>
				<div class='serviceBox'>
					<div class='serviceBoxInner'>
						<h2>We are Dedicated</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
							impedit, nobis neque vitae rerum cumque.
						</p>
					</div>
				</div>
				<div class='serviceBox'>
					<div class='serviceBoxInner'>
						<h2>We are Responsive</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
							impedit, nobis neque vitae rerum cumque.
						</p>
					</div>
				</div>
				<div class='serviceBox'>
					<div class='serviceBoxInner'>
						<h2>We are Dynamic</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
							impedit, nobis neque vitae rerum cumque.
						</p>
					</div>
				</div>
			</section>
			<section class='cogSection'>
				<hgroup>
					<h2>Our Cogs Never Stop Turning...</h2>
					<h3>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
						eiusmod tempor incididunt ut labore et
					</h3>
					<div class='blueDividerLine'></div>
				</hgroup>
				<div class='cogTwoCols container'>
					<div class='cogTextCol'>
						<h3 class='introText'>We strive for 100% customer satisfaction</h3>
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
					<div class='cogImageCol'>
						<img class='cogLeft' src='images/cog-left.svg' alt='' />
						<img class='cogRight' src='images/cog-right.svg' alt='' />
					</div>
				</div>
			</section>
		</div>
	);
}

export default App;
