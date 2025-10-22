import { useRef, useState } from "react";
import styles from "./Home.module.css";
import Modal from "../../components/Modal/Modal";

function Home() {
  const [showModal, setShowModal] = useState(false);
  const timerRef = useRef(null);

  const handleMouseEnter = () => {
    timerRef.current = setTimeout(() => setShowModal(true), 30000);
  };

  const handleMouseLeave = () => {
    clearTimeout(timerRef.current);
  };

  return (
    <main className={styles.main}>
      <section
        className={styles.goalBlock}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <h2>Мета створення порталу</h2>
        <ol type="A">
          <li>Надати структуровані навчальні матеріали</li>
          <li>Забезпечити інтерактивні завдання</li>
          <li>Створити спільноту для обміну знаннями</li>
        </ol>
      </section>

      <article className={styles.infoBlock}>
        <h2 id="learning">Структура навчання</h2>
        <table className={styles.studyTable}>
          <thead>
            <tr>
              <th colSpan="5">Початкові теми для вивчення</th>
            </tr>
            <tr>
              <th>Модулі</th>
              <th>Тема</th>
              <th>Зміст</th>
              <th>Приклади</th>
              <th>Примітки</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowSpan="2">Вступ</td>
              <td>Огляд</td>
              <td colSpan="2">Особливості японської мови</td>
              <td rowSpan="6">Додаткові матеріали</td>
            </tr>
            <tr>
              <td>Письмо</td>
              <td>Хіраґана</td>
              <td>あ、い、う…</td>
            </tr>
            <tr>
              <td rowSpan="2">Катакана</td>
              <td>Букви</td>
              <td>Катакана для іноземних слів</td>
              <td>コンピュータ</td>
            </tr>
            <tr>
              <td>Практика</td>
              <td colSpan="2">Вправи з читання та письма</td>
            </tr>
            <tr>
              <td>Граматика</td>
              <td colSpan="2">Частки は, を, に</td>
              <td>Прості речення</td>
            </tr>
            <tr>
              <td>Кандзі</td>
              <td>Радикали</td>
              <td>10 базових ієрогліфів</td>
              <td>日、人、水</td>
            </tr>
          </tbody>
        </table>

        <aside>
          <h3 id="feedback">Контактна інформація</h3>
          <p>Адреса: м.Київ, бульвар Тараса Шевченка, 14</p>
          <p>Телефони: +380 44 239 31 01, +380 50 617 81 03</p>
          <button className={styles.button}>Перейти у власний кабінет</button>
          <button className={styles.button}>Зареєструватись</button>
        </aside>

        <p>
          Наш <span>портал</span> допомагає <i>ефективно</i> вивчати <b>японську мову</b> <u><em>з задоволенням</em></u>.
        </p>
      </article>

      {showModal && <Modal onClose={() => setShowModal(false)} />}
    </main>
  );
}

export default Home;
