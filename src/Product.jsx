import "./Product.css" ;

function Product({title,price,features}){
    // console.log(props);
    // const list = features.map((feature)=><li>{feature}</li>)
    return(
        <div className="Product">
            <h3>Product Title:{title}</h3>
            <h5>Product price:{price}</h5>
            {price>50000?<p>Discount = 5%</p> : null }
        </div>
    );
}

export default Product;
