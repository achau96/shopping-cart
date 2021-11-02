import ryzenList from '../mainpage.jpeg';
import ryzenComparison from '../ryzen5000comparison.jpeg';

const Home = () => {
  return (
    <div>
      <img className="ryzenList" src={ryzenList} alt="All current Ryzens" />
      <h2>Up to 50% performance improvement</h2>
      <img src={ryzenComparison} alt="Ryzen Comparison" />
    </div>
  );
};

export default Home;
