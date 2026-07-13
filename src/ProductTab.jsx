import Product from "./Product.jsx";

function ProductTab() {
    let styles={
        display:"flex",
        
        justifyContent:"center",
    };
    return (
        <div style={styles}>
            <Product title="Logitech MS master" idx={0} />
            <Product title="Apple pencil " idx={1} />
            <Product title="Zebronics Zeb-transformer" idx={2}/>
            <Product title="Pentronics Toad" idx={3}/>
        </div>
    );
}

export default ProductTab;