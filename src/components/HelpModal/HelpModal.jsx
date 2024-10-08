import "./HelpModal.scss";
import progressIcon from "../../assets/icons/progress-icon.png";
import appIcon from "../../assets/icons/appointment-icon.png";
import headIcon from "../../assets/icons/mental-health-icon.png";
import messageIcon from "../../assets/icons/message-icon.png";
import cancelIcon from "../../assets/icons/cancel.png";
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

  return (
    <Modal
      className="modal"
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Help Selection"
    >
      {/* <main className="modal"> */}
      <div className="modal__container">
        <img
          onClick={closeModal}
          src={cancelIcon}
          alt=""
          className="modal__close"
        />
        <h1 className="modal__header">
          We’ve noticed overdue payments and loan activity. We’re here to make
          things easier for you.
        </h1>
        <h2 className="modal__subheader">
          Please choose how you'd like us to support you:
        </h2>

        <div className="modal__help-cards">
          <article className="modal__card-container">
            <img src={progressIcon} alt="" className="modal__card-icon" />
            <div className="modal__card-content">
              <h3 className="modal__card-header">View Progress Reports</h3>
              <p className="modal__card-text">
                Get clear updates to help you manage your finances.
              </p>
            </div>
          </article>

          <article className="modal__card-container">
            <img src={appIcon} alt="" className="modal__card-icon" />
            <div className="modal__card-content">
              <h3 className="modal__card-header">Book an Appointment</h3>
              <p className="modal__card-text">
                Meet face-to-face or chat online with our staff for personalised
                help.
              </p>
            </div>
          </article>

          <article className="modal__card-container">
            <img src={headIcon} alt="" className="modal__card-icon" />
            <div className="modal__card-content">
              <h3 className="modal__card-header">Mental Health Support</h3>
              <p className="modal__card-text">
                Find in-app resources to support your mental well-being.
              </p>
            </div>
          </article>

          <article className="modal__card-container">
            <img src={messageIcon} alt="" className="modal__card-icon" />
            <div className="modal__card-content">
              <h3 className="modal__card-header">Chat with Cleareye.ai</h3>
              <p className="modal__card-text">
                Talk about managing your account easily.
              </p>
            </div>
          </article>
        </div>
      </div>
    </Modal>

    // // <div >
    // //   <div className="modal__content">

    //     {/* <span className="modal__cancel-cta" onClick={closeModal}>
    //       Cancel
    //     </span> */}
    //     {/* <button
    //       onClick={handleDeleteWarehouse}
    //       className="modal__delete-cta"
    //     >
    //       Delete
    //     </button> */}
  );
}
