import './index.css'

const TabItem = props => {
  const {each, onChangeTab, TabId} = props
  const {tabId, displayText} = each

  const onClickButton = () => {
    onChangeTab(tabId)
  }

  const matchButton = tabId === TabId ? 'button match-button' : 'button'

  return (
    <li className="button-container">
      <button className={matchButton} type="button" onClick={onClickButton}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
