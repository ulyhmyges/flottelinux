import {PostDTO} from "../../dto";
import axios, {CancelToken} from "axios";
export class PostService {
    static async getPosts(token?: CancelToken): Promise<PostDTO[]> {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts", {cancelToken: token});
            if (Array.isArray(response.data)){
                return response.data;
            }
        } catch (err: unknown) {
            return [];
        }
        return [];
    }

    static async getPost(id: string, token?: CancelToken): Promise<PostDTO | null > {
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`, {cancelToken: token});
            return response.data;
        } catch (err: unknown) {
            return null;
        }
    }
}