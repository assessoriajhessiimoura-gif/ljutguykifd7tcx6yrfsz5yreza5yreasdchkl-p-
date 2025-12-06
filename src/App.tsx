import Header from './components/Header';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Maintenance from './components/Maintenance';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#F5F3F0]">
      <Header />
      <main>
        <Hero />
        <Gallery />
        <Maintenance />
        <BookingForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
