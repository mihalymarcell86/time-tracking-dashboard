import scss from "../styles/modules/Attribution.module.scss";

function Attribution() {
  return (
    <footer class={scss.attribution}>
      Challenge by{" "}
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        rel="noreferrer"
      >
        Frontend Mentor
      </a>
      . Coded by{" "}
      <a
        href="https://www.github.com/mihalymarcell86"
        target="_black"
        rel="noreferrer"
      >
        Marcell Mihály
      </a>
      .
    </footer>
  );
}

export default Attribution;
