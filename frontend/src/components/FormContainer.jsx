const FormContainer = ({ children }) => {
	return (
		<main className="main bg-dark">
			<section className="sign-in-content">
				{children}
			</section>
		</main>
	)
}

export { FormContainer }