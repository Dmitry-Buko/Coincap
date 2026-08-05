import Modal from "../ui/Modal";
import BuyCoinForm from "./ByuCoinForm";

const BuyCoinModal = ({ isOpen, onClose, coin }) => {
  if (!coin) return null;

  const handleBuy = () => {
    //диспатч
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={`Buy ${coin.name}`}>
      <BuyCoinForm coin={coin} onBuy={handleBuy} onCancel={onClose} />
    </Modal>
  );
};

export default BuyCoinModal;
