import React, { createContext } from "react";

const [news, setNews] = useState([]);
const [category, setCategory] = useState("general");
const [index, setIndex] = useState(1);
const [source, setSource] = useState();
const [darkTheme, setDarkTheme] = useState(true);

const fetchNews = async (reset = category) => {
  const { data } = await axios.get(getNewsAPI(reset));
  setNews(data);
  setIndex(1);
};

const fetchNewsFromSource = async () => {
  try {
    const { data } = await axios.get(getSourceAPI(source));
    setNews(data);
    setIndex(1);
  } catch (error) {
    console.log(error);
  }
};

useEffect(() => {
  fetchNews();
}, [category]);

useEffect(() => {
  fetchNews();
}, [source]);

export const NewsContext = createContext();

const Context = ({ children }) => {
  return (
    <NewsContext.Provider
      value={{
        news,
        index,
        setIndex,
        darkTheme,
        fetchNews,
        setCategory,
        setSource,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export default Context;
