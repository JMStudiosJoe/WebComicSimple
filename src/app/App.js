import "./App.css";
import Header from "../header/header";
import ComicBody from "../comic-body/comic-body";
import ComicTableOfContents from "../comic-table-of-contents/comic-table-of-contents";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <ComicTableOfContents></ComicTableOfContents>
      <ComicBody></ComicBody>
    </div>
  );
}

export default App;
