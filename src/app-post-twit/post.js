import '../app-post-twit/style-post.css';
import BottomBtns from './bottom-btns'
import AllInfo  from './all_info'


const ANAKIN_IMAGE = "https://static1.srcdn.com/wordpress/wp-content/uploads/2020/05/Anakin-Skywalker-Eye-Scar-Explained.jpg";
const RAY_IMAGE = "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";
const postData = [
    {
      author: {
        name: "Anakin skywalker",
        photo: ANAKIN_IMAGE,
        nickname: "@dart_vader",
      },
      content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
      image: RAY_IMAGE,
      date: "26 лют.",
      statistic:{
        comments:482,
        reposts:146,
        likes:887,
      },
    },
  ]; 

function Post(){
    return(
        <div className="container">
            <div className="post-wrapper">
                <AllInfo 
                avatar={postData[0].author.photo} 
                name={postData[0].author.name}
                nickname={postData[0].author.nickname}
                date={postData[0].date}
                />

                <div className="post">
                    <div className="content-text">
                            <p className="main_post_text">{postData[0].content}</p>
                    </div>
                    <div className="content-photo">
                        <img src={postData[0].image} alt="photo" className="addition-photo-to-post"/>
                    </div>
                </div>

                <BottomBtns numersOfcomments={postData[0].statistic.comments}/>
            </div>
        </div>
    )
}

export default Post;