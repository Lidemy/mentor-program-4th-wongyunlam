import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { getOnePost } from "../../WebAPI";
import {
  HashRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";

const Root = styled.div``;

function OnePost({ post }) {
  return <div>{post.body}</div>;
}

export default function BlogPost() {
  const [onePost, setOnePost] = useState([]);

  useEffect(() => {
    getOnePost(id).then((onePost) => setOnePost(onePost));
  }, []);

  return <OnePost post={onePost} key={onePost.id} />;
}
