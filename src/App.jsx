import "./App.scss";

const data = [
  {
    text: "Telegram",
    path: "",
  },
  {
    text: "Instagram",
    path: "",
  },
  {
    text: "Vk",
    path: "",
  },
  {
    text: "Еще что то",
    path: "",
  },
];

function App() {
  return (
    <div className="App">
      <div className="home">
        <header>
          <div className="container text-center">
            <h1>
              <span>Amori Salvatore</span>
            </h1>
          </div>
        </header>
        <main>
          <div className="wrapper">
            <div className="left">
              <div className="container">
                <p>
                  The hour of departure has arrived, and we go our separate
                  ways, I to die, and you to live. Which of these two is better
                  only God knows.
                </p>
              </div>
              <div className="img"></div>
            </div>
            <div className="right">
              <div className="top">
                <div className="img"></div>
                <h3>Heading 3</h3>
              </div>
              <div className="bottom">
                <div className="img"></div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
