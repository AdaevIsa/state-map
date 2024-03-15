import React, { useState } from "react";
import "./table-styles.css";
import { fakeDatabase } from "../fakeDatabase";


function Products() {
  const [count, setCount] = useState(fakeDatabase)
  const  Removes = (id) => {
    const arr = count.filter(item => item.id !== id)
    setCount(arr)
  }

  return (
    <div className="my-2">
      <table className="table">
        <thead>
          <tr>
            <th>Превью</th>
            <th>Товар</th>
            <th>Цена</th>
            <th>В наличие</th>
            <th>Действие</th>
          </tr>
        </thead>
       {count.map(isa => {
        return (
          <tbody>
          <tr>
            <td><img src={isa.image}></img></td>
            <td>{isa.name}</td>
            <td>{isa.price}</td>
            <td>{isa.inStock ? "есть" : "нет"}</td>
            <td><button onClick={() => Removes(isa.id)}>удалить</button></td>
          </tr>
          
        </tbody>
        )
       })}
       
      </table>
    </div>
  );
}

export default Products;
