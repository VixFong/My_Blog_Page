import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory

const BlogPostCard = ({ imageUrl, authorImageUrl, authorName, date, time, title, subtitle, initialLikes }) => {
  const [likes, setLikes] = useState(initialLikes); 
  const [liked, setLiked] = useState(false); 
  const navigate = useNavigate(); // React Router's navigate hook for navigation

  const handleLikeClick = (e) => {
    e.stopPropagation(); // Prevent the click event from bubbling to the card's click event
    if (liked) {
      setLikes(likes - 1); 
    } else {
      setLikes(likes + 1); 
    }
    setLiked(!liked); 
  };

  const handleCardClick = () => {
    navigate('/detail'); // Navigate to the detail page when clicked
  };

  return (
    <div style={styles.container} onClick={handleCardClick}>
      <div style={styles.imageContainer}>
        <img
          src={imageUrl}
          alt="Blog Post"
          style={styles.image}
        />
      </div>
      <div style={styles.content}>
        <div style={styles.header}>
          <img
            src={authorImageUrl}
            alt={authorName}
            style={styles.avatar}
          />
          <div>
            <p style={styles.author}>{authorName}</p>
            <p style={styles.meta}>{date} · {time}</p>
          </div>
        </div>

        <h2 style={styles.title}>{title}</h2>
        <p style={styles.subtitle}>{subtitle}</p>

        {/* Divider Line */}
        <hr style={styles.divider} />

        {/* Footer with views, comments, and likes */}
        <div style={styles.footer}>
          <span>0 views</span> 
          <span>0 comments</span>
          <span style={styles.likes} onClick={handleLikeClick}>
            <i
              className={liked ? "fas fa-heart" : "far fa-heart"} 
              style={{
                ...styles.heartIcon,
                color: liked ? 'red' : 'gray', 
              }}
            ></i> 
            {likes}
          </span>
        </div>
      </div>
    </div>
  );
};

const BlogList = () => {
  return (
    <div>
      <BlogPostCard
        imageUrl="https://www.tournhatban.net.vn/images/camnangdulich/tintucdulich/shiba/shiba-1.jpg"
        authorImageUrl="https://www.tournhatban.net.vn/images/camnangdulich/tintucdulich/shiba/shiba-1.jpg"
        authorName="Admin"
        date="Mar 21, 2023"
        time="1 min"
        title="Shiba Inu"
        subtitle="Cute dog with funny page. Should have 1 for you"
        initialLikes={9}
      />
      <BlogPostCard
        imageUrl="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
        authorImageUrl="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
        authorName="Nature Lover"
        date="Feb 10, 2024"
        time="3 min"
        title="THE BEAUTY OF NATURE"
        subtitle="Nature's wonders are a reminder of the simple and profound."
        initialLikes={12}
      />
      <BlogPostCard
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtrt7o7dJ2xcliFCHoRGE1PxcNZDIMWqlThg&s"
        authorImageUrl="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
        authorName="Travel Guru"
        date="Jan 15, 2024"
        time="2 min"
        title="DISCOVERING NEW BEACHES"
        subtitle="The serene sound of waves crashing on the shore."
        initialLikes={8}
      />
      <BlogPostCard
        imageUrl="https://www.quytech.com/blog/wp-content/uploads/2023/11/Top-Technology-Trends-in-2024.webp"
        authorImageUrl="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
        authorName="Tech Enthusiast"
        date="Dec 30, 2023"
        time="4 min"
        title="LATEST TECH TRENDS"
        subtitle="Exploring the latest advancements in technology and gadgets."
        initialLikes={15}
      />
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    border: '1px solid #eee',
    borderRadius: '8px',
    overflow: 'hidden',
    marginBottom: '20px',
    maxWidth: '900px',
    margin: '20px auto',
    cursor: 'pointer', // Make it look clickable
  },
  imageContainer: {
    flex: '1',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  content: {
    flex: '2',
    padding: '20px',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '10px',
  },
  avatar: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    marginRight: '10px',
  },
  author: {
    fontSize: '14px',
    color: '#888',
  },
  meta: {
    fontSize: '12px',
    color: '#aaa',
  },
  title: {
    fontSize: '24px',
    margin: '10px 0',
  },
  subtitle: {
    fontSize: '16px',
    color: '#555',
  },
  // Divider style
  divider: {
    borderTop: '1px solid #ddd',
    margin: '20px 0',
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
    fontSize: '14px',
    color: '#888',
  },
  likes: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  },
  heartIcon: {
    marginRight: '5px',
    fontSize: '18px',
    transition: 'color 0.3s',
  },
};

export default BlogList;
