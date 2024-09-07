import Footer from "./Footer";
import NavBar from "./NavBar";
import Artist from "./pages/Artist";
import Home from "./pages/Home";
import Location from "./pages/Location";
import PastEvents from "./pages/PastEvents";
import Shop from "./pages/Shop";
import Reminder from "./pages/Reminder";

function App() {
  return (
    <>
      <NavBar />

      <Home />

      <Artist />

      <Shop />

      <Location />

      <Reminder />

      <PastEvents />

      <Footer />
    </>
  );
}

export default App;
