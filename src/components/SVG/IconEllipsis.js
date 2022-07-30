import scss from "../../styles/modules/IconEllipsis.module.scss";

function IconEllipsis() {
  return (
    <div className={scss.ellipsis}>
      <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
          fill="currentColor"
          fillRule="evenodd"
        />
      </svg>
    </div>
  );
}

export default IconEllipsis;
