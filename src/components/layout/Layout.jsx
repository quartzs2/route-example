import headerStyle from "@styles/header.module.css";

/* Layout 컴포넌트
1. 모든 <Link/> 요소의 클래스명은 "header-link" 입니다.
2. /home으로 라우팅할 수 있는 <Link/>를 선언하세요.
3. /about으로 라우팅할 수 있는 <Link/>를 선언하세요.
4. /contact으로 라우팅할 수 있는 <Link/>를 선언하세요.
5. 모든 잘못된 경로로 라우팅할 수 있는 <Link/>를 선언하세요.
5-1. 아무 경로를 할당하거나, Math.random()을 활용할 수 있습니다.
6. Layout 컴포넌트는 "모든" 컴포넌트에서 보여야 합니다. <Outlet/>를 추가하세요.
*/

export default function Layout() {
  return (
    <>
      <header className={headerStyle.header}>
        <div>Router Practice</div>
        <div className={headerStyle.headerLinks}>{/* 여기에 Link 컴포넌트를 할당하세요. */}</div>
      </header>
      {/* 이곳에 Outlet을 할당하세요. */}
    </>
  );
}
