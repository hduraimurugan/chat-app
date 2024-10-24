import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation";
import { extractTime } from "../../utils/extractTime";
import { formatPostDate } from "../../utils/date";

const Message = ({ message }) => {
	const { authUser } = useAuthContext();
	const { selectedConversation } = useConversation();
	const fromMe = message.senderId === authUser._id;
	const formattedTime = extractTime(message.createdAt);
	const formattedDate = formatPostDate(message.createdAt);
	const chatClassName = fromMe ? "chat-end" : "chat-start";
	const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
	const bubbleBgColor = fromMe ? "bg-teal-600" : "bg-gray-100";
	const textColor = fromMe ? "text-white" : "text-gray-700"; 
	const shakeClass = message.shouldShake ? "shake" : "";

	return (
		<div className={`chat ${chatClassName}`}>
			<div className='chat-image avatar'>
				<div className='w-10 rounded-full'>
					<img alt='Tailwind CSS chat bubble component' src={profilePic} />
				</div>
			</div>
			<div className={`chat-bubble ${textColor} ${bubbleBgColor} ${shakeClass} flex flex-col gap-1 pb-2`}>{message.message} 
				<span className="text-gray-950 text-xs text-end opacity-60">{formattedDate}</span></div>
			{/* <div className='chat-footer text-teal-300 opacity-100 text-xs flex gap-1 items-center'>{formattedDate}</div> */}
		</div>
	);
};
export default Message;
