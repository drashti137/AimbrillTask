import React, { useEffect, useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import axios from "axios";


const Productlist = () => {
  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState('');

  const fetchData1 = () => {
   fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))
  }

  const fetchData = () => {
    return axios.get("https://fakestoreapi.com/products")
      .then((response) => setProduct(response.data));
  }

   useEffect(() => {
    fetchData();
  },[])

  const deleteUser = async (id) => {
    await fetch(`https://fakestoreapi.com/products/${id}`, {
      method: "DELETE"
    })
      .then((res) => {
        if (res.status !== 200) {
          return;
        } else {
          setProduct(
            product.filter((product) => {
              return product.id !== id;
            })
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const filterproduct = product.filter( product =>{
    return product.title.toLowerCase().includes(search.toLocaleLowerCase())
  })

  return (
     
    <main>
      <h1>
        Product List
      <input type="text" className="search" placeholder="search" onChange={ e => setSearch(e.target.value)}/>
      </h1>
      <ul className="productlist">
        {filterproduct && filterproduct.length > 0 && filterproduct.map((productObj, index) => (
            <li key={productObj.id} className="productlist">
              {productObj.title}
              <DeleteIcon onClick={() => deleteUser(productObj.id)} />
            </li>
          ))}
          
      </ul>
    </main>
  )
}

export default Productlist
