import styles from "./Modal.module.css";

function Modal({ onClose }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.content}>
        <h2>Золоті правила навчання</h2>
        <p>1. Концентруйся на невеликих частинах матеріалу.</p>
        <p>2. Повторюй пройдене щодня.</p>
        <p>3. Використовуй практику замість теорії.</p>
        <button onClick={onClose}>Закрити</button>
      </div>
    </div>
  );
}

export default Modal;
