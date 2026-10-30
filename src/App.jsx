import { useState } from 'react';
import './App.css';

function App() {
    // initial state
    const [comments, setComments] = useState([
        { id: 1, author: 'Sara', text: 'Great explanation of components!', likes: 5 },
        { id: 2, author: 'Jana', text: 'Props finally make sense to me.', likes: 2 },
    ]);
    // state for new comment input
    const [newCommentText, setNewCommentText] = useState(''); // this state will hold the value of the input field for new comments; meaning when the user types in the input field, this state will be updated with the current value of the input field
    // event handlers
    const handleAddComment = (e) => {
        e.preventDefault(); // this prevents the page from refreshing when the form is submitted; meaning the page won't reload and lose the state of the comments
        if (newCommentText.trim()){
            const newComment = {
            id: Date.now(),
            author: 'You',
            text: newCommentText,
            likes: 0,
            };

            setComments([newComment, ...comments]);
            setNewCommentText('');
        }
    };

    const handleLike = (id) => {
        setComments(comments.map((comment) =>
            comment.id === id ? { ...comment, likes: comment.likes + 1 } : comment));
    };

    return (
        <div className='container'>
            <h1>Comments ({comments.length})</h1>
            <input type="text" value={newCommentText} onChange={(e) => setNewCommentText(e.target.value)} placeholder='Write a comment...' />
            <button onClick={handleAddComment}>Post</button>
            <ul className='list'>
                {comments.map((comment) => (
                    <li className='item'>
                        <h3>{comment.author}</h3>
                        <p>{comment.text}</p>
                        <button onClick={() => handleLike(comment.id)}>👍🏻 {comment.likes}</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;