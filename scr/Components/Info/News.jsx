// Import necessary dependencies
import { useEffect, useState } from "react";

// Define the 'News' functional component
const News = () => {
  // Define state variables for news data, date, and time
  const [news, setNews] = useState('');
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");


  var url = 'https://newsapi.org/v2/everything?' +
          'q=Apple&' +
          'from=2023-09-27&' +
          'sortBy=popularity&' +
          'apiKey=fdc289ac906942a8b3b54fe86b961462';

var req = new Request(url);

fetch(req)
    .then(function(response) {
        console.log(response.json());
    })

  // Use the 'useEffect' hook to fetch news data from an API
  useEffect(() => {
    const fetchNews = async () => {
      // Fetch news data from the specified API
    await  fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=API_KEY=6342601ebdmsh1c98ae80cae348fp1a7fa9jsn7f6c0fdb4caa " , {
      method: 'GET',
      url: 'https://cricbuzz-cricket.p.rapidapi.com/matches/v1/recent',
    "headers":{
      'X-RapidAPI-Key': '6342601ebdmsh1c98ae80cae348fp1a7fa9jsn7f6c0fdb4caa',
      'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
    }
  })
        .then(async (data) => await data.json())
        .then((res) => setNews(res.articles[0]))
        .catch(err => console.error(err));
    }
    // Call the 'fetchNews' function when the component mounts (empty dependency array)
    fetchNews();
  }, []);

  // Use the 'useEffect' hook to get the current time
  useEffect(() => {
    const currentDate = new Date();
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // The hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    const strTime = hours + ':' + minutes + ' ' + ampm;
    setTime(strTime);
  }, []);

  // Use the 'useEffect' hook to get the current date
  useEffect(() => {
    const currentDate = new Date();
    const yyyy = currentDate.getFullYear();
    let mm = currentDate.getMonth() + 1; // Months start at 0!
    let dd = currentDate.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    const formattedToday = dd + '-' + mm + '-' + yyyy;
    setDate(formattedToday);
  }, []);

  return (
    <div style={{ height: "90vh", width: "30vw", position: "relative", borderRadius: "12px", padding: "0px" }}>
      {/* Display the news image */}
      <img src={news.urlToImage} style={{ height: "60vh", borderRadius: "12px", width: "30vw" }} />

      <div style={{ position: "absolute", width: "30vw", height: "20vh", background: "rgba(0, 0, 0, 0.74)", top: "41vh", padding: "24px", boxSizing: "border-box" }}>
        {/* Display the news title, date, and time */}
        <p style={{ color: "white", fontSize: "1.9rem", marginBottom: "10px" }}>{news.title}</p>
        <span style={{ color: "white", fontSize: "1.5rem", marginRight: "3px" }}>{date} |</span>
        <span style={{ color: "white", fontSize: "1.5rem", marginRight: "10px" }}>{time}</span>
      </div>

      <div style={{ position: "absolute", width: "30vw", height: "25vh", background: "white", top: "60vh", padding: "24px", boxSizing: "border-box", borderRadius: "12px", fontSize: "1.3rem" }}>
        {/* Display the news description */}
        {news.description}
      </div>
    </div>
  );
}

// Export the 'News' component as the default export
export default News;
