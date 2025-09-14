import { Link } from "react-router-dom"

function Error() {
	return (
		<main className="main bg-dark error">
			<h1 className="error__code">404</h1>
			<p className="error__text">Oups! La page que vous demandez n'existe pas.</p>
			<Link to="/" className="error__link">
				Retourner sur la page d’accueil
			</Link>
		</main>
	)
}

export { Error }