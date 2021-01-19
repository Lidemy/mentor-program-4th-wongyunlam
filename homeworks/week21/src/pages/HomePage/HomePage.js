import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { getPosts } from "../../WebAPI";

const Root = styled.div`
  width: 70%;
  margin: 0 auto;
`;

const PostContainer = styled.div`
  border-bottom: 1px Solid rgba(0, 12, 34, 0.2);
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PostTitle = styled(Link)`
  font-size: 24px;
  text-decoration: none;
  color: #333;
`;

const PostDate = styled.div`
  color: #777;
`;

function Post({ post }) {
  return (
    <PostContainer>
      <PostTitle to={`/posts/${post.id}`}>{post.title}</PostTitle>
      <PostDate>{new Date(post.createdAt).toLocaleString()}</PostDate>
    </PostContainer>
  );
}

Post.propTypes = {
  post: PropTypes.object,
};

export default function HomePage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then((posts) => setPosts(posts));
  }, []);

  return (
    <Root>
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </Root>
  );
}
