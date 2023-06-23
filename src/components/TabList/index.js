import './index.css'

const TabList = props => {
  const {tabDetail, onActiveTab, isActive} = props
  const {tabId, displayText} = tabDetail
  const tabActive = isActive ? 'active' : ''
  const newActiveTab = () => {
    onActiveTab(tabId)
  }

  return (
    <li className="each-tab-list">
      <button
        type="button"
        onClick={newActiveTab}
        className={`activeBtn ${tabActive}`}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabList
