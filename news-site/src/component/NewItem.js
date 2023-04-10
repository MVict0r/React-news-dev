// Компонент для отображения списка новостей
function NewsList({ news }) {
    return (
      <div>
        {news.map((item) => (
          <Link to={`/news/${item.id}`} key={item.id}>
            <h2>{item.title}</h2>
          </Link>
        ))}
      </div>
    );
  }
  // Компонент для отображения отдельной новости
  function NewsItem({ news }) {
    return (
      <div>
        <h2>{news.title}</h2>
        <p>{news.content}</p>
      </div>
    );
  }
  // Компонент для страницы со списком новостей
  function NewsPage() {
    const [news, setNews] = useState([]);
  
    useEffect(() => {
      // Получаем данные о новостях из Strapi
      fetch('http://localhost:1337/api/posts')
        .then((response) => response.json())
        .then((data) => setNews(data))
        .catch((error) => console.error(error));
    }, []);
    return <NewsList news={news} />;
  }
  // Компонент для страницы с отдельной новостью
  function NewsItemPage({ match }) {
    const [news, setNews] = useState(null);
  
    useEffect(() => {
      // Получаем данные о конкретной новости из Strapi по идентификатору
      const { id } = match.params;
      fetch(`http://localhost:1337/api/posts/${id}`)
      .then((response) => response.json())
      .then((data) => setNews(data))
      .catch((error) => console.error(error));
}, [match.params.id]);

    if (!news) {
        return <div>Loading...</div>;
    }
    return <NewsItem news={news} />;
}
// Конфигурация маршрутов с помощью библиотеки React Router
function App() {
    return (
    <Router>
        <Switch>
            <Route exact path="/" component={NewsPage} />
            <Route path="/news/:id" component={NewsItemPage} />
        </Switch>
    </Router>
    );
}