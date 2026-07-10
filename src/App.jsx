import "./App.css"
import Title from "./Title.jsx"
import Product from "./Product.jsx";
import ProductTab from "./ProductTab.jsx";
import MsgBox from "./MsgBox.jsx";


// function Description() {
//   return (
//     <h1> but we Care</h1>
//   );
// }

function App() {

  return (
    <>
      <MsgBox userName="Priyanshu " textColor="pink"/>
      <MsgBox userName="Jp " textColor="yellow"/>
      <MsgBox userName="khusal " textColor="blue"/>
      <ProductTab />
    </>
  );

}
export default App
