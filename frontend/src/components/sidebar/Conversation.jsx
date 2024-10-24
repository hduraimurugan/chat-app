import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../zustand/useConversation";

const Conversation = ({ conversation, lastIdx, emoji }) => {
	const { selectedConversation, setSelectedConversation } = useConversation();

	const isSelected = selectedConversation?._id === conversation._id;
	const { onlineUsers } = useSocketContext();
	const isOnline = onlineUsers.includes(conversation._id);

	return (
		<>
			<div
				className={`flex gap-3 items-center hover:bg-teal-500 rounded-lg p-3 py-3 cursor-pointer
				${isSelected ? "bg-teal-600" : ""}
			`}
				onClick={() => setSelectedConversation(conversation)}
			>
				<div className={`avatar ${isOnline ? "online" : ""}`}>
					<div className='w-12 rounded-full ring ring-offset-2'>
						<img src={conversation.profilePic} alt='user avatar' />
					</div>
				</div>

				<div className='flex flex-col flex-1'>
					<div className='flex gap-3 justify-between'>
						<p className='font-bold text-gray-200'>{conversation.fullName}</p>
						{/* <span className='text-xl'>{emoji}</span> */}
					</div>
				</div>
			</div>

			{!lastIdx && <div className='divider my-0 py-0 h-1' />}
		</>
	);
};
export default Conversation;

