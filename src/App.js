import "./App.css";

function App() {
  return (
    <div class="container">
      <div class="box">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "10px",
          }}
        >
          <label for="selectAll">All Pages</label>
          <input
            type="checkbox"
            id="selectAll"
            onclick="selectAllPages()"
            style={{ width: "20px", height: "20px" }}
          />
        </div>
        <hr />
        <div id="pagesList">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "10px",
            }}
          >
            <label for="page1"> Page 1</label>
            <input
              type="checkbox"
              id="page1"
              style={{ width: "20px", height: "20px" }}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "10px",
            }}
          >
            <label for="page2"> Page 2</label>
            <input
              type="checkbox"
              id="page2"
              style={{ width: "20px", height: "20px" }}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "10px",
            }}
          >
            <label for="page3"> Page 3</label>
            <input
              type="checkbox"
              id="page3"
              style={{ width: "20px", height: "20px" }}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "10px",
            }}
          >
            <label for="page4"> Page 4</label>
            <input
              type="checkbox"
              id="page4"
              style={{ width: "20px", height: "20px" }}
            />
          </div>
        </div>
        <hr />
        <button class="button" onclick="done()">
          Done
        </button>
      </div>
    </div>
  );
}

export default App;
