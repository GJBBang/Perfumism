import Navbar from "components/navbar/Navbar";
import FindPassword from "pages/account/find-pw/FindPassword";
import SignIn from "pages/account/signin/SignIn";
import SignUp from "pages/account/signup/SignUp";
import GoogleLoginPage from "pages/account/socialogin/GoogleLoginPage";
import KaKaoLoginPage from "pages/account/socialogin/KaKaoLoginPage";
import Main from "pages/main/Main";
import PageNotFoundPage from "pages/pagenotfound/PageNotFoundPage";
import PerfumeDetail from "pages/perfume/PerfumeDetail";
import Perfumes from "pages/perfume/Perfumes";
import Favorites from "pages/profile/Favorites";
import MyArticles from "pages/profile/MyArticles";
import MyComments from "pages/profile/MyComments";
import Profile from "pages/profile/Profile";
import Recommend from "pages/recommend/Recommend";
import Survey from "pages/recommend/Survey";
import SurveyResult from "pages/recommend/SurveyResult";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

function Router() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/recommend" element={<Recommend />} />
				<Route path="/profile/:username" element={<Profile />} />
				<Route path="/profile/favorites" element={<Favorites />} />
				<Route path="/profile/my-articles" element={<MyArticles />} />
				<Route path="/profile/my-comments" element={<MyComments />} />
				<Route path="/perfume/:perfumeId" element={<PerfumeDetail />} />
				<Route path="/survey" element={<Survey />} />
				<Route path="/survey/result" element={<SurveyResult />} />
				<Route path="/" element={<Main />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/signin" element={<SignIn />} />
				<Route path="/find-password" element={<FindPassword />} />
				<Route path="/login/oauth2/code/kakao" element={<KaKaoLoginPage />} />
				<Route path="/login/oauth2/code/google" element={<GoogleLoginPage />} />
				<Route path="/*" element={<PageNotFoundPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
