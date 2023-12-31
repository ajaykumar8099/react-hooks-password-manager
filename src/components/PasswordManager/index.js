import {useState} from 'react'

import {v4 as uuidv4} from 'uuid'

import PasswordItem from '../PasswordItem'

import './index.css'

const PasswordManager = () => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [website, setWebsite] = useState('')
  const [userList, setUserList] = useState([])
  const [search, setSearch] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const onChangeWebsite = event => {
    setWebsite(event.target.value)
  }

  const onChangeUserName = event => {
    setUserName(event.target.value)
  }

  const onChangePassword = event => {
    setPassword(event.target.value)
  }

  const onAddDetails = event => {
    event.preventDefault()
    const newDetails = {
      id: uuidv4(),
      website,
      userName,
      password,
      isPassShow: false,
    }
    setUserList(prevList => [...prevList, newDetails])
    setPassword('')
    setUserName('')
    setWebsite('')
  }

  const onDeleteItem = id => {
    const filterDeleteItems = userList.filter(each => each.id !== id)
    setUserList(filterDeleteItems)
  }

  const onSearchItem = event => {
    setSearch(event.target.value)
  }

  const onChangeShow = () => {
    setShowPassword(!showPassword)
  }

  const searchedData = userList.filter(each =>
    each.website.toLowerCase().includes(search.toLowerCase()),
  )

  return (
    <div className="bg-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
        alt="app logo"
        className="nav-image"
      />
      <div className="top-card">
        <div className="image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
            alt="password manager"
            className="image-show"
          />
        </div>
        <div className="form-container">
          <form onSubmit={onAddDetails}>
            <h1 className="form-heading">Add New Password</h1>
            <div className="website-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
                className="website"
              />
              <hr />
              <input
                type="text"
                value={website}
                onChange={onChangeWebsite}
                placeholder="Enter Website"
                className="input"
              />
            </div>
            <div className="website-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
                className="website"
              />
              <hr />
              <input
                type="text"
                value={userName}
                onChange={onChangeUserName}
                placeholder="Enter Username"
                className="input"
              />
            </div>
            <div className="website-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
                className="website"
              />
              <hr />
              <input
                type="password"
                value={password}
                onChange={onChangePassword}
                placeholder="Enter Password"
                className="input"
              />
            </div>
            <button type="submit" className="button">
              Add
            </button>
          </form>
        </div>
      </div>
      <div className="bottom-container">
        <div className="password-details-container">
          <div className="passwords-length-cont">
            <h1 className="your-pass">Your Passwords</h1>
            <div className="length-container">
              <p>{userList.length}</p>
            </div>
          </div>
          <div className="search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
              alt="search"
              className="search-image"
            />
            <input
              type="search"
              placeholder="Search"
              onChange={onSearchItem}
              value={search}
              className="input"
            />
          </div>
        </div>
        <hr className="hr-line" />
        <div className="show-pass-cont">
          <input
            type="checkbox"
            id="show-pass"
            checked={showPassword}
            onChange={onChangeShow}
          />
          <label htmlFor="show-pass" className="label">
            Show passwords
          </label>
        </div>
        {searchedData.length === 0 ? (
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
              alt="no passwords"
              className="image-empty"
            />
            <p className="no-pass">No Passwords</p>
          </div>
        ) : (
          <ul className="ul-list-cont">
            {searchedData.map(each => (
              <PasswordItem
                key={each.id}
                data={each}
                onDeleteItem={onDeleteItem}
                showPassword={showPassword}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
export default PasswordManager
