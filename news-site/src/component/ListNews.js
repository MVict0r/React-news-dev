import React, { useState, useEffect } from 'react'
import api from '../config'
import img1 from './img/img1.png'

function NewsMyApp() {
    const [post, setPost] = useState([]);
  
    useEffect(() => {
        api.get('/api/news-posts')
        .then((response) => {
            // console.log("response", response.data.data);
            setPost(response.data.data);
        })
        .catch(error => console.error(error));
    }, []);
    return(
            <ul>
                {post.map(post => (
                    <li key={post.id}>
                        <section className="articles">
                            <div className="container grid">
                                <section className="big_collumn">

                                     <article className="main_article">
                                        <div className="img_container">
                                            <img 
                                                src={img1} 
                                                alt="image" 
                                                className="article_img"/>
                                        </div>
                                        <div className="content_container">
                                            <span className="article_category main_article_category">
                                            {post.attributes.category}
                                            </span>

                                            <h2 className="article_title">{post.attributes.title}</h2>
                                                    
                                            <p className="main_article_text">{post.attributes.desciption}</p>
                                            <span className="article_sourse">Источник</span>
                                        </div>
                                    </article>

                                </section>
                            </div>
                        </section>
                    </li>
                ))}
            </ul>
    );
  }
  
export default NewsMyApp;

{/* <main className="main">
		<section className="articles">
			<div className="container grid">
				<section className="big_collumn">

					<article className="main_article">
						<div className="img_container">
							<img 
                                src={img1} 
                                alt="image" 
                                className="article_img"/>
						</div>
						<div className="content_container">
							<span className="article_category main_article_category">
								Технологии
							</span>

							<h2 className="article_title">
                                Отец жанра. Как уже забытый трип-хоп определяет самую популяр…</h2>
                                
							<p className="main_article_text">
                                Новая мода на топовые наряды необычных цветов. В сезоне – топики, шорты-боксеры, сланцы и сандалии. А также большие солнечные очки и яркая шляпка.</p>
							<span className="article_sourse main_article_sourse">Источник</span>
						</div>
					</article>

				</section>
			</div>
		</section>
	</main> */}


  


// {post.attributes.title} {post.attributes.desciption}