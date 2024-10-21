import React, { useState } from 'react';

const CommentSection = () => {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false); // State for toggling the expanded comment box

  const handlePublish = () => {
    if (comment.trim() !== '') {
      setComments([...comments, comment]);
      setComment('');
    }
  };

  const handleExpand = () => {
    setIsExpanded(true); // Expand the comment box when clicked
  };

  const handleCancel = () => {
    setIsExpanded(false); // Collapse the comment box when "Cancel" is clicked
    setComment(''); // Reset comment input
  };

  return (
    <div style={styles.wrapper}> {/* Wrapper for the full gray background */}
      <div style={styles.commentContainer}>
        <h3>Comments</h3>

        {/* Conditionally render the comment box based on whether it's expanded */}
        {!isExpanded ? (
          <div style={styles.commentBoxClosed} onClick={handleExpand}>
            <p>Write a comment...</p>
          </div>
        ) : (
          <div style={styles.commentBoxWrapper}>
            <textarea
              style={styles.textarea}
              placeholder="Write a comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <div style={styles.commentActions}>
              <div style={styles.commentTools}>
                <span>😊</span>
                <span>📷</span>
                <span>🎥</span>
                <span>GIF</span>
              </div>
              <div style={styles.publishButtons}>
                <button style={styles.cancelButton} onClick={handleCancel}>
                  Cancel
                </button>
                <button style={styles.publishButton} onClick={handlePublish}>
                  Publish
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Display the comments */}
        <div style={styles.commentsList}>
          {comments.map((item, index) => (
            <div key={index} style={styles.singleComment}>
              <p><strong>Unknown member</strong> a few seconds ago</p>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    backgroundColor: '#f9f9f9', // Full gray background
    padding: '20px 0', // Space around the container
    display: 'flex',
    justifyContent: 'center', // Center the content
  },
  commentContainer: {
    width: '60%',
    backgroundColor: '#f9f9f9', // Light gray background inside the comment box
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.05)', // Softer shadow
  },
  commentBoxClosed: {
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    backgroundColor: '#fff',
    cursor: 'pointer',
    width: '100%',
  },
  commentBoxWrapper: {
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '15px',
    backgroundColor: '#fff', // White background for the comment input box
    marginBottom: '20px',
  },
  textarea: {
    width: '100%',
    height: '80px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    padding: '10px',
    fontSize: '14px',
  },
  commentActions: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '10px',
  },
  commentTools: {
    display: 'flex',
    gap: '10px',
    fontSize: '18px',
  },
  publishButtons: {
    display: 'flex',
    gap: '10px',
  },
  cancelButton: {
    background: 'none',
    border: 'none',
    color: '#888',
    cursor: 'pointer',
  },
  publishButton: {
    background: '#ddd',
    border: 'none',
    padding: '5px 10px',
    cursor: 'pointer',
  },
  commentsList: {
    marginTop: '20px',
    backgroundColor: '#fff',
    borderRadius: '5px',
    padding: '15px',
  },
  singleComment: {
    borderBottom: '1px solid #eee',
    paddingBottom: '10px',
    marginBottom: '10px',
  },
};

export default CommentSection;
