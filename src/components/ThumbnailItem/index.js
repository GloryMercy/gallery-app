import './index.css'

const Thumbnail = props => {
  const {thumbnailImgDetails, clickedPhoto, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = thumbnailImgDetails

  console.log(isActive)

  const onClickPhoto = () => {
    clickedPhoto(id)
  }

  const activeImgBtnClass = isActive ? 'active-img' : 'thumbnail-image'

  return (
    <li className="image-item">
      <button type="button" className="img-btn " onClick={onClickPhoto}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={` ${activeImgBtnClass}`}
        />
      </button>
    </li>
  )
}

export default Thumbnail
