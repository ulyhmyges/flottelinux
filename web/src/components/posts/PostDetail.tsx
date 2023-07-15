import "./PostDetail.css"
import PostCell, {IPostCell} from "./post.cell";
import {PostDTO} from "../../dto";
import {useParams} from "react-router-dom";
import {PostService} from "../../services";
import {useEffect, useState} from "react";
import axios, {CancelTokenSource} from "axios";



function PostDetail(){
    const {id} = useParams();
    const ob = useParams();
    const [post, setPost] = useState<PostDTO | null>();

    useEffect( () => {
        const cancelTokenSrc: CancelTokenSource = axios.CancelToken.source(); // permet de générer un token d'annulation de requête

        const fetchPost = async () => {
            const apiPost = await PostService.getPost(id || "1", cancelTokenSrc.token);
            setPost(apiPost);
        }
        fetchPost().catch(console.error);
        return () => cancelTokenSrc.cancel();
    }, []);

    return (
        <div>
            {
                post === null && <p>impossible de trouver le post avec l'id {id}</p>}
            {
                post === undefined && <p>Chargement en cours</p>
            }
            {
                post && <PostCell post={post} />
            }
        </div>
    )
}
export default PostDetail;