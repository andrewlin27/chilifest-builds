import React, { useState } from 'react';
import axios from 'axios';
import './css/PostForm.css'

const PostForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        build: '',
        numtickets: '',
        price: '',
        contact: '',
        gender: '',
        password: ''
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            await axios.post('https://ec2-18-219-30-98.us-east-2.compute.amazonaws.com:443/api/posts', formData);
            alert('Post added successfully!');
            
            setFormData({
                name: '',
                build: '',
                numtickets: '',
                price: '',
                contact: '',
                gender: '',
                password: ''
            });
        } catch (error) {
            console.error('Error adding post:', error);
            alert('Error adding post. Please email chilifestbuilds@gmail.com. ');
        }
    };

    return (
        <div>
            <div className="post-form-container">
                <h1>Add New Post</h1>
                <form onSubmit={handleSubmit} className="post-form">
                    <div className="form-group">
                        <label>Name<span className="required"> * </span></label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Build<span className="required"> * </span></label>
                        <input type="text" name="build" value={formData.build} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Number of Tickets<span className="required"> * </span></label>
                        <input type="number" name="numtickets" value={formData.numtickets} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Price<span className="required"> * </span></label>
                        <input type="number" name="price" value={formData.price} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Contact<span className="required"> * </span></label>
                        <input type="text" name="contact" value={formData.contact} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Guy/Girl Ticket<span className="required"> * </span></label>
                        <select className="gender-select" name="gender" value={formData.gender} onChange={handleChange} required>
                            <option value="">Select</option>
                            <option value="Guy">Guy</option>
                            <option value="Girl">Girl</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Password<span className="required"> * </span></label>
                        <input type="password" name="password" value={formData.password} onChange={handleChange} required />
                    </div>
                    <button type="submit" className="submit-btn">Add Post</button>
                </form>
            </div>
            <ul className='notice'>
                <li>Password is used for deleting posts.</li>
                <li>Posts automatically delete after 48 hours.</li>
            </ul>
        </div>
    );
};

export default PostForm;
