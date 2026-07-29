import { useParams } from "react-router-dom";
import { useCoin } from "../hooks/useCoin";
import Container from "../components/layout/Container";
import CoinHeader from "../components/coin/CoinHeader";
import CoinStats from "../components/coin/CoinStats";

const CoinDetail = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useCoin(id);

  if (isLoading) {
    return (
      <Container>
        <p className="py-20 text-center">Loading...</p>
      </Container>
    );
  }

  if (isError) {
    return (
      <Container>
        <p className="py-20 text-center text-red-500">{error.message}</p>
      </Container>
    );
  }

  return (
    <Container>
      <CoinHeader coin={data} />
      <CoinStats coin={data} />
      {/* график */}
    </Container>
  );
};

export default CoinDetail;
