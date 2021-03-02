import './App.css';
import ImageGallary from './components/imageGallary';

const imageMocks = [
  {
    id: 1,
    src:
      "https://images.pexels.com/photos/4577736/pexels-photo-4577736.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    alt: "Test Image"
  },
  {
    id: 2,
    src:
      "https://images.pexels.com/photos/6775289/pexels-photo-6775289.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    alt: "Test Image"
  },
  {
    id: 3,
    src:
      "https://images.pexels.com/photos/6328142/pexels-photo-6328142.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=500",
    alt: "Test Image"
  },
  {
    id: 4,
    src:
      "https://images.pexels.com/photos/6279413/pexels-photo-6279413.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=500",
    alt: "Test Image"
  },
];

function App() {
  return (
    <div className="App">
     <ImageGallary images={imageMocks}/>
    </div>
  );
}

export default App;
