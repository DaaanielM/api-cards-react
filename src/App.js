import { useEffect, useState } from 'react';
import './App.css';
import { responseApi } from './services/api';
function App() {
	const [product, setProcuct] = useState([]);

	const loadProducts = async () => {
		const datos = await responseApi();
		if (datos.status === 200) {
			setProcuct(datos.data);
		}
	};

	useEffect(() => {
		loadProducts();
	}, []);
	return (
		<>
			<h1>Productos</h1>

			<div className='container'>
				{product.map((item) => {
					return (
						<div key={item.id} className='card'>
							<img src={item.filename} alt={'asdas'} />
							<h2>{item.title}</h2>
							<small>{item.type}</small>
							<p>{item.description}</p>
							<span>
								<b>$</b>
								{item.price}
							</span>
						</div>
					);
				})}
			</div>
		</>
	);
}

export default App;
