import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import Discussion from "./Discussion";

export default function Home() {
  const [exep, setExep] = useState([]);
  const [posts, setPosts] = useState("");
  const [credentials, setCredentials] = useState({
    name: "",
    contenu: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`http://localhost:3001/posts/`);
      setExep(result.data);
    };

    fetchData();
  }, []);

  const handleSubmit = () => {
    const postData = async () => {
      const result = await axios.post(
        `http://localhost:3001/posts/`,
        credentials
      );
      setPosts(result.data);

      console.log(result.data);
      // const finalResult = result.data;

      // console.log(finalResult);
    };

    postData();
  };

  const updateState = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="App">
      <div className="form-container">
      <div className="form">
            <form onSubmit={handleSubmit}>
              <div className="input-cont">
                <label className="title" htmlFor="name">Name </label>
                <input
                  type="text"
                  name="name"
                  className="i"

                  value={credentials.name}
                  required
                  onChange={updateState}
                />
                <label className="title" htmlFor="contenu">Tchat</label>

                <input
                  name="contenu"
                  value={credentials.contenu}
                  className="i"
                  type="text"
                  onChange={updateState}
                />
              </div>
              <div className="button-container">
                <input type="submit" />
              </div>
            </form>
          
            {/* <h1>{post.title}</h1>
          <p>{post.body}</p> */}
          </div>

      </div>
      
      {exep.map((disc) => (
        <Discussion key={disc._id} disc={disc}/>
      ))}

      {/* {exep} */}
    </div>
  );
}
