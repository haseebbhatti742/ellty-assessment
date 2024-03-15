import { useEffect, useState } from "react";
import "./App.css";
import Checkbox from "./components/Checkbox";
import CustomButton from "./components/Button";

function App() {
  const [allPagesCheck, setAllPagesCheck] = useState(false);
  const [checkboxes, setCheckboxes] = useState([
    { id: 1, label: "Page 1", checked: false },
    { id: 2, label: "Page 2", checked: false },
    { id: 3, label: "Page 3", checked: false },
    { id: 4, label: "Page 4", checked: false },
  ]);

  useEffect(() => {
    setCheckboxes((prev) => {
      if (allPagesCheck) {
        const newState = prev.map((item) => {
          return { ...item, checked: true };
        });
        return newState;
      } else {
        return prev;
      }
    });
  }, [allPagesCheck]);

  useEffect(() => {
    const areAllCheckboxesChecked = checkboxes.every(
      (checkbox) => checkbox.checked
    );
    setAllPagesCheck(areAllCheckboxesChecked);
  }, [checkboxes]);

  const handleCheckbox = (id) => {
    setCheckboxes((prevCheckboxes) =>
      prevCheckboxes.map((checkbox) =>
        checkbox.id === id
          ? { ...checkbox, checked: !checkbox.checked }
          : checkbox
      )
    );
  };

  return (
    <div className="container">
      <div className="box">
        <Checkbox
          label={"All Pages"}
          checked={allPagesCheck}
          onChange={() => setAllPagesCheck(!allPagesCheck)}
        />
        <hr />
        <div id="pagesList">
          {checkboxes?.map((item) => (
            <Checkbox
              key={item.id}
              {...item}
              onChange={() => handleCheckbox(item.id)}
            />
          ))}
        </div>
        <hr />
        <CustomButton/>
      </div>
    </div>
  );
}

export default App;
