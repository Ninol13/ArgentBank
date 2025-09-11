import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

function PrivateRoute() {
	const auth = useSelector(state => state.auth.token)
	return auth ? <Outlet /> : <Navigate to="/login" replace />
}

export { PrivateRoute }