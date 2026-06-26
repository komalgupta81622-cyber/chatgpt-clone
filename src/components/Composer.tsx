interface ComposerProps {
    value: string;
    onChange: (content: string) => void;
    onSend: (content: string) => void;
}

export default function Composer({ value, onChange, onSend }: ComposerProps) {


    return (

        <div className="flex items-center bg-white rounded-3xl px-4 mb-5 shadow-md border border-gray-200"> 
            <input
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Ask me anything..."
                className="flex-1 rounded-full outline-none bg-transparent py-2 text-blue-500"
                type="text"
                onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        onSend(value);
                    }
                }}
            >
            </input>

            <button 
                disabled={value.trim() === ""}
                onClick={() => onSend(value)}
                className="ml-2 border-2 bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 hover:scale-105 transition-all duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
                Send
            </button>
            
        </div>
    )

}