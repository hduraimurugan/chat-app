import { create } from "zustand";

const useConversation = create((set) => ({
	selectedConversation: null,
	setSelectedConversation: (selectedConversation) => {
		set({ selectedConversation });
	},
	messages: [],
	setMessages: (messages) => {
		set({ messages });
	},
}));

export default useConversation;


// import { create } from 'zustand';
// import { persist } from 'zustand/middleware';

// const useConversation = create(
//   persist(
//     (set) => ({
//       selectedConversation: null,
//       setSelectedConversation: (selectedConversation) => {
//         console.log("Setting selected conversation: ", selectedConversation);
//         set({ selectedConversation });
//       },
//       messages: [],
//       setMessages: (messages) => {
//         console.log("Setting messages: ", messages);
//         set({ messages });
//       },
//     }),
//     {
//       name: 'conversation-storage', // Name for storage (localStorage key)
//       getStorage: () => localStorage, // Use localStorage to persist the state
//     }
//   )
// );

// export default useConversation;