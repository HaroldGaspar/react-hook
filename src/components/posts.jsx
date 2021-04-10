import { useState } from 'react';

const usePost = (i) =>{
    const [post, setPost] = useState([]) 

    return {post, setPost}
}

export default usePost