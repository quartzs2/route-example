import { Link } from "react-router";
import style from "@styles/errorPage.module.css";

const ErrorPage = () => {
  return (
    <div className={style.container}>
      <h2>잘못된 경로입니다.</h2>
      <Link className="header-link" to="/">
        홈으로 돌아가기
      </Link>
    </div>
  );
};

export default ErrorPage;
