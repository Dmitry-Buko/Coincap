import PopularCoins from "../cards/PopularCoins";
import PortfolioCard from "../cards/PortfolioCard";

const MainHeader = () => {
  return (
    <section className="mb-2 flex gap-2">
      <div className="flex-1">
        <PopularCoins />
      </div>
      <PortfolioCard />
    </section>
  );
};

export default MainHeader;
