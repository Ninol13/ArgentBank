function Account({ accountType, accountNumber, amount, description }) {
	return (
		<section className="account">
			<div className="account__wrapper">
				<h3 className="account__wrapper--title">Argent Bank {accountType} ({accountNumber})</h3>
				<p className="account__wrapper--amount">${amount}</p>
				<p className="account__wrapper--amount-description">{description} Balance</p>
			</div>
			<div className="account__wrapper cta">
				<button className="transaction-button button">View transactions</button>
			</div>
		</section>
	)
}

export { Account }