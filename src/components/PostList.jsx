import React from 'react';
import PostItem from './PostItem';
import './PostList.css';

function PostList(props) {

    const { posts } = props;

    return (
        <div>
            <h2>Posts List:</h2>
            <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600&display=swap" rel="stylesheet"></link>
                <div className="post-list">
                    { posts.map((post, index) => {
                         return <PostItem
                            userid = { post.userid }
                            id={ post.id }
                            title={ post.title }
                            body={ post.body }
                            key={ index }
                        />
                    })}
                 </div>
        </div>
    );

}

export default PostList;