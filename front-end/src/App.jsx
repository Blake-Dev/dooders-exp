import { useState, useEffect  } from "react";
// import doodsIcon from "./assets/doods.svg";
import Card from "./components/Card/Card";
import Modal from "./components/Modal/Modal";
import EventsModal from './components/EventsModal/EventsModal'
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

// const doods = [
//   {
//     name: "Ollie",
//     image: doodsIcon,
//   }
// ];

function App() {
  const [showDoodsModal, setShowDoodsModal] = useState(false);
  const [showEventModal, setShowEventModal] = useState(false);
  const [doods, setDoods] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/dooders');
        console.log("res: ", response)
        const data = await response.json();
        setDoods(data);
        console.log('data: ', data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };
  
    fetchData();
  }, []);
  
  return (
    <>
    <Navbar />
      {
        doods.map((dood, idx) => {
          return <Card doods={dood} key={idx} />
        })
      }
      
      <Card handleButtonClick={setShowEventModal} />
      <Modal isOpen={showDoodsModal} setIsOpen={setShowDoodsModal} />
      <Modal isOpen={showEventModal} setIsOpen={setShowEventModal} />
    </>
  );
}

export default App;
