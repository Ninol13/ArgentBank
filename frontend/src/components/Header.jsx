import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'
import { resetUser } from '../features/userProfile/userProfileSlice'
import Logo from '../assets/img/argentBankLogo.webp'
import { toast } from 'react-toastify'

function Header() {
	const { token } = useSelector((state) => state.auth)
	const { userName } = useSelector((state) => state.user)

	const dispatch = useDispatch()
	const navigate = useNavigate()

	const onLogout = () => {
		toast.success(`Good bye ${userName}`)
		dispatch(logout())
		dispatch(reset())
		dispatch(resetUser())
		navigate('/');
	};

	return (
		<nav className="main-nav">
			<Link to='/' className="main-nav__logo">
				<img
					className="main-nav__logo--image"
					src={Logo}
					alt="Argent Bank Logo"
				/>
				<h1 className="sr-only">Argent Bank</h1>
			</Link>
			<ul>
				{ token ?
					<li>
						<Link to='/profile' className="main-nav__item">
							<i className="fa fa-user-circle"></i>
							{userName}
						</Link>
						<Link to='/' className="main-nav__item" onClick={onLogout}>
							<i className="fa fa-sign-out"></i>
							Sign Out
						</Link>
					</li>
					:
					<li>
						<Link to='/login' className="main-nav__item">
							<i className="fa fa-sign-in"></i>
							Sign In
						</Link>
					</li>
				}
			</ul>
		</nav>
	)
}

export { Header }