import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = () => {
	return (
		<div className='border-r border-slate-500 p-4 flex flex-col justify-between md:min-w-auto min-w-[412px] md:h-auto h-screen'>
			<div className="flex flex-col">
				<SearchInput />
				<div className='divider px-3'></div>
				<Conversations />
			</div>
			<>
			<div className='divider px-3'><LogoutButton /></div>
			</>
		</div>
	);
};
export default Sidebar;
