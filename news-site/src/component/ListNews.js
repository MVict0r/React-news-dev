import React, { useState, useEffect } from 'react'
import api from '../config'
import '../style.css';

function NewsMyApp() {
    const [product, setProduct] = useState([]);
  
    useEffect(() => {
        api.get('/api/news-posts')
        .then((response) => {
            console.log("response", response.data.data);
            setProduct(response.data.data);
        })
        .catch(error => console.error(error));
    }, []);
    return(
        <div>
            <h1>Список статей</h1>
            <ul>
                {product.map(product => (
                    <li key={product.id}>
                        {product.name} - {product.price}
                    </li>
                ))}
            </ul>
        </div>
    );
  }
  
  export default NewsMyApp;


// function NewsApp() {
//     const [product, setProduct] = useState([]);

//     useEffect(() => {
//         fetch('http://localhost:1337/api/news-posts').then(data => {
//             console.log(data);
//         })
//     })
// }

// export default NewsApp;