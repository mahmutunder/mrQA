import { createContext, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostContext = createContext();

function PostProvider({ children }) {
  const { subject } = useParams();
  const [data, setData] = useState([]);
  console.log(subject);

  useEffect(
    function getData() {
      async function fetchData() {
        try {
          const res = await fetch(`/mrQA/data/${subject}.json`);
          const datas = await res.json();
          setData(datas);
        } catch (error) {
          console.log(error);
          setData([]);
        }
      }
      fetchData();
    },
    [subject]
  );
  return (
    <PostContext.Provider value={{ data }}>{children}</PostContext.Provider>
  );
}

function useDataContext() {
  const context = useContext(PostContext);
  return context;
}

export { useDataContext, PostProvider };
