
import Cards from './Components/cards';
import Counter from './Components/counter';
import Footer from './Components/footer';
import Navbar from './Components/nav';
import Categories from './Components/categories';
import Testimonial from './Components/testimonial';
// import Carousel from './Components/carousel';
// import ImgBg from './Components/imgBg';


function App() {
  return (
    <>
      <Navbar />
      <Categories />
      {/* <ImgBg /> */}
      {/* <Carousel /> */}
      <Cards />
      <Counter />
      <Testimonial />
      <Footer />

    </>
  );
}

export default App;
