import PopularCoins from "../cards/PopularCoins";
import PortfolioCard from "../cards/PortfolioCard";

const MainHeader = () => {
  return (
    <section className="mb-10 flex gap-8">
      <div className="flex-1">
        <PopularCoins />
      </div>
      <PortfolioCard />
    </section>
  );
};

export default MainHeader;
