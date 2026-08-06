import PopularCoins from "../cards/PopularCoins";
import PortfolioCard from "../cards/PortfolioCard";
import Container from "./Container";

const Header = () => {
  return (
    <header className="border-b bg-white">
      <Container>
        <div className="flex h-50 items-center justify-between gap-2">
          <div>
            <h1 className="text-3xl font-bold text-indigo-600">CoinCap</h1>
            <p className="text-gray-500">Cryptocurrency Tracker</p>
          </div>
          <div className="flex-1">
            <PopularCoins />
          </div>
          <PortfolioCard />
        </div>
      </Container>
    </header>
  );
};

export default Header;
