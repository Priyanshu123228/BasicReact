import Product from "./Product.jsx";
function ProductTab() {
    let option=["hi-tech","durable","fast"];
    // let option2={a:"hi-tech",b:"durable",c:"fast"};
    return (
        <>
            <Product title="Phone" price={50000}  />
            <Product title="laptop" price={70000} />
            <Product title="swags" price={35000} />
            
        </>
    );
}

export default ProductTab;