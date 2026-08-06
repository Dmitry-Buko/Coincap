import Modal from "../ui/Modal";
import BuyCoinForm from "./ByuCoinForm";

const BuyCoinModal = ({ isOpen, onClose, coin }) => {
  if (!coin) return null;

  // const handleBuy = () => {
  //   //диспатч
  //   onClose();
  // };__________________________________DELETE

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={`Buy ${coin.name}`}>
      <BuyCoinForm coin={coin} onCancel={onClose} />
    </Modal>
  );
};

export default BuyCoinModal;
