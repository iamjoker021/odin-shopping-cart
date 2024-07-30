import { useEffect, useState } from "react";
import Header from "./Header/Header"
import { Outlet } from "react-router-dom";

function App() {
  const title = 'ODIN | Shopping Cart';
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=12', {mode: 'cors'}).then(response => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json()
      }).then(data => setItemList(data));
  }, [])
  

  return (
    <>
      <Header title={title} cartCount={itemList.filter(item => item.count>0).length} />
      <Outlet context={[itemList, setItemList]}/>
    </>
  )
}

export default App
