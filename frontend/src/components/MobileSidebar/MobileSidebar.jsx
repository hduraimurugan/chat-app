import MobileConversations from "./MobileConversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const MobileSidebar = () => {
	return (
		<div className='border-r-0 border-slate-500 p-4 flex flex-col bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
			<SearchInput />
			<div className='divider px-3'></div>
			<MobileConversations />
			<LogoutButton />
		</div>
	);
};
export default MobileSidebar;
