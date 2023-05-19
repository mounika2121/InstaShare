import './index.css'

const NotFound = props => {
  const {history} = props
  const onClickRetry = () => {
    history.push('/')
  }

  return (
    <div className="not-found-container">
      <img
        className="not-found-img"
        src="https://res.cloudinary.com/djbs4yqbz/image/upload/v1684148855/Not_Found_Img_aoxwoh.png"
        alt="page not found"
      />
      <h1 className="no-found-heading">Page Not Found</h1>
      <p>we are sorry, the page you requested could not be found</p>
      <p>Please go back to homepage</p>
      <button type="button" className="home-page-btn" onClick={onClickRetry}>
        Home Page
      </button>
    </div>
  )
}

export default NotFound
