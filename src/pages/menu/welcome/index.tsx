import styles from "./welcome.module.css";
function Welcome() {
  return (
    <div className={styles["welcome"]}>
      <div>
        <h1>Welcome to Fudo</h1>
        <h2>Welcome to Naples</h2>
      </div>
      <p>
        We started working in 2007 and in 2012 we were able to open our second
        branch and now we have several branches all over the country.
      </p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="401"
        height="40"
        viewBox="0 0 401 40"
        fill="none"
      >
        <path
          d="M4.30859 4.49878L43.5749 36.2L82.8411 4.49878L122.107 36.2L161.374 4.49878L200.64 36.2L239.906 4.49878L279.172 36.2L318.439 4.49878L357.705 36.2L396.971 4.49878"
          stroke="#E1E0E1"
          stroke-opacity="0.49"
          stroke-width="7.20482"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
}
export default Welcome;
