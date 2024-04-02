import React, { useState, useEffect } from 'react'
import './css/Resell.css'
import axios from 'axios'

const Resell = () => {
    
  const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/posts');
                setPosts(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchPosts();
    }, []);

  return (
    <div className='resell'>
        <h1>Resell</h1>
        <ul>
            {posts.map((post, index) => (
                <li key={index}>
                    {post.name}, {post.build}, {post.numtickets}, {post.price}, {post.contact}, {post.gender}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Resell