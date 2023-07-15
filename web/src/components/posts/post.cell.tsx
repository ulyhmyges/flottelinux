import "./post.cell.css"
import {PostDTO} from "../../dto";
import {Link, useParams} from "react-router-dom";

export interface IPostCell {
    post: PostDTO;
}
function PostCell(args: IPostCell) {
    const {id} = useParams();
    return (
        <div>
            <h3>title: {args.post.title}</h3>
            <p>body : {args.post.body}</p>
            {
                !id && <Link to={`/posts/${args.post.id}`}>More detail</Link>
            }
        </div>
    )
}
export default PostCell;