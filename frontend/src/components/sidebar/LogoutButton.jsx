import { BiLogOutCircle } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
	const { loading, logout } = useLogout();
	
	return (
		<div className='mt-auto'>
			{!loading ? (
				<div className="flex justify-center">
				<BiLogOutCircle className='w-7 h-7 text-white hover:text-teal-400  cursor-pointer' onClick={logout} />
				</div>
			) : (
				<span className='loading loading-spinner'></span>
			)}
		</div>
	);
};
export default LogoutButton;
