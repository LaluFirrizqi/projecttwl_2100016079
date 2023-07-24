import { Route, Routes, Navigate } from "react-router-dom";
import AddUser from "./components/Main/AddUser";
import EditUser from "./components/Main/EditUser";
import UserList from "./components/Main/UserList";

import Signup from "./components/Singup";
import Login from "./components/Login";

function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			{user && <Route path="/" exact element={<UserList />} />}

			<Route path="/signup" exact element={<Signup />} />
			<Route path="edit/:id" element={<EditUser />} />
			<Route path="/add" element={<AddUser />} />


			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
		</Routes>
	);
}

export default App;
