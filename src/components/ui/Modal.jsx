import { IoClose } from "react-icons/io5";

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md rounded-2xl bg-white shadow-2xl"
      >
        <div className="flex items-center justify-between border-b px-6 py-4">
          <h2 className="text-xl font-semibold">{title}</h2>

          <button
            onClick={onClose}
            className="rounded-lg p-1 transition hover:bg-gray-100"
          >
            <IoClose size={22} />
          </button>
        </div>

        <div className="p-6">{children}</div>
      </div>
    </div>
  );
};

export default Modal;