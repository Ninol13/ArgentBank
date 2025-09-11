import { AccountHeader, Account } from '../components'
import { useDispatch } from 'react-redux'
import { getProfile } from '../features/userProfile/userProfileSlice'

function Profile() {
	const dispatch = useDispatch()
	dispatch(getProfile())
	return (
		<main className="main bg-dark">
			<AccountHeader />
			<h2 className="sr-only">Accounts</h2>
			<Account
				accountType="Checking"
				accountNumber="x8349"
				amount="2,082.79"
				description="Available"
			/>
			<Account
				accountType="Savings"
				accountNumber="x6712"
				amount="10,928.42"
				description="Available"
			/>
			<Account
				accountType="Credit Card"
				accountNumber="x8349"
				amount="184.30"
				description="Current"
			/>
		</main>
	)
}

export { Profile }