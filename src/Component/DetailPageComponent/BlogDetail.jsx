import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import RecentPost from './RecentPost';

const BlogDetail = () => {
  const [likes, setLikes] = useState(10);  // Initial likes
  const [liked, setLiked] = useState(false);  // Check if the post is liked

  const handleLikeClick = () => {
    if (liked) {
      setLikes(likes - 1); // Decrease like count when unhearted
    } else {
      setLikes(likes + 1); // Increase like count when hearted
    }
    setLiked(!liked); // Toggle heart status
  };

  const recentPosts = [
    {
      id: 1,
      imageUrl: 'https://example.com/post1.jpg',
      title: 'NEUTRAL COLOR PALETTE INSPIRATION',
      views: 100,
      comments: 10,
      likes: 30,
      liked: false,
    },
    {
      id: 2,
      imageUrl: 'https://example.com/post2.jpg',
      title: 'STYLING YOUR LIVING ROOM',
      views: 50,
      comments: 5,
      likes: 20,
      liked: true,
    },
    // Add more posts here
  ];

  const blogCategory = "Dog"; 

  return (
    <div style={styles.container}>
      <div style={styles.contentWrapper}>
        <div style={styles.header}>
          <div style={styles.leftHeader}>
            <img
              src="https://www.tournhatban.net.vn/images/camnangdulich/tintucdulich/shiba/shiba-1.jpg"
              alt="Admin"
              style={styles.avatar}
            />
            <div style={styles.metaData}>
              <p style={styles.author}>Admin</p>
              <p style={styles.date}>Mar 21, 2023 · 1 min read</p>
            </div>
          </div>
          {/* Category Tag on the right */}
          <div style={styles.rightHeader}>
            <span style={styles.categoryTag}>{blogCategory}</span>
          </div>
        </div>
        <h2 style={styles.title}>PLAYING WITH PATTERNS</h2>
        <img
          src="https://www.tournhatban.net.vn/images/camnangdulich/tintucdulich/shiba/shiba-1.jpg"
          alt="Blog Post"
          style={styles.image}
        />
        <p style={styles.content}>
          Welcome to your blog post. Use this space to connect with your readers and potential customers in a way that’s
          current and interesting. Think of it as an ongoing conversation where you can share updates about business,
          trends, news, and more.
        </p>
        <h3 style={styles.subtitle}>Create Relevant Content</h3>
        <p style={styles.content}>
          Writing a blog is a great way to position yourself as an authority in your field and captivate your readers’ attention.
        </p>

        {/* Footer with views, comments, and like button */}
        <div style={styles.footer}>
          <span>0 views</span>
          <span>0 comments</span>
          <span style={styles.likes} onClick={handleLikeClick}>
            <i
              className={liked ? 'fas fa-heart' : 'far fa-heart'}
              style={{ marginRight: '5px', color: liked ? 'red' : 'gray' }}
            ></i> 
            {likes}
          </span>
        </div>
      </div>

      <RecentPost posts={recentPosts} />
    </div>
  );
};

const styles = {
  container: {
    paddingTop: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '40px 20px',
    minHeight: '100vh',
    backgroundColor: '#f9f9f9',
    flexDirection: 'column',
  },
  contentWrapper: {
    width: '60%',
    border: '1px solid #eee',
    borderRadius: '8px',
    backgroundColor: '#fff',
    padding: '40px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    position: 'relative',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px',
    position: 'relative',
  },
  leftHeader: {
    display: 'flex',
    alignItems: 'center',
  },
  rightHeader: {
    display: 'flex',
    alignItems: 'flex-start', // Aligns category to the top right
  },
  avatar: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    marginRight: '15px',
  },
  metaData: {
    display: 'flex',
    flexDirection: 'column',
  },
  author: {
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: '5px',
  },
  date: {
    fontSize: '14px',
    color: '#888',
  },
  title: {
    fontSize: '28px',
    fontWeight: 'bold',
    margin: '20px 0',
  },
  subtitle: {
    fontSize: '22px',
    margin: '20px 0',
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    borderRadius: '8px',
    marginBottom: '20px',
  },
  content: {
    fontSize: '18px',
    lineHeight: '1.6',
    color: '#555',
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
    fontSize: '16px',
    color: '#888',
  },
  likes: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  },
  categoryTag: {
    backgroundColor: '#d1e7ff',
    padding: '5px 10px',
    borderRadius: '5px',
    fontWeight: 'bold',
    color: '#333',
    fontSize: '14px',
  },
};

export default BlogDetail;
