import "./Product.css" ;
import Price from "./Price";

function Product({title,idx}){
    let oldPrices=["12465","56543","4534","565"];
    let newPrices=["10000","45000","4000","200"];
    let descriptions=[["8000 dpi","5 programmable buttons"],["intutive surface","designed for ipad pro"],["designed for ipad pro","intutive surface"],["wireless","optical orientation"]]
    return(
        <div className="Product">
            <h4>{title}</h4>
            <p>{descriptions[idx][0]}</p>
            <p>{descriptions[idx][1]}</p>


            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
        </div>
    );
}

export default Product;
