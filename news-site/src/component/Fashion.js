import React, { useState, useEffect } from 'react';
import api from '../config';

function Fashion() {
  const [post, setPost] = useState([]);

  useEffect(() => {
      api.get('/api/posts?populate=*&sort=createdAt:DESC&_q=Мода')
      .then((response) => {
          console.log(response.data);
          setPost(response.data.data);
      })
      .catch(error => console.error(error));
  }, []);
  return(
      <section className = "articles">
          <ul>
              {post.map(post => (
                  <li key={post.id}>
                          <div className = "container grid">
                              <section className = "big_collumn">

                                   <article className = "main_article" >
                                      <div className = "img_container" >
                                          <img 
                                              src = {`http://localhost:1337${post.attributes.image.data.attributes.url}`} 
                                              alt = "image" 
                                              className = "article_img" />
                                      </div>
                                      <div className = "content_container">
                                          <span className = "article_category main_article_category">
                                          {/* {post.attributes.categories} */}
                                          </span>

                                          <h2 className = "article_title">{post.attributes.title}</h2>
                                                  
                                          <p className = "main_article_text">{post.attributes.desciption}</p>
                                          <span className = "article_sourse">Источник</span>
                                      </div>
                                  </article>

                              </section>
                          </div>
                  </li>
              ))}
          </ul>
      </section>
  );
}

export default Fashion;