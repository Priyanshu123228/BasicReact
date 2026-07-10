import "./Product.css" ;

function Product({title,price,features}){
    // console.log(props);
    // const list = features.map((feature)=><li>{feature}</li>)
    let isDiscount=price>35000;
    let styles={backgroundColor : isDiscount ? "yellow" : ""};
    return(
        <div className="Product" style={styles}>
            <h3>Product Title:{title}</h3>
            <h5>Product price:{price}</h5>
            {isDiscount?<p>Discount = 5%</p> : null }
        </div>
    );
}

export default Product;
