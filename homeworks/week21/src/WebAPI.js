const BASE_URL = "https://student-json-api.lidemy.me";

export const getPosts = () => {
  return fetch(`${BASE_URL}/posts?_sort=createdAt&_order=desc`).then((res) =>
    res.json()
  );
};

export const getOnePost = (id) => {
  return fetch(`${BASE_URL}/posts/${id}`).then((res) => res.json());
};
