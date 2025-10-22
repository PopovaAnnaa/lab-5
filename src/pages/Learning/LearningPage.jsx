import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./LearningPage.module.css";
import LearningArticle from "../../components/LearningArticle/LearningArticle";
import nihongoImg from '../../assets/img/nihongo.png';
import hiraganaImg from '../../assets/img/hiragana.png';
import katakanaImg from '../../assets/img/katakana.png';
import grammarImg from '../../assets/img/grammar.png';
import wordsImg from '../../assets/img/words.png';
import kanjiImg from '../../assets/img/kanji.png';
import dialogImg from '../../assets/img/dialog.png';
import audioImg from '../../assets/img/audio.png';
import cultureImg from '../../assets/img/culture.png';
import n5Img from '../../assets/img/N5.png';

const articlesData = [
  {
    title: "Тема 1: Вступний модуль",
    imgSrc: nihongoImg,
    imgAlt: "Японська мова",
    lessons: [
      "Що таке японська мова (поширеність, особливості).",
      "Система письма (хіраґана, катакана, кандзі).",
      "Як працює курс, поради з навчання."
    ],
    taskType: "вправи, тести"
  },
  {
    title: "Тема 2: Хіраґана",
    imgSrc: hiraganaImg,
    imgAlt: "Хіраґана",
    lessons: [
      "Вивчення всіх складів.",
      "Письмо, читання, вимова.",
      "Тренування через слова та міні-тексти."
    ],
    taskType: "письмові вправи, читання, аудіо"
  },
  {
    title: "Тема 3: Катакана",
    imgSrc: katakanaImg,
    imgAlt: "Катакана",
    lessons: [
      "Алфавіт і особливості.",
      "Запозичені слова (コンピュータ, コーヒー тощо).",
      "Практичні вправи."
    ],
    taskType: "письмові вправи, читання, тести"
  },
  {
    title: "Тема 4: Базова граматика",
    imgSrc: grammarImg,
    imgAlt: "Приклад граматики японської мови",
    lessons: [
      "Структура речення (підмет-додаток-присудок).",
      "Частки (は, が, を, に, で, へ, の).",
      "Дієслова: групи, теперішній і минулий час.",
      "Прикметники (い- та な-прикметники)."
    ],
    taskType: "граматичні вправи, тести"
  },
  {
    title: "Тема 5: Початковий словниковий запас",
    imgSrc: wordsImg,
    imgAlt: "Приклад слів японською",
    lessons: [
      "Привітання і ввічливість.",
      "Числа, дні тижня, час.",
      "Сім’я, люди, професії.",
      "Їжа, покупки, подорожі."
    ],
    taskType: "словникові вправи, тести, діалоги"
  },
  {
    title: "Тема 6: Кандзі (вступ)",
    imgSrc: kanjiImg,
    imgAlt: "Приклад кандзі",
    lessons: [
      "Що таке радикали.",
      "50–100 базових ієрогліфів (день, людина, вода, дерево тощо).",
      "Принципи читання (он/кун)."
    ],
    taskType: "письмо, читання, тести"
  },
  {
    title: "Тема 7: Практичні діалоги",
    imgSrc: dialogImg,
    imgAlt: "Діалог японською",
    lessons: [
      "Знайомство.",
      "У магазині.",
      "У ресторані.",
      "Подорож і транспорт."
    ],
    taskType: "діалоги, аудіо"
  },
  {
    title: "Тема 8: Аудіо та вимова",
    imgSrc: audioImg,
    imgAlt: "Аудіо японською",
    lessons: [
      "Ритм і інтонація японської.",
      "Тренування слуху.",
      "Повторення за носіями (shadowing)."
    ],
    taskType: "аудіо, shadowing, тести слуху"
  },
  {
    title: "Тема 9: Культура та контекст",
    imgSrc: cultureImg,
    imgAlt: "Культура Японії",
    lessons: [
      "Японські традиції спілкування.",
      "Основи етикету.",
      "Культура письма (敬語 – ввічливі форми)."
    ],
    taskType: "читання, практичні вправи, діалоги"
  },
  {
    title: "Тема 10: Заключний модуль",
    imgSrc: n5Img,
    imgAlt: "Заключний модуль",
    lessons: [
      "Повторення та підсумковий тест.",
      "Практичне завдання (написати і представити діалог/есе японською).",
      "Рекомендації для продовження (JLPT N5 → N4)."
    ],
    taskType: "тести, практичні завдання"
  }
];

export default function LearningPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeAccordion, setActiveAccordion] = useState(null);

  const filteredArticles = articlesData.filter(article =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <div className={styles.learningWrapper}>
      <main className={styles.mainContent}>
        <aside className={styles.topicsListWrapper}>

          <input
            type="text"
            placeholder="Пошук теми..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={styles.searchInput}
          />

          <div className={styles.accordion}>
            {articlesData.map((article, index) => (
              <div
                key={index}
                className={`${styles.accordionItem} ${activeAccordion === index ? styles.accordionItemActive : ""}`}
              >
                <button
                  className={styles.accordionHeader}
                  onClick={() => toggleAccordion(index)}
                >
                  {article.title}
                </button>
                <div className={styles.accordionContent}>
                  {article.lessons.join(" ")}
                </div>
              </div>
            ))}
          </div>
        </aside>

        <section className={styles.topicsSection}>
          {filteredArticles.map((article, index) => (
            <LearningArticle key={index} {...article} />
          ))}
        </section>
      </main>
    </div>
  );
}
