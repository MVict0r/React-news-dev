import React, { Component } from 'react'
import img1 from './img/img1.png'
import img2 from './img/img2.png'
import img3 from './img/img3.png'

export default class Block_news extends Component {
  render() {
    return (
      <>
      	<main className="main">
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

					<article className="main_article">
						<div className="img_container">
							<img 
                            src={img2}  
                            alt="image" 
                            className="article_img"/>
						</div>
						<div className="content_container">
							<span className="article_category main_article_category">
								Технологии
							</span>
							<h2 className="article_title">Как DJ Shadow попал в книгу рекордов Гиннеса из-за альбома</h2>
							<p className="main_article_text">Технологические тренды меняют наш привычный мир. Глобальные корпорации задают новые тренды айтишникам на разработку, а дизайнеров заставляю…</p>
							<span className="article_sourse main_article_sourse">Источник</span>
						</div>
					</article>

					<article className="main_article">
						<div className="img_container">
							<img 
                                src={img3}  
                                alt="image" 
                                className="article_img"/>
						</div>
						<div className="content_container">
							<span className="article_category main_article_category">
								Технологии
							</span>
							<h2 className="article_title">Вещи, которые нужно знать перед стажировкой в IT сфере</h2>
							<p className="main_article_text">Уличные музыканты продолжают радовать фанатов стрит арта. Для этого они исполняют привычные мелодии в новом формате!</p>
							<span className="article_sourse main_article_sourse">Источник</span>
						</div>
					</article>
				</section>
			</div>
		</section>
	</main>
      </>
    )
  }
}



    
