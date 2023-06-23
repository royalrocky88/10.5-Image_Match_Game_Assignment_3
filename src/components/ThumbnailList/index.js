import './index.css'

const ThumbnailList = props => {
  const {thumbnailDetail, onThumbnailClick} = props
  const {id, thumbnailUrl} = thumbnailDetail

  const activeThumbnail = () => {
    onThumbnailClick(id)
  }

  return (
    <li className="each-img-list">
      <button type="button" onClick={activeThumbnail} className="group-img-btn">
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-img" />
      </button>
    </li>
  )
}

export default ThumbnailList
