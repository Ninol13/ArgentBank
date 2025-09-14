import { Features } from '../components'
import chatIcon from '../assets/img/icon-chat.webp'
import moneyIcon from '../assets/img/icon-money.webp'
import securityIcon from '../assets/img/icon-security.webp'

function Home() {
	return (
		<main>
			<div className="hero">
				<section className="hero__content">
					<h2 className="sr-only">Promoted Content</h2>
					<p className="subtitle">No fees.</p>
					<p className="subtitle">No minimum deposit.</p>
					<p className="subtitle">High interest rates.</p>
					<p className="text">Open a savings account with Argent Bank today!</p>
				</section>
			</div>
			<section className="features">
				<h2 className="sr-only">Features</h2>
				<Features
					image={chatIcon}
					alt="Chat Icon"
					title="You are our #1 priority"
					text="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
				/>
				<Features
					image={moneyIcon}
					alt="Money Icon"
					title="More savings means higher rates"
					text="The more you save with us, the higher your interest rate will be!"
				/>
				<Features
					image={securityIcon}
					alt="Security Icon"
					title="Security you can trust"
					text="We use top of the line encryption to make sure your data and money is always safe."
				/>
			</section>
		</main>
	)
}

export { Home }