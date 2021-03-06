import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "store";
import {
	InputCodePage,
	ChangePasswordPage,
	FindPassword,
	SignIn,
	SignUp,
	KaKaoLoginPage,
	GoogleLoginPage,
	SuccessPage,
} from "pages/account";
import {
	Favorites,
	MyArticles,
	MyComments,
	Profile,
	ChangePassword,
	CheckPassword,
} from "pages/profile";
import { Community, CommunityCreate, CommunityDetail, CommunityUpdate } from "pages/community";
import { PerfumeBrand, PerfumeDetail, Perfumes } from "pages/perfume";
import { Recommend, Survey, SurveyResult, Loading } from "pages/recommend";
import Main from "pages/main/Main";
import PageNotFoundPage from "pages/pagenotfound/PageNotFoundPage";
import SearchResultPage from "pages/search/SearchResultPage";
import PrivateRoute from "./PrivateRoute";
import ProfilePrivateRoutes from "./ProfilePrivateRoute";
import ProfileRoute from "./ProfileRoute";
import Navbar from "components/navbar/Navbar";
import ScrollToTop from "components/ScrollToTop";

function Router() {
	const username = useSelector((state: RootState) => state.user.username);

	return (
		<BrowserRouter>
			<ScrollToTop />
			<Navbar />
			<Routes>
				<Route path="/recommend" element={<Recommend />} />
				<Route element={<PrivateRoute />}>
					<Route path="/profile/check-password" element={<CheckPassword />} />
					<Route path="/community" element={<Community />} />
					<Route path="/community/:articleId" element={<CommunityDetail />} />
					<Route path="/community/create" element={<CommunityCreate />} />
					<Route path="/community/update/:articleId" element={<CommunityUpdate />} />
					<Route element={<ProfilePrivateRoutes />}>
						<Route path="/profile" element={<ProfileRoute />}>
							<Route path={`/profile/${encodeURIComponent(username)}`} element={<Profile />} />
							<Route path="/profile/favorites" element={<Favorites />} />
							<Route path="/profile/my-articles" element={<MyArticles />} />
							<Route path="/profile/my-comments" element={<MyComments />} />
							<Route path="/profile/change-pw" element={<ChangePassword />} />
						</Route>
					</Route>
				</Route>
				<Route path="/perfume/:perfumeId" element={<PerfumeDetail />} />
				<Route path="/perfumes" element={<Perfumes />} />
				<Route path="/perfumes/:brandName" element={<PerfumeBrand />} />
				<Route path="/survey" element={<Survey />} />
				<Route path="/survey/result" element={<SurveyResult />} />
				<Route path="/loading" element={<Loading />} />
				<Route path="/" element={<Main />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/signin" element={<SignIn />} />
				<Route path="/find-password" element={<FindPassword />} />
				<Route path="/login/oauth2/code/kakao" element={<KaKaoLoginPage />} />
				<Route path="/login/oauth2/code/google" element={<GoogleLoginPage />} />
				<Route path="/*" element={<PageNotFoundPage />} />
				<Route path="/search/:keyword" element={<SearchResultPage />} />
				<Route path="/check-code" element={<InputCodePage />} />
				<Route path="/password/change-pw" element={<ChangePasswordPage />} />
				<Route path="/password/success" element={<SuccessPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
