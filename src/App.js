// // // src/App.js
// // import React, { useState } from 'react';
// // import axios from 'axios';

// // const App = () => {
// //   const [data, setData] = useState([]);
// //   const [currentIndex, setCurrentIndex] = useState(0);

// //   const fetchData = async () => {
// //     try {
// //       const response = await axios.get('http://localhost:5000/api/data');
// //       setData(response.data);
// //     } catch (error) {
// //       console.error('Error fetching data:', error);
// //     }
// //   };

// //   const handleClick = () => {
// //     if (currentIndex < data.length) {
// //       setCurrentIndex(currentIndex + 1);
// //     }
// //   };

// //   return (
// //     <div>
// //       <h1>Data from SQLite3 Database</h1>
// //       <button onClick={fetchData}>Fetch Data</button>
// //       <button onClick={handleClick}>Show Next Item</button>
// //       <ul>
// //         {data.slice(0, currentIndex).map((item, index) => (
// //           <li key={index}>{item.column_name}</li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // };

// // export default App;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const App = () => {
//   const [data, setData] = useState('');
//   const [mat,setMat]= useState('');

//   useEffect(() => {
//     axios.get('http://localhost:5000/hi')
//       .then(response => {
//         setData(response.data);
//       })
//       .catch(error => {
//         console.error('There was an error fetching the data!', error);
//       });
//   }, []); // Empty dependency array ensures this effect runs only once after the first render
    
//   us
//   setMat()
  
 
//   return (
//     <div>
//     <h1>{data.message}</h1>
//       <h1>{data.num}</h1>
//       <ul>
//         {data.num.map((num,index)=>(
//           <li key={index}>{num}</li>
//         ))}
//      k'' </ul>
//       <li>{data.num}</li>
//     </div>
//   ); 
// };

// export default App;




// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import HomePage from "./components/Home";
// import IconPage from "./components/Icon";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/icon:id" element={<IconPage />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home'; // Homepage component
import IconPage from './components/Icon'; // Icon page component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/icon/:id" element={<IconPage />} /> {/* Dynamic route for IconPage */}
      </Routes>
      <div>
      <footer><h1>RAHUL M</h1></footer>
    </div>
    </Router>
    
  );
};

export default App;

