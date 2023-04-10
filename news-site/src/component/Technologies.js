import React, { useState, useEffect } from 'react';
import api from '../config';



function TecHo() {
  const [post, setPost] = useState([]);

  useEffect(() => {
      api.get('/api/posts?populate=*&sort=createdAt:DESC&_q=Технологии')
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

export default TecHo;





// function Technologies() {
//     const [post, setPost] = useState([]);
  
//     useEffect(() => {
//         api.get('/api/news-posts')
//         .then((response) => {
//             setPost(response.data.data);
//         })
//         .catch(error => console.error(error));
//     }, []);

//     function Technologies(props) {
//         const [post, setPost] = useState([]);
      
//         useEffect(() => {
//           // Отправляем GET-запрос на сервер Strapi, чтобы получить все статьи для выбранной категории
//           fetch(`http://localhost:1337/api/news-posts?category=${props.category}`)
//             .then((response) => response.json())
//             .then((data) => {
//               // Фильтруем статьи, чтобы отобразить только те, которые принадлежат выбранной категории
//               const filteredCategory = data.filter((post) => post.attributes.category.id === props.category);
//               setPost(filteredCategory);
//             });
//         }, [props.category]);



//     return(
//             <ul>
//                 {post.map(post => (
//                     <li key={post.id}>
//                         <section className = "articles">
//                             <div className = "container grid">
//                                 <section className = "big_collumn">

//                                      <article className = "main_article" >
//                                         <div className = "img_container" >
//                                             <img 
//                                                 src = {img1} 
//                                                 alt = "image" 
//                                                 className = "article_img" />
//                                         </div>
//                                         <div className = "content_container">
//                                             <span className = "article_category main_article_category">
//                                             {post.attributes.category}
//                                             </span>

//                                             <h2 className = "article_title">{post.attributes.title}</h2>
                                                    
//                                             <p className = "main_article_text">{post.attributes.desciption}</p>
//                                             <span className = "article_sourse">Источник</span>
//                                         </div>
//                                     </article>

//                                 </section>
//                             </div>
//                         </section>
//                     </li>
//                 ))}
//             </ul>
//     );
//   }
  
// export default Technologies;