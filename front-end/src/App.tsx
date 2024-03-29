import React, { Suspense, useEffect } from "react";
import "./App.css";
import { SDiv } from "./AppStyles";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  Outlet,
  useNavigate,
} from "react-router-dom";
import { useRecoilState } from "recoil";
import { localData } from "./utils/token";
import { apiGetUserInfo } from "./api/user";
import { userInfoState } from "./recoil/myroom/atoms";

function App() {
  // Code Splitting
  const Login = React.lazy(() => import("./pages/Login/Login"));
  const Main = React.lazy(() => import("./pages/Main/Main"));
  const CSQuiz = React.lazy(() => import("./pages/CSQuiz/CSQuiz"));
  const CSQuizResult = React.lazy(
    () => import("./pages/CSQuizResult/CSQuizResult")
  );
  const ItemShop = React.lazy(() => import("./pages/ItemShop/ItemShop"));
  const NotFound = React.lazy(() => import("./pages/NotFound/NotFound"));
  const Feed = React.lazy(() => import("@/pages/Feed/Feed"));
  const MyRoom = React.lazy(() => import("./pages/MyRoom/MyRoom"));
  const MyGoals = React.lazy(() => import("./pages/MyGoals/MyGoals"));
  const OauthRedirect = React.lazy(
    () => import("./pages/OauthRedirect/OauthRedirect")
  );
  const TermsOfUse = React.lazy(() => import("./pages/TermsOfUse/TermsOfUse"));
  const CSQuizProgress = React.lazy(
    () => import("./pages/CSQuizProgress/CSQuizProgress")
  );
  const CSQuizMap = React.lazy(() => import("./pages/CSQuizMap/CSQuizMap"));
  const CSQuizSelect = React.lazy(
    () => import("./pages/CSQuizSelect/CSQuizSelect")
  );
  const CSQuizMatching = React.lazy(
    () => import("./pages/CSQuizMatching/CSQuizMatching")
  );
  const Info = React.lazy(() => import("./pages/Info/Info"));
  const CSQuizBattleResult = React.lazy(
    () => import("./pages/CSQuizBattleResult/CSQuizBattleResult")
  );

  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const accessToken = localData.getAccessToken();

  // 로그인 안 되어있으면 login 페이지로 보냄
  const PrivateRoute = () => {
    return localStorage.getItem("accessToken") ? (
      <Outlet />
    ) : (
      <Navigate to="/login" />
    );
  };

  useEffect(() => {
    const accessToken = localData.getAccessToken();
    if (accessToken) {
      apiGetUserInfo()
        .then((res) => {
          const userInfo = res?.data.response;
          setUserInfo(userInfo);
        })
        .catch((e) => {
          console.log("userinfo app", e);
        });
    }
  }, []);

  return (
    <div className="App">
      {/* fallback 추가해야 됨 */}
      <Suspense>
        {/* <RecoilRoot> */}
        <SDiv>
          <span>The width of the screen is too small. Please widen it! 😥</span>
        </SDiv>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PrivateRoute />}>
              <Route path="/" element={<Navigate to="/main" />} />
              <Route path="/item-shop" element={<ItemShop />} />
              <Route path="/main" element={<Main />} />
              <Route path="/info" element={<Info />} />
              <Route path="/feed" element={<Feed />} />
              <Route path="/myroom" element={<MyRoom />} />
              <Route path="/csquiz-select" element={<CSQuizSelect />} />
              <Route path="/csquiz-solo" element={<CSQuiz />} />
              <Route path="/csquiz-progress" element={<CSQuizProgress />} />
              <Route path="/csquiz-result" element={<CSQuizResult />} />
              <Route path="/csquiz-matching" element={<CSQuizMatching />} />
              <Route path="/csQuizMap/:id" element={<CSQuizMap />} />
              <Route
                path="/csquiz-battle-result"
                element={<CSQuizBattleResult />}
              />
              <Route path="/mygoals" element={<MyGoals />} />
            </Route>
            <Route path="/oauth-login" element={<OauthRedirect />} />
            <Route path="/termsOfUse" element={<TermsOfUse />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        {/* </RecoilRoot> */}
      </Suspense>
    </div>
  );
}

export default App;
