import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../zustand/useConversation";
import { useNavigate } from "react-router-dom";

const MobileConversation = ({ conversation, lastIdx, emoji }) => {
    const { selectedConversation, setSelectedConversation } = useConversation();
    const { onlineUsers } = useSocketContext();
    const navigate = useNavigate();

    const isSelected = selectedConversation?._id === conversation._id;
    const isOnline = onlineUsers.includes(conversation._id);

    const handleClick = () => {
        setSelectedConversation(conversation); // Set the conversation
        navigate(`/messages`); // Navigate to the messages page
    };

    return (
        <>
            <div
                className={`flex gap-2 items-center hover:bg-teal-500 rounded p-2 py-2 cursor-pointer
				${isSelected ? "bg-teal-600" : ""}`}
                onClick={handleClick}
            >
                <div className={`avatar ${isOnline ? "online" : ""}`}>
                    <div className='w-12 rounded-full'>
                        <img src={conversation.profilePic} alt='user avatar' />
                    </div>
                </div>

                <div className='flex flex-col flex-1'>
                    <div className='flex gap-3 justify-between'>
                        <p className='font-bold text-gray-200'>{conversation.fullName}</p>
                        <span className='text-xl'>{emoji}</span>
                    </div>
                </div>
            </div>

            {!lastIdx && <div className='divider my-0 py-0 h-1' />}
        </>
    );
};

export default MobileConversation;
