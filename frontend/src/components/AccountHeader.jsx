import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { FormContainer } from "../components";
import { resetUser, updateProfile } from "../features/userProfile/userProfileSlice";
import { toast } from "react-toastify";



function AccountHeader() {
  const [open, setOpen] = useState('')
  const [userName, setUsername] = useState('')

  const dispatch = useDispatch()

  const { firstName, lastName, isError, isSuccess ,message } = useSelector((state) => state.user)

  useEffect(() => {
		const customId = "custom-id-yes";

  if (isError && message?.trim()) {
    toast.error(message)
  }

  if (isSuccess && message?.trim()) {
    toast.success(message, { toastId: customId })
  }

  dispatch(resetUser())
  }, [isError, isSuccess, message])

  const ToggleEdit = () => {
    setOpen(!open);
  };

  const onSubmit = (e) => {
    e.preventDefault()

    dispatch(updateProfile({ userName }))
    setUsername('')
    ToggleEdit(false)
  }

  return (
    <>
      { !open ? (
          <div className="header">
            <h1>Welcome back<br />{firstName} {lastName} !</h1>
            <button className="edit-button button" onClick={ToggleEdit}>
              Edit Name
            </button>
          </div>
        )
        :
        (
          <FormContainer>
            <h1>Edit user info</h1>

            <form onSubmit={onSubmit}>
              <div className="input-wrapper">
                <label htmlFor="userName">User name:</label>
                <input
                  type="text"
                  id="userName"
                  name="userName"
                  value={userName}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="input-wrapper">
                <label htmlFor="firstName">First name:</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder={firstName}
                  disabled
                />
              </div>
              <div className="input-wrapper">
                <label htmlFor="lastName">Last name:</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder={lastName}
                  disabled
                />
              </div>
              <div className="edit-button__wrapper">
                <button className="edit-button__wrapper--save button">Save</button>
                <div onClick={ToggleEdit} className="edit-button__wrapper--cancel button">Cancel</div>
              </div>
            </form>

          </FormContainer>
        )
      }
    </>
  );
}

export { AccountHeader }