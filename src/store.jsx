import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  blogs: [
    { id: 1, title: 'Shiba Inu', likes: 9, liked: false },
    { id: 2, title: 'THE BEAUTY OF NATURE', likes: 12, liked: false },
    { id: 3, title: 'DISCOVERING NEW BEACHES', likes: 8, liked: false },
    { id: 4, title: 'LATEST TECH TRENDS', likes: 15, liked: false },
  ],
};

const blogSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {
    toggleLike(state, action) {
      const blog = state.blogs.find((blog) => blog.id === action.payload);
      if (blog) {
        blog.liked = !blog.liked;
        blog.likes += blog.liked ? 1 : -1;
      }
    },
  },
});

export const { toggleLike } = blogSlice.actions;

const store = configureStore({
  reducer: {
    blogs: blogSlice.reducer,
  },
});

export default store;
