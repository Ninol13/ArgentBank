import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { FormContainer, Spinner } from '../components'
import { login, reset } from '../features/auth/authSlice'
import { getProfile } from '../features/userProfile/userProfileSlice'

function LogIn() {
  // État local du formulaire pour stocker email et password
	const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  // État local pour la case "Remember me" (non implémenté pour stockage)
	const [remember, setRemember] = useState(false)

  // Déstructuration de l'état formData
  const { email, password } = formData

  // Hooks pour la navigation (redirection) et Redux
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // Sélection des infos du store Redux (état de l'authentification)
  const { token, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)

  // useEffect : se déclenche quand l'état d'auth change (succès, erreur, etc.)
	useEffect(() => {
    const customId = "custom-id-yes"; // empêche d'afficher plusieurs fois le même toast

    // Si erreur → affiche une notification rouge
    if (isError && message?.trim()) {
      toast.error(message)
    }

    // Si succès ou si token est déjà défini → toast vert + récupération profil + redirection
    if ((isSuccess || token)) {
      navigate('/profile')      // redirection vers la page profil
    }

    // Réinitialise les flags Redux (isError, isSuccess, message, etc.)
    dispatch(reset())
	}, [token, isError, isSuccess, message, navigate, dispatch])

  // Gère les changements dans les champs du formulaire
  const onChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
      [e.target.name]: e.target.value, // met à jour email ou password
    }))
  }

  // Quand on clique sur "Sign In"
  const onSubmit = (e) => {
		e.preventDefault()

    const userData = { email, password }

    // Déclenche l'action Redux login() → POST /token/login
    dispatch(login(userData))
  }

  // Pendant que l'appel API est en cours → affiche un loader
  if (isLoading) {
    return <Spinner />
  }

  // Rendu JSX du formulaire
	return (
		<FormContainer>
			<i className="fa fa-sign-in sign-in-content__icon"></i>
			<h1>Sign In</h1>
			<form onSubmit={onSubmit}>
				{/* Champ Email */}
				<div className="input-wrapper">
					<input
						type="email"
						id='form-email'
						name="email"
						value={email}
						onChange={onChange}
						required
					/>
					<label htmlFor="form-email">Username</label>
				</div>

				{/* Champ Password */}
				<div className="input-wrapper">
					<input
						type='password'
						id='form-password'
						name='password'
						value={password}
						onChange={onChange}
						required
					/>
					<label htmlFor="form-password">Password</label>
				</div>

				{/* Case à cocher "Remember me" (pourrait être lié à localStorage) */}
				<div className="input-remember">
					<input
						type="checkbox"
						id="form-checkbox"
						name="rememberMe"
						onChange={() => setRemember(!remember)}
						checked={remember}
					/>
					<label htmlFor="form-checkbox">Remember me</label>
				</div>

				{/* Bouton submit */}
				<button className="sign-in-button button">Sign In</button>

				{/* Lien vers la page d'inscription */}
				<p>New customer? <Link to='/signup'>Register</Link></p>
			</form>
		</FormContainer>
	)
}

export { LogIn }
