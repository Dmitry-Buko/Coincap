import Container from "./Container";

const Header = () => {
  return (
    <header className="border-b bg-white">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-indigo-600">CoinCap</h1>
            <p className="text-gray-500">Cryptocurrency Tracker</p>
          </div>

          <button className="rounded-xl border px-5 py-2 font-medium transition hover:bg-gray-100">
            Portfolio
          </button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
