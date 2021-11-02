import ryzen5600x from '../5600x.jpg';
import ryzen5700x from '../5700x.jpg';
import ryzen5800x from '../5800x.jpeg';
import ryzen5900x from '../5900x.jpeg';

//Alternative option is to make an array of object with img, name, alt and map
//over it, but for now I will just copy and paste since I know I only have 4
//items.

const Shop = (props) => {
  return (
    <div className="shop">
      <div>
        <img className="itemImg" src={ryzen5600x} alt="ryzen 5600x" />
        <div>
          <i>Ryzen 5600x</i> &nbsp;<b>379.99</b>
        </div>
        <div>
          Quantity: &nbsp;
          <button onClick={() => props.decrementItem(`ryzen5600x`)}>-</button>
          <input
            type="number"
            min="0"
            max="99"
            value={props.processors[`ryzen5600x`]}
            onChange={(e) => props.handleProcessorChange(e, `ryzen5600x`)}
          />
          <button onClick={() => props.incrementItem(`ryzen5600x`)}>+</button>
        </div>
        <div>
          <button>Add to Cart</button>
        </div>
      </div>
      <div>
        <img className="itemImg" src={ryzen5700x} alt="ryzen 5700x" />
        <div>
          <i>Ryzen 5700x</i> &nbsp;<b>439.99</b>
        </div>
        <div>
          Quantity: &nbsp;
          <button onClick={() => props.decrementItem(`ryzen5700x`)}>-</button>
          <input
            type="number"
            min="0"
            max="99"
            value={props.processors[`ryzen5700x`]}
            onChange={(e) => props.handleProcessorChange(e, `ryzen5700x`)}
          />
          <button onClick={() => props.incrementItem(`ryzen5700x`)}>+</button>
        </div>
        <button>Add to Cart</button>
      </div>
      <div>
        <img className="itemImg" src={ryzen5800x} alt="ryzen 5800x" />
        <i>Ryzen 5800x</i> &nbsp;<b>499.99</b>
        <div>
          Quantity: &nbsp;
          <button onClick={() => props.decrementItem(`ryzen5800x`)}>-</button>
          <input
            type="number"
            min="0"
            max="99"
            value={props.processors[`ryzen5800x`]}
            onChange={(e) => props.handleProcessorChange(e, `ryzen5800x`)}
          />
          <button onClick={() => props.incrementItem(`ryzen5800x`)}>+</button>
        </div>
        <button>Add to Cart</button>
      </div>
      <div>
        <img className="itemImg" src={ryzen5900x} alt="ryzen 5900x" />
        <i>Ryzen 5900x</i> &nbsp;<b>579.99</b>
        <div>
          Quantity: &nbsp;
          <button onClick={() => props.decrementItem(`ryzen5900x`)}>-</button>
          <input
            type="number"
            min="0"
            max="99"
            value={props.processors[`ryzen5900x`]}
            onChange={(e) => props.handleProcessorChange(e, `ryzen5900x`)}
          />
          <button onClick={() => props.incrementItem(`ryzen5900x`)}>+</button>
        </div>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default Shop;
