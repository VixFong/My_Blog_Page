import React from 'react';
import { Link } from 'react-router-dom';

const RecentPost = ({ posts }) => {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h3>Recent Posts</h3>
        <Link to="/all-posts" style={styles.seeAll}>See All</Link>
      </div>
      <div style={styles.postsWrapper}>
        {posts.slice(0, 4).map((post) => ( // Limiting to 4 posts
          <div key={post.id} style={styles.postCard}>
            <div style={styles.imageContainer}>
              <img
                src={post.imageUrl}
                alt={post.title}
                style={styles.postImage}
              />
            </div>
            <h4 style={styles.postTitle}>{post.title}</h4>
            <div style={styles.footer}>
              <span><i className="fas fa-eye"></i> {post.views}</span>
              <span><i className="fas fa-comment"></i> {post.comments}</span>
              <span style={styles.likes}>
                <i className={post.liked ? "fas fa-heart" : "far fa-heart"} style={post.liked ? styles.liked : styles.unliked}></i> 
                {post.likes}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    paddingTop: '40px',
    paddingBottom: '20px',
    borderTop: '1px solid #eee',
    marginTop: '40px',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  seeAll: {
    fontSize: '14px',
    color: '#888',
    textDecoration: 'none',
  },
  postsWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '20px',
  },
  postCard: {
    border: '1px solid #eee',
    borderRadius: '8px',
    padding: '15px',
    textAlign: 'center',
    width: '22%',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  imageContainer: {
    height: '180px',
    marginBottom: '10px',
    overflow: 'hidden',
    borderRadius: '8px',
  },
  postImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover', 
    borderRadius: '8px',
  },
  postTitle: {
    fontSize: '16px',
    marginBottom: '10px',
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '14px',
    color: '#888',
  },
  likes: {
    cursor: 'pointer',
  },
  liked: {
    color: 'red',
  },
  unliked: {
    color: 'gray',
  },
};

export default RecentPost;
