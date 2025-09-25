## OZ React 6일차 과제 예시

### 기존 과제 요구사항

```
Layout 컴포넌트
1. 모든 <Link/> 요소의 클래스명은 "header-link" 입니다.
2. /home으로 라우팅할 수 있는 <Link/>를 선언하세요.
3. /about으로 라우팅할 수 있는 <Link/>를 선언하세요.
4. /contact으로 라우팅할 수 있는 <Link/>를 선언하세요.
5. 모든 잘못된 경로로 라우팅할 수 있는 <Link/>를 선언하세요.
5-1. 아무 경로를 할당하거나, Math.random()을 활용할 수 있습니다.
6. Layout 컴포넌트는 "모든" 컴포넌트에서 보여야 합니다. <Outlet/>를 추가하세요.
```

```
App 컴포넌트
1. 모든 라우팅을 감싸는 BrowserRouter를 선언하세요.
2. Routes를 선언하세요.
3. 모든 라우팅에서 보이는 Layout의 Route를 선언하세요.
4. / 라우팅에서 보이는 <HomePage/> 컴포넌트를 라우팅에 연결하세요.
5. /about 라우팅에서 보이는 <AboutPage/> 컴포넌트를 라우팅에 연결하세요.
6. /contact 라우팅에서 보이는 <ContactPage/> 컴포넌트를 라우팅에 연결하세요.
7. /* 모든 잘못된 라우팅에서 보이는 <ErrorPage/> 컴포넌트를 라우팅에 연결하세요.
```

### 추가 개선 사항

- 절대경로 적용
- ROUTES, NAVIGATION_LINKS 상수로 분리하여 map 사용
- page 부분 배럴패턴 적용
- constants 폴더에 있는 paths.js로 경로 관리 일원화
