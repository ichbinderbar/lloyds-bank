import "./HelpModal.scss";
import progressIcon from "../../assets/icons/progress-icon.svg";
import appIcon from "../../assets/icons/appointment-icon.svg";
import headIcon from "../../assets/icons/mental-health-icon.svg";
import messageIcon from "../../assets/icons/message-icon.svg";
import Modal from "react-modal";
import { useState } from "react";
Modal.setAppElement("#root");

export default function HelpModal() {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = (helpCta) => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleHelpSelection = async () => {};

  return (
    <>
      <h1>test</h1>
    </>

    //     <Modal
    //     className="modal"
    //     isOpen={modalIsOpen}
    //     onRequestClose={closeModal}
    //     overlayClassName="modal__overlay"
    //     shouldCloseOnOverlayClick={true}
    //     contentLabel="Help Selection"
    //   >
    //     <div className="modal__container">
    //       <div className="modal__content">
    //         <img
    //           onClick={closeModal}
    //           className="modal__close-icon"
    //           src={closeIcon}
    //           alt=""
    //         />
    //         <h1 className="modal__heading">{`Delete ${
    //           selectedWarehouse?.warehouse_name || ""
    //         } warehouse?`}</h1>
    //         <p className="modal__body-text">
    //           {`Please confirm that you'd like to delete the ${
    //             selectedWarehouse?.warehouse_name || ""
    //           } warehouse from the list of warehouses. You won't be able to undo this action.`}
    //         </p>
    //       </div>
    //       <div className="modal__cta-container">
    //         <span className="modal__cancel-cta" onClick={closeModal}>
    //           Cancel
    //         </span>
    //         <button
    //           onClick={handleDeleteWarehouse}
    //           className="modal__delete-cta"
    //         >
    //           Delete
    //         </button>
    //       </div>
    //     </div>
    //   </Modal>
  );
}
