import React, { useState, useEffect } from 'react'
import './css/Resell.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import ResellEntry from './ResellEntry'

const Resell = () => {
    
    const [posts, setPosts] = useState([]);
    const [filterGender, setFilterGender] = useState('');
    const [sortOption, setSortOption] = useState(''); 

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

    const filteredPosts = posts.filter(post => {
        if (filterGender === '') {
            return true; // No filter selected, show all posts
        }
        return post.gender === filterGender;
    });

    const sortedPosts = [...filteredPosts].sort((a, b) => {
        if (sortOption === 'build') {
            return a.build.localeCompare(b.build);
        } 
        else if (sortOption === 'price') {
            return a.price - b.price;
        } 
        else if (sortOption === 'recent') {
            // Sort by most recent (created_at column)
            return new Date(b.created_at) - new Date(a.created_at);
        }
        return 0;
    });

    const handleFilterChange = e => {
        setFilterGender(e.target.value);
    };

    const handleSortChange = e => {
        setSortOption(e.target.value);
    };



  return (
    <div className='resell'>
        <h1>Resell</h1>
        
        <div className="filter-sort-container">
            <select value={filterGender} onChange={handleFilterChange}>
                <option value="">Guy/Girl Ticket</option>
                <option value="Guy">Guy</option>
                <option value="Girl">Girl</option>
            </select>
            <select value={sortOption} onChange={handleSortChange}>
                <option value="">Sort By</option>
                <option value="build">Build (Alphabetical)</option>
                <option value="price">Price (Ascending)</option>
                <option value="recent">Most Recent </option>
            </select>
        </div>

        <Link to="/postform">
            <button>Create Posting</button>
        </Link>
        <ul className='noticeb'>
            <li>Posts automatically delete after 48 hours.</li>
            <li>Contact chilifestbuilds@gmail.com for any inquiries.</li>
        </ul>

        <div className="resell-container">
            {sortedPosts.map(post => (
                <ResellEntry key={post.id} post={post} />
            ))}
        </div>
    </div>
  )
}

export default Resell