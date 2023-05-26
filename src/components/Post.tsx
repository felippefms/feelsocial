'Use Client'

import LikeBtn from "./LikeBtn"
import CommentBtn from "./CommentBtn"
import ShareBtn from "./ShareBtn"

function Post(props: { post: {content:any} }){
    return(
        <div className="flex flex-col bg-white mx-4">
            <div className="flex justify-center">
                {props.post.content}
            </div>
            <div className="flex items-center justify-between mx-4">
                <LikeBtn></LikeBtn>
                <CommentBtn></CommentBtn>
                <ShareBtn></ShareBtn>
            </div>
        </div>
    )
}

export default Post;