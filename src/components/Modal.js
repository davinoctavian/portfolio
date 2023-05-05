import styles from "./Modal.module.css"

const Modal = ({ handleClose, show, children }) => {
  return (
    <div className={show? styles.displayBlock : styles.displayNone}>
        <section className={styles.modalMain}>
            {children}
        </section>
        <section className={styles.modalButton}>
            <button type="button" onClick={handleClose} className={styles.buttonClose}>
                Close
            </button>
        </section>
    </div>
  )
}

export default Modal