import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {PostService} from "../../services";
import {PostDTO} from "../../dto";
import PostCell from "../posts/post.cell";
import axios, {CancelToken, CancelTokenSource} from "axios";

function App() {

  const [posts, setPosts] = useState<PostDTO[]>();

  // async function fpoo() {
  //   const pp = await PostService.getPosts();
  //   setPosts(pp);
  // }
  // console.log("fpoo"+ fpoo());


  useEffect( () => {
    const cancelTokenSrc: CancelTokenSource = axios.CancelToken.source(); // permet de générer un token d'annulation de requête

    const fetchPosts = async () => {
      const apiPosts = await PostService.getPosts(cancelTokenSrc.token);
      setPosts(apiPosts);
    }
    fetchPosts().catch(console.error);
    return () => cancelTokenSrc.cancel(); //permet  d'arrêter la requête
  }, [])
  // const fetchPosts = async (event: SyntheticEvent) => {
  //   const posts = await PostService.getPosts();
  //   console.log(posts);
  // }
  return (
    <div className="App">
      {
        !posts && <p>chargement en cours...</p>
      }
      {
        posts && posts.map((dto) => <PostCell post={dto} key={dto.id}/>)
      }
    </div>
  );
}

export default App;
