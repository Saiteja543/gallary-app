import './index.css'

const ThumbnailItem = props => {
  const {eachImageDetails, onChangeImage, isActive} = props

  const {id, thumbnailUrl, thumbnailAltText} = eachImageDetails

  const activeImageDetails = isActive ? 'thumbnail active' : 'active'

  const onClickChangeImage = () => {
    onChangeImage(id)
  }

  return (
    <li className="list-item">
      <button type="button" className="thumb-btn" onClick={onClickChangeImage}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={activeImageDetails}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
