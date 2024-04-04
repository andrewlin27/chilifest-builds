import React from 'react';
import './css/ResellEntry.css';
import axios from 'axios'


const ResellEntry = ({ post }) => {

    const formatTime = (created) => {
        const time = new Date(created);
        const cstOffset = -5 * 60; 
        const cstTime = new Date(time.getTime() + cstOffset * 60000);
        const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        const weekdayName = weekdays[cstTime.getDay()];

        const hours = cstTime.getHours() % 12 || 12; 
        const minutes = cstTime.getMinutes().toString().padStart(2, '0'); // Ensure two digits
        const ampm = cstTime.getHours() < 12 ? 'am' : 'pm'; 
        const formattedTime = `${hours}:${minutes}${ampm}`;

        return `${weekdayName} ${formattedTime}`;
    };


    const handleDelete = async () => {
        const inputPassword = prompt('Enter your password to delete:');
        if (inputPassword === null) return; // User cancelled
        try {
            await axios.delete(`https://ec2-18-219-30-98.us-east-2.compute.amazonaws.com/api/posts/${post.post_id}`, { data: { password: inputPassword } });
            alert('Post deleted successfully!');
        } catch (error) {
            alert('Invalid password. Forgot? Email chilifestbuilds@gmail.com');
        }
    };

    return (
        <div className="resell-entry">
            <h3>{post.name}</h3>
            <p><strong>Build:</strong> {post.build}</p>
            <p><strong>Num of Tickets:</strong> {post.numtickets}</p>
            <p><strong>Price:</strong> {post.price}</p>
            <p><strong>Contact:</strong> {post.contact}</p>
            <p><strong>Guy/Girl Ticket:</strong> {post.gender}</p>
            <p className='posted'>Posted {formatTime(post.created_at)}</p>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default ResellEntry;
