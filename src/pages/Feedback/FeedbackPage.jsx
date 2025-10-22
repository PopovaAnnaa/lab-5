import { useRef, useState } from "react";
import styles from "../Feedback/FeedbackPage.module.css";

export default function Feedback() {
  const detailsRef = useRef(null);
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipPos, setTooltipPos] = useState({ top: 0, left: 0 });

  const handleMouseEnter = () => {
    const rect = detailsRef.current.getBoundingClientRect();
    setTooltipPos({
      top: rect.bottom + 10,
      left: rect.right - 200
    });
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div className={styles.page}>
      <main className={styles.container}>

        <h2 className={styles.heading}>Форма зворотнього зв’язку</h2>

        <form className={styles.form}>
          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>Персональна інформація</legend>

            <label className={styles.label}>
              Прізвище та ім’я:
              <input type="text" name="name" className={styles.input} />
            </label>

            <label className={styles.label}>
              E-mail:
              <input type="email" name="email" className={styles.input} />
            </label>

            <label className={styles.label}>
              Вік:
              <input type="number" name="age" className={styles.input} />
            </label>

            <label className={styles.label}>
              Чи вже вивчаєте мову?
              <select name="experience" className={styles.select}>
                <option>Так, я профі</option>
                <option>Так, але знаю початки</option>
                <option>Планую</option>
                <option>Ні</option>
              </select>
            </label>
          </fieldset>

          <label className={styles.label}>
            Мета зворотнього зв’язку:
            <select name="goal" className={styles.select}>
              <option>Співпраця</option>
              <option>Скарга на неякісний контент</option>
              <option>Пропозиція</option>
              <option>Наявність помилки</option>
            </select>
          </label>

          <label className={styles.label}>
            Детально:
            <textarea
              ref={detailsRef}
              name="details"
              rows="5"
              maxLength="500"
              className={styles.textarea}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          </label>

          <label className={`${styles.label} ${styles.inlineLabel}`}>
            <input
              type="checkbox"
              name="consent"
              required
              className={styles.checkbox}
            />
            Згода на обробку інформації
          </label>

          <button type="submit" className={styles.submitButton}>
            Відправити
          </button>
        </form>
      </main>

      {showTooltip && (
        <span
          className={styles.tooltip}
          style={{ top: tooltipPos.top, left: tooltipPos.left }}
        >
          Ваша думка для нас важлива! Конкретизуйте мету звернення, будь ласка.
        </span>
      )}
    </div>
  );
}
