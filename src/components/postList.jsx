const PostList = (props) => {
    return ( 
        <div>
            <ul className="list-group">
            {props.post.map( (post) => (
                <li className="list-group-item">
                    <h4>{post.title}</h4>
                    <p className="text-left">{post.body}</p>
                </li>
            ))}
            </ul>
        </div>
     );
}
 
export default PostList;