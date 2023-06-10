import './index.css'

const MatchImage = props => {
  const {each, matchTagElement} = props
  const {imageUrl, thumbnailUrl} = each

  const onChangeImage = () => {
    matchTagElement(imageUrl)
  }

  return (
    <li>
      <button className="image-button" type="button" onClick={onChangeImage}>
        <img src={thumbnailUrl} alt="thumbnail" className="img" />
      </button>
    </li>
  )
}

export default MatchImage
