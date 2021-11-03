import ryzen5600x from '../5600x.jpg';
import ryzen5700x from '../5700x.jpg';
import ryzen5800x from '../5800x.jpeg';
import ryzen5900x from '../5900x.jpeg';

const Cart = (props) => {
  return (
    <div>
      <h1 className="cart">Check Out</h1>
      <div className="checkOutBox">
        <div className="checkOutImg">
          <img src={ryzen5600x} alt="ryzen 5600x" />
          ---Ryzen 5600x---
          <div>
            Qty: {props.checkOut[`ryzen5600x`]} Cost:
            {props.checkOut[`ryzen5600x`] * 379.99}
          </div>
        </div>
        <div className="checkOutImg">
          <img src={ryzen5700x} alt="ryzen 5700x" />
          ---Ryzen 5700x---
          <div>
            Qty: {props.checkOut[`ryzen5700x`]} Cost:
            {props.checkOut[`ryzen5700x`] * 439.99}
          </div>
        </div>
        <div className="checkOutImg">
          <img src={ryzen5800x} alt="ryzen 5800x" />
          ---Ryzen 5800x---
          <div>
            Qty: {props.checkOut[`ryzen5800x`]} Cost:
            {props.checkOut[`ryzen5800x`] * 499.99}
          </div>
        </div>
        <div className="checkOutImg">
          <img src={ryzen5900x} alt="ryzen 5900x" />
          ---Ryzen 5900x---
          <div>
            Qty: {props.checkOut[`ryzen5900x`]} Cost:
            {props.checkOut[`ryzen5900x`] * 579.99}
          </div>
        </div>
        <hr className="line"></hr>
        <div className="cost">
          <div>Total</div>
          <div>
            $
            {props.checkOut[`ryzen5900x`] * 579.99 +
              props.checkOut[`ryzen5800x`] * 499.99 +
              props.checkOut[`ryzen5700x`] * 439.99 +
              props.checkOut[`ryzen5600x`] * 379.99}
          </div>
        </div>

        <button onClick={() => alert(`Gimme da moolah`)}>Pay</button>
      </div>
    </div>
  );
};

export default Cart;
