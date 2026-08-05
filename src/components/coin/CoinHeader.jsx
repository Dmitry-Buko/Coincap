import { IoArrowBack } from "react-icons/io5";
import { FiExternalLink } from "react-icons/fi";
import { Link } from "react-router-dom";

const CoinHeader = ({ coin }) => {
  return (
    <section className="mb-2 flex flex-col justify-between gap-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm md:flex-row md:items-center">
      <div className="flex items-center gap-5">
        <Link
          to="/"
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-gray-200 transition-colors hover:bg-gray-100"
        >
          <IoArrowBack size={20} />
        </Link>

        <img src={coin.image.large} alt={coin.name} className="h-16 w-16" />

        <div>
          <h1 className="text-3xl font-bold text-gray-900">{coin.name}</h1>

          <p className="mt-1 text-lg font-medium uppercase text-gray-500">
            {coin.symbol}
          </p>
        </div>
      </div>

      {coin.links.homepage[0] && (
        <a
          href={coin.links.homepage[0]}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-lg border border-indigo-200 px-5 py-3 font-medium text-indigo-600 transition-colors hover:bg-indigo-50"
        >
          Official Website
          <FiExternalLink size={18} />
        </a>
      )}
    </section>
  );
};

export default CoinHeader;
