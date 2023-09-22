import { useEffect, useState } from "react";
import Searchitem from "./Searchitem";

const Components = () => {
  // const [count, setCount] = useState(0);
  // const [name, setName] = useState("Ram");
  // const names = () => {
  //   const names = ["Harry", "Rohan", "Rohit"];
  //   const num = Math.floor(Math.random() * 3);
  //   return names[num];
  // };
  // const Change = () => {
  //   const re = names();
  //   if (re === "Harry") {
  //     console.log("Harry go ");
  //     setName("Harry get out");
  //   } else {
  //     console.log(re);
  //     setName(re);
  //   }
  // };
  // const Count = () => {
  //   setCount(count + 1);
  //   console.log(count);
  // };
  // const Countneg = () => {
  //   setCount(count - 1);
  //   console.log(count);
  // };
  const arr = JSON.parse(localStorage.getItem("shoppingList")) || [];
  const arr1 = JSON.parse(localStorage.getItem("TodoLi")) || [];
  const [items, setItem] = useState(
    // [
    //   {
    //     id: 1,
    //     checked: false,
    //     item: "Mango",
    //   },
    //   {
    //     id: 2,
    //     checked: false,
    //     item: "Apple",
    //   },
    //   {
    //     id: 3,
    //     checked: false,
    //     item: "Grapes",
    //   },
    // ]
    []
    //JSON.parse(localStorage.getItem("shoppingList"))
  );

  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");
  const [counter, Newcounter] = useState(0);
  const [Todo, setTodo] = useState(arr1);
  const [newTodo, setNewTodo] = useState("");
  const [fetchError, setfetchError] = useState(null);

  // useEffect(() => {
  //   localStorage.setItem("shoppingList", JSON.stringify(items));

  // }, [items]);
  const APiData = "http://localhost:5000/items";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(APiData);
        if (!response.ok) throw Error("Unable to fetch API  data");
        const itLi = await response.json();
        setItem(itLi);
        setfetchError(null);
      } catch (err) {
        alert(err.message);
        setfetchError(err.message);
      }
      // console.log(itLi[0]);
    };
    fetchData();

    // (async () => await fetchData())();
  }, []);

  const HandleTodo = (e) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo(" ");
  };

  const addTodo = (Todos) => {
    // if(Todo.length==0){Todo.id==1}
    // else {}
    const id = Todo.length === 0 ? 1 : Todo[Todo.length - 1].id + 1;
    const newto = { id, Todos };
    const saveNewTo = [...Todo, newto];
    setNewTodo(saveNewTo);
    saveToDo(saveNewTo);
  };

  const saveToDo = (newTos) => {
    setTodo(newTos);
    localStorage.setItem("TodoLi", JSON.stringify(newTos));
  };

  const deleteTodo = (idd) => {
    const Fitodo = Todo.filter((todo) => todo.id !== idd);
    saveToDo(Fitodo);
  };
  // Below save funtion has been wraped under the useeffect
  // const Save = (newItem) => {
  //   setItem(newItem);
  //   localStorage.setItem("shoppingList", JSON.stringify(newItem));
  // };

  const addItem = (item) => {
    // localStorage.setItem("shoppingList", JSON.stringify([]));

    const id = items.length === 0 ? 1 : items[items.length - 1].id + 1;
    const newLi = { id, checked: false, item };
    const saveNewLi = [...items, newLi];
    setNewItem(saveNewLi);
    setItem(saveNewLi);
  };

  const increment = () => {
    const count = counter + 1;
    Newcounter(count);
  };
  const decrement = () => {
    const count = counter - 1;
    Newcounter(count);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addItem(newItem);
    setNewItem("");
  };

  const handlechange = (id) => {
    const listItem = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItem(listItem);
    setItem(listItem);
    // localStorage.setItem("ShoppingList", JSON.stringify(listItem));
  };
  const handleClick = (iid) => {
    const listItem1 = items.filter((item) => item.id !== iid);
    setItem(listItem1);
    // Save(listItem1);
  };
  // console.log(items.length);
  return (
    <main>
      <Searchitem search={search} setSearch={setSearch}></Searchitem>
      {fetchError && <p style={{ color: "red" }}>{`Error: ${fetchError}`}</p>}
      {/* <p>Hello {name}</p>
        <p>{count}</p>
        <button onClick={Count}>+</button>
        <button onClick={Countneg}>-</button>
        <button onDoubleClick={Change}>Name</button> */}

      <form className="input" onSubmit={handleSubmit}>
        <label htmlFor="Additem">Add Item</label>
        <input
          autoFocus
          id="Additem"
          type="text"
          placeholder="Add Item"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        ></input>
        <button>+</button>
      </form>
      {!fetchError && (
        <ul>
          {items
            .filter((item) =>
              item.item.toLowerCase().includes(search.toLowerCase())
            )
            .map((item) => (
              <li className="item" key={item.id}>
                <input
                  type="checkbox"
                  checked={item.checked}
                  onChange={() => handlechange(item.id)}
                ></input>
                <label>{item.item}</label>
                <button onClick={() => handleClick(item.id)}>Delete</button>
              </li>
            ))}
        </ul>
      )}
      <div>
        <button onClick={() => increment()}>+</button>
        <div>{counter}</div>
        <button onClick={() => decrement()}>-</button>
      </div>
      <form className="Todo" onSubmit={HandleTodo}>
        <label htmlFor="AddToDo">Add TODO</label>

        <input
          autoFocus
          id="AddToDo"
          type="text"
          placeholder="Add TODO"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        ></input>
        <button onClick={HandleTodo}>Submit</button>
      </form>

      <ul>
        {Todo.map((todo) => {
          return (
            <li className="todos" key={todo.id}>
              <label>{todo.Todos}</label>
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Components;
