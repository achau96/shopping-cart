import ryzen5600x from '../5600x.jpg';
import ryzen5700x from '../5700x.jpg';
import ryzen5800x from '../5800x.jpeg';
import ryzen5900x from '../5900x.jpeg';

const Shop = () => {
  return (
    <div className="shop">
      <div>
        <img className="itemImg" src={ryzen5600x} alt="ryzen 5600x" />
        <div>Ryzen 5600x 429.99</div>
      </div>
      <div>
        <img className="itemImg" src={ryzen5700x} alt="ryzen 5700x" />
        <div>Ryzen 5700x 499.99</div>
      </div>
      <div>
        <img className="itemImg" src={ryzen5800x} alt="ryzen 5800x" />
        <div>Ryzen 5800x 599.99</div>
      </div>
      <div>
        <img className="itemImg" src={ryzen5900x} alt="ryzen 5900x" />
        <div>Ryzen 5900x 679.99</div>
      </div>
    </div>
  );
};

export default Shop;
