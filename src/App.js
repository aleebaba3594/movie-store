

import "../src/css/global.css"
import { Shopping } from "./features/shoppingSlice/Shopping";
import {useSelector , useDispatch} from "react-redux"
function App() {
 
  return (
    <div className="App">
      {}
      <div>
        <Shopping/>
      </div>
    </div>
  );
}

export default App;
