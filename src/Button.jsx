function handleClick(event) {
    console.log("Hello");
    console.log(event);
}
function handleMouseOver(){
    console.log("byeee");
}
 function handleDoubleClick() {
    console.log("Double Clicked");
  }
export default function Button() {
    return (
        <div>
            <button onClick={handleClick}>Click me!</button>
            <p onMouseOver={handleMouseOver}>Click to see magic</p>
            <button onDoubleClick={handleDoubleClick}>Double Click</button>
        </div>

    )
}
