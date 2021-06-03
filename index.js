import React from "react";
import ReactDOM from "react-dom";
import Content from "./Components/Contents";
import Data from "./Data/ContentsData";
import "./index.css";

ReactDOM.render(<>

  <Content Link={Data[0].Link} Title={Data[0].Title} About={Data[0].Description} />
  <Content Link={Data[1].Link} Title={Data[1].Title} About={Data[1].Description} />
  <Content Link={Data[2].Link} Title={Data[2].Title} About={Data[2].Description} />
  <Content Link={Data[3].Link} Title={Data[3].Title} About={Data[3].Description} />

</>,
  document.getElementById("root")

)