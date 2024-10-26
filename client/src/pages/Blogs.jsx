// src/pages/Blogs.jsx

import React, { useState } from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Button, Box } from '@mui/material';

// Import local image files
import Blog1 from '../utils/Images/Blog1.jpg';
import Blog2 from '../utils/Images/Blog2.jpg';
import Blog3 from '../utils/Images/Blog3.jpg';
import Blog4 from '../utils/Images/Blog4.jpg'; // New image file
import Blog5 from '../utils/Images/Blog5.jpg'; // New image file
import Blog6 from '../utils/Images/Blog6.jpg'; // New image file

const blogPosts = [
  {
    id: 1,
    title: 'My Fitness Journey: First Steps',
    excerpt: 'In this post, I will share how I started my fitness journey and the initial steps I took...',
    content: 'Detail: The beginning of my fitness journey was very challenging, but my confidence grew over time...',
    background: Blog1,
  },
  {
    id: 2,
    title: 'Healthy Eating Tips',
    excerpt: 'I will share the most common nutrition mistakes and healthy habits...',
    content: 'Detail: The most important point of healthy eating is to follow a balanced diet...',
    background: Blog2,
  },
  {
    id: 3,
    title: 'Exercise Motivation: How to Succeed?',
    excerpt: 'Discover ways to keep your motivation high while exercising...',
    content: 'Detail: Setting goals is very important to increase motivation...',
    background: Blog3,
  },
  {
    id: 4,
    title: 'Benefits of Yoga for Fitness',
    excerpt: 'Explore the benefits of incorporating yoga into your fitness routine...',
    content: 'Detail: Yoga helps improve flexibility, strength, and mental clarity...',
    background: Blog4,
  },
  {
    id: 5,
    title: 'Importance of Hydration',
    excerpt: 'Learn why staying hydrated is crucial for your fitness goals...',
    content: 'Detail: Proper hydration supports digestion, energy levels, and overall health...',
    background: Blog5,
  },
  {
    id: 6,
    title: 'Overcoming Workout Plateaus',
    excerpt: 'Tips and strategies to break through your workout plateaus...',
    content: 'Detail: Changing your routine, increasing intensity, and setting new goals can help...',
    background: Blog6,
  },
];

const Blogs = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  const handleBackClick = () => {
    setSelectedPost(null);
  };

  return (
    <Container maxWidth="lg" style={{ marginTop: '20px' }}>
      {selectedPost ? (
        <Card>
          <CardMedia
            component="img"
            height="400"
            image={selectedPost.background}
            alt={selectedPost.title}
          />
          <CardContent>
            <Typography variant="h4">{selectedPost.title}</Typography>
            <Typography variant="body1">{selectedPost.content}</Typography>
            <Button onClick={handleBackClick} variant="contained" color="primary" style={{ marginTop: '20px' }}>
              Go Back
            </Button>
          </CardContent>
        </Card>
      ) : (
        <>
          <Typography variant="h2" gutterBottom align="center">
            Blog Posts
          </Typography>
          <Grid container spacing={3}>
            {blogPosts.map((post) => (
              <Grid item xs={12} sm={6} md={4} key={post.id}>
                <Card 
                  style={{
                    backgroundImage: `url(${post.background})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    color: 'white',
                    height: '250px', // Reduced height for smaller appearance
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    position: 'relative',
                  }}
                >
                  {/* Dark Overlay */}
                  <Box
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    }}
                  />
                  <CardContent style={{ position: 'relative', zIndex: 1, padding: '10px' }}>
                    <Typography variant="h6" style={{ color: 'white' }}>
                      {post.title}
                    </Typography>
                    <Typography variant="body2" style={{ color: 'white' }}>
                      {post.excerpt}
                    </Typography>
                  </CardContent>
                  <Button 
                    onClick={() => handlePostClick(post)}
                    variant="contained"
                    color="primary"
                    style={{ position: 'relative', zIndex: 1, margin: '10px' }}
                  >
                    Read More
                  </Button>
                </Card>
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </Container>
  );
};

export default Blogs;
