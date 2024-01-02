import './single.css'
import Sidebar from '../../componenets/sidebar/Sidebar'
import SinglePost from '../../componenets/singlepost/SinglePost'
function Single() {
  return (
    <div className='single'>
        <SinglePost/>
      <Sidebar/>
      
    </div>
  )
}

export default Single
