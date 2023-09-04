import Navigation from "./components/Navigation";
import "./App.css";
import Hero from "./components/Hero";
import Video from "./components/Video";
import Mission from "./components/Mission";

function App() {
  return (
    <>
      <main>
        <Navigation />
        <Hero />
        <Video />
        <Mission />
      </main>
    </>
  );
}

export default App;
