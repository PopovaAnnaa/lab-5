import styles from "./LearningArticle.module.css";

export default function LearningArticle({ title, imgSrc, imgAlt, lessons, taskType }) {
  return (
    <article className={styles.learningArticle}>
      <h3 className={styles.learningTitle}>{title}</h3>
      <img src={imgSrc} alt={imgAlt} className={styles.learningImg} />
      <p>Уроки:</p>
      <ul>
        {lessons.map((lesson, index) => (
          <li key={index}>{lesson}</li>
        ))}
      </ul>
      <p>Тип завдань: {taskType}</p>
    </article>
  );
}
