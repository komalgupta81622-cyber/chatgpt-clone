import Composer from "./components/Composer";
import MessagesContainer from "./components/MessagesContainer";
import useChat from "./hooks/useChat";

function App() {

  const {
        messages,
        input,
        setInput,
        sendMessage,
        isLoading
    } = useChat();

  return (
  <div className="flex h-dvh flex-col  bg-[#41343f] text-white bg-gradient-to-r from-purple-900 to slate-900 text-white-90">

    <nav className="flex items-center justify-between px-6 py-4 bg-[#202123] shadow-md">
      <h1 className="text-xl font-bold">ChatGPT Clone</h1>
      <button className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition">
        New Chat
      </button>
    </nav>

    <MessagesContainer messages={messages} isLoading={isLoading} />
    <Composer value={input} onChange={setInput} onSend={sendMessage} />
  </div>
);
    
}

export default App
