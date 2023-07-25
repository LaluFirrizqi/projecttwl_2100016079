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
			{user && <Route path="/add" exact element={<AddUser />} />}
			{user && <Route path="/edit/:id" exact element={<EditUser />} />}

			<Route path="/signup" exact element={<Signup />} />
			<Route path="/edit/:id" element={<Navigate replace to="/login" />} />
			<Route path="/add" element={<Navigate replace to="/login" />} />


			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
		</Routes>
	);
}

export default App;
