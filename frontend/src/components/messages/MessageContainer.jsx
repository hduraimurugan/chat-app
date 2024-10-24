import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";
import { useAuthContext } from "../../context/AuthContext";
import { useSocketContext } from "../../context/SocketContext";

const MessageContainer = () => {

	const { selectedConversation, setSelectedConversation } = useConversation();
	
	const { onlineUsers } = useSocketContext();
	const isOnline = onlineUsers.includes(selectedConversation?._id)

	useEffect(() => {
		// cleanup function (unmounts)
		return () => setSelectedConversation(null);
	}, [setSelectedConversation]);

	return (
		<div className='md:min-w-[450px] min-w-[412px] md:h-auto h-screen flex flex-col'>
			{!selectedConversation ? (
				<NoChatSelected />
			) : (
				<>
					{/* Header */}
					<div className='bg-teal-600 flex flex-row gap-4 px-4 py-2 mb-2'>
							<div className={`avatar ${isOnline ? "online" : ""}`}>
							<div className='w-10 rounded-full'>
								<img src={selectedConversation.profilePic} alt='user avatar' />
							</div>
						</div>
						<div className="flex flex-col">
							<span className='text-gray-100 text-md font-bold'>{selectedConversation.fullName}</span>
							<span className='text-gray-200 text-sm'>{isOnline ? "Online" : "Offline"}</span>
						</div>
					</div>
					<Messages />
					<MessageInput />
				</>
			)}
		</div>
	);
};
export default MessageContainer;

const NoChatSelected = () => {
	const { authUser } = useAuthContext();
	return (
		<div className='flex items-center justify-center w-full h-full'>
			<div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
				<p>Welcome 👋 {authUser.fullName} ❄</p>
				<p>Select a chat to start messaging</p>
				<TiMessages className='text-3xl md:text-6xl text-center' />
			</div>
		</div>
	);
};
