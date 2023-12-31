import './index.css'

const PasswordItem = props => {
  const {data, onDeleteItem, showPassword} = props
  const {id, userName, password, website} = data

  const firstCharacter = website.slice(0, 1).toUpperCase()

  const onClickDltBtn = () => {
    onDeleteItem(id)
  }

  const passwordShower = showPassword ? (
    <p className="show-password">{password}</p>
  ) : (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="stars"
      className="star-image"
    />
  )

  return (
    <li className="li-container">
      <div className="first-cont">
        <p>{firstCharacter}</p>
      </div>
      <div className="details-cont">
        <p>{website}</p>
        <p>{userName}</p>
        <p>{passwordShower}</p>
      </div>
      <div className="dlt-cont">
        <button
          type="button"
          className="dlt-btn"
          onClick={onClickDltBtn}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
            className="dlt-icon"
          />
        </button>
      </div>
    </li>
  )
}
export default PasswordItem
