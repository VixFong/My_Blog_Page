import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill'; // Import React Quill
import 'react-quill/dist/quill.snow.css'; // Quill styles

const BlogCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Posts');
  const [showModal, setShowModal] = useState(false);
  const [showConfirmCancel, setShowConfirmCancel] = useState(false);  // Added state for confirmation
  const [newBlog, setNewBlog] = useState({
    title: '',
    category: 'Dog',
    details: '', // Details will now store rich text
  });
  const [imagePreview, setImagePreview] = useState(null);

  const navigate = useNavigate();

  const categories = ['All Posts', 'Dog', 'Beach', 'Home'];

  // Managing blog data
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      imageUrl: 'https://www.tournhatban.net.vn/images/camnangdulich/tintucdulich/shiba/shiba-1.jpg',
      title: 'PLAYING WITH PATTERNS',
      subtitle: 'Create a blog post subtitle that summarizes your post in a few short, punchy sentences...',
      authorName: 'Admin',
      authorImageUrl: 'https://www.tournhatban.net.vn/images/camnangdulich/tintucdulich/shiba/shiba-1.jpg',
      date: 'Mar 21, 2023',
      time: '1 min',
      category: 'Dog',
      views: 0,
      comments: 0,
      likes: 11,
      liked: false,
    },
    {
      id: 2,
      imageUrl: 'https://www.apartmenttherapy.com/uimages/apttherapy/51210_newstudio23.jpg',
      title: 'NATALIA’S APARTMENT MAKEOVER',
      subtitle: 'Create a blog post subtitle that summarizes your post in a few short, punchy sentences...',
      authorName: 'Admin',
      authorImageUrl: 'https://www.apartmenttherapy.com/uimages/apttherapy/51210_newstudio23.jpg',
      date: 'Mar 21, 2023',
      time: '2 min',
      category: 'Home',
      views: 0,
      comments: 0,
      likes: 8,
      liked: false,
    },
    // Additional blogs...
  ]);

   // Handle blog like functionality
   const handleLike = (id) => {
    const updatedBlogs = blogs.map((blog) => {
      if (blog.id === id) {
        return {
          ...blog,
          likes: blog.liked ? blog.likes - 1 : blog.likes + 1,
          liked: !blog.liked,
        };
      }
      return blog;
    });
    setBlogs(updatedBlogs);
  };

  // Handle blog card click
  const handleBlogClick = (id) => {
    navigate(`/blog/${id}`);
  };

  // Handle new blog form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setBlogs([
      ...blogs,
      {
        id: blogs.length + 1,
        imageUrl: imagePreview || 'https://example.com/default.jpg',
        title: newBlog.title,
        subtitle: newBlog.details, // Saving the rich text
        authorName: 'Admin',
        authorImageUrl: 'https://example.com/avatar.jpg',
        date: 'Mar 21, 2023',
        time: '1 min',
        category: newBlog.category,
        views: 0,
        comments: 0,
        likes: 0,
        liked: false,
      },
    ]);
    setShowModal(false);
    setNewBlog({ title: '', category: 'Dog', details: '' });
    setImagePreview(null);
  };

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const filteredBlogs =
    selectedCategory === 'All Posts'
      ? blogs
      : blogs.filter((blog) => blog.category === selectedCategory);

  return (
    <div style={styles.wrapper}>
      {/* Category Filter */}
      <div style={styles.categories}>
        {categories.map((category) => (
          <span
            key={category}
            style={
              selectedCategory === category
                ? styles.activeCategory
                : styles.category
            }
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </span>
        ))}
      </div>

      {/* Blog Cards */}
      <div style={styles.container}>
        {filteredBlogs.map((blog) => (
          <div
            key={blog.id}
            style={styles.blogCard}
            onClick={() => handleBlogClick(blog.id)}
          >
            <img src={blog.imageUrl} alt={blog.title} style={styles.blogImage} />
            <div style={styles.blogContent}>
              <div style={styles.blogHeader}>
                <img
                  src={blog.authorImageUrl}
                  alt={blog.authorName}
                  style={styles.avatar}
                />
                <div style={styles.blogMetaData}>
                  <p style={styles.author}>{blog.authorName}</p>
                  <p style={styles.date}>
                    {blog.date} · {blog.time}
                  </p>
                </div>
              </div>
              <h2 style={styles.title}>{blog.title}</h2>
              <div
                style={styles.subtitle}
                dangerouslySetInnerHTML={{ __html: blog.subtitle || blog.details }}
               ></div>
              <div style={styles.blogFooter}>
                <span>{blog.views} views</span>
                <span>{blog.comments} comments</span>
                <span
                  style={styles.likes}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleLike(blog.id);
                  }}
                >
                  <i
                    className={blog.liked ? 'fas fa-heart' : 'far fa-heart'}
                    style={{ ...styles.heartIcon, color: blog.liked ? 'red' : 'gray' }}
                  ></i>{' '}
                  {blog.likes}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Floating Blog Now Button */}
      <div style={styles.floatingButton} onClick={() => setShowModal(true)}>
        Blog Now
      </div>

      {/* Modal */}
      {showModal && (
        <div style={styles.modal}>
          <div style={styles.modalContent}>
            <h2>Add a New Blog</h2>
            <form onSubmit={handleFormSubmit}>
              <strong>Blog Title</strong>
              <input
                type="text"
                placeholder="Enter blog title"
                value={newBlog.title}
                onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
                style={styles.input}
                required
              />
              <strong>Category</strong>
              <select
                value={newBlog.category}
                onChange={(e) => setNewBlog({ ...newBlog, category: e.target.value })}
                style={styles.input}
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <strong>Details</strong>
              {/* Replace textarea with ReactQuill */}
              <ReactQuill
                value={newBlog.details}
                onChange={(value) => setNewBlog({ ...newBlog, details: value })}
                style={styles.quillEditor}
              />
              <strong>Upload Image</strong>
              <input
                type="file"
                onChange={handleImageUpload}
                style={styles.input}
              />
              {imagePreview && (
                <img src={imagePreview} alt="Preview" style={styles.imagePreview} />
              )}
              <button type="submit" style={styles.submitButton}>
                Submit
              </button>
              <button
                type="button"
                style={styles.cancelButton}
                onClick={() => setShowConfirmCancel(true)}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Confirmation Popup */}
      {showConfirmCancel && (
        <div style={styles.modal}>
          <div style={styles.confirmModal}>
            <h3>Are you sure you want to cancel?</h3>
            <p>All things you write will not be saved.</p>
            <button
              style={styles.submitButton}
              onClick={() => {
                setShowModal(false);
                setShowConfirmCancel(false);
                setNewBlog({ title: '', category: 'Dog', details: '' });
                setImagePreview(null);
              }}
            >
              Yes, Cancel
            </button>
            <button
              style={styles.cancelButton}
              onClick={() => setShowConfirmCancel(false)}
            >
              No, Go Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
    wrapper: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: '#f9f9f9',
      paddingTop: '25px',
      width: '100%',
      boxSizing: 'border-box',
    },
    categories: {
      display: 'flex',
      gap: '20px',
      marginBottom: '20px',
      justifyContent: 'center',
      cursor: 'pointer',
      fontSize: '16px',
    },
    category: {
      padding: '10px 15px',
      backgroundColor: '#eee',
      borderRadius: '20px',
    },
    activeCategory: {
      padding: '10px 15px',
      backgroundColor: '#d1e7ff',
      borderRadius: '20px',
      fontWeight: 'bold',
    },
    container: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '20px',
      maxWidth: '900px',
      width: '100%',
      margin: '0 auto',
    },
    blogCard: {
      display: 'flex',
      flexDirection: 'row',
      border: '1px solid #eee',
      borderRadius: '8px',
      overflow: 'hidden',
      backgroundColor: '#fff',
      padding: '20px',
      cursor: 'pointer',
    },
    blogImage: {
      width: '30%',
      height: 'auto',
      objectFit: 'cover',
      borderRadius: '8px',
    },
    blogContent: {
      padding: '0 20px',
      width: '70%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    blogHeader: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '10px',
    },
    avatar: {
      width: '50px',
      height: '50px',
      borderRadius: '50%',
      marginRight: '15px',
    },
    blogMetaData: {
      display: 'flex',
      flexDirection: 'column',
      fontSize: '14px',
      color: '#666',
    },
    author: {
      fontSize: '16px',
      fontWeight: 'bold',
    },
    date: {
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
      marginBottom: '10px',
    },
    blogFooter: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: '10px',
      fontSize: '14px',
      color: '#888',
    },
    likes: {
      display: 'flex',
      alignItems: 'center',
    },
    heartIcon: {
      marginRight: '5px',
    },
    floatingButton: {
      position: 'fixed',
      bottom: '30px',
      right: '30px',
      backgroundColor: '#007bff',
      color: '#fff',
      padding: '15px 20px',
      borderRadius: '50px',
      cursor: 'pointer',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    },
    modal: {
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgba(0,0,0,0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      overflowY: 'auto', // Ensure the form can scroll
    },
    modalContent: {
      backgroundColor: '#fff',
      padding: '30px',
      borderRadius: '8px',
      width: '500px', // Set a fixed width
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      maxHeight: '80vh', // Limit the height of the modal
      overflowY: 'auto', // Allow the form content to scroll if necessary
    },
    input: {
      width: '100%',
      padding: '10px',
      margin: '10px 0',
      border: '1px solid #ccc',
      borderRadius: '4px',
    },
    submitButton: {
      width: '100%',
      padding: '10px',
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
    cancelButton: {
      width: '100%',
      padding: '10px',
      backgroundColor: '#ff4d4f',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      marginTop: '10px',
    },
    imagePreview: {
      width: '100%', // Limit the width of the image preview
      maxHeight: '300px', // Limit the height of the image preview
      objectFit: 'contain', // Ensure the image scales properly
      marginTop: '10px',
    },
    confirmModal: {
      backgroundColor: '#fff',
      padding: '30px',
      borderRadius: '8px',
      width: '400px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      textAlign: 'center',
    },
    quillEditor: {
        height: '200px',
        marginBottom: '10px',
      },
};
  
export default BlogCategories;
