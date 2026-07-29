import Container from "../components/layout/Container";
import CoinsTable from "../components/table/CoinsTable";
import MainHeader from "../components/pages/MainHeader";

const Home = () => {
  return (
    <>
      <Container>
        <MainHeader />
        <CoinsTable />
      </Container>
    </>
  );
};

export default Home;
