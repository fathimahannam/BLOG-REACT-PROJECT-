import './post.css'

function Post() {
  return (
    <div className='post'>
      <img className='postImg' src="https://img.freepik.com/free-photo/mesmerizing-high-angle-shot-white-tulip-field-sunlight_181624-20654.jpg" alt="" />

      <div className="postInfo">
        <div className='postCats'>
            <span className='postCat' >Music</span>
            <span className='postCat' >Life</span>
        </div>
        <span className='postTitle'>Lorem ipsum dolor sit, amet .</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
        fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
        atque, exercitationem quibusdam, reiciendis odio laboriosam?
      </p>
    </div>
  )
}

export default Post
